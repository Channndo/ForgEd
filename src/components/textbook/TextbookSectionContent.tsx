import type { TextbookSection } from "@/lib/courses/textbook/types";

function isTimelineSection(section: TextbookSection): boolean {
  return (
    section.id.includes("timeline") ||
    section.title.toLowerCase().includes("timeline")
  );
}

function parseTimelineItem(item: string): { year: string; text: string } {
  const dash = item.indexOf(" — ");
  if (dash > 0) {
    return { year: item.slice(0, dash).trim(), text: item.slice(dash + 3).trim() };
  }
  const hyphen = item.indexOf(" - ");
  if (hyphen > 0) {
    return { year: item.slice(0, hyphen).trim(), text: item.slice(hyphen + 3).trim() };
  }
  return { year: "", text: item };
}

export function TextbookSectionContent({
  section,
  leadDropCap = false,
}: {
  section: TextbookSection;
  leadDropCap?: boolean;
}) {
  const showTimeline = isTimelineSection(section) && section.bulletPoints;

  return (
    <article id={section.id} className="scroll-mt-32">
      <div className="flex items-center gap-4">
        <div className="textbook-section-rule shrink-0" />
        <h3 className="font-serif text-lg font-semibold tracking-tight text-[var(--silver)]">
          {section.title}
        </h3>
      </div>

      <div className="mt-6 space-y-5">
        {section.paragraphs.map((p, i) => (
          <p
            key={`${section.id}-p-${i}`}
            className={`textbook-prose max-w-none text-[var(--foreground)]/90 ${leadDropCap && i === 0 ? "textbook-dropcap" : ""}`}
          >
            {p}
          </p>
        ))}
      </div>

      {section.bulletPoints && section.bulletPoints.length > 0 && !showTimeline && (
        <div className="mt-6 textbook-callout">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]/80">
            Key points
          </p>
          <ul className="textbook-objectives mt-3 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-[var(--muted)]">
            {section.bulletPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {showTimeline && section.bulletPoints && (
        <div className="mt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Historical timeline
          </p>
          <ol className="textbook-timeline mt-5 space-y-0">
            {section.bulletPoints.map((item) => {
              const { year, text } = parseTimelineItem(item);
              return (
                <li key={item} className="textbook-timeline-item">
                  {year ? (
                    <p className="font-mono text-xs font-medium text-[var(--gold)]/90">
                      {year}
                    </p>
                  ) : null}
                  <p className="mt-0.5 text-[15px] leading-relaxed text-[var(--muted)]">
                    {text || item}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {section.caseStudies && section.caseStudies.length > 0 && (
        <div className="mt-8 overflow-x-auto rounded-xl border border-[var(--gold)]/20 bg-[var(--gold)]/[0.04]">
          <table className="textbook-law-table w-full text-left text-sm">
            <caption className="caption-bottom pt-3 text-[var(--muted)]">
              Illustrative case studies (general education — not legal advice)
            </caption>
            <thead>
              <tr className="border-b border-white/10 text-[var(--muted)]">
                <th className="px-4 py-3 font-medium">Case</th>
                <th className="px-4 py-3 font-medium">Year</th>
                <th className="px-4 py-3 font-medium">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {section.caseStudies.map((c) => (
                <tr key={c.name} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 font-medium text-[var(--silver)]">{c.name}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{c.year ?? "—"}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{c.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.laws && section.laws.length > 0 && (
        <div className="mt-8 overflow-x-auto rounded-xl border border-[var(--gold)]/15 bg-black/30">
          <table className="textbook-law-table w-full text-left text-sm">
            <caption className="caption-bottom pt-3 text-[var(--muted)]">
              Statutes, standards, and frameworks
            </caption>
            <thead>
              <tr className="border-b border-white/10 text-[var(--muted)]">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Year</th>
                <th className="px-4 py-3 font-medium">Summary</th>
              </tr>
            </thead>
            <tbody>
              {section.laws.map((law) => (
                <tr key={law.name} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 font-medium text-[var(--silver)]">{law.name}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{law.year ?? "—"}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{law.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.citations && section.citations.length > 0 && (
        <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Further reading
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {section.citations.map((c) => (
              <li key={c.source}>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--gold)] hover:underline"
                  >
                    {c.source}
                  </a>
                ) : (
                  <span className="text-[var(--silver)]">{c.source}</span>
                )}
                {c.note ? <span className="text-[var(--muted)]"> — {c.note}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
