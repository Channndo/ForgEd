/**
 * ForgEd — Accounts & persistence (Google Apps Script + Sheets)
 *
 * FIRST TIME:
 * 1. Paste your Spreadsheet ID into FORGED_SETUP.SPREADSHEET_ID below (from the sheet URL).
 * 2. Run bootstrapForgEdOnce() once in the editor (or rely on auto-setup on first Web App hit).
 * 3. If no sheet yet, run createForgEdDatabase() once instead of step 1.
 * 4. Deploy → Web app → Execute as: Me, Who has access: Anyone
 * 5. Web App URL (ForgEd + Netlify FORGED_WEB_APP_URL):
 *    https://script.google.com/macros/s/AKfycbyMUFkHPuSN2ajb-09lXAZvxt1n7M59dZ4L2NlpLTy8H3l3Ay_Nyx3iIP19XhwA7x-Q/exec
 */

var PROP_SPREADSHEET_ID = 'FORGED_SPREADSHEET_ID';
var PROP_SERVER_SECRET = 'FORGED_SERVER_SECRET';
var PROP_OLLAMA_BASE_URL = 'OLLAMA_BASE_URL';
var PROP_OLLAMA_MODEL = 'OLLAMA_MODEL';
var PROP_OLLAMA_API_KEY = 'OLLAMA_API_KEY';

/**
 * Paste values here — copied into Script Properties on every Web App request.
 * SPREADSHEET_URL: paste the full link, e.g.
 *   https://docs.google.com/spreadsheets/d/1abc...xyz/edit
 * Or set SPREADSHEET_ID to the ID between /d/ and /edit only.
 */
var FORGED_SETUP = {
  SPREADSHEET_URL:
    'https://docs.google.com/spreadsheets/d/15uwWuA94k0DKAORYkEXq2BbW7QVpfrC38G7d7uqQjTo/edit',
  SPREADSHEET_ID: '15uwWuA94k0DKAORYkEXq2BbW7QVpfrC38G7d7uqQjTo',
  SERVER_SECRET: 'a704546b065d1e4dfc3dcd60f37f8dc8395068697012dab4104fce456698824a',
  /** Shared Omnistrata Ollama (same host as CoverIQ / Syntrix). */
  OLLAMA_BASE_URL: 'https://ollama.syntrix.solutions',
  OLLAMA_MODEL: 'llama3.2:1b',
  /** Paste the same OLLAMA_API_KEY you use on Syntrix/CoverIQ, then redeploy the Web App. */
  OLLAMA_API_KEY: ''
};

function parseSpreadsheetId_(value) {
  var s = String(value || '').trim();
  if (!s) return '';
  var match = s.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match) return match[1];
  if (/^[a-zA-Z0-9-_]{20,}$/.test(s)) return s;
  return '';
}

function getForgedSpreadsheetIdFromSetup_() {
  return (
    parseSpreadsheetId_(FORGED_SETUP.SPREADSHEET_ID) ||
    parseSpreadsheetId_(FORGED_SETUP.SPREADSHEET_URL) ||
    ''
  );
}

var CONFIG = {
  SPREADSHEET_TITLE: 'ForgEd Accounts Database',
  WEBSITE_URL: 'https://forgedlearn.com',
  SESSION_DAYS: 30,
  RESET_HOURS: 24,
  SEND_EMAIL_NOTIFICATIONS: true,
  EMAIL_RECIPIENTS: ['chandler.hill.24@gmail.com', 'chandler@forgedlearn.com'],
  /** These emails receive isAdmin: true on login/profile */
  ADMIN_EMAILS: ['chandler@forgedlearn.com']
};

var SHEETS = {
  USERS: {
    name: 'USERS',
    headers: [
      'User ID',
      'First Name',
      'Last Name',
      'Username',
      'Email',
      'Phone',
      'Street',
      'City',
      'State',
      'ZIP',
      'Security Q1',
      'Security A1 Hash',
      'Security Q2',
      'Security A2 Hash',
      'Referral Source',
      'Password Hash',
      'Salt',
      'XP',
      'Level',
      'Current Streak',
      'Active Paths',
      'Certifications',
      'Created Date',
      'Last Login',
      'Display Name',
      'Session Token',
      'Session Expires',
      'Reset Token',
      'Reset Expires'
    ]
  },
  COURSE_PROGRESS: {
    name: 'COURSE_PROGRESS',
    headers: [
      'User ID',
      'Course ID',
      'Section Progress',
      'Chapter Progress',
      'Quiz Scores',
      'Completion Status',
      'Last Accessed',
      'Progress JSON'
    ]
  },
  PATH_PROGRESS: {
    name: 'PATH_PROGRESS',
    headers: [
      'User ID',
      'Path Name',
      'Completion Percentage',
      'Active Status',
      'Certification Earned',
      'Progress JSON',
      'Last Updated'
    ]
  },
  ACHIEVEMENTS: {
    name: 'ACHIEVEMENTS',
    headers: ['User ID', 'Achievement Name', 'XP Reward', 'Unlock Date']
  },
  LAB_PROGRESS: {
    name: 'LAB_PROGRESS',
    headers: [
      'User ID',
      'Lab Name',
      'Completion Status',
      'XP Earned',
      'Solution Viewed',
      'Retry Required',
      'Last Updated'
    ]
  },
  EMAIL_LOG: {
    name: 'EMAIL_LOG',
    headers: ['Timestamp', 'Event', 'Recipients', 'Status', 'Error Detail', 'User ID', 'Email']
  },
  /** ForgEd KODA only — never shared with Syntrix MIRA or CoverIQ */
  KODA_FACTS: {
    name: 'KODA_FACTS',
    headers: [
      'Fact ID',
      'User ID',
      'Fact Type',
      'Content',
      'Confidence',
      'Course Slug',
      'Status',
      'Created',
      'Updated'
    ]
  },
  KODA_CHAT_LOG: {
    name: 'KODA_CHAT_LOG',
    headers: [
      'Log ID',
      'User ID',
      'Session ID',
      'Role',
      'Content',
      'Mode',
      'Course Slug',
      'Created'
    ]
  },
  CERTIFICATES: {
    name: 'CERTIFICATES',
    headers: [
      'Certificate ID',
      'User ID',
      'Student Name',
      'Course ID',
      'Course Title',
      'Course Slug',
      'Completion Date',
      'Hours Completed',
      'Exam Score',
      'Exam Total',
      'Verification URL',
      'Issued At',
      'Status',
      'Instructor Signature'
    ]
  }
};

// ─── Entry points ───────────────────────────────────────────────────────────

function doGet(e) {
  ensureForgEdProperties_();
  return jsonResponse_({
    ok: true,
    service: 'ForgEd Accounts API',
    version: 2,
    configured: getForgEdConfigStatus_()
  });
}

function doPost(e) {
  try {
    ensureForgEdProperties_();
    var raw = {};
    if (e && e.postData && e.postData.contents) {
      raw = JSON.parse(e.postData.contents);
    }
    var action = String(raw.action || '').trim();
    if (!action) {
      return jsonResponse_({ ok: false, error: 'Missing action.' });
    }

    if (action === 'createForgEdDatabase' || action === 'initializeSheets') {
      requireServerSecret_(raw);
      return jsonResponse_(createForgEdDatabase_());
    }

    if (action === 'upgradeUsersSheet') {
      requireServerSecret_(raw);
      return jsonResponse_(upgradeUsersSheetHeaders_());
    }

    if (action === 'notifySignup' || action === 'sendSignupEmail') {
      requireServerSecret_(raw);
      return jsonResponse_(
        sendSignupNotification_(
          {
            userId: String(raw.userId || raw.user_id || ''),
            email: String(raw.email || ''),
            username: String(raw.username || ''),
            displayName: String(raw.displayName || raw.display_name || ''),
            firstName: String(raw.firstName || raw.first_name || ''),
            lastName: String(raw.lastName || raw.last_name || ''),
            phone: String(raw.phone || ''),
            street: String(raw.street || ''),
            city: String(raw.city || ''),
            state: String(raw.state || ''),
            zip: String(raw.zip || ''),
            referralSource: String(raw.referralSource || raw.referral_source || '')
          },
          nowIso_()
        )
      );
    }

    if (action === 'diagnoseEmail') {
      requireServerSecret_(raw);
      return jsonResponse_(diagnoseForgedEmail_());
    }

    if (action === 'registerUser') {
      return jsonResponse_(registerUser_(raw));
    }

    if (action === 'loginUser') {
      return jsonResponse_(loginUser_(raw));
    }

    if (action === 'requestPasswordReset') {
      return jsonResponse_(requestPasswordReset_(raw));
    }

    if (action === 'resetPassword') {
      return jsonResponse_(resetPassword_(raw));
    }

    if (action === 'getUserProfile') {
      var user = requireSession_(raw);
      return jsonResponse_({ ok: true, user: publicUser_(user) });
    }

    if (action === 'updateUserProfile') {
      var uProf = requireSession_(raw);
      return jsonResponse_(updateUserProfile_(uProf.userId, raw));
    }

    if (action === 'loadUserDashboard') {
      var u = requireSession_(raw);
      return jsonResponse_(loadUserDashboard_(u.userId));
    }

    if (action === 'saveUserProgress') {
      var u2 = requireSession_(raw);
      return jsonResponse_(saveUserProgress_(u2.userId, raw.progress));
    }

    if (action === 'updateXP') {
      var u3 = requireSession_(raw);
      return jsonResponse_(updateXP_(u3.userId, raw.xp, raw.level));
    }

    if (action === 'updateStreak') {
      var u4 = requireSession_(raw);
      return jsonResponse_(updateStreak_(u4.userId, raw.streak));
    }

    if (action === 'saveQuizResults') {
      var u5 = requireSession_(raw);
      return jsonResponse_(saveQuizResults_(u5.userId, raw));
    }

    if (action === 'saveLabProgress') {
      var u6 = requireSession_(raw);
      return jsonResponse_(saveLabProgress_(u6.userId, raw));
    }

    if (action === 'unlockAchievement') {
      var u7 = requireSession_(raw);
      return jsonResponse_(unlockAchievement_(u7.userId, raw));
    }

    if (action === 'verifyCertificate') {
      return jsonResponse_(verifyCertificatePublic_(raw.certificateId));
    }

    if (action === 'issueCertificate') {
      var uCert = requireSession_(raw);
      return jsonResponse_(
        issueCertificate_(uCert.userId, uCert.displayName || uCert.firstName, raw)
      );
    }

    if (action === 'listCertificates') {
      var uList = requireSession_(raw);
      return jsonResponse_(listCertificates_(uList.userId));
    }

    if (action === 'getCertificate') {
      var uGet = requireSession_(raw);
      return jsonResponse_(getCertificateForUser_(uGet.userId, raw.certificateId));
    }

    if (action === 'kodaHealth') {
      return jsonResponse_(kodaHealth_());
    }

    if (action === 'kodaMemoryPrepare') {
      var uMemPrep = requireSession_(raw);
      return jsonResponse_(kodaMemoryPrepare_(uMemPrep.userId, raw));
    }

    if (action === 'kodaMemorySaveTurn') {
      var uMemSave = requireSession_(raw);
      return jsonResponse_(kodaMemorySaveTurn_(uMemSave.userId, raw));
    }

    if (action === 'kodaChat') {
      var uKoda = requireSession_(raw);
      return jsonResponse_(kodaChat_(uKoda, raw));
    }

    return jsonResponse_({ ok: false, error: 'Unknown action: ' + action });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err.message || err) });
  }
}

// ─── Database bootstrap ─────────────────────────────────────────────────────

function createForgEdDatabase() {
  return createForgEdDatabase_();
}

function initializeSheets() {
  return initializeSheets_();
}

/**
 * Run ONCE in the Apps Script editor after pasting this project.
 * Writes FORGED_SERVER_SECRET + FORGED_SPREADSHEET_ID to Script Properties.
 */
function bootstrapForgEdOnce() {
  ensureForgEdProperties_(true);
  var status = getForgEdConfigStatus_();
  Logger.log(JSON.stringify(status));
  if (!status.spreadsheetId) {
    return {
      ok: false,
      message:
        'Set FORGED_SETUP.SPREADSHEET_ID in Code.gs (from your sheet URL) or run createForgEdDatabase() once.',
      configured: status
    };
  }
  return { ok: true, message: 'ForgEd Script Properties configured.', configured: status };
}

/** @deprecated Use bootstrapForgEdOnce() */
function setForgedServerSecretOnce() {
  return bootstrapForgEdOnce();
}

function setForgedSpreadsheetIdOnce() {
  ensureForgEdProperties_(true);
  return { ok: true, configured: getForgEdConfigStatus_() };
}

function getForgEdConfigStatus_() {
  var props = PropertiesService.getScriptProperties();
  var spreadsheetId = getSpreadsheetId_();
  var secret = getServerSecret_();
  return {
    spreadsheetId: spreadsheetId,
    hasSpreadsheet: !!spreadsheetId,
    hasServerSecret: !!secret,
    sendEmailNotifications: CONFIG.SEND_EMAIL_NOTIFICATIONS,
    emailRecipients: getNotificationRecipients_()
  };
}

function ensureForgEdProperties_(force) {
  var props = PropertiesService.getScriptProperties();
  if ((force || !props.getProperty(PROP_SERVER_SECRET)) && FORGED_SETUP.SERVER_SECRET) {
    props.setProperty(PROP_SERVER_SECRET, FORGED_SETUP.SERVER_SECRET);
  }
  var sheetId = getForgedSpreadsheetIdFromSetup_();
  // Code.gs FORGED_SETUP always wins when set (overrides stale Script Properties).
  if (sheetId) {
    props.setProperty(PROP_SPREADSHEET_ID, sheetId);
  }
  if (FORGED_SETUP.OLLAMA_BASE_URL) {
    props.setProperty(PROP_OLLAMA_BASE_URL, String(FORGED_SETUP.OLLAMA_BASE_URL).trim());
  }
  if (FORGED_SETUP.OLLAMA_MODEL) {
    props.setProperty(PROP_OLLAMA_MODEL, String(FORGED_SETUP.OLLAMA_MODEL).trim());
  }
  if (FORGED_SETUP.OLLAMA_API_KEY) {
    props.setProperty(PROP_OLLAMA_API_KEY, String(FORGED_SETUP.OLLAMA_API_KEY).trim());
  }
}

function getSpreadsheetId_() {
  ensureForgEdProperties_();
  var id = getForgedSpreadsheetIdFromSetup_() || '';
  if (id) return id;
  var props = PropertiesService.getScriptProperties();
  id = props.getProperty(PROP_SPREADSHEET_ID) || '';
  if (id) return id;
  try {
    var iter = DriveApp.getFilesByName(CONFIG.SPREADSHEET_TITLE);
    if (iter.hasNext()) {
      id = iter.next().getId();
      props.setProperty(PROP_SPREADSHEET_ID, id);
      Logger.log('Auto-linked spreadsheet: ' + id);
      return id;
    }
  } catch (driveErr) {
    Logger.log('Drive lookup failed: ' + driveErr);
  }
  return '';
}

function createForgEdDatabase_() {
  var ss = SpreadsheetApp.create(CONFIG.SPREADSHEET_TITLE);
  var id = ss.getId();
  FORGED_SETUP.SPREADSHEET_ID = id;
  FORGED_SETUP.SPREADSHEET_URL =
    'https://docs.google.com/spreadsheets/d/' + id + '/edit';
  PropertiesService.getScriptProperties().setProperty(PROP_SPREADSHEET_ID, id);
  ensureForgEdProperties_(true);
  initializeSheetsInSpreadsheet_(ss);
  return {
    ok: true,
    spreadsheetId: id,
    spreadsheetUrl: ss.getUrl(),
    message: 'ForgEd database created. SPREADSHEET_ID and SERVER_SECRET saved. Deploy as Web App.'
  };
}

function initializeSheets_() {
  var ss = getSpreadsheet_();
  initializeSheetsInSpreadsheet_(ss);
  return { ok: true, spreadsheetId: ss.getId(), spreadsheetUrl: ss.getUrl() };
}

function initializeSheetsInSpreadsheet_(ss) {
  var first = ss.getSheets()[0];
  var used = {};
  var keys = Object.keys(SHEETS);
  for (var i = 0; i < keys.length; i++) {
    var def = SHEETS[keys[i]];
    var sheet = ss.getSheetByName(def.name);
    if (!sheet) {
      sheet = ss.insertSheet(def.name);
    }
    sheet.clear();
    sheet.getRange(1, 1, 1, def.headers.length).setValues([def.headers]);
    sheet.setFrozenRows(1);
    used[def.name] = true;
  }
  if (first && !used[first.getName()]) {
    ss.deleteSheet(first);
  }
}

// ─── Auth ───────────────────────────────────────────────────────────────────

function parseRegisterPayload_(data) {
  var q1 =
    String(data.securityQuestion1 || data.securityQ1 || data.security_question_1 || '').trim();
  var q2 =
    String(data.securityQuestion2 || data.securityQ2 || data.security_question_2 || '').trim();
  if (!q1 && data.securityQuestion1Id) {
    q1 = 'id:' + String(data.securityQuestion1Id);
  }
  if (!q2 && data.securityQuestion2Id) {
    q2 = 'id:' + String(data.securityQuestion2Id);
  }
  return {
    firstName: trim_(data.firstName || data.first_name, 80),
    lastName: trim_(data.lastName || data.last_name, 80),
    email: normalizeEmail_(data.email),
    username: normalizeUsername_(data.username),
    password: String(data.password || ''),
    phone: cleanPhone_(data.phone),
    street: trim_(data.street || data.address, 120),
    city: trim_(data.city, 80),
    state: trim_(data.state, 2).toUpperCase(),
    zip: trim_(data.zip || data.zipCode, 10),
    securityQ1: trim_(q1, 200),
    securityA1: trim_(data.securityAnswer1 || data.securityA1, 200),
    securityQ2: trim_(q2, 200),
    securityA2: trim_(data.securityAnswer2 || data.securityA2, 200),
    referralSource: trim_(data.referralSource || data.howHeardAboutUs || data.referral, 80)
  };
}

function validateRegisterPayload_(p) {
  if (!p.firstName) throw new Error('First name is required.');
  if (!p.lastName) throw new Error('Last name is required.');
  if (!p.email || !isValidEmail_(p.email)) throw new Error('Valid email is required.');
  if (!p.username || p.username.length < 3) {
    throw new Error('Username must be at least 3 characters.');
  }
  if (p.password.length < 8) throw new Error('Password must be at least 8 characters.');
  if (!p.phone || p.phone.length < 10) throw new Error('Valid phone number is required.');
  if (!p.street) throw new Error('Street address is required.');
  if (!p.city) throw new Error('City is required.');
  if (!p.state || p.state.length !== 2) throw new Error('State is required (2 letters).');
  if (!p.zip) throw new Error('ZIP code is required.');
  if (!p.securityQ1 || !p.securityA1) {
    throw new Error('Security question 1 and answer are required.');
  }
  if (!p.securityQ2 || !p.securityA2) {
    throw new Error('Security question 2 and answer are required.');
  }
  if (p.securityQ1 === p.securityQ2) {
    throw new Error('Choose two different security questions.');
  }
  if (!p.referralSource) throw new Error('Please tell us how you heard about ForgEd.');
}

function registerUser_(data) {
  var p = parseRegisterPayload_(data);
  validateRegisterPayload_(p);

  if (findUserByEmail_(p.email)) {
    throw new Error('An account with this email already exists.');
  }
  if (findUserByUsername_(p.username)) {
    throw new Error('Username is already taken.');
  }

  var userId = 'FE-' + Utilities.getUuid().slice(0, 12);
  var salt = Utilities.getUuid();
  var passwordHash = hashPassword_(p.password, salt);
  var secHash1 = hashPassword_(normalizeSecurityAnswer_(p.securityA1), salt);
  var secHash2 = hashPassword_(normalizeSecurityAnswer_(p.securityA2), salt);
  var now = nowIso_();
  var displayName = trim_(p.firstName + ' ' + p.lastName, 80);

  appendUserRow_({
    userId: userId,
    firstName: p.firstName,
    lastName: p.lastName,
    username: p.username,
    email: p.email,
    phone: p.phone,
    street: p.street,
    city: p.city,
    state: p.state,
    zip: p.zip,
    securityQ1: p.securityQ1,
    securityA1Hash: secHash1,
    securityQ2: p.securityQ2,
    securityA2Hash: secHash2,
    referralSource: p.referralSource,
    passwordHash: passwordHash,
    salt: salt,
    xp: 0,
    level: 1,
    streak: 0,
    activePaths: '',
    certifications: '',
    createdDate: now,
    lastLogin: now,
    displayName: displayName,
    sessionToken: '',
    sessionExpires: '',
    resetToken: '',
    resetExpires: ''
  });

  var session = createSession_(userId, p.email);
  var emailResult = { emailSent: false, emailError: '' };
  if (CONFIG.SEND_EMAIL_NOTIFICATIONS) {
    emailResult = sendSignupNotification_(session.user, now);
  }
  return {
    ok: true,
    accessToken: session.token,
    user: publicUser_(session.user),
    emailSent: emailResult.emailSent,
    emailError: emailResult.emailError || ''
  };
}

function loginUser_(data) {
  var email = normalizeEmail_(data.email);
  var password = String(data.password || '');
  if (!email || !password) {
    throw new Error('Email and password are required.');
  }

  var user = findUserByEmail_(email);
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  var hash = hashPassword_(password, user.salt);
  if (hash !== user.passwordHash) {
    throw new Error('Invalid email or password.');
  }

  updateUserFields_(user.rowIndex, {
    lastLogin: nowIso_()
  });

  var session = createSession_(user.userId, user.email);
  return {
    ok: true,
    accessToken: session.token,
    user: publicUser_(session.user)
  };
}

function requestPasswordReset_(data) {
  var email = normalizeEmail_(data.email);
  var user = findUserByEmail_(email);
  if (!user) {
    return { ok: true, message: 'If that email exists, reset instructions were sent.' };
  }
  var token = Utilities.getUuid().replace(/-/g, '');
  var expires = new Date();
  expires.setHours(expires.getHours() + CONFIG.RESET_HOURS);
  updateUserFields_(user.rowIndex, {
    resetToken: token,
    resetExpires: expires.toISOString()
  });
  return {
    ok: true,
    message: 'If that email exists, reset instructions were sent.'
  };
}

function resetPassword_(data) {
  var token = String(data.token || '').trim();
  var password = String(data.password || '');
  if (!token || password.length < 8) {
    throw new Error('Valid reset token and password (8+ chars) required.');
  }
  var user = findUserByResetToken_(token);
  if (!user) {
    throw new Error('Invalid or expired reset token.');
  }
  var exp = user.resetExpires ? new Date(user.resetExpires) : null;
  if (!exp || exp.getTime() < Date.now()) {
    throw new Error('Reset token has expired.');
  }
  var salt = Utilities.getUuid();
  updateUserFields_(user.rowIndex, {
    salt: salt,
    passwordHash: hashPassword_(password, salt),
    resetToken: '',
    resetExpires: ''
  });
  return { ok: true, message: 'Password updated. You can sign in now.' };
}

function updateUserProfile_(userId, data) {
  var fields = {};
  if (data.displayName != null) {
    fields.displayName = String(data.displayName).trim().slice(0, 80) || 'ForgEd Learner';
  }
  if (data.username != null) {
    var uname = normalizeUsername_(data.username);
    var taken = findUserByUsername_(uname);
    if (taken && taken.userId !== userId) {
      throw new Error('Username is already taken.');
    }
    fields.username = uname;
  }
  if (!Object.keys(fields).length) {
    throw new Error('Nothing to update.');
  }
  updateUserFields_(findUserRowIndex_(userId), fields);
  return { ok: true, user: publicUser_(findUserById_(userId)) };
}

// ─── Progress & dashboard ───────────────────────────────────────────────────

function saveUserProgress_(userId, progress) {
  if (!progress || typeof progress !== 'object') {
    throw new Error('Missing progress payload.');
  }
  var json = JSON.stringify(progress);
  if (json.length > 120000) {
    throw new Error('Progress payload too large.');
  }

  var xp = Number(progress.xp) || 0;
  var level = Number(progress.level) || levelFromXp_(xp);
  var streak = Number(progress.streak) || 0;
  var activePath = progress.activePathId ? String(progress.activePathId) : '';

  updateUserFields_(findUserRowIndex_(userId), {
    xp: xp,
    level: level,
    streak: streak,
    activePaths: activePath,
    lastLogin: nowIso_()
  });

  upsertCourseProgressJson_(userId, '_full', json);

  if (progress.pathProgress && typeof progress.pathProgress === 'object') {
    var paths = progress.pathProgress;
    for (var pathId in paths) {
      if (!paths.hasOwnProperty(pathId)) continue;
      var pp = paths[pathId];
      var completed = (pp.completedCourseSlugs || []).length;
      var total = Math.max(completed, 3);
      var pct = Math.min(100, Math.round((completed / total) * 100));
      upsertPathProgress_(userId, pathId, {
        completionPct: pct,
        active: progress.activePathId === pathId ? 'yes' : 'no',
        certified: pp.badgeEarned ? 'yes' : 'no',
        json: JSON.stringify(pp)
      });
    }
  }

  if (progress.earnedBadges && progress.earnedBadges.length) {
    for (var i = 0; i < progress.earnedBadges.length; i++) {
      tryUnlockAchievement_(userId, progress.earnedBadges[i], 0);
    }
  }

  return { ok: true };
}

function loadUserDashboard_(userId) {
  var user = findUserById_(userId);
  if (!user) {
    throw new Error('User not found.');
  }
  var progressJson = getCourseProgressJson_(userId, '_full');
  var progress = null;
  if (progressJson) {
    try {
      progress = JSON.parse(progressJson);
    } catch (e) {
      progress = null;
    }
  }
  if (progress) {
    progress.xp = Number(user.xp) || progress.xp || 0;
    progress.level = Number(user.level) || levelFromXp_(progress.xp);
    progress.streak = Number(user.streak) || progress.streak || 0;
    progress.activePathId = user.activePaths || progress.activePathId || null;
  }
  return {
    ok: true,
    user: publicUser_(user),
    progress: progress,
    achievements: listAchievements_(userId),
    pathProgress: listPathProgress_(userId)
  };
}

function updateXP_(userId, xp, level) {
  updateUserFields_(findUserRowIndex_(userId), {
    xp: Number(xp) || 0,
    level: Number(level) || levelFromXp_(Number(xp) || 0)
  });
  return { ok: true };
}

function updateStreak_(userId, streak) {
  updateUserFields_(findUserRowIndex_(userId), {
    streak: Number(streak) || 0
  });
  return { ok: true };
}

function saveQuizResults_(userId, data) {
  var courseId = String(data.courseId || data.course_id || '');
  var quizJson = JSON.stringify(data.quizScores || data.results || {});
  upsertCourseProgressRow_(userId, courseId, {
    quizScores: quizJson,
    lastAccessed: nowIso_()
  });
  return { ok: true };
}

function saveLabProgress_(userId, data) {
  var labName = String(data.labName || data.lab_name || '');
  if (!labName) {
    throw new Error('Lab name required.');
  }
  upsertLabProgress_(userId, labName, {
    status: data.completed ? 'completed' : String(data.status || 'in_progress'),
    xp: Number(data.xpEarned || data.xp) || 0,
    solutionViewed: data.solutionViewed ? 'yes' : 'no',
    retryRequired: data.retryRequired ? 'yes' : 'no'
  });
  return { ok: true };
}

function unlockAchievement_(userId, data) {
  var name = String(data.achievementName || data.name || '');
  var xp = Number(data.xpReward || data.xp) || 0;
  if (!name) {
    throw new Error('Achievement name required.');
  }
  tryUnlockAchievement_(userId, name, xp);
  return { ok: true };
}

// ─── Sessions ───────────────────────────────────────────────────────────────

function createSession_(userId, email) {
  var user = findUserById_(userId);
  var token = Utilities.getUuid() + Utilities.getUuid();
  var expires = new Date();
  expires.setDate(expires.getDate() + CONFIG.SESSION_DAYS);
  updateUserFields_(user.rowIndex, {
    sessionToken: token,
    sessionExpires: expires.toISOString(),
    lastLogin: nowIso_()
  });
  user.sessionToken = token;
  return { token: token, user: user };
}

function requireSession_(data) {
  var token =
    String(data.accessToken || data.access_token || data.token || '').trim() ||
    parseBearer_(data.authorization || '');
  if (!token) {
    throw new Error('Sign in required.');
  }
  var user = findUserBySession_(token);
  if (!user) {
    throw new Error('Session expired. Please sign in again.');
  }
  var exp = user.sessionExpires ? new Date(user.sessionExpires) : null;
  if (exp && exp.getTime() < Date.now()) {
    throw new Error('Session expired. Please sign in again.');
  }
  return user;
}

function requireServerSecret_(data) {
  var secret = String(data.serverSecret || '');
  var expected = getServerSecret_();
  if (!expected || secret !== expected) {
    throw new Error('Unauthorized.');
  }
}

// ─── Sheet helpers ──────────────────────────────────────────────────────────

function getSpreadsheet_() {
  var id = getSpreadsheetId_();
  if (!id) {
    throw new Error(
      'Database not linked. Paste your sheet ID into FORGED_SETUP.SPREADSHEET_ID in Code.gs, run bootstrapForgEdOnce(), or run createForgEdDatabase().'
    );
  }
  return SpreadsheetApp.openById(id);
}

function getSheet_(name) {
  var ss = getSpreadsheet_();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    initializeSheetsInSpreadsheet_(ss);
    sheet = ss.getSheetByName(name);
  }
  return sheet;
}

function getUsersHeaderMap_() {
  var sheet = getSheet_(SHEETS.USERS.name);
  var lastCol = Math.max(sheet.getLastColumn(), SHEETS.USERS.headers.length);
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  var map = {};
  for (var i = 0; i < headers.length; i++) {
    var h = String(headers[i] || '').trim();
    if (h) map[h] = i;
  }
  return map;
}

function usersSheetIsExpanded_() {
  return getUsersHeaderMap_()['First Name'] !== undefined;
}

function upgradeUsersSheetHeaders_() {
  var sheet = getSheet_(SHEETS.USERS.name);
  if (usersSheetIsExpanded_()) {
    return { ok: true, message: 'USERS sheet already has expanded columns.' };
  }

  var last = sheet.getLastRow();
  var oldRows = [];
  if (last >= 2) {
    var oldColCount = sheet.getLastColumn();
    oldRows = sheet.getRange(2, 1, last, oldColCount).getValues();
  }

  sheet.getRange(1, 1, 1, SHEETS.USERS.headers.length).setValues([SHEETS.USERS.headers]);

  for (var i = 0; i < oldRows.length; i++) {
    var legacy = userFromRowLegacy_(oldRows[i], i + 2);
    sheet.getRange(i + 2, 1, 1, SHEETS.USERS.headers.length).setValues([
      [
        legacy.userId,
        legacy.firstName,
        legacy.lastName,
        legacy.username,
        legacy.email,
        legacy.phone,
        legacy.street,
        legacy.city,
        legacy.state,
        legacy.zip,
        legacy.securityQ1,
        legacy.securityA1Hash,
        legacy.securityQ2,
        legacy.securityA2Hash,
        legacy.referralSource,
        legacy.passwordHash,
        legacy.salt,
        legacy.xp,
        legacy.level,
        legacy.streak,
        legacy.activePaths,
        legacy.certifications,
        legacy.createdDate,
        legacy.lastLogin,
        legacy.displayName,
        legacy.sessionToken,
        legacy.sessionExpires,
        legacy.resetToken,
        legacy.resetExpires
      ]
    ]);
  }

  return {
    ok: true,
    message: 'USERS sheet upgraded.',
    migratedRows: oldRows.length
  };
}

function splitDisplayName_(displayName) {
  var parts = String(displayName || '')
    .trim()
    .split(/\s+/);
  if (!parts.length) return { first: '', last: '' };
  if (parts.length === 1) return { first: parts[0], last: '' };
  return { first: parts[0], last: parts.slice(1).join(' ') };
}

function userFromRowLegacy_(row, rowIndex) {
  var names = splitDisplayName_(String(row[12] || ''));
  return {
    rowIndex: rowIndex,
    userId: String(row[0] || ''),
    firstName: names.first,
    lastName: names.last,
    username: String(row[1] || ''),
    email: String(row[2] || ''),
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    securityQ1: '',
    securityA1Hash: '',
    securityQ2: '',
    securityA2Hash: '',
    referralSource: '',
    passwordHash: String(row[3] || ''),
    salt: String(row[4] || ''),
    xp: Number(row[5]) || 0,
    level: Number(row[6]) || 1,
    streak: Number(row[7]) || 0,
    activePaths: String(row[8] || ''),
    certifications: String(row[9] || ''),
    createdDate: String(row[10] || ''),
    lastLogin: String(row[11] || ''),
    displayName: String(row[12] || ''),
    sessionToken: String(row[13] || ''),
    sessionExpires: String(row[14] || ''),
    resetToken: String(row[15] || ''),
    resetExpires: String(row[16] || '')
  };
}

function cell_(row, map, header, fallback) {
  if (map[header] === undefined) return fallback === undefined ? '' : fallback;
  return row[map[header]];
}

function userFromRowNew_(row, rowIndex, map) {
  return {
    rowIndex: rowIndex,
    userId: String(cell_(row, map, 'User ID', '')),
    firstName: String(cell_(row, map, 'First Name', '')),
    lastName: String(cell_(row, map, 'Last Name', '')),
    username: String(cell_(row, map, 'Username', '')),
    email: String(cell_(row, map, 'Email', '')),
    phone: String(cell_(row, map, 'Phone', '')),
    street: String(cell_(row, map, 'Street', '')),
    city: String(cell_(row, map, 'City', '')),
    state: String(cell_(row, map, 'State', '')),
    zip: String(cell_(row, map, 'ZIP', '')),
    securityQ1: String(cell_(row, map, 'Security Q1', '')),
    securityA1Hash: String(cell_(row, map, 'Security A1 Hash', '')),
    securityQ2: String(cell_(row, map, 'Security Q2', '')),
    securityA2Hash: String(cell_(row, map, 'Security A2 Hash', '')),
    referralSource: String(cell_(row, map, 'Referral Source', '')),
    passwordHash: String(cell_(row, map, 'Password Hash', '')),
    salt: String(cell_(row, map, 'Salt', '')),
    xp: Number(cell_(row, map, 'XP', 0)) || 0,
    level: Number(cell_(row, map, 'Level', 1)) || 1,
    streak: Number(cell_(row, map, 'Current Streak', 0)) || 0,
    activePaths: String(cell_(row, map, 'Active Paths', '')),
    certifications: String(cell_(row, map, 'Certifications', '')),
    createdDate: String(cell_(row, map, 'Created Date', '')),
    lastLogin: String(cell_(row, map, 'Last Login', '')),
    displayName: String(cell_(row, map, 'Display Name', '')),
    sessionToken: String(cell_(row, map, 'Session Token', '')),
    sessionExpires: String(cell_(row, map, 'Session Expires', '')),
    resetToken: String(cell_(row, map, 'Reset Token', '')),
    resetExpires: String(cell_(row, map, 'Reset Expires', ''))
  };
}

function userFromRow_(row, rowIndex) {
  if (usersSheetIsExpanded_()) {
    return userFromRowNew_(row, rowIndex, getUsersHeaderMap_());
  }
  return userFromRowLegacy_(row, rowIndex);
}

function valueForUserHeader_(header, u) {
  var map = {
    'User ID': u.userId,
    'First Name': u.firstName,
    'Last Name': u.lastName,
    Username: u.username,
    Email: u.email,
    Phone: u.phone,
    Street: u.street,
    City: u.city,
    State: u.state,
    ZIP: u.zip,
    'Security Q1': u.securityQ1,
    'Security A1 Hash': u.securityA1Hash,
    'Security Q2': u.securityQ2,
    'Security A2 Hash': u.securityA2Hash,
    'Referral Source': u.referralSource,
    'Password Hash': u.passwordHash,
    Salt: u.salt,
    XP: u.xp,
    Level: u.level,
    'Current Streak': u.streak,
    'Active Paths': u.activePaths,
    Certifications: u.certifications,
    'Created Date': u.createdDate,
    'Last Login': u.lastLogin,
    'Display Name': u.displayName,
    'Session Token': u.sessionToken,
    'Session Expires': u.sessionExpires,
    'Reset Token': u.resetToken,
    'Reset Expires': u.resetExpires
  };
  return map[header] !== undefined && map[header] !== null ? map[header] : '';
}

function appendUserRow_(u) {
  var sheet = getSheet_(SHEETS.USERS.name);
  if (!usersSheetIsExpanded_()) {
    upgradeUsersSheetHeaders_();
  }
  var row = [];
  var headers = SHEETS.USERS.headers;
  for (var i = 0; i < headers.length; i++) {
    row.push(valueForUserHeader_(headers[i], u));
  }
  sheet.appendRow(row);
}

function findUserByEmail_(email) {
  return findUserWhere_(function (u) {
    return u.email === email;
  });
}

function findUserByUsername_(username) {
  return findUserWhere_(function (u) {
    return u.username === username;
  });
}

function findUserById_(userId) {
  return findUserWhere_(function (u) {
    return u.userId === userId;
  });
}

function findUserBySession_(token) {
  return findUserWhere_(function (u) {
    return u.sessionToken === token;
  });
}

function findUserByResetToken_(token) {
  return findUserWhere_(function (u) {
    return u.resetToken === token;
  });
}

function findUserWhere_(predicate) {
  var sheet = getSheet_(SHEETS.USERS.name);
  var last = sheet.getLastRow();
  if (last < 2) return null;
  var colCount = Math.max(sheet.getLastColumn(), SHEETS.USERS.headers.length);
  var rows = sheet.getRange(2, 1, last, colCount).getValues();
  for (var i = 0; i < rows.length; i++) {
    var u = userFromRow_(rows[i], i + 2);
    if (predicate(u)) return u;
  }
  return null;
}

function findUserRowIndex_(userId) {
  var u = findUserById_(userId);
  if (!u) throw new Error('User not found.');
  return u.rowIndex;
}

function userCol_(headerName) {
  var map = getUsersHeaderMap_();
  return map[headerName] !== undefined ? map[headerName] + 1 : 0;
}

function updateUserFields_(rowIndex, fields) {
  var sheet = getSheet_(SHEETS.USERS.name);
  var keyToHeader = {
    firstName: 'First Name',
    lastName: 'Last Name',
    username: 'Username',
    email: 'Email',
    phone: 'Phone',
    street: 'Street',
    city: 'City',
    state: 'State',
    zip: 'ZIP',
    referralSource: 'Referral Source',
    xp: 'XP',
    level: 'Level',
    streak: 'Current Streak',
    activePaths: 'Active Paths',
    certifications: 'Certifications',
    lastLogin: 'Last Login',
    displayName: 'Display Name',
    sessionToken: 'Session Token',
    sessionExpires: 'Session Expires',
    salt: 'Salt',
    passwordHash: 'Password Hash',
    resetToken: 'Reset Token',
    resetExpires: 'Reset Expires'
  };
  for (var key in fields) {
    if (!fields.hasOwnProperty(key)) continue;
    var header = keyToHeader[key] || key;
    var ci = userCol_(header);
    if (ci) sheet.getRange(rowIndex, ci).setValue(fields[key]);
  }
}

function upsertCourseProgressJson_(userId, courseId, json) {
  upsertCourseProgressRow_(userId, courseId, {
    progressJson: json,
    completionStatus: 'in_progress',
    lastAccessed: nowIso_()
  });
}

function getCourseProgressJson_(userId, courseId) {
  var sheet = getSheet_(SHEETS.COURSE_PROGRESS.name);
  var last = sheet.getLastRow();
  if (last < 2) return null;
  var rows = sheet.getRange(2, 1, last, 8).getValues();
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i][0]) === userId && String(rows[i][1]) === courseId) {
      return String(rows[i][7] || '');
    }
  }
  return null;
}

function upsertCourseProgressRow_(userId, courseId, patch) {
  var sheet = getSheet_(SHEETS.COURSE_PROGRESS.name);
  var last = sheet.getLastRow();
  var rowIndex = -1;
  if (last >= 2) {
    var rows = sheet.getRange(2, 1, last, 2).getValues();
    for (var i = 0; i < rows.length; i++) {
      if (String(rows[i][0]) === userId && String(rows[i][1]) === courseId) {
        rowIndex = i + 2;
        break;
      }
    }
  }
  if (rowIndex > 0) {
    if (patch.sectionProgress !== undefined) sheet.getRange(rowIndex, 3).setValue(patch.sectionProgress);
    if (patch.chapterProgress !== undefined) sheet.getRange(rowIndex, 4).setValue(patch.chapterProgress);
    if (patch.quizScores !== undefined) sheet.getRange(rowIndex, 5).setValue(patch.quizScores);
    if (patch.completionStatus !== undefined) sheet.getRange(rowIndex, 6).setValue(patch.completionStatus);
    if (patch.lastAccessed !== undefined) sheet.getRange(rowIndex, 7).setValue(patch.lastAccessed);
    if (patch.progressJson !== undefined) sheet.getRange(rowIndex, 8).setValue(patch.progressJson);
  } else {
    sheet.appendRow([
      userId,
      courseId,
      patch.sectionProgress || '',
      patch.chapterProgress || '',
      patch.quizScores || '',
      patch.completionStatus || '',
      patch.lastAccessed || nowIso_(),
      patch.progressJson || ''
    ]);
  }
}

function upsertPathProgress_(userId, pathName, patch) {
  var sheet = getSheet_(SHEETS.PATH_PROGRESS.name);
  var last = sheet.getLastRow();
  var rowIndex = -1;
  if (last >= 2) {
    var rows = sheet.getRange(2, 1, last, 2).getValues();
    for (var i = 0; i < rows.length; i++) {
      if (String(rows[i][0]) === userId && String(rows[i][1]) === pathName) {
        rowIndex = i + 2;
        break;
      }
    }
  }
  if (rowIndex > 0) {
    sheet.getRange(rowIndex, 3).setValue(patch.completionPct);
    sheet.getRange(rowIndex, 4).setValue(patch.active);
    sheet.getRange(rowIndex, 5).setValue(patch.certified);
    sheet.getRange(rowIndex, 6).setValue(patch.json);
    sheet.getRange(rowIndex, 7).setValue(nowIso_());
  } else {
    sheet.appendRow([
      userId,
      pathName,
      patch.completionPct,
      patch.active,
      patch.certified,
      patch.json,
      nowIso_()
    ]);
  }
}

function listPathProgress_(userId) {
  var sheet = getSheet_(SHEETS.PATH_PROGRESS.name);
  var last = sheet.getLastRow();
  var out = [];
  if (last < 2) return out;
  var rows = sheet.getRange(2, 1, last, 7).getValues();
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i][0]) === userId) {
      out.push({
        pathName: String(rows[i][1]),
        completionPct: Number(rows[i][2]) || 0,
        active: String(rows[i][3]) === 'yes',
        certified: String(rows[i][5]) === 'yes'
      });
    }
  }
  return out;
}

function upsertLabProgress_(userId, labName, patch) {
  var sheet = getSheet_(SHEETS.LAB_PROGRESS.name);
  var last = sheet.getLastRow();
  var rowIndex = -1;
  if (last >= 2) {
    var rows = sheet.getRange(2, 1, last, 2).getValues();
    for (var i = 0; i < rows.length; i++) {
      if (String(rows[i][0]) === userId && String(rows[i][1]) === labName) {
        rowIndex = i + 2;
        break;
      }
    }
  }
  if (rowIndex > 0) {
    sheet.getRange(rowIndex, 3).setValue(patch.status);
    sheet.getRange(rowIndex, 4).setValue(patch.xp);
    sheet.getRange(rowIndex, 5).setValue(patch.solutionViewed);
    sheet.getRange(rowIndex, 6).setValue(patch.retryRequired);
    sheet.getRange(rowIndex, 7).setValue(nowIso_());
  } else {
    sheet.appendRow([
      userId,
      labName,
      patch.status,
      patch.xp,
      patch.solutionViewed,
      patch.retryRequired,
      nowIso_()
    ]);
  }
}

function tryUnlockAchievement_(userId, name, xp) {
  var sheet = getSheet_(SHEETS.ACHIEVEMENTS.name);
  var last = sheet.getLastRow();
  if (last >= 2) {
    var rows = sheet.getRange(2, 1, last, 2).getValues();
    for (var i = 0; i < rows.length; i++) {
      if (String(rows[i][0]) === userId && String(rows[i][1]) === name) {
        return;
      }
    }
  }
  sheet.appendRow([userId, name, xp, nowIso_()]);
}

function listAchievements_(userId) {
  var sheet = getSheet_(SHEETS.ACHIEVEMENTS.name);
  var last = sheet.getLastRow();
  var out = [];
  if (last < 2) return out;
  var rows = sheet.getRange(2, 1, last, 4).getValues();
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i][0]) === userId) {
      out.push({
        name: String(rows[i][1]),
        xpReward: Number(rows[i][2]) || 0,
        unlockDate: String(rows[i][3])
      });
    }
  }
  return out;
}

// ─── Utilities ──────────────────────────────────────────────────────────────

function publicUser_(user) {
  var display =
    user.displayName ||
    trim_(String(user.firstName || '') + ' ' + String(user.lastName || ''), 80) ||
    user.username;
  return {
    id: user.userId,
    userId: user.userId,
    email: user.email,
    username: user.username,
    displayName: display,
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    phone: user.phone || '',
    street: user.street || '',
    city: user.city || '',
    state: user.state || '',
    zip: user.zip || '',
    referralSource: user.referralSource || '',
    xp: user.xp,
    level: user.level,
    streak: user.streak,
    activePaths: user.activePaths,
    certifications: user.certifications,
    createdDate: user.createdDate,
    lastLogin: user.lastLogin,
    isAdmin: isAdminEmail_(user.email)
  };
}

function isAdminEmail_(email) {
  var e = normalizeEmail_(email);
  var list = CONFIG.ADMIN_EMAILS || [];
  for (var i = 0; i < list.length; i++) {
    if (normalizeEmail_(list[i]) === e) return true;
  }
  return false;
}

function getNotificationRecipients_() {
  var raw = CONFIG.EMAIL_RECIPIENTS;
  var list = Array.isArray(raw)
    ? raw
    : String(raw || '')
        .split(',')
        .map(function (x) {
          return x.trim();
        });
  return list.filter(function (x) {
    return x && x.indexOf('@') > 0;
  });
}

/**
 * Run in Apps Script editor to test signup emails (re-authorize Gmail if prompted).
 */
function testSendForgedSignupEmail() {
  var result = sendSignupNotification_(
    {
      userId: 'FE-TEST-EMAIL',
      email: 'test@forgedlearn.com',
      username: 'testuser',
      displayName: 'Email Test'
    },
    nowIso_()
  );
  Logger.log(JSON.stringify(result));
  return {
    recipients: getNotificationRecipients_(),
    result: result
  };
}

/**
 * Run once to create chandler@forgedlearn.com if missing.
 * Temp password is logged — use Forgot Password on the site to set a new one.
 */
function ensureForgedAdminAccount() {
  var email = normalizeEmail_('chandler@forgedlearn.com');
  var existing = findUserByEmail_(email);
  if (existing) {
    return {
      ok: true,
      message: 'Admin account already exists.',
      userId: existing.userId,
      isAdmin: true
    };
  }
  var tempPass = Utilities.getUuid().replace(/-/g, '').slice(0, 14);
  var out = registerUser_({
    email: email,
    username: 'forgedadmin',
    password: tempPass,
    firstName: 'ForgEd',
    lastName: 'Admin',
    phone: '5555555555',
    street: 'Internal',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    securityQuestion1: 'id:1',
    securityAnswer1: Utilities.getUuid(),
    securityQuestion2: 'id:2',
    securityAnswer2: Utilities.getUuid(),
    referralSource: 'internal'
  });
  Logger.log(
    'Admin account created for ' +
      email +
      '. Temporary password (use Forgot Password to change): ' +
      tempPass
  );
  return {
    ok: true,
    message: 'Admin created. See execution log for temporary password.',
    userId: out.user.userId,
    isAdmin: true
  };
}

function logEmailAttempt_(event, recipients, status, detail, user) {
  try {
    var sheet = getSheet_(SHEETS.EMAIL_LOG.name);
    sheet.appendRow([
      nowIso_(),
      event,
      Array.isArray(recipients) ? recipients.join(', ') : String(recipients || ''),
      status,
      String(detail || '').slice(0, 500),
      user && user.userId ? user.userId : '',
      user && user.email ? user.email : ''
    ]);
  } catch (logErr) {
    Logger.log('EMAIL_LOG write failed: ' + logErr);
  }
}

function diagnoseForgedEmail_() {
  var recipients = getNotificationRecipients_();
  var owner = '';
  try {
    owner = Session.getEffectiveUser().getEmail() || '';
  } catch (e) {
    owner = '(unknown)';
  }
  var quota = -1;
  try {
    quota = MailApp.getRemainingDailyQuota();
  } catch (qErr) {
    quota = -1;
  }
  var test = sendSignupNotification_(
    {
      userId: 'FE-DIAGNOSE',
      email: 'diagnose@forgedlearn.com',
      username: 'diagnose',
      displayName: 'Email Diagnose'
    },
    nowIso_()
  );
  return {
    ok: true,
    owner: owner,
    recipients: recipients,
    mailDailyQuotaRemaining: quota,
    sendEmailNotifications: CONFIG.SEND_EMAIL_NOTIFICATIONS,
    testResult: test
  };
}

function sendSignupNotification_(user, createdAt) {
  if (!CONFIG.SEND_EMAIL_NOTIFICATIONS) {
    return { ok: true, emailSent: false, emailError: 'SEND_EMAIL_NOTIFICATIONS is false.' };
  }

  var recipients = getNotificationRecipients_();
  if (!recipients.length) {
    logEmailAttempt_('signup', '', 'skipped', 'No EMAIL_RECIPIENTS', user);
    return { ok: true, emailSent: false, emailError: 'No EMAIL_RECIPIENTS configured.' };
  }

  var tz = Session.getScriptTimeZone();
  var when = new Date();
  var subject =
    'New ForgEd signup — ' +
    (user.displayName || user.username || 'learner') +
    ' [' +
    (user.userId || 'unknown') +
    ']';

  var body = [
    'New learner account on ' + (CONFIG.WEBSITE_URL || 'forgedlearn.com'),
    '',
    'User ID: ' + (user.userId || '—'),
    'Time: ' + Utilities.formatDate(when, tz, 'yyyy-MM-dd h:mm:ss a z'),
    '',
    'Profile',
    '  Name: ' +
      (user.firstName || user.lastName
        ? (user.firstName || '') + ' ' + (user.lastName || '')
        : user.displayName || '—'),
    '  Display name: ' + (user.displayName || '—'),
    '  Username: @' + (user.username || '—'),
    '  Email: ' + (user.email || '—'),
    '  Phone: ' + (user.phone || '—'),
    '  Address: ' +
      [user.street, user.city, user.state, user.zip].filter(Boolean).join(', ') || '—',
    '  Referral: ' + (user.referralSource || '—'),
    '  Admin: ' + (isAdminEmail_(user.email) ? 'yes' : 'no'),
    '',
    '—',
    'ForgEd Accounts (Google Sheets)'
  ].join('\n');

  var toList = recipients.join(',');
  var errors = [];

  // MailApp is reliable for Web App deployments (Execute as: Me).
  try {
    MailApp.sendEmail({
      to: toList,
      subject: subject,
      body: body,
      name: 'ForgEd Signups',
      noReply: false
    });
    Logger.log('MailApp sent to: ' + toList);
    logEmailAttempt_('signup', recipients, 'sent', 'MailApp OK', user);
    return { ok: true, emailSent: true, emailError: '', recipients: recipients };
  } catch (mailErr) {
    var mailMsg = mailErr && mailErr.message ? mailErr.message : String(mailErr);
    Logger.log('MailApp failed: ' + mailMsg);
    errors.push('MailApp: ' + mailMsg);
  }

  // Fallback: one email per recipient via GmailApp.
  for (var i = 0; i < recipients.length; i++) {
    var to = recipients[i];
    try {
      GmailApp.sendEmail(to, subject, body, { name: 'ForgEd Signups' });
      Logger.log('GmailApp sent to: ' + to);
    } catch (gmailErr) {
      var gMsg = gmailErr && gmailErr.message ? gmailErr.message : String(gmailErr);
      Logger.log('GmailApp failed for ' + to + ': ' + gMsg);
      errors.push(to + ': ' + gMsg);
    }
  }

  if (errors.length >= recipients.length + 1) {
    logEmailAttempt_('signup', recipients, 'failed', errors.join(' | '), user);
    return { ok: true, emailSent: false, emailError: errors.join(' | ') };
  }

  logEmailAttempt_('signup', recipients, 'sent', 'GmailApp fallback', user);
  return { ok: true, emailSent: true, emailError: '', recipients: recipients };
}

function hashPassword_(password, salt) {
  var raw = salt + '::' + password;
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw);
  return Utilities.base64Encode(digest);
}

function levelFromXp_(xp) {
  var n = Number(xp) || 0;
  if (n < 100) return 1;
  return Math.floor(Math.sqrt(n / 50)) + 1;
}

function normalizeEmail_(email) {
  return String(email || '')
    .trim()
    .toLowerCase();
}

function normalizeUsername_(username) {
  return String(username || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, '_')
    .slice(0, 24);
}

function trim_(value, maxLen) {
  var s = String(value || '').trim();
  if (maxLen && s.length > maxLen) s = s.slice(0, maxLen);
  return s;
}

function cleanPhone_(phone) {
  return String(phone || '').replace(/\D/g, '').slice(0, 15);
}

function normalizeSecurityAnswer_(answer) {
  return String(answer || '')
    .trim()
    .toLowerCase();
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function nowIso_() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd'T'HH:mm:ss");
}

function parseBearer_(header) {
  var h = String(header || '');
  var m = h.match(/^Bearer\s+(.+)$/i);
  return m ? m[1].trim() : '';
}

function getServerSecret_() {
  ensureForgEdProperties_();
  return (
    PropertiesService.getScriptProperties().getProperty(PROP_SERVER_SECRET) ||
    FORGED_SETUP.SERVER_SECRET ||
    ''
  );
}

// ─── KODA memory (ForgEd accounts sheet only — isolated from Syntrix / CoverIQ) ─

function ensureKodaMemorySheets_() {
  var ss = getSpreadsheet_();
  var defs = [SHEETS.KODA_FACTS, SHEETS.KODA_CHAT_LOG];
  for (var i = 0; i < defs.length; i++) {
    var def = defs[i];
    var sheet = ss.getSheetByName(def.name);
    if (!sheet) {
      sheet = ss.insertSheet(def.name);
      sheet.getRange(1, 1, 1, def.headers.length).setValues([def.headers]);
      sheet.setFrozenRows(1);
    }
  }
}

function kodaMemoryPrepare_(userId, data) {
  ensureKodaMemorySheets_();
  var sessionId = String(data.sessionId || '').trim();
  var query = String(data.query || '').trim().toLowerCase();
  var maxMessages = Math.min(Number(data.maxMessages) || 24, 48);

  var transcript = [];
  if (sessionId) {
    transcript = listKodaChatForSession_(userId, sessionId, maxMessages);
  }

  var progressBlock = buildKodaProgressBlock_(userId);
  var facts = listKodaFactsForUser_(userId, 'active');
  var retrieved = rankKodaFacts_(facts, query, Number(data.topK) || 8);

  return {
    ok: true,
    venture: 'forged',
    assistant: 'koda',
    transcript: transcript,
    memoryFacts: retrieved,
    progressBlock: progressBlock
  };
}

function kodaMemorySaveTurn_(userId, data) {
  ensureKodaMemorySheets_();
  var sessionId = String(data.sessionId || '').trim();
  if (!sessionId) {
    throw new Error('sessionId is required.');
  }
  var mode = String(data.mode || 'chat').trim();
  var courseSlug = String(data.courseSlug || '').trim();

  var userMsg = String(data.userMessage || '').trim();
  var assistantMsg = String(data.assistantMessage || '').trim();
  if (userMsg) {
    appendKodaChatRow_(userId, sessionId, 'user', userMsg, mode, courseSlug);
  }
  if (assistantMsg) {
    appendKodaChatRow_(userId, sessionId, 'assistant', assistantMsg, mode, courseSlug);
  }

  var savedFacts = [];
  var incoming = data.facts;
  if (incoming && incoming.length) {
    savedFacts = upsertKodaFacts_(userId, incoming, courseSlug);
  }
  pruneKodaFactsForUser_(userId, Number(data.maxFacts) || 200);

  return {
    ok: true,
    venture: 'forged',
    assistant: 'koda',
    factsSaved: savedFacts.length
  };
}

function buildKodaProgressBlock_(userId) {
  try {
    var dash = loadUserDashboard_(userId);
    var u = dash.user;
    var p = dash.progress;
    var lines = [
      'ForgEd learner snapshot (from this account only):',
      'XP: ' + (Number(u.xp) || 0) + ', Level: ' + (Number(u.level) || 1) + ', Streak: ' + (Number(u.streak) || 0) + ' day(s).'
    ];
    if (p && p.completedCourses && p.completedCourses.length) {
      lines.push('Completed courses: ' + p.completedCourses.join(', '));
    }
    if (p && p.completedLessons && p.completedLessons.length) {
      lines.push('Lessons completed: ' + p.completedLessons.length);
    }
    if (p && p.activePathId) {
      lines.push('Active learning path: ' + p.activePathId);
    }
    return lines.join('\n');
  } catch (e) {
    return 'ForgEd learner snapshot unavailable.';
  }
}

function listKodaChatForSession_(userId, sessionId, maxRows) {
  var sheet = getSheet_(SHEETS.KODA_CHAT_LOG.name);
  var last = sheet.getLastRow();
  if (last < 2) return [];
  var rows = sheet.getRange(2, 1, last - 1, SHEETS.KODA_CHAT_LOG.headers.length).getValues();
  var out = [];
  for (var i = rows.length - 1; i >= 0 && out.length < maxRows; i--) {
    var r = rows[i];
    if (String(r[1]) !== userId || String(r[2]) !== sessionId) continue;
    var role = String(r[3]);
    if (role !== 'user' && role !== 'assistant') continue;
    out.unshift({ role: role, content: String(r[4] || '') });
  }
  return out;
}

function appendKodaChatRow_(userId, sessionId, role, content, mode, courseSlug) {
  var sheet = getSheet_(SHEETS.KODA_CHAT_LOG.name);
  var text = String(content || '').slice(0, 12000);
  sheet.appendRow([
    Utilities.getUuid(),
    userId,
    sessionId,
    role,
    text,
    mode,
    courseSlug,
    nowIso_()
  ]);
}

function listKodaFactsForUser_(userId, status) {
  var sheet = getSheet_(SHEETS.KODA_FACTS.name);
  var last = sheet.getLastRow();
  if (last < 2) return [];
  var rows = sheet.getRange(2, 1, last - 1, SHEETS.KODA_FACTS.headers.length).getValues();
  var out = [];
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    if (String(r[1]) !== userId) continue;
    if (status && String(r[6]) !== status) continue;
    out.push({
      factId: String(r[0]),
      userId: String(r[1]),
      factType: String(r[2]),
      content: String(r[3]),
      confidence: Number(r[4]) || 0.5,
      courseSlug: String(r[5]),
      status: String(r[6]),
      created: String(r[7]),
      updated: String(r[8])
    });
  }
  return out;
}

function rankKodaFacts_(facts, query, topK) {
  if (!facts.length) return [];
  var qTokens = query.split(/\s+/).filter(function (t) {
    return t.length > 2;
  });
  // Short greetings ("hi", "hello") should not surface unrelated stored facts.
  if (qTokens.length === 0) return [];
  var scored = [];
  for (var i = 0; i < facts.length; i++) {
    var f = facts[i];
    var text = (f.content || '').toLowerCase();
    var score = f.confidence || 0.5;
    for (var j = 0; j < qTokens.length; j++) {
      if (text.indexOf(qTokens[j]) >= 0) score += 1.2;
    }
    if (f.factType === 'goal' || f.factType === 'skill_level') score += 0.3;
    scored.push({ fact: f, score: score });
  }
  scored.sort(function (a, b) {
    return b.score - a.score;
  });
  var out = [];
  for (var k = 0; k < scored.length && out.length < topK; k++) {
    if (scored[k].score < 0.4 && qTokens.length > 0) continue;
    out.push(scored[k].fact);
  }
  return out;
}

function upsertKodaFacts_(userId, facts, defaultCourseSlug) {
  var sheet = getSheet_(SHEETS.KODA_FACTS.name);
  var existing = listKodaFactsForUser_(userId, 'active');
  var saved = 0;
  for (var i = 0; i < facts.length; i++) {
    var f = facts[i];
    var content = String(f.content || '').trim().slice(0, 2000);
    if (!content) continue;
    var factType = String(f.factType || f.fact_type || 'context').trim();
    var confidence = Math.max(0, Math.min(1, Number(f.confidence) || 0.7));
    var courseSlug = String(f.courseSlug || f.course_slug || defaultCourseSlug || '').trim();
    var dup = null;
    for (var j = 0; j < existing.length; j++) {
      if (
        existing[j].factType === factType &&
        existing[j].content.toLowerCase() === content.toLowerCase()
      ) {
        dup = existing[j];
        break;
      }
    }
    var now = nowIso_();
    if (dup) {
      updateKodaFactRow_(dup.factId, {
        confidence: Math.max(dup.confidence, confidence),
        updated: now
      });
    } else {
      sheet.appendRow([
        Utilities.getUuid(),
        userId,
        factType,
        content,
        confidence,
        courseSlug,
        'active',
        now,
        now
      ]);
      saved++;
    }
  }
  return saved;
}

function updateKodaFactRow_(factId, patch) {
  var sheet = getSheet_(SHEETS.KODA_FACTS.name);
  var last = sheet.getLastRow();
  if (last < 2) return;
  var rows = sheet.getRange(2, 1, last - 1, 1).getValues();
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i][0]) !== factId) continue;
    var rowIndex = i + 2;
    if (patch.confidence !== undefined) {
      sheet.getRange(rowIndex, 5).setValue(patch.confidence);
    }
    if (patch.status !== undefined) {
      sheet.getRange(rowIndex, 7).setValue(patch.status);
    }
    if (patch.updated !== undefined) {
      sheet.getRange(rowIndex, 9).setValue(patch.updated);
    }
    return;
  }
}

function pruneKodaFactsForUser_(userId, maxFacts) {
  var facts = listKodaFactsForUser_(userId, 'active');
  if (facts.length <= maxFacts) return;
  facts.sort(function (a, b) {
    return String(a.updated).localeCompare(String(b.updated));
  });
  var toPrune = facts.length - maxFacts;
  for (var i = 0; i < toPrune; i++) {
    updateKodaFactRow_(facts[i].factId, { status: 'pruned', updated: nowIso_() });
  }
}

// ─── KODA (Ollama via Apps Script — Netlify calls here, GAS calls shared Ollama) ─

function getOllamaConfig_() {
  ensureForgEdProperties_();
  var props = PropertiesService.getScriptProperties();
  var base = String(
    FORGED_SETUP.OLLAMA_BASE_URL || props.getProperty(PROP_OLLAMA_BASE_URL) || ''
  )
    .trim()
    .replace(/\/$/, '');
  var model = String(
    FORGED_SETUP.OLLAMA_MODEL || props.getProperty(PROP_OLLAMA_MODEL) || 'llama3.2:1b'
  ).trim();
  var apiKey = String(
    FORGED_SETUP.OLLAMA_API_KEY || props.getProperty(PROP_OLLAMA_API_KEY) || ''
  ).trim();
  return { baseUrl: base, model: model, apiKey: apiKey };
}

function ollamaFetchHeaders_(apiKey) {
  var headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
  if (apiKey) {
    headers.Authorization = 'Bearer ' + apiKey;
  }
  return headers;
}

function kodaHealth_() {
  var cfg = getOllamaConfig_();
  if (!cfg.baseUrl) {
    return {
      ok: true,
      ollamaOk: false,
      model: cfg.model,
      configured: false,
      error: 'Set FORGED_SETUP.OLLAMA_BASE_URL in Code.gs and redeploy the Web App.'
    };
  }
  try {
    var r = UrlFetchApp.fetch(cfg.baseUrl + '/api/tags', {
      method: 'get',
      headers: ollamaFetchHeaders_(cfg.apiKey),
      muteHttpExceptions: true
    });
    var code = r.getResponseCode();
    return {
      ok: true,
      ollamaOk: code >= 200 && code < 300,
      model: cfg.model,
      configured: true,
      error: code >= 200 && code < 300 ? '' : 'Ollama health check failed (' + code + '). Check OLLAMA_API_KEY.'
    };
  } catch (err) {
    return {
      ok: true,
      ollamaOk: false,
      model: cfg.model,
      configured: true,
      error: String(err.message || err)
    };
  }
}

function kodaChat_(user, data) {
  var cfg = getOllamaConfig_();
  if (!cfg.baseUrl) {
    throw new Error('KODA is not configured. Set FORGED_SETUP.OLLAMA_BASE_URL in Apps Script.');
  }
  var messages = data.messages;
  if (!messages || !messages.length) {
    throw new Error('Messages required.');
  }
  var model = String(data.model || cfg.model || 'llama3.2:1b').trim();
  var payload = {
    model: model,
    messages: messages,
    stream: true,
    options: { temperature: 0.5, num_ctx: 4096, num_predict: 768 }
  };
  var r = UrlFetchApp.fetch(cfg.baseUrl + '/api/chat', {
    method: 'post',
    headers: ollamaFetchHeaders_(cfg.apiKey),
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });
  var code = r.getResponseCode();
  var text = r.getContentText() || '';
  if (code < 200 || code >= 300) {
    throw new Error(
      code === 401
        ? 'Ollama rejected the API key. Set FORGED_SETUP.OLLAMA_API_KEY in Code.gs and redeploy.'
        : 'Ollama error (' + code + '): ' + text.slice(0, 200)
    );
  }
  var parts = [];
  var usedModel = model;
  var lines = text.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var line = String(lines[i] || '').trim();
    if (!line) continue;
    try {
      var obj = JSON.parse(line);
      if (obj.model) usedModel = String(obj.model);
      if (obj.message && obj.message.content) {
        parts.push(String(obj.message.content));
      }
    } catch (parseErr) {
      /* skip bad NDJSON line */
    }
  }
  var content = parts.join('').trim();
  if (!content) {
    throw new Error('Empty response from Ollama.');
  }
  return { ok: true, message: content, model: usedModel, userId: user.userId };
}

// ─── Certificates ───────────────────────────────────────────────────────────

function ensureCertificatesSheet_() {
  var ss = getSpreadsheet_();
  var def = SHEETS.CERTIFICATES;
  var sheet = ss.getSheetByName(def.name);
  if (!sheet) {
    sheet = ss.insertSheet(def.name);
    sheet.getRange(1, 1, 1, def.headers.length).setValues([def.headers]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function findCertificateRow_(certificateId) {
  var sheet = ensureCertificatesSheet_();
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return null;
  var headers = data[0];
  var idCol = headers.indexOf('Certificate ID');
  if (idCol < 0) return null;
  for (var r = 1; r < data.length; r++) {
    if (String(data[r][idCol] || '').trim() === String(certificateId || '').trim()) {
      return { sheet: sheet, rowIndex: r + 1, headers: headers, row: data[r] };
    }
  }
  return null;
}

function certificateFromRow_(headers, row) {
  function col(name) {
    var i = headers.indexOf(name);
    return i >= 0 ? row[i] : '';
  }
  return {
    certificateId: String(col('Certificate ID')).trim(),
    userId: String(col('User ID')).trim(),
    studentName: String(col('Student Name')).trim(),
    courseId: String(col('Course ID')).trim(),
    courseTitle: String(col('Course Title')).trim(),
    courseSlug: String(col('Course Slug')).trim(),
    completionDate: String(col('Completion Date')).trim(),
    hoursCompleted: Number(col('Hours Completed')) || 0,
    examScore: col('Exam Score') !== '' ? Number(col('Exam Score')) : null,
    examTotal: col('Exam Total') !== '' ? Number(col('Exam Total')) : null,
    verificationUrl: String(col('Verification URL')).trim(),
    issuedAt: String(col('Issued At')).trim(),
    status: String(col('Status') || 'valid').trim() || 'valid',
    instructorSignature: String(col('Instructor Signature') || '').trim()
  };
}

function findCertificateByUserCourse_(userId, courseId) {
  var sheet = ensureCertificatesSheet_();
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return null;
  var headers = data[0];
  var uidCol = headers.indexOf('User ID');
  var cidCol = headers.indexOf('Course ID');
  if (uidCol < 0 || cidCol < 0) return null;
  for (var r = 1; r < data.length; r++) {
    if (
      String(data[r][uidCol] || '').trim() === String(userId).trim() &&
      String(data[r][cidCol] || '').trim() === String(courseId).trim()
    ) {
      return certificateFromRow_(headers, data[r]);
    }
  }
  return null;
}

function issueCertificate_(userId, defaultStudentName, raw) {
  ensureCertificatesSheet_();
  var courseId = trim_(raw.courseId, 80);
  if (!courseId) throw new Error('courseId is required.');

  var existing = findCertificateByUserCourse_(userId, courseId);
  if (existing && existing.status !== 'revoked') {
    return { ok: true, alreadyIssued: true, certificate: existing };
  }

  var certificateId = trim_(raw.certificateId, 64);
  if (!certificateId) {
    certificateId =
      'FE-CERT-' +
      Utilities.getUuid().replace(/-/g, '').toUpperCase().slice(0, 8) +
      '-' +
      Utilities.getUuid().slice(0, 19).toUpperCase();
  }

  var studentName = trim_(raw.studentName || defaultStudentName, 120);
  if (!studentName) throw new Error('Student name is required.');

  var now = nowIso_();
  var row = [
    certificateId,
    userId,
    studentName,
    courseId,
    trim_(raw.courseTitle, 160),
    trim_(raw.courseSlug, 80),
    trim_(raw.completionDate || now, 40),
    Number(raw.hoursCompleted) || 0,
    raw.examScore != null && raw.examScore !== '' ? Number(raw.examScore) : '',
    raw.examTotal != null && raw.examTotal !== '' ? Number(raw.examTotal) : '',
    trim_(raw.verificationUrl, 300),
    now,
    'valid',
    trim_(raw.instructorSignature || 'Chandler Hill', 80)
  ];

  var sheet = ensureCertificatesSheet_();
  sheet.appendRow(row);

  return {
    ok: true,
    alreadyIssued: false,
    certificate: certificateFromRow_(SHEETS.CERTIFICATES.headers, row)
  };
}

function listCertificates_(userId) {
  ensureCertificatesSheet_();
  var sheet = ensureCertificatesSheet_();
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return { ok: true, certificates: [] };
  var headers = data[0];
  var uidCol = headers.indexOf('User ID');
  var out = [];
  for (var r = 1; r < data.length; r++) {
    if (String(data[r][uidCol] || '').trim() === String(userId).trim()) {
      out.push(certificateFromRow_(headers, data[r]));
    }
  }
  out.sort(function (a, b) {
    return String(b.issuedAt).localeCompare(String(a.issuedAt));
  });
  return { ok: true, certificates: out };
}

function getCertificateForUser_(userId, certificateId) {
  var found = findCertificateRow_(certificateId);
  if (!found) return { ok: false, error: 'Certificate not found.' };
  var cert = certificateFromRow_(found.headers, found.row);
  if (cert.userId !== userId) {
    return { ok: false, error: 'Certificate not found.' };
  }
  return { ok: true, certificate: cert };
}

function verifyCertificatePublic_(certificateId) {
  var id = String(certificateId || '').trim();
  if (!id) return { ok: false, valid: false, error: 'Certificate ID required.' };
  var found = findCertificateRow_(id);
  if (!found) {
    return { ok: true, valid: false, error: 'Invalid certificate.' };
  }
  var cert = certificateFromRow_(found.headers, found.row);
  if (cert.status === 'revoked') {
    return { ok: true, valid: false, error: 'This certificate has been revoked.' };
  }
  return {
    ok: true,
    valid: true,
    certificate: {
      certificateId: cert.certificateId,
      studentName: cert.studentName,
      courseTitle: cert.courseTitle,
      completionDate: cert.completionDate,
      hoursCompleted: cert.hoursCompleted,
      issuedAt: cert.issuedAt,
      status: cert.status
    }
  };
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
