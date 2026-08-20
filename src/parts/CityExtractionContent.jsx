import { useEffect, useMemo, useState } from "react";
import CityBuilding3D from "../components/CityBuilding3D.jsx";

const GAME_NAME = "Untitled City Extraction";

const floorSequence = [
  { id: "city-briefing", mood: "outside", label: "Street" },
  { id: "building-entry", mood: "entry", label: "Entry Stairs" },
  { id: "core-loop", mood: "normal", label: "Floor 01" },
  { id: "about-the-game", mood: "normal", label: "Floor 02" },
  { id: "city-structure", mood: "smoky", label: "Floor 03" },
  { id: "phase-system", mood: "burning", label: "Floor 04" },
  { id: "buildings-and-zones", mood: "goo", label: "Floor 05" },
  { id: "objectives-and-loadouts", mood: "normal", label: "Floor 06" },
  { id: "enemy-design", mood: "blackout", label: "Floor 07" },
  { id: "extraction-system", mood: "burning", label: "Floor 08" },
  { id: "risk-reward", mood: "goo", label: "Floor 09" },
  { id: "emergent-stories", mood: "smoky", label: "Floor 10" },
  { id: "core-fantasy", mood: "roof", label: "Roof" }
];

const loopSteps = [
  "Deploy into a live urban district",
  "Scavenge streets and gather supplies",
  "Enter buildings to complete objectives",
  "Use interiors as temporary safe spaces",
  "Survive escalating city phases",
  "Decide whether to push deeper or extract",
  "Reach extraction before the city overwhelms the squad",
  "Return with resources, recovered gear, and survivors"
];

const cityContrasts = [
  {
    title: "Outside",
    signal: "Exposure",
    text: "The streets are open, loud, unpredictable, and attacked from rooftops, windows, alleys, tunnels, and collapsing infrastructure.",
    points: ["Roaming groups cross districts", "Noise pulls pressure", "Open routes get worse over time", "Late phases make streets brutal"]
  },
  {
    title: "Inside",
    signal: "Temporary Control",
    text: "Buildings create fewer angles, slower pacing, and room to regroup, but interiors can become trapped routes, infestations, and breach points.",
    points: ["Safe rooms are temporary", "Close quarters raise tension", "Barricades buy time", "Buildings can fail under pressure"]
  }
];

const phases = [
  {
    title: "Phase 1",
    name: "Initial Collapse",
    text: "Streets are manageable, enemy density is lower, buildings are relatively secure, and squads can explore and plan.",
    danger: "Low"
  },
  {
    title: "Phase 2",
    name: "Escalation",
    text: "Roaming groups increase, special infected appear, noise starts attracting swarms, and buildings become strategic positions.",
    danger: "Rising"
  },
  {
    title: "Phase 3",
    name: "Overrun",
    text: "Power failures spread, visibility drops, elites emerge, extracts relocate, and buildings become vulnerable to breaches.",
    danger: "High"
  },
  {
    title: "Phase 4",
    name: "Critical State",
    text: "The city is no longer meant to be controlled. Routes collapse, safe spaces fail, and extraction becomes chaos.",
    danger: "Extreme"
  }
];

const buildings = [
  {
    title: "Apartment Buildings",
    role: "Defensive Play",
    points: ["Narrow hallways", "Vertical combat", "Temporary safe rooms", "Civilian loot", "Hidden routes"]
  },
  {
    title: "Office Towers",
    role: "Scouting And Tech",
    points: ["Open interiors", "Long sightlines", "Glass exposure", "Rooftop access", "High-value tech loot"]
  },
  {
    title: "Hospitals",
    role: "Medical Risk",
    points: ["Maze-like layouts", "Medical resources", "Emergency generators", "Heavy infestation", "High reward"]
  },
  {
    title: "Shopping Centers",
    role: "Squad Fortress",
    points: ["Large interiors", "Multiple entrances", "Civilian caches", "Strong defense points", "Hard exits"]
  },
  {
    title: "Underground Systems",
    role: "Late Phase Routes",
    points: ["Subway tunnels", "Maintenance corridors", "Emergency shelters", "Quiet movement", "Claustrophobic threats"]
  }
];

const objectives = [
  "Recover research",
  "Activate emergency systems",
  "Rescue trapped civilians",
  "Secure medical supplies",
  "Restore communications",
  "Locate missing squads",
  "Gather outbreak samples",
  "Reactivate extraction infrastructure"
];

const specialists = [
  {
    title: "Recon Specialist",
    text: "Scanning, movement, information gathering, and rooftop traversal for squads that need to read the city before it closes in."
  },
  {
    title: "Interior Control Specialist",
    text: "Barricades, traps, defensive gadgets, and room control for turning a building into a temporary holdout."
  },
  {
    title: "Support Specialist",
    text: "Healing, ammunition, recovery tools, and reinforcement support that keep long runs from collapsing."
  },
  {
    title: "Breach Specialist",
    text: "Forced entry, explosive access, heavy weapons, and emergency escape options for contested interiors."
  }
];

const enemies = [
  {
    title: "Roamers",
    text: "Basic infected moving dynamically through streets. Individually manageable, dangerous in groups."
  },
  {
    title: "Breachers",
    text: "Enemies that break barricades, force entry, and destroy safe rooms so camping never stays comfortable."
  },
  {
    title: "Hunters",
    text: "Fast trackers that follow sound, movement, and extraction signals, punishing careless outdoor movement."
  },
  {
    title: "Burrowers",
    text: "Threats emerging through sewers, walls, and underground systems, turning interiors unstable."
  },
  {
    title: "Titans",
    text: "Late-phase disasters that turn districts into evacuation problems, often better avoided than fought."
  }
];

const extractionTypes = [
  {
    title: "Rooftop Helicopter",
    text: "Fast and direct, but loud enough to pull the district toward the landing zone."
  },
  {
    title: "Ground Vehicle",
    text: "Better for groups carrying heavy loot, but requires clearing streets first."
  },
  {
    title: "Underground Rail",
    text: "Quiet and sheltered, but slow and vulnerable to tunnel collapses."
  },
  {
    title: "Emergency Solo",
    text: "A last-resort escape for one player with limited gear when the squad is falling apart."
  }
];

const stories = [
  "A squad trapped inside a hospital during a city-wide blackout",
  "A failed extraction forcing players into the underground rail tunnels",
  "A teammate risking everything to recover another player's body",
  "A final rooftop defense during Phase 4",
  "Abandoning valuable loot just to survive"
];

function CitySection({ id, label, title, children, floorLabel }) {
  return (
    <section className="cex-section cex-floor" id={id}>
      <span className="cex-floorLabel">{floorLabel}</span>
      <div className="cex-sectionIntro">
        <p className="cex-kicker">{label}</p>
        <h2>{title}</h2>
      </div>
      <div className="cex-copy">{children}</div>
    </section>
  );
}

function CityExtractionContent() {
  const [activeSectionId, setActiveSectionId] = useState("city-briefing");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lowDetail, setLowDetail] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 760;
  });

  const activeFloor = useMemo(
    () => floorSequence.find((floor) => floor.id === activeSectionId) ?? floorSequence[0],
    [activeSectionId]
  );
  const activeFloorIndex = useMemo(
    () => Math.max(floorSequence.findIndex((floor) => floor.id === activeSectionId), 0),
    [activeSectionId]
  );

  useEffect(() => {
    let frame = 0;

    const updateScrollState = () => {
      frame = 0;
      const pageTop = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setScrollProgress(Math.min(Math.max(pageTop / maxScroll, 0), 1));

      const viewportFocus = window.innerHeight * 0.48;
      const sections = floorSequence
        .map((floor) => {
          const element = document.getElementById(floor.id);
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          return {
            id: floor.id,
            distance: Math.abs(rect.top + rect.height * 0.42 - viewportFocus)
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.distance - b.distance);

      if (sections[0]) setActiveSectionId(sections[0].id);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScrollState);
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateDetail = () => setLowDetail(mediaQuery.matches || window.innerWidth < 760);

    updateScrollState();
    updateDetail();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("resize", updateDetail);
    mediaQuery.addEventListener?.("change", updateDetail);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("resize", updateDetail);
      mediaQuery.removeEventListener?.("change", updateDetail);
    };
  }, []);

  return (
    <div className="cex-scrollExperience" data-active-floor={activeFloor.mood}>
      <div className="cex-sceneViewport" aria-hidden="true">
        <CityBuilding3D
          activeFloor={activeFloor.mood}
          activeFloorIndex={activeFloorIndex}
          scrollProgress={scrollProgress}
          lowDetail={lowDetail}
        />
        <div className="cex-sceneShade" />
        <div className="cex-sceneReadout">
          <span>{activeFloor.label}</span>
          <strong>{activeFloor.mood}</strong>
        </div>
      </div>

      <div className="cex-scrollPanels">
      <section className="cex-hero" id="city-briefing">
        <span className="cex-floorLabel">Street Level</span>
        <div className="cex-heroCopy">
          <p className="cex-kicker">PvE Extraction Survival In A Living Urban Collapse</p>
          <h1>{GAME_NAME}</h1>
          <p className="cex-brief">
            The streets are death. The buildings are temporary mercy. The city only gets
            worse the longer you stay.
          </p>
          <p>
            A co-op PvE extraction shooter set inside a massive quarantined city where
            every district, building, route, and extraction point changes as the outbreak escalates.
          </p>
        </div>

        <div className="cex-heroStack">
          <div className="cex-cityBoard" aria-label="City status">
            <div>
              <span>District</span>
              <strong>Quarantine Grid 7</strong>
            </div>
            <div>
              <span>City Phase</span>
              <strong className="cex-danger">Escalation</strong>
            </div>
            <div>
              <span>Street Exposure</span>
              <strong>Severe</strong>
            </div>
            <div>
              <span>Best Shelter</span>
              <strong>Hospital Annex</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="cex-entryTransition cex-floor" id="building-entry">
        <span className="cex-floorLabel">Entry Stairs</span>
        <div className="cex-sectionIntro">
          <p className="cex-kicker">Entry</p>
          <h2>Through The Gate, Up The Stairs, Into Temporary Safety</h2>
        </div>
        <div className="cex-copy">
          <p>
            The first scroll is the squad leaving the street behind. The fence, stairs, and doorway
            are not safe, but they mark the shift from exposed city movement into a building that can
            be held for a while.
          </p>
        </div>
      </section>

      <section className="cex-loop cex-floor" id="core-loop">
        <span className="cex-floorLabel">Floor 01</span>
        <div className="cex-sectionIntro">
          <p className="cex-kicker">Core Gameplay Loop</p>
          <h2>Stay Long Enough To Profit. Leave Before The City Wins.</h2>
        </div>
        <ol className="cex-stepGrid">
          {loopSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <CitySection id="about-the-game" label="About The Game" title="A City That Does Not Reset Around You" floorLabel="Floor 02">
        <p>
          {GAME_NAME} is built around one connected hostile environment rather than isolated missions.
          Players move through streets, alleys, rooftops, parking structures, apartments, offices,
          hospitals, shopping centers, and underground systems while deciding when to push deeper and
          when to extract.
        </p>
        <p>
          The structure reverses the usual extraction rhythm. The streets are exposure, buildings are
          temporary safety, and every phase makes the outside more hostile. You are not clearing a map.
          You are surviving a city that continuously evolves around you.
        </p>
      </CitySection>

      <section className="cex-contrast cex-floor" id="city-structure">
        <span className="cex-floorLabel">Floor 03</span>
        <div className="cex-sectionIntro">
          <p className="cex-kicker">The City</p>
          <h2>Outside Panic, Inside Control, Then Back Into Panic</h2>
        </div>
        <div className="cex-contrastGrid">
          {cityContrasts.map((area) => (
            <article className="cex-contrastCard" key={area.title}>
              <span>{area.signal}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <ul>
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cex-phases cex-floor" id="phase-system">
        <span className="cex-floorLabel">Floor 04</span>
        <div className="cex-sectionIntro">
          <p className="cex-kicker">Dynamic Phase System</p>
          <h2>No Circle. The World Itself Gets Worse.</h2>
        </div>
        <div className="cex-phaseGrid">
          {phases.map((phase) => (
            <article className="cex-phaseCard" key={phase.title}>
              <span>{phase.title}</span>
              <h3>{phase.name}</h3>
              <p>{phase.text}</p>
              <b>{phase.danger}</b>
            </article>
          ))}
        </div>
      </section>

      <section className="cex-buildings cex-floor" id="buildings-and-zones">
        <span className="cex-floorLabel">Floor 05</span>
        <div className="cex-sectionIntro">
          <p className="cex-kicker">Buildings And Zones</p>
          <h2>Every Structure Is A Tool, Shelter, Objective, Or Trap</h2>
        </div>
        <div className="cex-buildingGrid">
          {buildings.map((building) => (
            <article className="cex-buildingCard" key={building.title}>
              <p>{building.role}</p>
              <h3>{building.title}</h3>
              <ul>
                {building.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CitySection id="objectives-and-loadouts" label="Objectives And Specialists" title="Roles Come From Gear, Not Locked Heroes" floorLabel="Floor 06">
        <p>
          Objectives are integrated into the city rather than isolated as levels. Squads physically
          travel to recover research, restore systems, rescue civilians, gather samples, and reactivate
          extraction infrastructure.
        </p>
        <div className="cex-tagGrid">
          {objectives.map((objective) => (
            <span key={objective}>{objective}</span>
          ))}
        </div>
        <p>
          Specialists are flexible loadouts. Abilities shape playstyle, weapons stay shared, and the
          squad can adapt without being trapped inside rigid hero kits.
        </p>
        <div className="cex-specialistGrid">
          {specialists.map((specialist) => (
            <article key={specialist.title}>
              <h3>{specialist.title}</h3>
              <p>{specialist.text}</p>
            </article>
          ))}
        </div>
      </CitySection>

      <section className="cex-enemies cex-floor" id="enemy-design">
        <span className="cex-floorLabel">Floor 07</span>
        <div className="cex-sectionIntro">
          <p className="cex-kicker">Enemy Design</p>
          <h2>Pressure Is Behavior, Not Just Damage Scaling</h2>
        </div>
        <div className="cex-enemyGrid">
          {enemies.map((enemy) => (
            <article className="cex-enemyCard" key={enemy.title}>
              <h3>{enemy.title}</h3>
              <p>{enemy.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cex-extraction cex-floor" id="extraction-system">
        <span className="cex-floorLabel">Floor 08</span>
        <div className="cex-sectionIntro">
          <p className="cex-kicker">Extraction System</p>
          <h2>Extraction Is A Tactical Decision, Not A Guaranteed Ending</h2>
        </div>
        <p className="cex-wideCopy">
          Players can extract early, continue deeper, move between districts, or recover teammates
          before leaving. Extraction points shift based on phase state, weather, power systems, city
          control, and player actions.
        </p>
        <div className="cex-extractGrid">
          {extractionTypes.map((extract) => (
            <article key={extract.title}>
              <h3>{extract.title}</h3>
              <p>{extract.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CitySection id="risk-reward" label="Risk And Reward" title="Every Extra Objective Gives The City More Time" floorLabel="Floor 09">
        <p>
          The game constantly tempts players to stay longer. More objectives increase rewards, improve
          loot quality, and unlock deeper sectors, but they also escalate enemy pressure, destabilize
          safe zones, and make extraction harder.
        </p>
        <p>
          Replayability comes from dynamic phase systems, changing city conditions, flexible builds,
          unpredictable extractions, and squad decisions. No two runs are meant to feel identical.
        </p>
      </CitySection>

      <section className="cex-stories cex-floor" id="emergent-stories">
        <span className="cex-floorLabel">Floor 10</span>
        <div className="cex-sectionIntro">
          <p className="cex-kicker">Emergent Storytelling</p>
          <h2>The City Creates Stories Through Systems</h2>
        </div>
        <div className="cex-storyList">
          {stories.map((story) => (
            <span key={story}>{story}</span>
          ))}
        </div>
      </section>

      <section className="cex-final" id="core-fantasy">
        <span className="cex-floorLabel">Roof</span>
        <p className="cex-kicker">The Core Fantasy</p>
        <h2>This is not a power fantasy. This is knowing when to leave.</h2>
        <p>
          The atmosphere is urban isolation, mounting pressure, temporary safety, environmental
          collapse, desperation, and tactical survival. The city never feels conquered. Only survived.
        </p>
      </section>
      </div>
    </div>
  );
}

export default CityExtractionContent;
