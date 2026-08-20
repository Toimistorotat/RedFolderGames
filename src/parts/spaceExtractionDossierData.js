export const dossierGroups = [
  {
    id: "dossier-identity",
    index: "01",
    title: "Identity and Design Philosophy",
    range: "Chapters 1–4",
    summary: "The fantasy, tone, setting, and design rules that make extraction tense without making a bad death erase an evening.",
    chapters: [
      {
        number: 1,
        id: "high-level-concept",
        title: "High-Level Concept",
        status: "Core",
        summary: "A co-op-focused PvEvP extraction shooter set in and around an enormous abandoned orbital station.",
        paragraphs: [
          "Players are scavengers who arrive in their own physical spacecraft, choose a dock, enter on foot, complete jobs, fight or negotiate with other crews, recover loot, move physical cargo, rescue downed teammates, and repeatedly return to their ship to deposit what they found.",
          "The station is authored and learnable, but each raid changes its power, access, security, atmosphere, loot, AI movement, damage, transit, and player-created state. There is deliberately no space-combat layer: space is for movement, reconnaissance, relocation, and reading the station from outside."
        ],
        points: [
          "The ship is insertion point, extraction point, temporary safe room, physical stash, cargo bay, medical point, mobile base, progression system, burglary target, and possible theft target.",
          "The long-term campaign may culminate in physically removing and transporting the station AI core while preserving as much of its value as possible."
        ],
        callout: "We can leave now. Do we really want to?"
      },
      {
        number: 2,
        id: "design-philosophy",
        title: "Design Philosophy",
        status: "Core",
        summary: "Stakes should redirect plans and create problems to solve, while ordinary verbs combine into stories larger than their individual mechanics.",
        sections: [
          { title: "Extraction tension without extraction misery", text: "Weapons, backpacks, cargo, and especially ships matter, but stakes are not the same thing as punishment. A bad event should often turn the raid into a rescue, recovery, pursuit, defense, or retreat rather than simply remove a friend from play.", points: ["A downed teammate changes the objective to body recovery.", "An overloaded crew becomes slow and vulnerable.", "A ship breach forces a choice between the current objective and running home.", "A remote ship call becomes a docking-bay defense.", "A wipe leaves carried gear behind while the ship may still save itself unless another crew interferes."] },
          { title: "Simple mechanics, large consequences", text: "Carry, drag, drop, push, pull, load, cut, hack, dock, undock, call, move, steal, revive, and tow are simple verbs. Their physical interaction is the story system: backpacks go on sleds, bodies are carried, machinery needs routes and tools, and ships persist after firefights." },
          { title: "Fun without major accomplishment", text: "Movement, shooting, exploring, driving utility vehicles, recovering from foolish decisions, robbing ships, carrying absurd loot, and wedging a sled in a doorway must be enjoyable before any reward screen. A memorable raid may barely involve the official mission." },
          { title: "Emergent stories over rigid scripting", text: "Contracts provide the first reason to leave the ship. The station, AI, players, loot, and greed determine the actual story.", points: ["A Medical contract can detour into a nearby firefight.", "The winners can loot, say GG, revive one opponent, and continue the original job.", "That detour may overload the crew and force a deposit run before Medical is finished.", "After securing the haul, the crew can still choose another excursion."] }
        ]
      },
      {
        number: 3,
        id: "player-fantasy",
        title: "Player Fantasy",
        status: "Core",
        summary: "You are not a chosen savior. You operate a scavenger ship beside a gigantic abandoned station full of things worth stealing.",
        paragraphs: ["Crews are here because there is money to make. They can be decent people, bastards, bounty hunters, opportunists, explorers, thieves, or friends trying to afford better equipment. The game does not declare whether another scavenger is morally an enemy; they are another person surviving the same place."],
        callout: "Ordinary scavengers, morally flexible choices, extraordinary situations."
      },
      {
        number: 4,
        id: "setting-story-premise",
        title: "Setting and Story Premise",
        status: "Direction",
        summary: "A city-sized station was evacuated, but its infrastructure never stopped trying to perform its old responsibilities.",
        sections: [
          { title: "An abandoned orbital city", text: "The station once supported a huge permanent population with hospitals, shops, homes, factories, transit, security, warehouses, laboratories, power, maintenance, restricted sectors, and docking rings. It is open enough for scavengers, dangerous enough to remain rich, and automated enough to keep functioning. The exact cause of abandonment is intentionally unknown at first." },
          { title: "Not truly dead", text: "Lights activate, doors and elevators work intermittently, cameras observe, cargo systems move objects, maintenance robots repeat old work, announcements address absent residents, power reroutes, bulkheads close, atmosphere stabilizes, and docking control still accepts or rejects vessels." },
          { title: "The AI is not automatically evil", text: "The AI may simply see crews as unauthorized people stealing protected property. Scrap in a public corridor barely matters; cutting into a pharmacy or unbolting a reactor-control component does.", points: ["Trespassing warnings", "Security-drone dispatch", "Doors locked ahead", "Increased surveillance", "Identity recognition in restricted sectors", "Flagged ship registration", "Denied docking authorization", "A squad becoming a known recurring problem"] }
        ]
      }
    ]
  },
  {
    id: "dossier-station",
    index: "02",
    title: "Station and Threat Ecosystem",
    range: "Chapters 5–7",
    summary: "A readable orbital city whose security, machines, creatures, environment, and access state react differently to every incursion.",
    chapters: [
      {
        number: 5,
        id: "enemy-ecosystem",
        title: "Enemy Ecosystem",
        status: "Direction",
        summary: "PvE pressure comes from overlapping systems, not one enemy roster with different health bars.",
        sections: [
          { title: "Security", text: "Cameras, alarms, locked doors, turrets, surveillance drones, armed drones, humanoid robots, and heavy responders scale against what players actually do.", points: ["Restricted entry", "Door destruction", "Hacking", "Protected-property removal", "Attacks on security", "Critical-infrastructure tampering", "Approaching the AI core"] },
          { title: "Maintenance", text: "Cleaning, welding, repair, cargo, and logistics machines are station simulation before they are enemies. A neutral machine might recognize a loaded sled in a logistics lane as station equipment and carry the whole haul away. It did not attack; it simply did its job." },
          { title: "Contained or unknown biology", text: "Some security may be keeping something inside rather than scavengers outside. Candidate creatures track sound or heat, enter unsecured ships, drag bodies away, disrupt electrical infrastructure, or become late-game threats better avoided than fought. The exact roster remains unresolved." },
          { title: "Environmental pressure", text: "Depressurization, outages, broken elevators, lockdowns, hull breaches, radiation, heat, machinery, failed transit, and sealed routes are contextual obstacles. Oxygen should be equipment for a specific airless sector, not a permanent hunger-bar chore." }
        ]
      },
      {
        number: 6,
        id: "station-main-map",
        title: "The Station as the Main Map",
        status: "Core",
        summary: "The geography stays recognizable so knowing the place matters; the state changes so knowing it never removes uncertainty.",
        sections: [
          { title: "Authored geography", text: "Veterans should orient by landmarks and sound: above Medical, two decks below Cargo transit, beneath Commercial, beside Security, or near the food court. Districts must not dissolve into interchangeable gray corridors." },
          { title: "Dynamic state", text: "Locked doors, dead lifts, power, atmosphere, security, maintenance passages, patrols, loot, damage, player changes, docks, and transit vary between raids. Knowing the usual route makes its closure meaningful." }
        ],
        table: [
          ["Medical", "Hospitals, pharmacies, treatment, labs, locked medical storage"],
          ["Commercial", "Shops, food courts, civilian social space, storefront sightlines"],
          ["Habitation", "Apartments, personal storage, remains, environmental storytelling"],
          ["Industrial / Engineering", "Heavy machinery, power, vehicles, large components, critical security"],
          ["Cargo / Logistics", "Warehouses, loading areas, sleds, tugs, containers, wide routes"],
          ["Security", "Weapons, credentials, surveillance, restricted areas, heavy response"],
          ["Research", "Rare technology, prototypes, story data, containment, sealed danger"],
          ["Docking rings", "Player ships, terminals, ambushes, entry, extraction, and theft"]
        ]
      },
      {
        number: 7,
        id: "space-exterior",
        title: "Space and Exterior Movement",
        status: "Core",
        summary: "Third-person exterior movement is simple reconnaissance and relocation, explicitly not a separate dogfighting game.",
        sections: [
          { title: "No space combat", text: "No cannons, missiles, or fighter layer. Ships reposition, find docks, scout other vessels, inspect windows, and choose the next entry." },
          { title: "Simple third-person control", text: "Taking the bridge leaves first-person movement for an exterior camera centered on the station. A conceptual scheme uses W/S for vertical movement and A/D around the circumference. Exact controls can change; immediate readability and no flight-simulator burden cannot." },
          { title: "Imperfect reconnaissance", text: "Crews may see docked ships, activity, lights, movement, muzzle flashes, damage, occupied ports, or a vessel that has not moved. A ship proves another crew entered nearby, not where they are now. That uncertainty enables avoidance, hunting, ambush, and burglary." }
        ]
      }
    ]
  },
  {
    id: "dossier-ship",
    index: "03",
    title: "Ship Systems",
    range: "Chapters 8–11",
    summary: "A walkable, persistent vessel whose rooms, security, AI, storage, and finite hull volume shape every expedition.",
    chapters: [
      {
        number: 8,
        id: "the-ship",
        title: "The Ship",
        status: "Core",
        summary: "The starter vessel is a physical series of defensive and functional layers, not a menu or disposable extraction animation.",
        table: [["01", "Dock / exterior connection"], ["02", "Airlock"], ["03", "Cargo staging"], ["04", "Interior security door"], ["05", "Central corridor"], ["06", "Cargo / storage left"], ["07", "Medical right"], ["08", "One or two forward doors"], ["09", "Command room / bridge"]],
        sections: [
          { title: "Cargo staging", text: "Large objects and a starter sled remain visibly parked after the airlock. Real volume creates a scrappy Tetris problem rather than a cargo-capacity statistic." },
          { title: "Under-hull storage", text: "An upgraded platform, crane, or lift secures a sled or object, lowers it under the hull, and returns the platform so another load can enter. The upgrade changes crew behavior rather than merely adding slots." },
          { title: "Cargo hold", text: "Smaller loot and containers sit behind multiple doors. A return is a partial extraction: cargo is safer than in a backpack, but still breachable while the ship remains docked." },
          { title: "Medical room", text: "The medbay restores critical teammates, stores recovery charges, and can gain faster or multiple beds. It competes directly with cargo volume." },
          { title: "Bridge", text: "The deeper command room pilots, undocks, leaves, relocates, manages systems, and hosts the console required for full ownership override. Burglars need storage; ship thieves must reach the bridge." }
        ]
      },
      {
        number: 9,
        id: "ship-security-breaching",
        title: "Ship Security and Breaching",
        status: "Core",
        summary: "Docked ships are locked, layered, and breachable; burglary and permanent ownership theft are fundamentally different events.",
        points: ["Exterior airlock", "Staging bulkhead", "Cargo security", "Medical door", "Bridge bulkheads", "Aftermarket reinforced doors"],
        sections: [
          { title: "Escalating alerts", text: "Owners receive airlock-tamper, exterior-breach, inner-bulkhead, command-deck, and ownership-override warnings. Each deeper alert asks whether to abandon the current job, send one person, or gamble." },
          { title: "Burglary", text: "Normal breaching tools can reach cargo and equipment. Attackers need not take the vessel." },
          { title: "Full theft", text: "A legendary or similarly rare ownership device must reach the bridge and run a defendable hack while owners receive an emergency alert. Consuming the device on success is a strong candidate rule, not a final decision." },
          { title: "A stolen ship creates a new problem", text: "Its cargo, modules, medbay, vehicles, sleds, rare equipment, investment, and sentimental value all matter. Stranded owners might reclaim or steal a ship, find public extraction, negotiate a ride, or eventually repair an abandoned vessel. Not every solution is confirmed; the principle is that loss changes the objective instead of ending play." }
        ],
        timeline: ["Locate the vessel and dock nearby", "Reach its station-side dock", "Breach the exterior", "Fight through layers", "Reach the bridge", "Connect rare override", "Defend the timed hack", "Transfer ownership"]
      },
      {
        number: 10,
        id: "ship-progression-tradeoffs",
        title: "Ship Progression and Module Tradeoffs",
        status: "Core",
        summary: "Every hull has finite interior volume; better ships loosen tradeoffs but never erase them.",
        table: [
          ["Cargo", "Hold, under-hull lift, multiple sleds, vehicle bay / weaker medical and security"],
          ["Medical", "Beds, charges, faster recovery, prisoner support / less cargo and vehicle space"],
          ["Security", "Bulkheads, locks, cameras, alerts, remote doors / less cargo and medical volume"],
          ["General purpose", "Reasonable capability everywhere / no exceptional specialization"],
          ["Larger hull", "Several strong systems at once / higher cost, visibility, theft value, dock limits, and walking distance"]
        ],
        points: ["Module families include cargo, medical, security, vehicles, AI/navigation, crew space, and utility.", "Larger-ship disadvantages remain open to tuning."]
      },
      {
        number: 11,
        id: "ship-ai-relocation",
        title: "Ship AI and Remote Relocation",
        status: "Direction",
        summary: "A limited starter AI can become an earned navigation system that physically moves extraction between compatible docks.",
        sections: [
          { title: "Starter AI", text: "Baseline functions can include docking help, vital monitoring, intrusion warnings, and emergency autonomous return—not necessarily remote relocation." },
          { title: "Navigation upgrade", text: "An achievable early-to-mid-early upgrade receives terminal requests, undocks, traverses the station exterior, redocks, and improves warnings. Manual piloting still provides exact control and scouting." },
          { title: "Remote call", text: "A player reaches a powered compatible terminal, authenticates briefly, commits the request, and then remains free to defend, organize cargo, stabilize a friend, or watch corridors. Travel takes seconds nearby, about a minute at moderate range, and potentially several minutes across the station; exact values remain balance questions." },
          { title: "Exposure and restrictions", text: "Docking boards, a visible moving ship, machinery, and audio advertise arrival like an extraction helicopter. Calls can fail because control lacks power, clamps are damaged, the dock is occupied or locked down, the terminal is broken, or the AI is insufficient." }
        ]
      }
    ]
  },
  {
    id: "dossier-raid",
    index: "04",
    title: "Raid, Missions, Economy, and Logistics",
    range: "Chapters 12–16",
    summary: "The ordinary raid, useful progression, physical cargo, and mundane vehicles form the game even when no rare endgame event occurs.",
    chapters: [
      {
        number: 12,
        id: "ordinary-raid-loop",
        title: "Ordinary Raid Loop",
        status: "Core",
        summary: "Every safe return to the vessel is a small extraction inside the larger raid.",
        timeline: ["Enter with the squad ship", "Scout and choose a port", "Dock and review contracts", "Equip weapons, utilities, medicine, and sleds", "Leave toward an objective", "Meet AI, loot, hazards, and crews", "Deviate when opportunity appears", "Complete or abandon jobs", "Fill packs and acquire physical cargo", "Return, deposit, heal, and resupply", "Undock—or open the airlock again"]
      },
      {
        number: 13,
        id: "missions-contracts",
        title: "Missions and Contracts",
        status: "Direction",
        summary: "A contract answers why the crew leaves now; it should not dictate the whole session.",
        points: ["Medical or specific-supply retrieval", "Station-data recovery", "Equipment restoration or inspection", "Missing-crew search", "Container recovery", "Restricted-sector entry", "Research equipment", "Weapons or security hardware", "Bounties", "Story data", "Infrastructure repair or activation"],
        paragraphs: ["Story jobs begin as paid scavenger work: retrieve an archive, prototype, component, or investigate unexplained power. Some require restoring communications first. Profitable jobs gradually reveal station history and teach how infrastructure connects; the player does not begin as a detective or hero."]
      },
      {
        number: 14,
        id: "loot-economy",
        title: "Loot and Economy",
        status: "Direction",
        summary: "The economy can stay understandable; its identity comes from how high-value objects are accessed and transported.",
        sections: [
          { title: "Loot", text: "Credits, valuables, crafting material, weapons and parts, armor, utilities, medicine, ship components, vehicle parts, rare access tools, hacking devices, and large physical cargo." },
          { title: "Containers", text: "Extracted containers can process into parts, complete weapons, utilities, and rare materials, with different container families producing different loot." },
          { title: "Crafting and upgrades", text: "Recovered parts craft, improve, and repair weapons and equipment; build utilities; upgrade ship modules, cargo systems, AI, and vehicles. Expensive guns should not make all cheap guns irrelevant." },
          { title: "Capability creates access", text: "Torches open seals; credentials bypass doors; hacks reach systems; oxygen enters depressurized sectors; lifting tools recover large objects; scanners reveal information; stabilizers protect fragile cargo; upgraded AI relocates the ship." }
        ]
      },
      {
        number: 15,
        id: "physical-cargo",
        title: "Physical Cargo",
        status: "Core",
        summary: "The most valuable things occupy space, reveal intent, and can become somebody else’s objective.",
        points: ["Containers", "Industrial machines", "Server units", "Medical equipment", "Reactor components", "Ship parts", "Sealed weapon crates", "Research equipment", "Potential biological or alien objects"],
        sections: [
          { title: "Cargo sled", text: "A low-friction sci-fi flatbed carries backpacks, containers, large objects, bodies, and downed teammates. It is a physical warehouse tool, not extra inventory slots." },
          { title: "Load behavior", text: "Weight slows acceleration and braking; size hurts turning and blocks doorways; tight passages become inaccessible; extreme loads may need two players. The friction should create co-op, not deliberate misery." },
          { title: "Information and theft", text: "An empty sled headed to Engineering hints at intent; a loaded one broadcasts greed. During a fight it can be guarded, hidden, abandoned, or stolen whole without individually looting every item." }
        ]
      },
      {
        number: 16,
        id: "vehicles",
        title: "Vehicles",
        status: "Direction",
        summary: "Airport carts, electric tugs, bikes, and service vehicles solve scale and logistics without becoming tanks.",
        sections: [
          { title: "Utility", text: "Vehicles move crews through wide routes, tow sleds, carry limited cargo or incapacitated players, and make long-distance traversal enjoyable." },
          { title: "Natural limits", text: "They excel in cargo tunnels, industry, service roads, and promenades but fail in stairs, offices, rooms, and maintenance corridors. Whether the tug fits in the elevator should sometimes become a terrible practical experiment." },
          { title: "Knowledge and persistence", text: "Players learn vehicle-friendly routes such as a service tunnel under Medical. A capable cargo lift can extract a vehicle for repairs, battery upgrades, towing improvements, attachments, and later raids. A bike might consume starter staging space; a tug needs a real bay." },
          { title: "Convoys", text: "A tug towing one or more sleds is efficient, visible, and extremely stealable. An ambusher can drive away with the entire convoy." }
        ]
      }
    ]
  },
  {
    id: "dossier-pvevp",
    index: "05",
    title: "PvEvP, Bounties, Recovery, and Extraction",
    range: "Chapters 17–22",
    summary: "Socially ambiguous encounters, physical bodies, fair wipes, and the repeated choice to leave or risk another excursion.",
    chapters: [
      { number: 17, id: "pvp-philosophy", title: "PvP Philosophy", status: "Core", summary: "Other crews are competitors, not automatically red enemies.", points: ["Ignore", "Warn away", "Negotiate passage", "Trade information", "Temporarily cooperate", "Revive", "Rob", "Hunt", "Steal cargo", "Steal a ship"], paragraphs: ["Proximity chat supports mercy without forcing it. Winners may loot what they need, say GG, revive one survivor, ask them to recover their friends, and continue their original job."] },
      { number: 18, id: "bounty-system", title: "Bounty System", status: "Direction", summary: "Repeated predatory behavior creates hunting pressure, while captures connect combat to body logistics.", sections: [
        { title: "Pattern, not perfect morality", text: "Signals can include first meaningful damage, pre-kill damage balance, repeated initiation, kills per raid, and movement toward unrelated crews. One defensive kill may do little; repeated hunting becomes clearer. The system should not pretend it understands every social context." },
        { title: "Alive or dead", text: "Proof of a kill pays less; delivering a living target pays more. A wanted player becomes physical cargo tied to carrying and medbay systems." },
        { title: "Rescue mission", text: "Capturing instead of killing gives the target’s squad a player-created objective: intercept the hunters before delivery." }
      ] },
      { number: 19, id: "death-dbno-recovery", title: "Death, DBNO, and Recovery", status: "Direction", summary: "A downed friend creates a rescue problem instead of a long spectator sentence.", sections: [
        { title: "DBNO", text: "Critical incapacity comes before disappearance. Teammates can stabilize or partially recover a player depending on injury severity; exact medical simulation remains open." },
        { title: "Rephabilitator", text: "The working-name field device is valuable, slot-consuming, battery- or charge-limited, and can restore a teammate in poor rather than perfect condition. Name, rarity, charges, injury cost, and enemy use remain unresolved." },
        { title: "Physical recovery", text: "Without the device, carry, shoulder, drag, sled, or drive the body to the ship medbay. Enemy bodies obey the same rules and can be looted, hidden, recovered, captured, or possibly revived." },
        { title: "Keep players involved", text: "Possible partial states include slow crawling, voice, looking around while carried, pings, or a sidearm. Details are open; minimizing inactive co-op time is not." }
      ] },
      { number: 20, id: "wipes-ship-survival", title: "Squad Wipes and Ship Survival", status: "Direction", summary: "A ship is lost because something happens to it, not because its crew died elsewhere.", timeline: ["Crew vitals disappear", "Emergency countdown starts", "Ship stays docked for a recovery window", "If untouched, it seals and returns autonomously", "Stored cargo survives; carried loot stays in the station"], paragraphs: ["A possible same-instance re-entry lets the crew race back for bodies, gear, sled, and ship while their killers approach the same vessel. Matchmaking details are unresolved. During the countdown, others can still burglarize it or use a rare override; if physically stolen, it is genuinely lost."] },
      { number: 21, id: "extraction", title: "Extraction", status: "Core", summary: "There is no magical green zone.", timeline: ["Return to the ship", "Get everyone aboard", "Close and secure it", "Undock", "Leave the station raid area"] },
      { number: 22, id: "one-more-loop", title: "The ‘One More’ Loop", status: "Core", summary: "A safe deposit is success, but not necessarily the end of the raid.", paragraphs: ["After banking contract rewards, PvP loot, backpacks, a sled, and a recovered teammate, the crew can heal, change gear, take ammunition, empty staging, and lower cargo into the hold. Then somebody points out that Industrial is nearby. The escalation is voluntary: one more expedition out of the ship, not necessarily one more entire match."], callout: "The airlock is the game’s most important risk button."
      }
    ]
  },
  {
    id: "dossier-campaign",
    index: "06",
    title: "Campaign and AI-Core Heist",
    range: "Chapters 23–27",
    summary: "Profitable work teaches crews how to steal the station’s brain, and removing it destroys the systems they learned to trust.",
    chapters: [
      { number: 23, id: "story-to-core", title: "Story Progression Toward the AI Core", status: "Direction", summary: "The core is the ultimate score because it is valuable, not because the player becomes a moral savior.", paragraphs: ["Every major station may need a rare, difficult-to-manufacture core. Removing it can cripple or kill the station, and the crew does it anyway because scavenger logic says stealing its brain makes them rich."], points: ["Access credentials", "Restricted-route knowledge", "Specialized cutting tools", "Power-routing control", "Security bypasses", "Heavy transport", "A large-enough ship", "Stabilization equipment", "Rare disconnect tools"] },
      { number: 24, id: "core-physical-cargo", title: "The AI Core as Physical Cargo", status: "Core", summary: "A refrigerator-sized, fragile object turns the finale into a logistics operation whose physical condition is the score.", sections: [
        { title: "Transport", text: "It needs correct tools, cargo equipment, perhaps a specialized sled, a route, and enough ship capacity. It never shrinks into an inventory icon." },
        { title: "Theoretical value", text: "A pristine example value is 1,000,000 credits—not a final economy number. Wrong cuts, ripped cables, poor tools, missing stabilization, drops, wall impacts, sharp acceleration, gunfire, environmental damage, and bad loading reduce it." },
        { title: "Protection", text: "Cushioned mounts, magnetic stabilizers, shock isolation, and dedicated frames preserve value at the cost of money, preparation, equipment space, and time." },
        { title: "Abandoning perfection", text: "A careful million-credit operation can degrade through 940k, 810k, 650k, 420k, and 170k and still count as extraction. When pressure closes in, ‘do not touch the wall’ becomes ‘I do not care—move it.’" }
      ] },
      { number: 25, id: "removing-core", title: "Removing the Core Changes the Station", status: "Core", summary: "The final heist removes the intelligence coordinating the environment, converting familiar geography into a station-wide crisis.", points: ["Lights fail", "Doors fail open or closed", "Elevators stop", "Security enters autonomous emergency behavior", "Maintenance freezes or becomes unpredictable", "Atmosphere degrades", "Containment fails", "Sealed threats escape", "Docking becomes unreliable"], paragraphs: ["A central-control-loss warning tells experienced crews exactly what happened: somebody is moving the station’s most valuable object. There need not be a conventional boss. Other scavengers can kill or drive off the prepared crew and take the physical core themselves; possession at departure, not deserving it, decides ownership."] },
      { number: 26, id: "larger-campaign", title: "Possible Larger Campaign Structure", status: "Optional", summary: "Individual huge stations could become campaign-scale targets with their own history, layout, AI, threats, districts, missions, and core.", paragraphs: ["After extracting or destroying one station’s central value, crews could move to another derelict with a different failure. This expansion path is not required for the base concept."] },
      { number: 27, id: "replayability", title: "Replayability", status: "Direction", summary: "Replayability comes from recognizing change inside a known place, not regenerating an anonymous maze every week.", points: ["Contracts and loot distributions", "Station conditions and route access", "AI positions and security responses", "Different player populations and docked ships", "Bounties and burglaries", "Physical cargo opportunities", "Utility access and ship builds", "Available vehicles", "Story access to deeper areas", "Repeated excursions during one raid"] }
    ]
  },
  {
    id: "dossier-scenarios",
    index: "07",
    title: "Playable Scenario Files",
    range: "Chapters 28–33",
    summary: "Six concrete raids show how small systems combine into objectives the game never had to script.",
    chapters: [
      { number: 28, id: "scenario-ordinary-raid", title: "Scenario: Ordinary Raid", status: "Scenario", summary: "A Medical retrieval turns into a PvP detour, mercy, overload, a successful deposit, and another voluntary excursion.", timeline: ["Four friends spot two ships near Commercial and dock by Medical", "Bring weapons, a cutter, one Rephabilitator, and a sled", "Leave for Medical", "Hear gunfire and third-party it", "Win, loot, revive one enemy, say GG, and leave", "Cut into the Medical objective", "Become overloaded", "Return and stage PvP loot, rewards, medicine, and materials", "Notice Industrial nearby while safe", "Open the airlock for a second, unpredictable excursion"] },
      { number: 29, id: "scenario-remote-rescue", title: "Scenario: Remote Ship Rescue", status: "Scenario", summary: "A body, an empty field-revival tool, and a distant ship turn a nearby dock into an improvised defense mission.", timeline: ["Place the teammate on the sled", "Reach a nearby dock", "Authenticate at its terminal", "Call the upgraded ship AI", "Wait several minutes across the station", "Defend body and cargo while others notice the inbound vessel", "Rush the body into Medical", "Restore the teammate", "Leave or continue"] },
      { number: 30, id: "scenario-burglary", title: "Scenario: Ship Burglary", status: "Scenario", summary: "An Engineering run is interrupted by increasingly serious airlock alerts.", timeline: ["Exterior tamper warning", "Crew debates returning", "Exterior breach confirms entry", "Owners run home", "Thieves find the staged loaded sled", "They roll the entire haul into the station", "Owners see it vanish around the corner"] },
      { number: 31, id: "scenario-full-theft", title: "Scenario: Full Ship Theft", status: "Scenario", summary: "Exterior scouting, one legendary override, layered breaching, and a timed bridge defense produce an unscripted grand theft.", timeline: ["Spot an expensive vessel", "Dock nearby and cross the station", "Breach and fight inward", "Connect the command override", "Owners abandon their loot run", "Defend until ownership changes", "Decide whether to split across two ships, abandon the starter, use the prize, or leave it docked"] },
      { number: 32, id: "scenario-bounty-capture", title: "Scenario: Bounty Capture and Rescue", status: "Scenario", summary: "A wanted player is worth more alive, turning their body into cargo and their teammates into pursuers.", timeline: ["Hunters down the target", "Stabilize rather than finish", "Load the captive on a sled", "Move toward a ship or delivery point", "Target’s crew pursues", "Hunters decide whether the higher live payout is worth the rescue risk"] },
      { number: 33, id: "scenario-core-heist", title: "Scenario: Final AI-Core Heist", status: "Scenario", summary: "A prepared million-credit operation degrades into a desperate escape measured by the condition of the thing actually brought home.", timeline: ["Bring access, disconnect tools, stabilized sled, ship capacity, medicine, and route knowledge", "Damage a connection and lose value", "Load the core and trigger security", "Take gunfire and lose more value", "Shut down the AI and lose the normal elevator", "Hit a bulkhead on the worse route", "Broadcast the theft station-wide", "Fight off another hunting crew", "Abandon perfect handling", "Extract the damaged core; remaining condition determines sale value"] }
    ]
  },
  {
    id: "dossier-status",
    index: "08",
    title: "Design Status",
    range: "Chapters 34–38",
    summary: "Capability progression, the distinctive system stack, ten binding pillars, every unresolved question, and the final identity statement.",
    chapters: [
      { number: 34, id: "progression-philosophy", title: "Progression Philosophy", status: "Core", summary: "Progression expands capability more than raw combat numbers.", table: [["Better cutter", "New sealed rooms"], ["Navigation AI", "Remote ship calls"], ["Larger hull", "Strong cargo and medical together"], ["Cargo lift", "Multiple large objects"], ["Vehicle bay", "Persistent tug"], ["Stabilizer", "Fragile high-value cargo"], ["Security", "Longer burglary response"], ["Medbay", "More teammate recoveries"], ["Credentials", "Security-system access"]] },
      { number: 35, id: "distinctive-features", title: "What Makes the Concept Distinctive", status: "Core", summary: "The identity is not ‘a familiar extraction game in space’; it is the way these systems reinforce one another.", points: ["The ship is physically present", "The ship can move without ending the raid", "It can be robbed or stolen", "Depositing does not end the session", "Loot is physical and awkward", "Bodies remain meaningful", "Vehicles are mundane logistics tools", "The station is learnable", "PvP is socially ambiguous", "AI and security react to meaningful property damage and theft", "The final story objective is still scavenging"] },
      { number: 36, id: "core-design-pillars", title: "Ten Core Design Pillars", status: "Core", summary: "These rules are the current test for whether a mechanic belongs.", table: [["01", "Ship as mobile extraction: physical, customizable, movable, vulnerable"], ["02", "Physical logistics: cargo, bodies, vehicles, sleds, doors, and space"], ["03", "Friendly stakes: rescue before spectator removal"], ["04", "Authored geography with changing power, access, AI, loot, and hazard state"], ["05", "PvEvP without mandatory hostility"], ["06", "Capability-based progression"], ["07", "Player-created objectives"], ["08", "Greed as pacing"], ["09", "Story learned through profitable scavenging"], ["10", "AI core as the ultimate heist"]] },
      { number: 37, id: "open-questions", title: "Current Open Questions", status: "Unresolved", summary: "These are intentionally public design questions, not confirmed promises.", questions: [
        ["Exact title", "The project still has a working title."],
        ["Cause of abandonment", "Biological failure, corporate evacuation, AI crisis, external discovery, or a combination remain possible."],
        ["Creature design", "Contained biology is a strong direction; its roster and behaviors are unfinished."],
        ["Injury / DBNO", "Bleed-out, crawling, partial revives, field recovery, and duration need design."],
        ["Rephabilitator", "One or several charges, rarity, size, injury cost, and enemy revival remain open."],
        ["Squad wipe", "Autonomous return is preferred; same-instance re-entry and recovery windows need technical and balance work."],
        ["Bounty logic", "It should recognize hunting patterns without claiming perfect moral blame."],
        ["Ship override", "Consuming the rare ownership tool on use remains tunable."],
        ["Stolen-ship persistence", "Names, registration, appearance, later recognition, and reclamation are attractive but infrastructure-heavy."],
        ["Station generation", "Dynamic state is preferred over procedural corridors; limited procedural interiors may still be explored."],
        ["Station cycle / sessions", "Join-in-progress activity, matchmaking, and persistence rules are undecided."],
        ["Economy scale", "The one-million-credit core is an illustrative number, not final balance."],
        ["External home base", "The scavenger port, market, hub, and wider meta-game are not yet designed in detail."]
      ] },
      { number: 38, id: "final-identity", title: "Final Identity", status: "Core", summary: "A scavenger job repeatedly becomes something stranger because the station, the ship, friends, and greed keep creating new objectives.", paragraphs: ["You arrive in a ship that is home, stash, ambulance, garage, and escape. A job leads to gunfire; gunfire leads to a locked room; a friend insists an industrial machine is coming home; another friend goes down; the ship is across the station; a remote call attracts another crew; the dock becomes a firefight; and eventually everyone gets aboard."], callout: "You are safe. You can leave. But there is room under the hull, Industrial is two corridors away, and somebody opens the airlock again. That is the game."
      }
    ]
  }
];

export const dossierCoverageMap = dossierGroups.flatMap((group) =>
  group.chapters.map((chapter) => ({ chapter: chapter.number, id: chapter.id, groupId: group.id }))
);

export const spaceCommentSections = [
  { id: "station-briefing", label: "Station Briefing" },
  { id: "ship-cutaway", label: "Ship Cutaway" },
  { id: "station-map", label: "Station Map" },
  { id: "station-state", label: "Station State" },
  { id: "physical-logistics", label: "Physical Logistics" },
  { id: "social-encounters", label: "Social Encounters" },
  { id: "recovery", label: "Recovery" },
  { id: "ship-security", label: "Ship Security" },
  { id: "ship-progression", label: "Ship Progression" },
  ...dossierGroups.map((group) => ({ id: group.id, label: group.title })),
  { id: "scenario-ordinary-raid", label: "Scenario: Ordinary Raid" },
  { id: "scenario-remote-rescue", label: "Scenario: Remote Rescue" },
  { id: "scenario-burglary", label: "Scenario: Ship Burglary" },
  { id: "scenario-full-theft", label: "Scenario: Full Ship Theft" },
  { id: "scenario-bounty-capture", label: "Scenario: Bounty Capture" },
  { id: "scenario-core-heist", label: "Scenario: Core Heist" },
  { id: "ai-core", label: "AI Core Finale" }
];
