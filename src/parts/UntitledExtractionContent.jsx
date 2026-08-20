// Content/data for the Untitled Extraction page.
// Kept separate so the route component only handles page wiring and interactions.

export const zones = [
  {
    id: "extraction",
    label: "Extraction",
    mapLabel: "EXT",
    title: "Weather-Based Extractions",
    signal: "No fixed exit meta",
    text: "Extraction options change with the world state. Helicopters, boats, vehicles, loot-only exits, and body extraction all become different choices instead of one static camped door. A squad can leave with its people, send only a backpack out, recover an enemy body, or delay extraction to revive a teammate first. The important part is that leaving is a tactical choice, not a timer command.",
    points: ["Helicopters can shut down in storms", "Boats open when low roads flood", "Loot and bodies can leave separately", "Extraction fees, noise, and visibility make exits risky", "A squad can secure loot and still keep playing"]
  },
  {
    id: "weather",
    label: "Weather",
    mapLabel: "WX",
    title: "Weather Controls The World",
    signal: "Pressure without a match timer",
    text: "The raid has no global countdown. Rain, flooding, storms, visibility, and disabled extracts create the pressure that tells players the situation has changed. Weather should alter how the map is played: low roads flood, long sightlines vanish, aircraft become unreliable, and boat routes become valuable. The storm is not a wall closing in; it is the world changing the terms of the raid.",
    points: ["Lower roads flood", "Helicopter extraction shuts down", "Visibility and routes change mid-raid", "Storms can make open areas safer or more dangerous", "Weather scanners let prepared squads act early"]
  },
  {
    id: "bodies",
    label: "Bodies",
    mapLabel: "BODY",
    title: "Body Recovery",
    signal: "Death creates an objective",
    text: "Dead players leave bodies in the world. Teammates or even enemies can recover them, carry them, steal them, hide them, or extract them for gear return and social promises. A body is heavy, visible, and emotionally loaded: carrying it means giving up speed and combat readiness, but leaving it behind can cost gear, trust, or a promise made over proximity chat.",
    points: ["Bodies slow the carrier", "Recovered bodies can return gear", "Enemy bodies can become negotiation pieces", "Body scanners and drag harnesses create recovery roles", "Stealing or hiding a body can change a fight after death"]
  },
  {
    id: "loot",
    label: "Loot",
    mapLabel: "LOOT",
    title: "Physical Loot Handling",
    signal: "Greed has weight",
    text: "Loot is not just a menu number. Extra backpacks, containers, cargo tags, and loot-only extraction make valuable gear visible, slow, and worth attacking. Picking up more than you can comfortably carry changes the way you fight: a player may be stuck with a pistol, a slower sprint, or a louder route back to extraction. Greed becomes readable to everyone watching.",
    points: ["Extra backpacks limit weapon use", "Loot-only extraction saves gear", "Visible cargo attracts ambushes", "Cargo taggers mark bags for squad coordination", "Sending loot out can cost the backpack itself"]
  },
  {
    id: "reinforcements",
    label: "Reinforcements",
    mapLabel: "RF",
    title: "Limited Reinforcement Stations",
    signal: "No revive spam",
    text: "Squads do not endlessly revive on the ground. A surviving teammate must reach a risky station and spend one of the squad's limited reinforcement charges. The station is a commitment: it makes noise, forces travel, and asks whether saving a teammate is worth delaying extraction. If the whole squad dies, the squad is out of that lobby permanently.",
    points: ["Stations are noisy", "Charges are limited", "Full squad wipe removes the squad from that lobby", "Signal boosters can speed activation", "A reinforcement run can be more valuable than a loot run"]
  },
  {
    id: "pressure",
    label: "NPC Pressure",
    mapLabel: "NPC",
    title: "PvE Is The Backbone",
    signal: "The world is the main enemy",
    text: "Hostile patrols, armored enemies, roaming threats, wildlife, infected, monsters, and environmental hazards should interrupt fights and force route changes. PvE is not filler between player fights. It creates noise, drains resources, blocks routes, ruins negotiations, and makes the map dangerous even when no enemy squad is nearby. Other players are the wildcard; the world is the constant pressure.",
    points: ["PvE reacts to noise", "Patrols interrupt negotiations", "World danger weakens players before PvP", "Faction routes can cut off extracts", "Roaming threats make camping less safe"]
  },
  {
    id: "gadgets",
    label: "Gadgets",
    mapLabel: "KIT",
    title: "Gadget-Based Roles",
    signal: "No locked hero classes",
    text: "Roles come from the tools players bring. A squad can build a recovery runner, weather scout, smoke carrier, loot mule, recon healer, or reinforcement specialist without locking anyone into a hero class. Gadgets should plug directly into the main systems: body recovery, weather forecasting, loot extraction, reinforcement stations, route scouting, and squad rescue.",
    points: ["Body scanner and drag harness", "Weather scanner and signal booster", "Smoke drone, recon drone, cargo tagger", "Portable medical kits stabilize but do not erase death", "Tool slots create tradeoffs before the raid starts"]
  },
  {
    id: "loop",
    label: "Raid Loop",
    mapLabel: "LOOP",
    title: "Core Gameplay Loop",
    signal: "Enter, adapt, choose",
    text: "A squad enters an active raid, explores, fights PvE, gathers loot, meets players, reacts to weather, recovers bodies, spends reinforcements, and decides when enough is enough. The raid continues without a global timer, so the tension comes from layered decisions: stay for more rewards, send loot out, rescue a teammate, honor an enemy promise, or leave before the situation collapses.",
    points: ["No forced circle", "No hard match timer", "Stay longer only if the squad accepts the risk", "Active lobbies keep the world feeling alive", "Every system should create a reason to change plans"]
  },
  {
    id: "movement",
    label: "Movement",
    mapLabel: "MOVE",
    title: "Smooth But Weighted Movement",
    signal: "Faster than Tarkov, not pure arcade",
    text: "Players can slide, dive, mantle, sprint, crouch, and reposition smoothly, but bodies, extra backpacks, overload, and cargo still change how movement feels. The goal is not clunky realism. Players should be able to make plays and escape bad positions, while the physical systems still matter when someone is carrying a body, dragging a teammate, or hauling an extra bag through open ground.",
    points: ["Fast enough for plays", "Weight matters when carrying", "Fights stay readable", "Overloaded players become team-protected objectives", "Movement tools should not erase extraction tension"]
  },
  {
    id: "social",
    label: "Proximity Chat",
    mapLabel: "CHAT",
    title: "Trust And Betrayal",
    signal: "Players make the stories",
    text: "Proximity chat supports negotiation, fake surrender, temporary cooperation, intimidation, body recovery promises, begging, betrayal, and weird human moments. The body system gives those conversations teeth: an enemy can ask you to extract their friend's body, a squad can lie about helping, and a patrol can interrupt before anyone knows if the deal was real.",
    points: ["Interrupted negotiation", "Enemy body promises", "Temporary allies can turn", "Voice creates reasons not to shoot instantly", "Betrayal matters more when bodies and loot persist"]
  },
  {
    id: "weapons",
    label: "Weapons",
    mapLabel: "GUN",
    title: "Believable Weapon Freedom",
    signal: "Broad, not nonsense",
    text: "Weapon customization should be fun and flexible while staying within believable limits, so players can build strong identities without breaking the tone. The system should support practical raid choices: compact weapons for body carriers, suppressed builds for PvE routes, heavier setups for overwatch, and sidearms that matter when someone is carrying an extra backpack.",
    points: ["Attachment freedom", "Readable silhouettes", "Gear should support roles", "Sidearms matter when carrying loot", "Builds should fit squad plans, not only damage meta"]
  },
  {
    id: "survival",
    label: "Survival",
    mapLabel: "SURV",
    title: "World Pressure",
    signal: "Situation over timer",
    text: "The game should stop safe camping through supplies, PvE escalation, player density, weather, extraction risk, and limited reinforcement options. No timer does not mean no pressure. If a squad sits too long, the weather can move, PvE can converge, ammo can run low, extracts can shift, and other players can read their noise or loot movement.",
    points: ["Supplies matter", "Noise pulls danger", "The world pushes back", "Camping should become unstable naturally", "Pressure comes from the situation, not a random clock"]
  },
  {
    id: "lobby",
    label: "Active Lobbies",
    mapLabel: "JOIN",
    title: "Active Raid Lobbies",
    signal: "The map keeps moving",
    text: "Players can enter raids already in progress through soft matchmaking that considers weather, world state, danger level, and available player slots. The goal is to make the map feel like an ongoing place instead of a sealed match that starts and ends for everyone together. The system can quietly balance fairness while preserving the illusion of a living raid.",
    points: ["Ongoing world feeling", "Soft matchmaking", "No easy abuse of rejoining", "New squads should enter similar danger states", "Leaving and dying should not give easy lobby knowledge"]
  },
  {
    id: "map",
    label: "Map State",
    mapLabel: "MAP",
    title: "Changing Map State",
    signal: "Routes tell the story",
    text: "The island should feel like a live space where weather, patrols, extraction options, bodies, loot, and player choices leave tactical information on the map. A flooded valley, a disabled helicopter, a dropped backpack, a body ping, or a noisy station should all tell players what happened and what may happen next. The map is not decoration; it is the raid's memory.",
    points: ["Flooded valleys", "Disabled extracts", "Bodies and cargo become map pressure", "Patrol routes reveal danger pockets", "Markers should show choices, not just locations"]
  },
  {
    id: "pillars",
    label: "Design Pillars",
    mapLabel: "CORE",
    title: "Main Design Pillars",
    signal: "Choice over forced decisions",
    text: "The concept is built around physical risk, weather-driven strategy, meaningful death, social gameplay, flexible roles, and PvE as the backbone. The game should create situations instead of forcing decisions. Players choose whether to save someone, betray someone, extract loot, chase more rewards, or leave. The tension works when every option has a physical cost.",
    points: ["Choice over forced decisions", "Death matters", "Flexible roles and PvE pressure", "Weather controls routes and exits", "Player stories come from systems colliding"]
  }
];

export const dossierSections = [
  {
    label: "Match Flow",
    title: "Start To Continue Or Leave",
    intro: "The markdown example is a raid that keeps creating new choices instead of ending because a clock says so.",
    featured: true,
    rows: [
      {
        mechanic: "Extra Backpack Run",
        use: "A player fills an extra backpack with industrial loot and can only use a pistol while carrying it.",
        risk: "The loot is visible, movement is heavier, and the squad becomes worth ambushing.",
        example: "The trio finds valuable loot during light rain, then the weather and enemy players turn that greed into a problem."
      },
      {
        mechanic: "Weather Shift",
        use: "The squad reads the storm and changes route when lower roads flood and helicopters shut down.",
        risk: "A safe exit can disappear, forcing the team toward boats, longer travel, or worse visibility.",
        example: "Rain gets heavier, valley helicopter extraction shuts down, and boat extraction opens near the lake."
      },
      {
        mechanic: "Interrupted Negotiation",
        use: "Players talk through proximity chat, but PvE patrols can break the conversation and create casualties.",
        risk: "Trust is unstable because noise, patrols, and third parties can turn a deal into a fight.",
        example: "A duo talks with the squad, a PvE patrol interrupts, one enemy dies, and the survivor asks for body recovery."
      },
      {
        mechanic: "Reinforcement Or Boat Choice",
        use: "The squad chooses whether to extract now or detour to a reinforcement station for a dead teammate.",
        risk: "The station spends a limited charge, makes the squad travel while loaded, and can expose them to another ambush.",
        example: "They delay boat extraction, use one of three reinforcement charges, and bring the teammate back."
      }
    ]
  },
  {
    label: "Loot And Bodies",
    title: "Physical Risk Makes Decisions Visible",
    intro: "Backpacks, bodies, and containers exist in the raid space. Carrying them is useful, but it changes posture, speed, and threat.",
    featured: true,
    rows: [
      {
        mechanic: "Loot-Only Extraction",
        use: "Players can throw a tagged backpack or container into an extract and secure the loot without leaving themselves.",
        risk: "The player loses the extra backpack, pays an extraction cost, and announces that something valuable moved.",
        example: "At the boat, the squad sends the loot backpack out, keeps playing, and accepts that the storm is getting worse."
      },
      {
        mechanic: "Body Recovery",
        use: "A player physically carries a dead teammate or enemy body to an extraction point.",
        risk: "The carrier is slow, vulnerable, and valuable because the body can return gear or complete a promise.",
        example: "One player carries the enemy body, another carries loot, and the third covers while another squad spots them."
      },
      {
        mechanic: "Stealing Bodies",
        use: "Enemy bodies can be recovered, stolen, hidden, traded, or extracted by someone who did not kill them.",
        risk: "Bodies become social leverage and bait, so helping an enemy can also reveal your route.",
        example: "The surviving enemy asks, 'Please get his body out,' turning a kill into a moral and tactical choice."
      }
    ]
  },
  {
    label: "Gadgets",
    title: "Roles Come From What You Bring",
    intro: "The gadget list from the markdown becomes a set of tools that interact with loot, bodies, weather, extraction, and reinforcements.",
    featured: true,
    rows: [
      {
        mechanic: "Recovery Tools",
        use: "Body Scanner pulses nearby bodies; Drag Harness speeds dragging; Carry Frame reduces stamina drain while carrying.",
        risk: "Recovery tools create noise, take gadget slots, and still leave the carrier exposed.",
        example: "A recovery runner finds the body through rain, drags it out of contested ground, and needs smoke cover to cross open terrain."
      },
      {
        mechanic: "Recon And Weather Tools",
        use: "Recon Drone scouts extracts and stations; Weather Scanner forecasts weather shifts before an exit shuts down.",
        risk: "Scouting takes time, can reveal the operator, and gives information rather than safety.",
        example: "A weather scout warns that helicopters are about to close, so the squad changes route before the lower valley floods."
      },
      {
        mechanic: "Extraction And Support Tools",
        use: "Cargo Tagger marks loot for loot-only extraction; Signal Booster speeds station use; Smoke Drone covers recovery or boat loading.",
        risk: "These tools are loud, visible, limited, and strongest only when the squad commits to a risky play.",
        example: "The team smokes the boat, tags the backpack, boosts the station, and still has to survive the noise they created."
      }
    ]
  },
  {
    label: "Identity",
    title: "Why It Is Different",
    intro: "The pitch is not another timer-driven extraction shooter. It is about systems colliding in ways players chose to risk.",
    rows: [
      {
        mechanic: "No Global Match Timer",
        use: "Players leave because the world state, supplies, bodies, loot, and extraction options make leaving wise.",
        risk: "Staying longer means worse weather, fewer reinforcements, more PvE pressure, and more player attention.",
        example: "After securing loot and a body, the squad chooses to stay while helicopters remain disabled and only two reinforcements remain."
      },
      {
        mechanic: "PvE Backbone",
        use: "Patrols, armored enemies, wildlife, infected, monsters, factions, and hazards force movement and interrupt PvP.",
        risk: "Gunfire, helicopters, reinforcement calls, extraction events, and carried loot can pull danger toward the squad.",
        example: "A PvE patrol interrupts a negotiation and creates the dead body that drives the rest of the raid."
      }
    ]
  }
];

export const commentSections = [
  ...zones.map((zone) => ({
    id: zone.id,
    label: zone.label
  })),
  ...dossierSections.map((section) => ({
    id: section.title.toLowerCase().replaceAll(" ", "-"),
    label: section.title
  }))
];

