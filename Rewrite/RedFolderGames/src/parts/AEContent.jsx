const loopSteps = [
  "Prepare at the carrier",
  "Plan the route and fuel stops",
  "Take off toward the target airfield",
  "Land and secure the area",
  "Scavenge supplies and complete objectives",
  "Refuel the aircraft",
  "Escape before the runway is overrun",
  "Return, repair, upgrade, and push farther"
];

const carrierRoles = [
  "Safe zone",
  "Mission hub",
  "Aircraft hangar",
  "Upgrade station",
  "Storage facility",
  "Survivor shelter"
];

const carrierUpgrades = [
  "Upgrade hangars",
  "Increase fuel storage",
  "Unlock larger aircraft",
  "Expand cargo capacity",
  "Improve radar and navigation systems",
  "Restore damaged carrier sections",
  "Recruit mechanics and support crews"
];

const aircraftProgression = [
  {
    era: "Early Game",
    title: "Small Propeller Transports",
    stats: ["Minimal cargo space", "Limited fuel capacity", "Short-range flights", "Can land on rough airstrips"],
    note: "Fragile, quiet, and useful when the crew is still learning how to stay alive."
  },
  {
    era: "Mid Game",
    title: "Military Cargo Aircraft",
    stats: ["Improved storage", "Longer range", "Better durability", "Larger crew capacity"],
    note: "The first step toward serious recovery operations, but every takeoff costs more fuel."
  },
  {
    era: "Late Game",
    title: "Heavy And Experimental Aircraft",
    stats: ["Advanced navigation", "Massive fuel storage", "Long-distance travel", "Ocean-crossing potential"],
    note: "A flying fortress if maintained well, a campaign-ending disaster if lost."
  }
];

const refuelChoices = [
  {
    title: "Major Airports",
    reward: "Fuel depots, powered pump systems, hangars, backup generators, and valuable infrastructure.",
    danger: "Restoring power, running pumps, and starting engines can attract enormous infected hordes."
  },
  {
    title: "Small Airfields",
    reward: "Fuel trucks, barrels, jerry cans, and manual pump systems with lower noise exposure.",
    danger: "They are safer, but provide much less fuel and may force multiple extra stops."
  }
];

const routeStops = [
  {
    code: "CV-01",
    name: "Airborne Carrier",
    status: "Mobile Command",
    detail: "The last safe platform, low on fuel but still able to launch recovery flights."
  },
  {
    code: "R-17",
    name: "Rural Airstrip",
    status: "Quiet Stop",
    detail: "Manual pumps and short runways make it safer, but the range gain is limited."
  },
  {
    code: "KJFK",
    name: "Collapsed Airport",
    status: "High Reward",
    detail: "Multiple fuel sources, broken terminals, underground tunnels, and a massive threat response."
  },
  {
    code: "EZ-4",
    name: "Survivor Beacon",
    status: "Unknown",
    detail: "A signal is active beyond the storm, but runway integrity is not confirmed."
  }
];

const infectedTypes = [
  "Dense urban hordes",
  "Frozen infected trapped beneath snow",
  "Military infected wearing armor",
  "Underground infected hidden in tunnels and terminals"
];

const locations = [
  {
    title: "Frozen Northern Airbase",
    points: ["Snowstorms reduce visibility", "Aircraft freeze overnight", "Runways require clearing", "Fuel reserves are scarce"]
  },
  {
    title: "Desert Military Airport",
    points: ["Sandstorms damage engines", "Long open sightlines expose the crew", "Massive swarms cross the runway", "Military loot is valuable but dangerous"]
  },
  {
    title: "Jungle Airstrip",
    points: ["Overgrown runways", "Vegetation hides infected", "Crashed helicopters nearby", "Constant rain complicates loading"]
  },
  {
    title: "Collapsed International Airport",
    points: ["Huge terminals", "Underground baggage tunnels", "Multi-stage refueling operations", "Resource-rich and brutally dangerous"]
  }
];

const missionObjectives = [
  "Recover food supplies",
  "Extract survivors",
  "Secure fuel reserves",
  "Restore communications",
  "Retrieve military technology",
  "Recover aircraft parts",
  "Escort convoys",
  "Investigate abandoned facilities"
];

const coopRoles = [
  "Pilot",
  "Mechanic",
  "Scout",
  "Defender",
  "Loader",
  "Navigator"
];

const systems = [
  {
    title: "Cargo Weight And Fuel Balance",
    text: "Every item loaded into the aircraft affects performance. Heavy cargo increases fuel consumption, reduces range, slows takeoff, and may require longer runways. A greedy crew can overload the plane and lose the ability to reach the next fuel stop."
  },
  {
    title: "Dynamic Route Planning",
    text: "Crews can divert to alternate airfields, abort missions, make emergency landings, risk long direct flights, or chain smaller airstrips together. Storms, outbreaks, repaired runway lights, restored radar, and cleared infected nests all change what routes are possible."
  },
  {
    title: "Aircraft Interior Gameplay",
    text: "Aircraft are physical spaces. Players organize cargo, repair damaged systems, open or close ramps, store weapons, strap down heavy equipment, escort survivors, and move through larger planes containing seats, med stations, repair benches, and storage rooms."
  },
  {
    title: "Emergency Situations",
    text: "Flights can go wrong midair through fuel leaks, engine failures, turbulence, emergency rerouting, hidden infected in cargo, or distress calls from nearby airfields. These moments force the crew to adapt instead of simply watching a travel screen."
  },
  {
    title: "Noise And Threat Escalation",
    text: "Starting engines, running generators, firing weapons, moving forklifts, using floodlights, and triggering alarms all raise danger. Some airports seem abandoned until the crew powers the runway lights or starts the fuel pumps."
  },
  {
    title: "Cargo Operations",
    text: "Loot is not transferred magically. Players drive forklifts, push carts, carry crates, load food containers, secure equipment, and move fuel barrels across exposed runways while other players defend the loading zone."
  },
  {
    title: "Airport Conditions",
    text: "Runways may be cracked, flooded, frozen, overgrown, blocked by wreckage, or covered in abandoned luggage. Emergency vehicles, barricades, quarantine checkpoints, and half-loaded civilian aircraft tell the story of evacuation failure without constant exposition."
  },
  {
    title: "Extraction Tension",
    text: "The final minutes are the peak of pressure. Players finish loading, disconnect fuel hoses, board survivors, manually start engines, clear runway debris, and defend the aircraft while taxiing. Sometimes takeoff happens seconds before the infected arrive. Sometimes it does not."
  },
  {
    title: "Long-Term Progression",
    text: "Progression is about rebuilding capability. The crew grows from desperate scavengers with a barely functioning aircraft into an airborne recovery operation that can restore infrastructure, create safer trade routes, and reconnect isolated survivor groups."
  },
  {
    title: "Storytelling Style",
    text: "The story is environmental and grounded, told through radio broadcasts, flight recordings, survivor conversations, military documents, emergency announcements, and abandoned evacuation plans."
  }
];

const keyFeatures = [
  "PvE co-op extraction survival",
  "Route-based long-distance travel",
  "Manual aircraft taxiing and positioning",
  "Dynamic airport refueling",
  "Aircraft recovery and progression",
  "Massive airborne carrier base",
  "Persistent world progression",
  "Dynamic weather and day/night cycles",
  "Noise-reactive infected AI",
  "Multi-region world exploration",
  "Logistics-focused survival",
  "Cinematic extractions and escapes"
];

function DetailSection({ id, label, title, children, className = "" }) {
  return (
    <section className={`ae-detailSection ${className}`} id={id}>
      <div className="ae-sectionIntro">
        <p className="ae-kicker">{label}</p>
        <h2>{title}</h2>
      </div>
      <div className="ae-copy">{children}</div>
    </section>
  );
}

function AEContent() {
  return (
    <>
      <div className="ae-alertStrip">
        <span>Transmission Active</span>
        <strong>Last carrier in range</strong>
        <span>Fuel margin: 11 minutes</span>
      </div>

      <section className="ae-hero" id="carrier-briefing">
        <div className="ae-heroGrid">
          <div className="ae-titleBlock">
            <p className="ae-kicker">Co-op Extraction Survival Across A Fallen World</p>
            <h1>AIRBORNE EXODUS</h1>
            <p className="ae-brief">
              The runway is never safe. The fuel is never enough. Every landing might be your last.
            </p>
            <p className="ae-heroText">
              Airborne Exodus is about operating from one of the last functioning airborne carriers,
              flying into dead airports, holding the ground long enough to refuel, and escaping before
              the world below swallows the crew.
            </p>
          </div>

          <div className="ae-statusBoard" aria-label="Carrier status">
            <div>
              <span>Fuel Reserve</span>
              <strong className="ae-warning">28%</strong>
            </div>
            <div>
              <span>Primary Aircraft</span>
              <strong>C-130 Warden</strong>
            </div>
            <div>
              <span>Runway Threat</span>
              <strong className="ae-danger">Rising</strong>
            </div>
            <div>
              <span>Extraction Window</span>
              <strong>09:40</strong>
            </div>
          </div>
        </div>

        <div className="ae-heroFooter" aria-label="Current operation summary">
          <div>
            <span>Operation</span>
            <strong>Runway Candle</strong>
          </div>
          <div>
            <span>Weather</span>
            <strong>Crosswind / Rain</strong>
          </div>
          <div>
            <span>Landing Zone</span>
            <strong>Metro Airport B</strong>
          </div>
        </div>
      </section>

      <section className="ae-commandBand" id="fuel-and-runway-status">
        <div className="ae-fuelPanel">
          <div className="ae-panelHeader">
            <span>Fuel Pressure</span>
            <b>Critical System</b>
          </div>
          <div className="ae-fuelGauge">
            <div className="ae-fuelFill" />
          </div>
          <p>
            Fuel is survival. Without it, the crew cannot leave, cannot rescue anyone, and cannot
            return to the carrier. Every detour, cargo decision, and refueling stop changes the campaign.
          </p>
        </div>

        <div className="ae-runwayPanel">
          <div className="ae-panelHeader">
            <span>Runway Holdout</span>
            <b>Live Sequence</b>
          </div>
          <div className="ae-runwayGrid">
            <span>Generator</span>
            <strong>Online</strong>
            <span>Fuel Pump</span>
            <strong className="ae-warning">Priming</strong>
            <span>Horde Distance</span>
            <strong className="ae-danger">430 M</strong>
            <span>Cargo Ramp</span>
            <strong>Open</strong>
          </div>
        </div>
      </section>

      <DetailSection id="about-the-game" label="About The Game" title="Survival Is A Flight Plan">
        <p>
          Airborne Exodus is a co-op PvE extraction survival game set in a collapsing
          post-apocalyptic world overrun by infected hordes. It takes the scale and panic of
          large infected outbreaks and combines it with the grounded logistics of military
          evacuation operations.
        </p>
        <p>
          The world below is fractured. Cities are abandoned, military bases have gone silent,
          and airports have become graveyards. But fuel still exists, and if the crew can reach it,
          the carrier can keep flying.
        </p>
        <p>
          This is not a hero shooter and not a battle royale. It is a game about pressure,
          route planning, aircraft recovery, temporary safety, and the desperate feeling of
          defending a runway long enough for the engines to start.
        </p>
      </DetailSection>

      <section className="ae-loopSection" id="core-gameplay-loop">
        <div className="ae-sectionIntro">
          <p className="ae-kicker">Core Gameplay Loop</p>
          <h2>Every Operation Begins And Ends With Fuel</h2>
        </div>
        <ol className="ae-checklist">
          {loopSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="ae-wideCopy">
          The farther the crew travels, the more dangerous the journey becomes. Some destinations are
          too far to reach directly, forcing multiple airport stops along the way. A failed refueling
          operation can strand the crew hundreds of kilometers from safety.
        </p>
      </section>

      <DetailSection id="the-carrier" label="The Carrier" title="A Home That Still Has To Be Fed">
        <p>
          The player's base is a massive airborne military carrier, one of the last mobile command
          centers left in the world. It is a safe zone, but not an infinite one. Fuel reserves matter,
          aircraft losses matter, and every mission affects the long-term survival of the operation.
        </p>
        <div className="ae-twoColumnGrid">
          <div className="ae-listPanel">
            <h3>Carrier Functions</h3>
            <ul>
              {carrierRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
          <div className="ae-listPanel">
            <h3>Carrier Growth</h3>
            <ul>
              {carrierUpgrades.map((upgrade) => (
                <li key={upgrade}>{upgrade}</li>
              ))}
            </ul>
          </div>
        </div>
        <p>
          As the campaign progresses, the carrier transforms from a desperate survival platform into
          a functioning mobile fortress. That transformation is earned by bringing back people, fuel,
          aircraft parts, mechanics, and enough hope to keep launching.
        </p>
      </DetailSection>

      <section className="ae-hangar" id="aircraft-and-progression">
        <div className="ae-sectionIntro">
          <p className="ae-kicker">Aircraft And Progression</p>
          <h2>Aircraft Are The Heart Of The Campaign</h2>
        </div>
        <p className="ae-wideCopy">
          Players do not simply buy upgrades from a menu. They discover, recover, repair, and restore
          abandoned aircraft across the world. Smaller planes are agile and easier to land at damaged
          airports. Larger aircraft carry more loot and survivors, but consume more fuel and demand
          better runways. Losing an aircraft can permanently change the campaign.
        </p>
        <div className="ae-aircraftGrid">
          {aircraftProgression.map((plane) => (
            <article className="ae-aircraftCard" key={plane.title}>
              <div className="ae-planeShape" />
              <span>{plane.era}</span>
              <h3>{plane.title}</h3>
              <ul>
                {plane.stats.map((stat) => (
                  <li key={stat}>{stat}</li>
                ))}
              </ul>
              <p>{plane.note}</p>
            </article>
          ))}
        </div>
      </section>

      <DetailSection id="refueling-system" label="Refueling System" title="The Loudest Thing You Can Do">
        <p>
          Refueling is one of the game's core mechanics. Different airports offer different ways to
          refuel, and each one changes the tactical problem. A major airport can save the campaign
          with a fast, deep refuel, but it also turns the entire airfield into a dinner bell.
        </p>
        <div className="ae-riskGrid">
          {refuelChoices.map((choice) => (
            <article className="ae-riskCard" key={choice.title}>
              <h3>{choice.title}</h3>
              <div>
                <span>Reward</span>
                <p>{choice.reward}</p>
              </div>
              <div>
                <span>Danger</span>
                <p>{choice.danger}</p>
              </div>
            </article>
          ))}
        </div>
        <p>
          Players may need to restore power, activate generators, defend fuel pumps, pull hoses across
          the runway, or restart broken airport systems while the noise pulls infected closer.
        </p>
      </DetailSection>

      <section className="ae-routeSection" id="flight-and-route-planning">
        <div className="ae-sectionIntro">
          <p className="ae-kicker">Flight And Route Planning</p>
          <h2>The Map Is A Chain Of Risks</h2>
        </div>
        <div className="ae-routeLine">
          {routeStops.map((stop, index) => (
            <article className="ae-routeStop" key={stop.code}>
              <div className="ae-node">{index + 1}</div>
              <p>{stop.code}</p>
              <h3>{stop.name}</h3>
              <span>{stop.status}</span>
              <small>{stop.detail}</small>
            </article>
          ))}
        </div>
        <p className="ae-wideCopy">
          Flights use a semi-cinematic travel system. Players taxi to the runway, accelerate, take off,
          and then transition into route-based navigation. In the air, crews can select destinations,
          adjust routes, divert to emergency airfields, monitor fuel usage, and avoid storms or
          outbreak zones.
        </p>
      </section>

      <DetailSection id="taxiing-and-positioning" label="Taxiing And Positioning" title="The Aircraft Is A Tool, A Shield, And A Liability">
        <p>
          Players manually taxi aircraft around the airfield. This is not a full flight simulator,
          but a tactical survival layer where positioning can decide whether the crew escapes.
        </p>
        <p>
          Moving the plane closer to warehouses reduces the time spent hauling heavy cargo. Parking
          near the wrong terminal can box the crew in. A cargo ramp can become a loading point, a
          defense line, or a death trap. Large cargo may require forklifts, trolleys, manual loading,
          and teammates protecting the route back to the plane.
        </p>
        <p>
          Every second spent loading supplies increases danger, and every meter between the aircraft
          and the objective becomes a decision.
        </p>
      </DetailSection>

      <DetailSection id="the-infected" label="The Infected" title="Everything Loud Has A Cost">
        <p>
          The infected are fast, aggressive, and heavily attracted to noise. Gunfire, engines,
          generators, alarms, aircraft, forklifts, and floodlights all pull danger toward the runway.
        </p>
        <p>
          Some infected wander silently. Others move in massive swarms capable of overwhelming entire
          airports. They are not the only threat, because the collapsing world itself is dangerous,
          but they are the pressure that makes every system matter.
        </p>
        <div className="ae-tagGrid">
          {infectedTypes.map((type) => (
            <span key={type}>{type}</span>
          ))}
        </div>
      </DetailSection>

      <section className="ae-worldSection" id="world-design">
        <div className="ae-sectionIntro">
          <p className="ae-kicker">World Design</p>
          <h2>No Two Extractions Should Feel Identical</h2>
        </div>
        <p className="ae-wideCopy">
          The world spans multiple countries and regions. Each airport has its own weather, runway
          condition, fuel situation, threat profile, and story of collapse. The environment should
          tell players what happened before they ever read a note.
        </p>
        <div className="ae-locationGrid">
          {locations.map((location) => (
            <article className="ae-locationCard" key={location.title}>
              <h3>{location.title}</h3>
              <ul>
                {location.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <DetailSection id="mission-structure" label="Mission Structure" title="Simple Runs Can Become Multi-Day Expeditions">
        <p>
          Missions are dynamic and varied. Some are simple scavenging runs. Others become multi-airport
          expeditions lasting several in-game days, where a crew must land, refuel, repair, reroute,
          and decide what objectives are still worth the risk.
        </p>
        <div className="ae-tagGrid">
          {missionObjectives.map((objective) => (
            <span key={objective}>{objective}</span>
          ))}
        </div>
      </DetailSection>

      <DetailSection id="co-op-gameplay" label="Co-op Gameplay" title="Teamwork Comes From The Logistics">
        <p>
          Airborne Exodus is designed primarily around co-op PvE. Players naturally fall into roles
          because the operation itself demands it. One player might defend the runway while another
          restores power, another drives the fuel truck, and another loads cargo into the aircraft.
        </p>
        <div className="ae-roleGrid">
          {coopRoles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
        <p>
          The pressure creates teamwork without forcing artificial class rules. The crew succeeds
          because someone watched the runway, someone fixed the pump, someone counted the fuel, and
          someone made the call to leave.
        </p>
      </DetailSection>

      <DetailSection id="atmosphere-and-tone" label="Atmosphere And Tone" title="The Quiet Before The Engines Start">
        <p>
          The tone is grounded, tense, and cinematic. Airborne Exodus focuses on isolation,
          exhaustion, tactical survival, long-distance travel, temporary safety, and the emotional
          relief of a successful extraction.
        </p>
        <p>
          Moments of silence matter as much as combat. Players might spend minutes hearing only rain
          hitting the fuselage, distant infected screams, the hum of a fuel pump, cargo doors closing,
          and engines slowly starting. Then something fails, a light comes on, or a swarm appears
          beyond the runway fence.
        </p>
      </DetailSection>

      <section className="ae-systemsSection" id="ae-systems">
        <div className="ae-sectionIntro">
          <p className="ae-kicker">Additional Gameplay Systems</p>
          <h2>Every System Feeds The Escape Fantasy</h2>
        </div>
        <div className="ae-systemGrid">
          {systems.map((system) => (
            <article className="ae-systemCard" key={system.title}>
              <h3>{system.title}</h3>
              <p>{system.text}</p>
            </article>
          ))}
        </div>
      </section>

      <DetailSection id="endgame" label="Endgame" title="Survive Long Enough To Reach Something Beyond The Collapse">
        <p>
          The world contains rumors of functioning safe zones, vaccine research facilities, surviving
          military command structures, and experimental aircraft capable of crossing oceans. Players
          slowly uncover what happened through missions, radio chatter, recovered recordings, and
          survivor accounts.
        </p>
        <p>
          The final goal is not simply winning. It is surviving long enough to reach something beyond
          the collapse, and deciding what the crew is willing to risk to get there.
        </p>
      </DetailSection>

      <section className="ae-featuresSection" id="key-features">
        <div className="ae-sectionIntro">
          <p className="ae-kicker">Key Features</p>
          <h2>The Game At A Glance</h2>
        </div>
        <div className="ae-featureGrid">
          {keyFeatures.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </section>

      <section className="ae-logPanel" id="ae-core-fantasy">
        <p className="ae-kicker">The Core Fantasy</p>
        <h2>Most zombie games are about fighting. Airborne Exodus is about escaping.</h2>
        <p>
          The fear is not just dying. The fear is hearing the engines fail while surrounded by
          thousands of infected, knowing the runway is the only way home.
        </p>
        <p>
          You are not conquering the apocalypse. You are surviving one runway at a time. Every
          successful extraction feels earned, every takeoff feels relieving, and every new aircraft
          feels meaningful.
        </p>
        <p>
          When the plane finally lifts off after a desperate extraction, the crew has not saved the
          world. They survived. This time.
        </p>
      </section>

    </>
  );
}

export default AEContent;
