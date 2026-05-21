"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Eye,
  FlaskConical,
  Lightbulb,
  ListOrdered,
  Lock,
} from "lucide-react";
import type { PathLab } from "@/lib/paths/learningPaths";
import {
  EXCEL_LAB_SCENARIOS,
  type ExcelLabScenario,
} from "@/lib/labs/excelScenarios";
import {
  canEarnLabXp,
  completeLabWithXp,
  getLabState,
  markLabSolutionViewed,
} from "@/lib/labs/labProgress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Button } from "@/components/ui/Button";

function parseNum(raw: string): number | null {
  const n = Number(String(raw).replace(/[$,]/g, "").trim());
  return Number.isFinite(n) ? n : null;
}

function checkAnswers(
  scenario: ExcelLabScenario,
  values: Record<string, string>
): { ok: boolean; wrong: string[] } {
  const tol = scenario.tolerance ?? 0.5;
  const wrong: string[] = [];
  for (const row of scenario.rows) {
    const expected = scenario.answers[row.key];
    if (expected == null) continue;
    const entered = parseNum(values[row.key] ?? "");
    if (entered === null || Math.abs(entered - expected) > tol) {
      wrong.push(row.label);
    }
  }
  return { ok: wrong.length === 0, wrong };
}

export function ExcelLab({
  pathId,
  lab,
}: {
  pathId: string;
  lab: PathLab;
}) {
  const { progress, refresh } = useProgress();
  const scenario = EXCEL_LAB_SCENARIOS[lab.type];
  const labState = getLabState(progress, lab.id);
  const xpLocked = labState.solutionViewed || labState.retryRequired;
  const canEarn = canEarnLabXp(progress, lab.id);
  const done = labState.completed;

  const [values, setValues] = useState<Record<string, string>>({});
  const [hintIndex, setHintIndex] = useState(0);
  const [showWalkthrough, setShowWalkthrough] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const validation = useMemo(
    () => (scenario ? checkAnswers(scenario, values) : { ok: false, wrong: [] }),
    [scenario, values]
  );

  if (!scenario) {
    return (
      <p className="text-sm text-[var(--muted)]">Excel scenario not configured for this lab.</p>
    );
  }

  function revealSolution() {
    if (showSolution) return;
    setShowSolution(true);
    markLabSolutionViewed(lab.id);
    setFeedback(
      "Full solution revealed. XP is locked until you complete the worksheet independently without viewing the solution again."
    );
    refresh();
  }

  function handleCheck() {
    setChecked(true);
    if (validation.ok && canEarn) {
      completeLabWithXp(pathId, lab.id, lab.xpReward);
      setFeedback(`Correct — +${lab.xpReward} XP earned.`);
      refresh();
    } else if (validation.ok && xpLocked) {
      setFeedback(
        "Your numbers look right. Complete the lab again without using the full solution to earn XP."
      );
    } else {
      setFeedback(
        `Review: ${validation.wrong.slice(0, 3).join(", ")}${validation.wrong.length > 3 ? "…" : ""}`
      );
    }
  }

  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-[var(--gold)]">
        <FlaskConical className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">Excel lab</span>
        {done && <CheckCircle2 className="ml-auto h-4 w-4 text-emerald-400" />}
        {xpLocked && !done && <Lock className="ml-auto h-4 w-4 text-amber-400" />}
      </div>
      <h4 className="mt-2 font-medium text-[var(--silver)]">{lab.title}</h4>
      <p className="mt-1 text-sm text-[var(--muted)]">{scenario.instructions}</p>

      {xpLocked && (
        <p className="mt-3 flex items-start gap-2 rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2 text-xs text-amber-200/90">
          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          Solution was viewed — redo the worksheet independently to unlock XP.
        </p>
      )}

      <div className="mt-4 overflow-x-auto rounded-lg border border-white/[0.08]">
        <table className="w-full min-w-[280px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/[0.08] bg-black/40">
              <th className="px-3 py-2 text-left font-medium text-[var(--muted)]">A</th>
              <th className="px-3 py-2 text-left font-medium text-[var(--gold)]">B</th>
            </tr>
          </thead>
          <tbody>
            {scenario.rows.map((row, i) => (
              <tr key={row.key} className="border-b border-white/[0.04]">
                <td className="px-3 py-2 text-[var(--silver)]">
                  {i + 1}. {row.label}
                </td>
                <td className="px-3 py-2">
                  <input
                    type="text"
                    inputMode="decimal"
                    disabled={done}
                    placeholder={row.hint ? `e.g. ${row.hint}` : "0"}
                    value={values[row.key] ?? ""}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, [row.key]: e.target.value }))
                    }
                    className="w-full rounded-md border border-white/[0.1] bg-black/50 px-2 py-1.5 text-[var(--foreground)] outline-none focus:border-[var(--gold)]/40"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setHintIndex((i) => Math.min(i + 1, scenario.hints.length))}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] px-3 py-1.5 text-xs text-[var(--muted)] hover:border-[var(--gold)]/30 hover:text-[var(--silver)]"
        >
          <Lightbulb className="h-3.5 w-3.5" />
          Hint ({hintIndex}/{scenario.hints.length})
        </button>
        <button
          type="button"
          onClick={() => setShowWalkthrough((s) => !s)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] px-3 py-1.5 text-xs text-[var(--muted)] hover:border-[var(--gold)]/30"
        >
          <ListOrdered className="h-3.5 w-3.5" />
          Walkthrough
        </button>
        <button
          type="button"
          onClick={revealSolution}
          disabled={showSolution}
          className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 px-3 py-1.5 text-xs text-amber-200/90 hover:bg-amber-500/10"
        >
          <Eye className="h-3.5 w-3.5" />
          Full solution
        </button>
      </div>

      {hintIndex > 0 && (
        <p className="mt-3 text-xs text-[var(--muted)]">
          {scenario.hints[hintIndex - 1]}
        </p>
      )}

      {showWalkthrough && (
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-xs text-[var(--muted)]">
          {scenario.walkthrough.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      )}

      {showSolution && (
        <div className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-[var(--silver)]">
          {scenario.solution.map((s) => (
            <p key={s.label}>
              {s.label}: <span className="text-[var(--gold)]">{s.value}</span>
            </p>
          ))}
        </div>
      )}

      {feedback && (
        <p
          className={`mt-3 text-sm ${validation.ok && done ? "text-emerald-400" : "text-[var(--muted)]"}`}
        >
          {feedback}
        </p>
      )}

      {!done && (
        <Button className="mt-4 w-full sm:w-auto" onClick={handleCheck}>
          {checked ? "Check again" : "Check worksheet"}
        </Button>
      )}
    </div>
  );
}
