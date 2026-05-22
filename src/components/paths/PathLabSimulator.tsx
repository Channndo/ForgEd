"use client";

import { useState } from "react";
import { CheckCircle2, FlaskConical, XCircle } from "lucide-react";
import type { PathLab } from "@/lib/paths/learningPaths";
import { completePathLab } from "@/lib/paths/pathProgress";
import { canEarnLabXp } from "@/lib/labs/labProgress";
import { EXCEL_LAB_TYPES } from "@/lib/labs/excelScenarios";
import { ExcelLab } from "@/components/labs/ExcelLab";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Button } from "@/components/ui/Button";

const LAB_SCENARIOS: Record<
  string,
  { prompt: string; choices: { label: string; correct: boolean; feedback: string }[] }
> = {
  "prompt-engineering": {
    prompt:
      "You need a weekly status email from messy bullet notes. Which prompt structure is strongest?",
    choices: [
      {
        label: "Role + context + output format + quality bar",
        correct: true,
        feedback: "Clear role and format constraints produce consistent professional drafts.",
      },
      {
        label: "Write something good about my week",
        correct: false,
        feedback: "Vague prompts produce vague outputs — add structure and criteria.",
      },
      {
        label: "Copy last week's email exactly",
        correct: false,
        feedback: "Templates help, but you still need context and updates for this week.",
      },
    ],
  },
  "objection-roleplay": {
    prompt: 'Customer: "Your price is too high." What is the best first response?',
    choices: [
      {
        label: "Ask what outcome they need and which part of value matters most",
        correct: true,
        feedback: "Discovery before defense keeps trust and surfaces real objections.",
      },
      {
        label: "Offer 30% off immediately",
        correct: false,
        feedback: "Discounting before understanding value trains buyers to push on price.",
      },
      {
        label: "Say competitors are worse",
        correct: false,
        feedback: "Attacking competitors erodes credibility — reframe around their goals.",
      },
    ],
  },
  "phishing-detection": {
    prompt:
      "Email: URGENT — payroll update required, link to bit.ly/payroll-fix. What's the top red flag?",
    choices: [
      {
        label: "Unexpected urgency + unfamiliar shortened link domain",
        correct: true,
        feedback: "Urgency and look-alike links are classic phishing patterns — report it.",
      },
      {
        label: "Message is too short",
        correct: false,
        feedback: "Length alone isn't decisive — domain, sender, and intent matter more.",
      },
      {
        label: "No signature block",
        correct: false,
        feedback: "Missing signatures happen on legitimate mail too — prioritize link and sender.",
      },
    ],
  },
  "budget-planner": {
    prompt: "Monthly take-home $3,200. Rent $1,100, debt $400, savings goal $300. What's left for variable spend?",
    choices: [
      {
        label: "$1,400 for food, transport, and discretionary",
        correct: true,
        feedback: "3,200 − 1,100 − 400 − 300 = 1,400 — track categories inside that cap.",
      },
      {
        label: "$2,800 — save the rest later",
        correct: false,
        feedback: "Ignoring fixed costs breaks budgets — pay obligations first.",
      },
      {
        label: "$0 — skip savings when tight",
        correct: false,
        feedback: "Even small savings habits build resilience — adjust variable spend instead.",
      },
    ],
  },
  "service-interaction": {
    prompt:
      "Customer is upset about a 2-day delay on brakes. Best opening line?",
    choices: [
      {
        label: "Acknowledge delay, explain status, give realistic completion time",
        correct: true,
        feedback: "Transparency and empathy reduce escalation before discussing cost.",
      },
      {
        label: "Blame the parts department immediately",
        correct: false,
        feedback: "External blame sounds defensive — own communication and next steps.",
      },
      {
        label: "Offer unrelated maintenance packages first",
        correct: false,
        feedback: "Solve the stated problem before additional recommendations.",
      },
    ],
  },
};

const DEFAULT_SCENARIO = {
  prompt: "Apply the course concepts to this workplace scenario. Choose the best professional response.",
  choices: [
    {
      label: "Use the structured approach from the textbook",
      correct: true,
      feedback: "Structured, evidence-based responses align with path learning goals.",
    },
    {
      label: "Skip process and improvise",
      correct: false,
      feedback: "Improvisation without framework increases risk — follow the path method.",
    },
    {
      label: "Defer without communication",
      correct: false,
      feedback: "Professional communication is part of mastery — document and follow up.",
    },
  ],
};

export function PathLabSimulator({
  pathId,
  lab,
  completed,
}: {
  pathId: string;
  lab: PathLab;
  completed: boolean;
}) {
  const { refresh, progress } = useProgress();

  if (EXCEL_LAB_TYPES.has(lab.type)) {
    return <ExcelLab pathId={pathId} lab={lab} />;
  }
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(completed);
  const scenario = LAB_SCENARIOS[lab.type] ?? DEFAULT_SCENARIO;

  function handleSubmit() {
    if (selected === null) return;
    const choice = scenario.choices[selected];
    if (choice.correct && !done && canEarnLabXp(progress, lab.id)) {
      completePathLab(pathId, lab.id, lab.xpReward);
      setDone(true);
      refresh();
    }
  }

  const choice = selected !== null ? scenario.choices[selected] : null;

  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-[var(--gold)]">
        <FlaskConical className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">Lab</span>
        {done && <CheckCircle2 className="ml-auto h-4 w-4 text-emerald-400" />}
      </div>
      <h4 className="mt-2 font-medium text-[var(--silver)]">{lab.title}</h4>
      <p className="mt-1 text-sm text-[var(--muted)]">{lab.description}</p>
      <p className="mt-4 text-sm text-[var(--foreground)]">{scenario.prompt}</p>
      <div className="mt-3 space-y-2">
        {scenario.choices.map((c, i) => (
          <button
            key={c.label}
            type="button"
            disabled={done}
            onClick={() => setSelected(i)}
            className={`w-full rounded-lg border px-3 py-2.5 text-left text-sm transition ${
              selected === i
                ? "border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--silver)]"
                : "border-white/[0.06] text-[var(--muted)] hover:border-white/15"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      {choice && (
        <p
          className={`mt-3 flex items-start gap-2 text-sm ${choice.correct ? "text-emerald-400" : "text-amber-400"}`}
        >
          {choice.correct ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          {choice.feedback}
          {done && choice.correct && (
            <span className="ml-1 text-[var(--gold)]">+{lab.xpReward} XP</span>
          )}
        </p>
      )}
      {!done && (
        <Button
          className="mt-4 w-full sm:w-auto"
          disabled={selected === null}
          onClick={handleSubmit}
        >
          Submit lab
        </Button>
      )}
    </div>
  );
}
