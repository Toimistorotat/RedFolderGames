import { useEffect, useMemo, useState } from "react";
import { dossierCoverageMap, dossierGroups } from "./spaceExtractionDossierData.js";

function StatusBadge({ status }) {
  return <span className={`sxe-dossierStatus is-${status.toLowerCase()}`}>{status}</span>;
}

function SystemTable({ rows }) {
  return (
    <div className="sxe-dossierTable" role="table" aria-label="System comparison">
      {rows.map(([label, value]) => (
        <div className="sxe-dossierTableRow" role="row" key={`${label}-${value}`}>
          <strong role="cell">{label}</strong>
          <span role="cell">{value}</span>
        </div>
      ))}
    </div>
  );
}

function SystemTimeline({ steps }) {
  return (
    <ol className="sxe-dossierTimeline">
      {steps.map((step, index) => (
        <li key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{step}</p>
        </li>
      ))}
    </ol>
  );
}

function DossierChapter({ chapter }) {
  return (
    <article className="sxe-dossierChapter" id={chapter.id}>
      <header className="sxe-dossierChapterHeader">
        <span className="sxe-dossierChapterNumber">CH. {String(chapter.number).padStart(2, "0")}</span>
        <div>
          <h3>{chapter.title}</h3>
          <p>{chapter.summary}</p>
        </div>
        <StatusBadge status={chapter.status} />
      </header>

      {chapter.paragraphs?.map((paragraph) => <p className="sxe-dossierParagraph" key={paragraph}>{paragraph}</p>)}

      {chapter.points && (
        <ul className="sxe-dossierPoints">
          {chapter.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      )}

      {chapter.sections && (
        <div className="sxe-dossierSubgrid">
          {chapter.sections.map((section) => (
            <section key={section.title}>
              <h4>{section.title}</h4>
              <p>{section.text}</p>
              {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </section>
          ))}
        </div>
      )}

      {chapter.table && <SystemTable rows={chapter.table} />}
      {chapter.timeline && <SystemTimeline steps={chapter.timeline} />}

      {chapter.questions && (
        <div className="sxe-questionGrid">
          {chapter.questions.map(([question, note]) => (
            <article key={question}>
              <span>UNRESOLVED</span>
              <h4>{question}</h4>
              <p>{note}</p>
            </article>
          ))}
        </div>
      )}

      {chapter.callout && <blockquote className="sxe-dossierCallout">{chapter.callout}</blockquote>}
      <a className="sxe-backToIndex" href="#dossier-index">Back to dossier index ↑</a>
    </article>
  );
}

export default function SpaceExtractionDossier() {
  const [openGroups, setOpenGroups] = useState(() => new Set([dossierGroups[0].id]));
  const [query, setQuery] = useState("");

  const searchableGroups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return dossierGroups;
    return dossierGroups
      .map((group) => ({
        ...group,
        chapters: group.chapters.filter((chapter) =>
          [chapter.title, chapter.summary, chapter.status, chapter.number]
            .join(" ")
            .toLowerCase()
            .includes(needle)
        )
      }))
      .filter((group) => group.title.toLowerCase().includes(needle) || group.summary.toLowerCase().includes(needle) || group.chapters.length);
  }, [query]);

  const setGroup = (groupId, expanded) => {
    setOpenGroups((current) => {
      const next = new Set(current);
      if (expanded) next.add(groupId);
      else next.delete(groupId);
      return next;
    });
  };

  const jumpToChapter = (groupId, chapterId) => {
    setGroup(groupId, true);
    window.history.replaceState(null, "", `#${chapterId}`);
    window.setTimeout(() => document.getElementById(chapterId)?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  useEffect(() => {
    const openHashTarget = () => {
      const target = window.location.hash.slice(1);
      if (!target) return;
      const coverage = dossierCoverageMap.find((entry) => entry.id === target);
      const directGroup = dossierGroups.find((group) => group.id === target);
      const groupId = coverage?.groupId ?? directGroup?.id;
      if (groupId) setGroup(groupId, true);
    };
    openHashTarget();
    window.addEventListener("hashchange", openHashTarget);
    return () => window.removeEventListener("hashchange", openHashTarget);
  }, []);

  return (
    <section className="sxe-section sxe-dossierSection" id="complete-dossier">
      <div className="sxe-sectionHeading">
        <p className="sxe-kicker">Recovered Design Archive // Complete Concept Coverage</p>
        <h2>The Complete Station Dossier</h2>
        <p>The interactive briefing above shows the central fantasy. This archive preserves every current mechanic, example, design principle, optional direction, and unresolved question from the working design document.</p>
      </div>

      <div className="sxe-dossierConsole" id="dossier-index">
        <div className="sxe-dossierConsoleTop">
          <label>
            <span>SEARCH 38 CHAPTERS</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Try ‘bounty’, ‘cargo’, or ‘AI core’" />
          </label>
          <div className="sxe-dossierControls" aria-label="Dossier expansion controls">
            <button type="button" onClick={() => setOpenGroups(new Set(dossierGroups.map((group) => group.id)))}>Expand all</button>
            <button type="button" onClick={() => setOpenGroups(new Set())}>Collapse all</button>
          </div>
        </div>

        <nav className="sxe-dossierNav" aria-label="Dossier chapter navigator">
          {searchableGroups.map((group) => (
            <div key={group.id}>
              <a href={`#${group.id}`} onClick={() => setGroup(group.id, true)}><span>{group.index}</span>{group.title}</a>
              <p>{group.range}</p>
              {query && group.chapters.map((chapter) => (
                <button type="button" key={chapter.id} onClick={() => jumpToChapter(group.id, chapter.id)}>CH. {chapter.number} — {chapter.title}</button>
              ))}
            </div>
          ))}
          {searchableGroups.length === 0 && <p className="sxe-noResults">No chapter matches “{query}”. The archive itself remains unchanged below.</p>}
        </nav>
      </div>

      <div className="sxe-dossierGroups">
        {dossierGroups.map((group) => {
          const expanded = openGroups.has(group.id);
          const panelId = `${group.id}-panel`;
          return (
            <section className={`sxe-dossierGroup ${expanded ? "is-open" : ""}`} id={group.id} key={group.id}>
              <button className="sxe-dossierDisclosure" type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setGroup(group.id, !expanded)}>
                <span className="sxe-dossierGroupNumber">{group.index}</span>
                <span className="sxe-dossierGroupCopy">
                  <strong>{group.title}</strong>
                  <small>{group.range}</small>
                  <p>{group.summary}</p>
                </span>
                <span className="sxe-dossierToggle" aria-hidden="true">{expanded ? "−" : "+"}</span>
              </button>
              <div className="sxe-dossierBody" id={panelId} hidden={!expanded}>
                {group.chapters.map((chapter) => <DossierChapter chapter={chapter} key={chapter.id} />)}
              </div>
            </section>
          );
        })}
      </div>

      <p className="sxe-coverageStamp">COVERAGE VERIFIED // 38 OF 38 SOURCE CHAPTERS INDEXED // WORKING DESIGN STATUS PRESERVED</p>
    </section>
  );
}
