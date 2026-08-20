import { useMemo, useState } from "react";
import CommentsSection from "../components/CommentsSection.jsx";
import RaidIsland3D from "../components/RaidIsland3D.jsx";
import Footer from "../parts/Footer.jsx";
import Header from "../parts/Header.jsx";
import { commentSections, dossierSections, zones } from "../parts/UntitledExtractionContent.jsx";
import "../css/UntitledExtraction.css";

function UntitledExtractionPage({ comments, addComment }) {
  const [activeZone, setActiveZone] = useState("weather");
  const [lowDetail, setLowDetail] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 740;
  });
  const [rotateSignal, setRotateSignal] = useState({ amount: 0, tick: 0 });

  const active = useMemo(
    () => zones.find((zone) => zone.id === activeZone) ?? zones[0],
    [activeZone]
  );

  const rotateBy = (amount) => {
    setRotateSignal((previous) => ({ amount, tick: previous.tick + 1 }));
  };

  return (
    <main className="ues-page" data-low-detail={lowDetail ? "true" : "false"}>
      <Header />

      <div className="ues-commentsDock">
        <CommentsSection
          comments={comments}
          addComment={addComment}
          pageId="untitled"
          pageLabel="Untitled Extraction"
          sectionOptions={commentSections}
        />
      </div>

      <section className="ues-raidShell" id="raid-island">
        <div className="ues-depthGrid" />

        <div className="ues-mapViewport">
          <RaidIsland3D
            zones={zones}
            activeZone={activeZone}
            onZoneChange={setActiveZone}
            lowDetail={lowDetail}
            rotateSignal={rotateSignal}
          />
        </div>

        <aside className="ues-titlePanel">
          <p className="ues-kicker">PvEvP Extraction Shooter</p>
          <h1>Untitled Extraction Shooter</h1>
          <p>
            No match timer. No revive spam. No forced circle. The island creates pressure
            through weather, bodies, physical loot, limited reinforcements, PvE, and trust.
          </p>
          <div className="ues-rotateControls">
            <button type="button" onClick={() => rotateBy(-45)}>Rotate Left</button>
            <button type="button" onClick={() => rotateBy(45)}>Rotate Right</button>
          </div>
          <label className="ues-detailToggle">
            <input
              type="checkbox"
              checked={lowDetail}
              onChange={(event) => setLowDetail(event.target.checked)}
            />
            Low detail
          </label>
          <p className="ues-titleAside">
            Drag the island or pick a zone. Each marker is tied to a real mechanic from the markdown.
            if you know anyone good at making 3d maps please point them to me, this is a lot of work and I want it to look nice.
          </p>
        </aside>

        <aside className="ues-infoPanel" aria-live="polite">
          <span>{active.signal}</span>
          <h2>{active.title}</h2>
          <p>{active.text}</p>
          <ul>
            {active.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="ues-noteGrid">
            <span>World pressure replaces a forced countdown.</span>
            <span>Physical objects make choices readable to enemies.</span>
            <span>Squads create roles through gear, not locked classes.</span>
          </div>
        </aside>

        <nav className="ues-zoneSelector" aria-label="Raid island zones">
          {zones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              className={zone.id === activeZone ? "is-active" : ""}
              onClick={() => setActiveZone(zone.id)}
            >
              {zone.label}
            </button>
          ))}
        </nav>
      </section>

      <section className="ues-dossier" id="raid-systems-dossier">
        <div className="ues-dossierHeader">
          <p className="ues-kicker">Full Raid Systems Dossier</p>
          <h2>Markdown Mechanics, Rebuilt As Playable Systems</h2>
          <p>
            The island is the quick read. This section keeps the markdown's actual flow and explains
            what the player does, what risk the system creates, and which example proves the idea.
          </p>
        </div>

        <div className="ues-dossierGrid">
          {dossierSections.map((section) => (
            <section
              key={section.title}
              className={`ues-dossierCard ${section.featured ? "is-featured" : ""}`}
              id={section.title.toLowerCase().replaceAll(" ", "-")}
            >
              <span>{section.label}</span>
              <h3>{section.title}</h3>
              <p>{section.intro}</p>
              <div className="ues-mechanicRows">
                {section.rows.map((row) => (
                  <div className="ues-mechanicRow" key={row.mechanic}>
                    <div>
                      <b>Mechanic</b>
                      <p>{row.mechanic}</p>
                    </div>
                    <div>
                      <b>Player Use</b>
                      <p>{row.use}</p>
                    </div>
                    <div>
                      <b>Risk</b>
                      <p>{row.risk}</p>
                    </div>
                    <div>
                      <b>Example</b>
                      <p>{row.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <div className="ues-footerWrap">
        <Footer />
      </div>
    </main>
  );
}

export default UntitledExtractionPage;
