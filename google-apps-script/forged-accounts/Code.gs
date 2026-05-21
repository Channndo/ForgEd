/**
 * ForgEd — Accounts & persistence (Google Apps Script + Sheets)
 *
 * FIRST TIME:
 * 1. Run createForgEdDatabase() once in the editor (authorize when prompted).
 * 2. Script Properties → FORGED_SERVER_SECRET (openssl rand -hex 32)
 * 3. Deploy → Web app → Execute as: Me, Who has access: Anyone
 * 4. Copy Web App URL → ForgEd .env FORGED_WEB_APP_URL
 */

var PROP_SPREADSHEET_ID = 'FORGED_SPREADSHEET_ID';
var PROP_SERVER_SECRET = 'FORGED_SERVER_SECRET';

var CONFIG = {
  SPREADSHEET_TITLE: 'ForgEd Accounts Database',
  DEFAULT_SECRET: '',
  SESSION_DAYS: 30,
  RESET_HOURS: 24
};

var SHEETS = {
  USERS: {
    name: 'USERS',
    headers: [
      'User ID',
      'Username',
      'Email',
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
  }
};

// ─── Entry points ───────────────────────────────────────────────────────────

function doGet(e) {
  return jsonResponse_({ ok: true, service: 'ForgEd Accounts API', version: 1 });
}

function doPost(e) {
  try {
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

function createForgEdDatabase_() {
  var ss = SpreadsheetApp.create(CONFIG.SPREADSHEET_TITLE);
  var id = ss.getId();
  PropertiesService.getScriptProperties().setProperty(PROP_SPREADSHEET_ID, id);
  initializeSheetsInSpreadsheet_(ss);
  return {
    ok: true,
    spreadsheetId: id,
    spreadsheetUrl: ss.getUrl(),
    message: 'ForgEd database created. Set FORGED_SERVER_SECRET in Script Properties and deploy as Web App.'
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

function registerUser_(data) {
  var email = normalizeEmail_(data.email);
  var username = normalizeUsername_(data.username);
  var password = String(data.password || '');
  var displayName = String(data.displayName || data.display_name || username).trim();

  if (!email || !isValidEmail_(email)) {
    throw new Error('Valid email is required.');
  }
  if (!username || username.length < 3) {
    throw new Error('Username must be at least 3 characters.');
  }
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters.');
  }

  if (findUserByEmail_(email)) {
    throw new Error('An account with this email already exists.');
  }
  if (findUserByUsername_(username)) {
    throw new Error('Username is already taken.');
  }

  var userId = 'FE-' + Utilities.getUuid().slice(0, 12);
  var salt = Utilities.getUuid();
  var hash = hashPassword_(password, salt);
  var now = nowIso_();

  appendUserRow_({
    userId: userId,
    username: username,
    email: email,
    passwordHash: hash,
    salt: salt,
    xp: 0,
    level: 1,
    streak: 0,
    activePaths: '',
    certifications: '',
    createdDate: now,
    lastLogin: now,
    displayName: displayName
  });

  var session = createSession_(userId, email);
  return {
    ok: true,
    accessToken: session.token,
    user: publicUser_(session.user)
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
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty(PROP_SPREADSHEET_ID);
  if (!id) {
    throw new Error('Database not initialized. Run createForgEdDatabase() first.');
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

function appendUserRow_(u) {
  var sheet = getSheet_(SHEETS.USERS.name);
  sheet.appendRow([
    u.userId,
    u.username,
    u.email,
    u.passwordHash,
    u.salt,
    u.xp,
    u.level,
    u.streak,
    u.activePaths,
    u.certifications,
    u.createdDate,
    u.lastLogin,
    u.displayName,
    '',
    '',
    '',
    ''
  ]);
}

function userFromRow_(row, rowIndex) {
  return {
    rowIndex: rowIndex,
    userId: String(row[0] || ''),
    username: String(row[1] || ''),
    email: String(row[2] || ''),
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
  var rows = sheet.getRange(2, 1, last, SHEETS.USERS.headers.length).getValues();
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

function updateUserFields_(rowIndex, fields) {
  var sheet = getSheet_(SHEETS.USERS.name);
  var col = {
    xp: 6,
    level: 7,
    streak: 8,
    activePaths: 9,
    certifications: 10,
    lastLogin: 12,
    displayName: 13,
    sessionToken: 14,
    sessionExpires: 15,
    salt: 5,
    passwordHash: 4,
    resetToken: 16,
    resetExpires: 17
  };
  for (var key in fields) {
    if (fields.hasOwnProperty(key) && col[key]) {
      sheet.getRange(rowIndex, col[key]).setValue(fields[key]);
    }
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
  var rows = sheet.getRange(2, 1, last - 1, 8).getValues();
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
    var rows = sheet.getRange(2, 1, last - 1, 2).getValues();
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
    var rows = sheet.getRange(2, 1, last - 1, 2).getValues();
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
  var rows = sheet.getRange(2, 1, last - 1, 7).getValues();
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
    var rows = sheet.getRange(2, 1, last - 1, 2).getValues();
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
    var rows = sheet.getRange(2, 1, last - 1, 2).getValues();
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
  var rows = sheet.getRange(2, 1, last - 1, 4).getValues();
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
  return {
    id: user.userId,
    userId: user.userId,
    email: user.email,
    username: user.username,
    displayName: user.displayName || user.username,
    xp: user.xp,
    level: user.level,
    streak: user.streak,
    activePaths: user.activePaths,
    certifications: user.certifications,
    createdDate: user.createdDate,
    lastLogin: user.lastLogin
  };
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
  return (
    PropertiesService.getScriptProperties().getProperty(PROP_SERVER_SECRET) ||
    CONFIG.DEFAULT_SECRET ||
    ''
  );
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
