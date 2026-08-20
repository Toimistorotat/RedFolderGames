/* The page and its curated dossier data intentionally live together for easy iteration. */
/* eslint-disable react-refresh/only-export-components */
import { useMemo, useState } from "react";
import SpaceExtractionDossier from "./SpaceExtractionDossier.jsx";

export const shipModules = [
  { id: "airlock", label: "Airlock", code: "A-01", title: "Insertion And Exit", text: "The airlock is where the crew enters the station and where every return becomes a question: secure the ship now, or go back inside?", tradeoff: "Fast access keeps the raid moving, but an open airlock is an invitation." },
  { id: "staging", label: "Cargo Staging", code: "C-02", title: "The Awkward Middle", text: "Large cargo, bodies, sleds, and vehicles wait here before they are secured inside the ship.", tradeoff: "More staging room makes recovery easier but consumes space that could protect the crew." },
  { id: "hold", label: "Cargo Hold", code: "C-07", title: "Physical Storage", text: "Cargo occupies real volume. Valuable machines cannot be reduced to a weightless inventory icon.", tradeoff: "Storage protects value, but every module installed here is space unavailable for medicine or security." },
  { id: "medical", label: "Medical Room", code: "M-03", title: "Recovery Under Pressure", text: "Downed teammates can be stabilized, treated, and brought back into the raid instead of disappearing into a menu.", tradeoff: "Medical capacity saves crews, but it competes directly with cargo and defensive systems." },
  { id: "bridge", label: "Command Room", code: "B-01", title: "Move The Ship", text: "The bridge controls remote relocation, docking calls, route planning, and emergency autonomous return.", tradeoff: "Calling the ship solves distance while telling everyone nearby where the next fight may be." },
  { id: "under-hull", label: "Under-Hull Storage", code: "U-04", title: "The Hidden Load", text: "Crates, sleds, and specialized cargo can be moved beneath the hull with lifts or crane upgrades.", tradeoff: "Under-hull capacity expands the operation but makes loading slower and more exposed." },
  { id: "security", label: "Security Doors", code: "S-09", title: "A Ship Worth Defending", text: "Locks, cameras, alarms, and ownership systems protect the ship from burglary and attempted takeover.", tradeoff: "Hardening the ship consumes interior volume and still cannot make it invisible." },
  { id: "vehicle", label: "Vehicle Bay", code: "V-05", title: "Tools With Wheels", text: "Small utility vehicles move people and cargo through long station routes without turning the game into vehicle combat.", tradeoff: "A vehicle saves time and stamina, but it needs storage, access, and a route wide enough to use it." }
];

export const districts = [
  { id: "medical", label: "Medical", power: "Partial", access: "Service route", security: "Low", loot: "Medicine / recovery", threat: "Contained", route: "Clinic lifts" },
  { id: "commercial", label: "Commercial", power: "Unstable", access: "Public corridors", security: "None", loot: "Consumer tech", threat: "Unknown", route: "Transit ring" },
  { id: "habitation", label: "Habitation", power: "Dark", access: "Locked clusters", security: "Dormant", loot: "Personal stores", threat: "Biological", route: "Maintenance shafts" },
  { id: "industrial", label: "Industrial", power: "Online", access: "Heavy doors", security: "Active", loot: "Machinery / parts", threat: "High", route: "Cargo tram" },
  { id: "cargo", label: "Cargo + Logistics", power: "Partial", access: "Manifest locks", security: "Watching", loot: "Large cargo", threat: "Roving", route: "Sled lanes" },
  { id: "security", label: "Security", power: "Online", access: "Restricted", security: "Responding", loot: "Weapons / access", threat: "Severe", route: "Armored lifts" },
  { id: "research", label: "Research", power: "Unknown", access: "Sealed", security: "Quarantine", loot: "Prototype tech", threat: "Unclassified", route: "Specimen tunnels" },
  { id: "engineering", label: "Engineering", power: "Surging", access: "Cut-through", security: "Machines", loot: "Systems / tools", threat: "Environmental", route: "Power conduits" },
  { id: "power", label: "Power", power: "Critical", access: "Manual override", security: "Automated", loot: "Fuel / cells", threat: "Electrical", route: "Cable galleries" },
  { id: "docking", label: "Docking Rings", power: "Variable", access: "Traffic control", security: "Visible", loot: "Ships / cargo", threat: "Player crews", route: "Outer ring" }
];

export const stationStates = [
  { id: "normal", label: "Normal Power", signal: "STATION STABLE", color: "cyan", text: "Lights, lifts, and service routes behave close to their original purpose. The station is quiet enough to learn." },
  { id: "failure", label: "Power Failure", signal: "GRID FRACTURE", color: "amber", text: "Doors stop agreeing with the map, elevators fail, and maintenance routes become more valuable than public corridors." },
  { id: "security", label: "Security Response", signal: "AUTOMATED RESPONSE", color: "red", text: "The station has noticed a pattern of intrusion. Cameras wake, bulkheads close, and old security units begin moving." },
  { id: "breach", label: "Containment Breach", signal: "QUARANTINE FAILED", color: "violet", text: "A sealed district is no longer predictable. Routes open for the wrong reasons and biological pressure moves through the station." },
  { id: "altered", label: "Player-Altered", signal: "HUMAN INTERFERENCE", color: "green", text: "Power reroutes, cargo disappears, doors are cut, and the station begins to record what the crews have changed." }
];

export const logistics = [
  { title: "Cargo Sled", text: "A sled turns inventory into a physical problem. It carries more than a person can, but it is noisy, awkward, and vulnerable in narrow routes." },
  { title: "Large Cargo", text: "Industrial machines and sealed containers need access tools, staging space, enough hands, and a ship configured to receive them." },
  { title: "Bodies", text: "A downed teammate or enemy body can be dragged, carried, hidden, traded, or extracted. Death creates a new objective." },
  { title: "Utility Vehicles", text: "Small vehicles shorten long station routes and move weight, but they need a viable path and compete with other ship modules for storage." },
  { title: "Cargo Staging", text: "The route between finding an object and securing it is where most plans become dangerous. Other crews can read what is being moved." },
  { title: "Ship Relocation", text: "Calling the ship brings extraction closer, but the moving vessel exposes a destination and may turn the docking bay into a defense event." }
];

export const encounters = [
  { label: "ENGAGE", text: "Take the fight when the station, the cargo, or the bounty makes the risk worth it." },
  { label: "NEGOTIATE", text: "Other scavengers are people in the same problem, not automatically enemies." },
  { label: "TRADE", text: "A route, a medical item, or a promise may be more valuable than another firefight." },
  { label: "REVIVE", text: "A downed enemy can become a social decision, a future threat, or an unexpected ally." },
  { label: "SHADOW", text: "Follow another crew and let them reveal a route, a cache, or a security response." },
  { label: "ROB", text: "Cargo, bodies, and ships create opportunities that begin after the shooting stops." },
  { label: "LEAVE", text: "Walking away is a real success state when the station is becoming too expensive to stay in." }
];

export const recoverySteps = [
  { label: "01", title: "Crew Member Down", text: "The player remains involved through DBNO, communication, and the need for someone to make a decision." },
  { label: "02", title: "Stabilize Or Drag", text: "Use a Rephabilitator, carry the body, or drag the teammate through a route that was not designed for rescue." },
  { label: "03", title: "Call Ship Or Recover", text: "The bridge can relocate the ship, or the squad can reach a medical module deeper inside the station." },
  { label: "04", title: "Secure The Route", text: "Someone has to watch the corridor, protect the carrier, and decide what cargo or objectives must be abandoned." },
  { label: "05", title: "Return To Medical", text: "Recovery gives the crew another chance without pretending the danger or the cost disappeared." }
];

export const securityStates = [
  { label: "SECURE", text: "The ship is locked and quiet. Cargo is safe enough to stage." },
  { label: "REMOTE", text: "The ship is relocating. Anyone watching the station can infer where a crew intends to extract." },
  { label: "BREACHED", text: "Another crew has entered the vessel. The raid has become a defense of the extraction point." },
  { label: "OWNERSHIP OVERRIDE", text: "An attacker is attempting to take control rather than merely steal cargo." },
  { label: "STOLEN", text: "The ship is now part of the station ecosystem and the original owners must decide whether to recover it." }
];

export const shipBuilds = [
  { title: "Cargo-Focused Vessel", code: "LOAD / 01", good: "More staging, storage, lifts, and vehicle capacity.", cost: "Less medical space and less room for defensive systems." },
  { title: "Medical / Recovery Vessel", code: "CARE / 02", good: "Better stabilization, treatment, and body recovery.", cost: "Less cargo volume and fewer ways to move large objects." },
  { title: "Security-Focused Vessel", code: "LOCK / 03", good: "Stronger doors, cameras, alarms, and ownership protection.", cost: "The ship is safer but gives up space that could generate value." },
  { title: "General-Purpose Vessel", code: "BALANCE / 04", good: "A flexible hull that supports a new crew without extreme tradeoffs.", cost: "It cannot match a specialized ship at the job that matters most." }
];

export function SpaceExtractionContent() {
  const [activeModule, setActiveModule] = useState("airlock");
  const [activeDistrict, setActiveDistrict] = useState("cargo");
  const [activeState, setActiveState] = useState("normal");
  const [activeSecurity, setActiveSecurity] = useState(0);

  const module = useMemo(() => shipModules.find((item) => item.id === activeModule) ?? shipModules[0], [activeModule]);
  const district = useMemo(() => districts.find((item) => item.id === activeDistrict) ?? districts[0], [activeDistrict]);
  const state = useMemo(() => stationStates.find((item) => item.id === activeState) ?? stationStates[0], [activeState]);
  const security = securityStates[activeSecurity] ?? securityStates[0];

  return (
    <>
      <section className="sxe-hero" id="station-briefing">
        <div className="sxe-scanlines" aria-hidden="true" />
        <div className="sxe-heroCopy">
          <p className="sxe-kicker">Co-op PvEvP Extraction Shooter // Designation: Station Scavenge</p>
          <h1>Untitled Space Extraction</h1>
          <p className="sxe-lede">Dock into the dead station. Take what you can carry. Bring the ship home.</p>
          <p className="sxe-heroText">You are a scavenger crew operating a physical ship inside an abandoned orbital habitat. The station still has power, security, cargo, and reasons to go deeper.</p>
          <div className="sxe-heroPrompt"><span>CORE QUESTION</span><strong>We can leave now. Do we really want to?</strong></div>
        </div>
        <div className="sxe-dockingVisual" aria-label="Diagram of a scavenger ship docked to an orbital station">
          <div className="sxe-stationArc sxe-stationArc-one" />
          <div className="sxe-stationArc sxe-stationArc-two" />
          <div className="sxe-dockFrame"><span>DOCK C-07</span><b>LOCKED</b></div>
          <div className="sxe-shipShape"><span className="sxe-shipNose" /><span className="sxe-shipBody" /><span className="sxe-shipWing" /><span className="sxe-shipGlow" /></div>
          <div className="sxe-visualLabel sxe-visualLabel-top">OUTER RING / 04</div>
          <div className="sxe-visualLabel sxe-visualLabel-bottom">SHIP PRESENT // AIRLOCK READY</div>
        </div>
        <div className="sxe-readoutGrid" aria-label="Current station and ship status">
          <div><span>Station power</span><strong className="is-amber">PARTIAL</strong></div>
          <div><span>Ship integrity</span><strong className="is-green">98%</strong></div>
          <div><span>Cargo capacity</span><strong>42 / 80</strong></div>
          <div><span>Docking ring</span><strong>C-07 OUTER</strong></div>
          <div><span>Security</span><strong className="is-red">WATCHING</strong></div>
          <div><span>Extraction</span><strong className="is-cyan">AVAILABLE</strong></div>
        </div>
      </section>

      <section className="sxe-section sxe-shipSection" id="ship-cutaway">
        <div className="sxe-sectionHeading"><p className="sxe-kicker">01 // Physical Base</p><h2>The ship is the extraction point.</h2><p>Your ship is not a lobby animation. It is a stash, a medical room, a cargo bay, a mobile base, and something another crew can break into.</p></div>
        <div className="sxe-shipLayout">
          <div className="sxe-shipCutaway" role="group" aria-label="Ship modules">
            <div className="sxe-shipHull"><span className="sxe-hullLine" /><span className="sxe-hullLabel">SCAVENGER HULL / LIMITED VOLUME</span>
              {shipModules.map((item, index) => <button key={item.id} type="button" className={`sxe-module sxe-module-${index + 1} ${item.id === activeModule ? "is-active" : ""}`} onClick={() => setActiveModule(item.id)} aria-pressed={item.id === activeModule}><span>{item.code}</span>{item.label}</button>)}
            </div>
          </div>
          <article className="sxe-detailPanel" aria-live="polite"><span className="sxe-panelCode">MODULE // {module.code}</span><h3>{module.title}</h3><p>{module.text}</p><div className="sxe-tradeoff"><span>TRADEOFF</span><p>{module.tradeoff}</p></div><div className="sxe-panelFoot">ACTIVE MODULE: {module.label.toUpperCase()}</div></article>
        </div>
      </section>

      <section className="sxe-section sxe-mapSection" id="station-map">
        <div className="sxe-sectionHeading"><p className="sxe-kicker">02 // Authored Geography</p><h2>The station is learnable. Its state is not.</h2><p>Recognizable districts and service routes reward memory. Power, access, security, and player activity ensure that the same route never tells exactly the same story twice.</p></div>
        <div className="sxe-mapLayout">
          <div className="sxe-stationMap" role="group" aria-label="Station districts">
            <div className="sxe-mapRing sxe-mapRing-one" /><div className="sxe-mapRing sxe-mapRing-two" /><div className="sxe-mapSpine" />
            {districts.map((item, index) => <button key={item.id} type="button" className={`sxe-district sxe-district-${index + 1} ${item.id === activeDistrict ? "is-active" : ""}`} onClick={() => setActiveDistrict(item.id)} aria-pressed={item.id === activeDistrict}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</button>)}
          </div>
          <article className="sxe-districtPanel" aria-live="polite"><span className="sxe-panelCode">DISTRICT // {district.label.toUpperCase()}</span><h3>{district.loot}</h3><div className="sxe-dataRows"><div><span>Power</span><strong>{district.power}</strong></div><div><span>Access</span><strong>{district.access}</strong></div><div><span>Security</span><strong>{district.security}</strong></div><div><span>Threat</span><strong>{district.threat}</strong></div><div><span>Preferred route</span><strong>{district.route}</strong></div></div><p>{district.label} is a place players can learn, but not fully control. Doors, systems, threats, and opportunities respond to what the station and other crews are doing.</p></article>
        </div>
      </section>

      <section className="sxe-section sxe-stateSection" id="station-state">
        <div className="sxe-sectionHeading"><p className="sxe-kicker">03 // Station Response</p><h2>The same map can become a different problem.</h2></div>
        <div className="sxe-stateTabs" role="tablist" aria-label="Station states">{stationStates.map((item) => <button key={item.id} type="button" role="tab" aria-selected={item.id === activeState} className={`sxe-stateTab state-${item.color} ${item.id === activeState ? "is-active" : ""}`} onClick={() => setActiveState(item.id)}>{item.label}</button>)}</div>
        <div className={`sxe-stateReadout state-${state.color}`} aria-live="polite"><div><span>STATION SIGNAL</span><strong>{state.signal}</strong></div><p>{state.text}</p><div className="sxe-stateBars"><i /><i /><i /><i /><i /></div></div>
      </section>

      <section className="sxe-section sxe-logisticsSection" id="physical-logistics">
        <div className="sxe-sectionHeading"><p className="sxe-kicker">04 // Physical Logistics</p><h2>Simple verbs. Large consequences.</h2><p>Carry, drag, drop, push, load, hack, dock, and call the ship. The station creates stories by letting ordinary actions collide.</p></div>
        <div className="sxe-operationLine" aria-label="Physical extraction operation"><span>FIND CARGO</span><b>→</b><span>CUT ACCESS</span><b>→</b><span>LOAD SLED</span><b>→</b><span>CALL SHIP</span><b>→</b><span>DEFEND DOCK</span><b>→</b><span>EXTRACT</span></div>
        <div className="sxe-cardGrid">{logistics.map((item) => <article className="sxe-systemCard" key={item.title}><span className="sxe-cardMarker">SYSTEM / 0{logistics.indexOf(item) + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="sxe-section sxe-socialSection" id="social-encounters">
        <div className="sxe-sectionHeading"><p className="sxe-kicker">05 // PvEvP Without Automatic Hostility</p><h2>Other scavengers are a question.</h2><p>Another crew may be an enemy, a temporary ally, a body to recover, a bounty, or simply a group you decide not to fight.</p></div>
        <div className="sxe-encounterLayout"><div className="sxe-encounterChoices">{encounters.map((item, index) => <div className={`sxe-encounterChoice ${index === 0 ? "is-hot" : ""}`} key={item.label}><strong>{item.label}</strong><p>{item.text}</p></div>)}</div><blockquote>“The medical job was the reason we entered. The fight, the rescue, the overloaded sled, and the decision to go back out were the raid.”</blockquote></div>
      </section>

      <section className="sxe-section sxe-recoverySection" id="recovery">
        <div className="sxe-sectionHeading"><p className="sxe-kicker">06 // Recovery Is A Mission</p><h2>Death creates a problem. It does not end the story.</h2></div>
        <div className="sxe-recoveryLine">{recoverySteps.map((item) => <article key={item.label}><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="sxe-section sxe-securitySection" id="ship-security">
        <div className="sxe-sectionHeading"><p className="sxe-kicker">07 // Your Extraction Point Is Vulnerable</p><h2>A ship can be robbed. A ship can be stolen.</h2><p>Calling the vessel solves distance while exposing intention. A remote ship call may become a docking-bay defense, a burglary, or an ownership fight.</p></div>
        <div className="sxe-securityPanel"><div className="sxe-securitySteps" role="tablist" aria-label="Ship security states">{securityStates.map((item, index) => <button key={item.label} type="button" role="tab" aria-selected={activeSecurity === index} className={activeSecurity === index ? "is-active" : ""} onClick={() => setActiveSecurity(index)}><span>0{index + 1}</span>{item.label}</button>)}</div><div className="sxe-securityReadout" aria-live="polite"><span>SHIP SECURITY STATE</span><strong>{security.label}</strong><p>{security.text}</p><div className="sxe-securitySignal">{activeSecurity >= 2 ? "UNAUTHORIZED PRESENCE DETECTED" : "CREW OWNERSHIP VERIFIED"}</div></div></div>
      </section>

      <section className="sxe-section sxe-progressionSection" id="ship-progression">
        <div className="sxe-sectionHeading"><p className="sxe-kicker">08 // Finite Interior Volume</p><h2>Every upgrade takes space from something else.</h2><p>Progression is capability-based. A better ship lets the crew do new things, but no hull can carry every answer.</p></div>
        <div className="sxe-buildGrid">{shipBuilds.map((item) => <article className="sxe-buildCard" key={item.title}><span>{item.code}</span><h3>{item.title}</h3><p className="sxe-buildGood">+ {item.good}</p><p className="sxe-buildCost">− {item.cost}</p></article>)}</div>
      </section>

      <SpaceExtractionDossier />

      <section className="sxe-section sxe-coreSection" id="ai-core">
        <div className="sxe-coreAlert"><span>ENDGAME OBJECTIVE // VALUE EXTREME</span><strong>AI CORE</strong></div>
        <div className="sxe-coreContent"><p className="sxe-kicker">09 // The Station’s Last Valuable Secret</p><h2>The final story objective is still a scavenger objective.</h2><p>The AI core is not a small quest item. It is physical cargo: massive, fragile, unstable, and valuable enough to change the station when it leaves.</p><div className="sxe-coreGrid"><div><span>PROTECT</span><p>Stabilizers and protective equipment preserve its theoretical value.</p></div><div><span>MOVE</span><p>The crew must transport it through a station that now knows something important is happening.</p></div><div><span>CHOOSE</span><p>Take the perfect route and risk losing everything, or damage the core slightly to escape alive.</p></div></div><div className="sxe-coreQuote">The player is not saving the station.<br /><strong>The player is stealing the most valuable thing left inside it.</strong></div></div>
      </section>
    </>
  );
}

export default SpaceExtractionContent;
