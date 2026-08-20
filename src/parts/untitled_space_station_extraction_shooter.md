# Untitled Space Station Extraction Shooter

> **Working design document**  
> This document consolidates the full game concept discussed so far. It intentionally includes both ideas that feel like part of the current core and ideas that are still optional or unresolved. Where something has not been fully decided, it is marked accordingly rather than silently treating it as final.

---

## 1. High-Level Concept

This is a co-op-focused PvEvP extraction shooter set around an enormous abandoned space station.

Players are scavengers. They arrive in their own physical spacecraft, dock somewhere on the station, enter on foot, complete jobs, fight or negotiate with other scavengers, recover loot, move physical cargo, rescue downed teammates, and repeatedly return to their ship to deposit what they have found.

The ship is not simply a menu, lobby, or animation that appears at extraction. It exists physically in the raid and is one of the game's most important systems.

It acts as:

- The squad's insertion point.
- The squad's extraction point.
- A temporary safe room.
- A physical stash during the raid.
- A cargo bay.
- A medical and recovery point.
- A mobile base that can relocate around the station.
- A progression system.
- A target that other players can raid.
- Something that can potentially be stolen outright.

The station itself is a huge authored place with recognizable districts and routes. Its geography is intended to become familiar over time, but the state of the station changes between raids through power failures, locked doors, security activity, environmental problems, loot redistribution, AI movement, damaged infrastructure, and player activity.

There is no space-combat layer. Ships do not dogfight, fire giant laser cannons, or function like combat fighters. Space exists primarily for movement, reconnaissance, relocation, and reading the station from the outside.

The long-term story may eventually lead to the station's AI core: one of the most valuable pieces of technology on the entire station. The ultimate heist would be to physically remove that core, transport it through the failing station, and escape with it while preserving as much of its value as possible.

At its heart, the game is about a very simple repeating question:

> **We can leave now. Do we really want to?**

---

# 2. Design Philosophy

## 2.1 Extraction tension without extraction misery

The concept is heavily informed by the type of fun found in games like DMZ: an extraction structure where death and loss matter, but where the game is still enjoyable to play casually with friends.

The goal is not to create the most brutal inventory-loss simulator possible.

The goal is to create stakes that make ordinary moments exciting without making one bad death feel like the player has wasted an evening.

A weapon can matter.
A backpack can matter.
A cargo haul can matter.
A ship can matter enormously.

But the game should distinguish between **stakes** and **punishment**.

The strongest consequence should often be that the player's plan changes rather than that the player is simply removed from the game.

Examples:

- A teammate is critically downed, so the group abandons its current objective and starts carrying them back to the ship.
- A squad gets too much cargo to move efficiently, so it becomes slow and vulnerable.
- Someone breaks into the squad's ship, forcing everyone to decide whether to abandon what they are doing and run back.
- A remote ship call turns into a docking-bay defense while the vessel travels around the station.
- A squad wipe leaves bodies and carried loot behind, but the ship may still be able to save itself unless another crew steals it.

The game should constantly create problems that players can solve rather than simply declaring failure.

---

## 2.2 Simple mechanics with disproportionately large consequences

A major creative principle is the use of very understandable, almost mundane verbs that become interesting because they physically interact with one another.

Examples include:

- Carry.
- Drag.
- Drop.
- Push.
- Pull.
- Load.
- Cut.
- Hack.
- Dock.
- Undock.
- Call the ship.
- Move the ship.
- Steal.
- Revive.
- Tow.

These mechanics should not exist only as animations. They should be allowed to create situations.

A player does not merely gain `+8 inventory slots`.
They put physical backpacks onto a cargo sled.

A dead teammate is not merely a revive icon.
Their body can be carried or dragged.

A huge valuable machine is not reduced to a small inventory item.
The group may need a sled, a tug, a large enough ship, and enough time to physically move it.

A ship is not automatically deleted when its owners lose a firefight.
It remains somewhere in the station ecosystem and can potentially save itself, be looted, or be stolen.

The game should get stories from these interactions rather than relying primarily on scripted cinematic events.

---

## 2.3 The game should remain fun even when the player accomplishes very little

One of the biggest lessons behind the concept is that extraction stakes cannot be the only thing making a game enjoyable.

Movement, shooting, physical interactions, getting into trouble with friends, recovering from stupid decisions, exploring, driving utility vehicles, carrying absurd loot, robbing another ship, or getting a cargo sled stuck in a doorway should all be enjoyable even before the reward screen appears.

The game should support the kind of session where the official mission was almost irrelevant because the squad spent most of the raid doing something unexpected.

---

## 2.4 Emergent stories over rigid mission scripting

Missions provide direction, but they are not meant to dictate the entire raid.

The game gives players an initial reason to leave the ship.
The station, AI, other players, loot, and the squad's own greed create what actually happens.

A medical job might become:

1. Travel toward Medical.
2. Hear gunfire nearby.
3. A loot-goblin teammate convinces everyone to third-party it.
4. Win the fight.
5. Say GG to the other squad.
6. Loot them.
7. Potentially revive one enemy and tell them to recover their friends.
8. Continue to Medical anyway.
9. Finish the original job.
10. Realize everyone is now overloaded because of the earlier fight.
11. Return to the ship and deposit the haul.
12. Decide whether to extract or go back out again.

The original job mattered because it started the movement through the station, but it was not the entire story.

---

# 3. Player Fantasy

The player is not a chosen hero, elite commander, or destined savior.

The basic fantasy is much more ordinary:

> **You own or operate a scavenger ship, and there is a gigantic abandoned station full of things worth stealing.**

The players are scavengers because there is money to be made.

They can be decent people, complete bastards, bounty hunters, opportunists, explorers, thieves, or simply a friend group trying to bring home enough valuable material to improve their equipment.

The game does not need to tell the player whether another scavenger is morally an enemy.

Other crews are simply other people operating in the same dangerous environment.

---

# 4. Setting and Story Premise

## 4.1 The station

The primary setting is an enormous abandoned orbital space station.

The station should feel closer to a city than a traditional small sci-fi facility.

Possible districts include:

- Medical.
- Commercial.
- Habitation.
- Industrial.
- Cargo and logistics.
- Security.
- Research.
- Engineering.
- Power generation.
- Transportation hubs.
- Docking rings.
- Maintenance sectors.
- Restricted or sealed areas.

The station may once have supported an enormous permanent population. It had hospitals, shopping areas, housing, industrial machinery, transportation systems, security infrastructure, warehouses, laboratories, and everything necessary to keep a large orbital settlement operating.

At some point it was abandoned or evacuated.

Exactly why does not need to be immediately explained to the player.

The important early truth is simple:

- The station is abandoned enough that scavengers can enter it.
- It is dangerous enough that it has not been stripped clean.
- It still contains extraordinary amounts of valuable technology.
- Many of its automated systems still function.

---

## 4.2 The station is not truly dead

A key story and atmosphere concept is that the station continues operating long after the human population disappeared.

Examples:

- Lights still activate.
- Doors still lock and unlock.
- Elevators may work.
- Security cameras still function.
- Cargo systems still move objects.
- Maintenance robots continue performing old tasks.
- Announcements play for people who are no longer there.
- Power gets rerouted.
- Bulkheads close.
- Atmospheric controls continue attempting to stabilize sectors.
- Docking systems continue accepting or rejecting vessels.

The station can therefore feel abandoned without feeling inert.

Something is still coordinating much of this behavior: the station AI.

---

## 4.3 The AI does not need to be evil

The station AI should not automatically fall into the standard "humans are a virus" villain role.

A more interesting possibility is that it is simply continuing to perform its original responsibilities.

The player is, from its perspective, an unauthorized scavenger entering private or restricted property and removing station assets.

At first, the player may barely matter.

Steal a few pieces of scrap in a public area and nothing significant happens.

Break into a restricted pharmacy or remove an expensive industrial component and the response becomes stronger.

The more important the player becomes, the more directly the station begins to recognize them.

Possible escalation:

- Basic trespassing warnings.
- Security drones dispatched.
- Doors locked ahead of the crew.
- Increased surveillance.
- Restricted sectors recognizing player identity.
- A specific ship registration being flagged.
- Docking authorization being denied.
- The squad becoming a known recurring problem to station security.

This allows the station itself to slowly become aware of the player's growing impact.

---

# 5. Enemy Ecosystem

The PvE side should not rely on a single enemy type.

The station can support several overlapping categories of AI.

## 5.1 Security systems and security units

Security is the most obvious baseline PvE force.

Possible units include:

- Small surveillance drones.
- Armed security drones.
- Humanoid security robots.
- Automated turrets.
- Heavy security response units.
- Camera networks.
- Locked security doors.
- Alarm systems.

The most important behavior is that security does not necessarily treat every player action equally.

The station can react more strongly to:

- Entering restricted areas.
- Breaking doors.
- Hacking systems.
- Removing protected equipment.
- Attacking security units.
- Tampering with critical infrastructure.
- Attempting to reach the station AI core.

This makes valuable loot itself capable of generating PvE pressure.

The junk lying on the floor may not matter.
The intact reactor-control component bolted into Engineering probably does.

---

## 5.2 Maintenance machines

Maintenance robots are not necessarily enemies.

They are part of the station simulation.

They may:

- Clean corridors.
- Repair walls.
- Weld damaged structures.
- Move station cargo.
- Restore systems.
- Operate automated doors or machinery.
- Continue ancient maintenance routines with no concern for the scavengers around them.

Their neutrality can create comedy and emergent problems.

Example:

A squad leaves a loaded cargo sled in an automated logistics lane.
A maintenance or cargo machine recognizes it as station equipment and begins moving it somewhere else.

The players are now chasing a machine that accidentally stole their entire haul.

The system is not hostile.
It is simply doing its job.

---

## 5.3 Contained or unknown biological threats

Some station sectors may have been sealed for years.

The player initially assumes security is keeping scavengers out.

Eventually the player learns that some security measures may have been keeping something else **inside**.

The game can include creatures or biological threats, but they should ideally have distinct behaviors instead of simply being different health bars.

Possible concepts discussed include:

- Creatures attracted to sound.
- Creatures that hunt heat.
- Small organisms that can enter an unsecured ship.
- Creatures that drag bodies away.
- Creatures that feed on or disrupt electrical infrastructure.
- Large late-game creatures that are better avoided than directly fought.

These threats help justify why some of the most valuable sectors have not already been fully looted.

---

## 5.4 The station itself as environmental pressure

The environment can become an enemy without literally attacking the player.

Possible hazards include:

- Depressurized sectors.
- Power outages.
- Broken elevators.
- Security lockdowns.
- Hull breaches.
- Unsafe maintenance areas.
- Radiation or heat in specific locations.
- Broken transit systems.
- Sealed corridors.
- Dangerous automated machinery.

These should ideally be contextual problems rather than permanent survival meters.

For example, oxygen does not need to be a constant chore throughout every raid.

Instead:

> A specific sector has lost atmosphere. If the players want what is inside, they need suits or oxygen equipment.

That makes oxygen a tactical tool rather than another hunger bar.

---

# 6. The Station as the Main Map

## 6.1 Authored geography

The core station layout should be authored and learnable.

Experienced players should be able to say things like:

- "We're above Medical."
- "Take the maintenance stairs."
- "Cargo transit is two decks down."
- "There's a service tunnel under Commercial."
- "Don't use that elevator; it exits next to Security."
- "That gunfire is probably in the food court."

Map knowledge should become a genuine player skill.

The station should not feel like the same gray sci-fi corridor endlessly repeated.

Each district should be visually and functionally recognizable.

---

## 6.2 Dynamic state instead of fully random geography

The idea of procedurally generating corridors between landmarks was discussed, but it risks undermining map knowledge and making navigation feel arbitrary.

A stronger current direction is:

> **Keep the station geography recognizable, but change its state.**

Things that can change between raids include:

- Which doors are locked.
- Which elevators work.
- Which sectors have power.
- Which areas have atmosphere.
- Which security systems are active.
- Which maintenance passages are open.
- AI patrol locations.
- Loot spawn distribution.
- Environmental damage.
- Player-created changes.
- Dock availability.
- Transit availability.

The result is that a player knows where they are going but still has to adapt.

"The usual route is blocked" is more interesting when the player actually knows what the usual route was.

---

## 6.3 Districts and landmarks

The station should be organized around strong districts.

Possible districts discussed or implied include:

### Medical

- Hospitals.
- Pharmacies.
- Treatment rooms.
- Laboratories.
- Medical storage.
- High-value medical jobs.
- Valuable locked areas that reward cutting or security tools.

### Commercial

- Shops.
- Food courts.
- Civilian spaces.
- Open social areas.
- Long lines of sight mixed with storefront interiors.

### Habitation

- Apartments.
- Residential corridors.
- Personal storage.
- Civilian remains and environmental storytelling.

### Industrial / Engineering

- Heavy machinery.
- Large physical cargo.
- Power systems.
- Valuable station components.
- Vehicle routes.
- High security around critical infrastructure.

### Cargo / Logistics

- Warehouses.
- Loading areas.
- Cargo sleds.
- Tugs.
- Automated logistics machines.
- Large containers.
- Wide routes that support vehicles.

### Security

- High-risk restricted areas.
- Better weapons and security equipment.
- Credentials.
- Surveillance systems.
- Heavy AI response.

### Research

- Rare technology.
- Biological containment.
- Prototypes.
- Story information.
- Dangerous sealed areas.

### Docking rings

- Physical player ships.
- Dock terminals.
- Ambush opportunities.
- Entry and extraction points.
- Possible ship theft.

---

# 7. Space and Exterior Movement

## 7.1 No space combat

Ships do **not** fight one another in space.

No giant laser cannons.
No missile dogfights.
No second combat game attached to the FPS.

The ship flight layer exists for:

- Repositioning.
- Reconnaissance.
- Finding docks.
- Looking for other ships.
- Looking through station windows where appropriate.
- Choosing where the squad enters next.

---

## 7.2 Third-person ship control

When the player takes control of the ship, the game leaves normal first-person movement and moves to an exterior third-person camera.

The station is visually central and the player maneuvers around it.

The intended control model is deliberately simple.

A conceptual version discussed:

- **W** moves the ship upward around the station.
- **S** moves downward.
- **A / D** move left and right around the station / around its circumference.

The exact controls can be refined later, but the design intention is clear:

> Piloting should be immediately understandable and should not become a flight simulator.

The player should be able to circle the station, move vertically, inspect docking areas, and select a port.

---

## 7.3 Exterior reconnaissance

While piloting, the crew can learn things from the station exterior.

Possible observations:

- Other player ships docked around the station.
- Which districts appear active.
- Windows with visible lights or movement.
- Muzzle flashes through large observation windows.
- Damaged station sectors.
- Docking ports that are free or occupied.
- A ship seen earlier still sitting in the same location.

The player should not receive perfect surveillance information.

Seeing another ship tells the crew:

> **Another squad came in here.**

It does **not** tell them exactly where those players are now.

This uncertainty supports hunting, avoidance, burglary, and ambushes.

---

# 8. The Ship

The player's ship is one of the defining systems of the game.

It should be physically walkable inside and should remain present in the raid while docked.

It is not a disposable extraction animation.

---

## 8.1 Starter ship interior layout

The current starter-ship concept is roughly:

1. **Dock / exterior connection**
2. **Airlock**
3. **Cargo staging area**
4. **Interior security door**
5. **Central corridor**
6. **Cargo/storage area to the left**
7. **Medical area to the right**
8. **One or two more doors forward**
9. **Command room / bridge**

This means an enemy crew must pass through several physical layers before reaching the most valuable areas.

The layout itself becomes part of ship security.

---

## 8.2 Cargo staging

The first large space after the airlock is where players initially bring large cargo.

On a starter ship:

- A cargo sled may simply remain parked in this area.
- Large objects occupy real space.
- The crew may physically run out of room.
- Loading another large item can become a Tetris-like problem.

This gives early ships a scrappy feeling.

The crew does not merely have "low cargo capacity."
They can literally see that there is nowhere left to put something.

---

## 8.3 Under-hull cargo storage and crane / lift upgrades

More advanced cargo-oriented ships can include a loading platform, crane, or lift.

Basic loop:

1. Push the cargo sled or large item onto the loading platform.
2. Secure it.
3. Activate the system.
4. The cargo is lowered into an under-hull cargo bay.
5. The platform returns.
6. The staging area is free again.

This is a strong upgrade because it changes what the player physically does rather than merely increasing a number.

It allows the group to go back into the station and bring home additional large cargo.

---

## 8.4 Cargo hold

The ship has a more secure internal cargo space behind multiple doors.

This is where smaller loot, containers, equipment, and possibly under-hull cargo systems are managed.

Because loot physically remains aboard during the raid, returning to the ship works like a partial extraction.

The items are safer than they were in the player's backpack, but they are not completely untouchable as long as the ship remains at the station.

Other players can still potentially breach the vessel.

---

## 8.5 Medical room

The ship's medical section supports teammate recovery.

Possible functions include:

- Restoring critically incapacitated players brought back to the ship.
- Holding medical recovery charges.
- Faster recovery on better ships.
- Multiple recovery beds on medical-focused ships.
- Treatment of severe injuries if a deeper injury system exists later.

The medical module is also one of the main things competing for limited ship interior space.

A cargo-maximized ship may have a poor medbay.
A medical ship may sacrifice cargo capacity.

---

## 8.6 Command room / bridge

The bridge is located deeper inside the vessel.

It is where the player:

- Manually pilots the ship.
- Undocks.
- Leaves the station.
- Relocates around the station.
- Manages some ship systems.

The bridge also contains the command console required for a full ownership override.

This means a thief who wants only cargo does not necessarily need to penetrate the entire ship.

A thief who wants the **whole ship** does.

---

# 9. Ship Security and Breaching

## 9.1 Locked but breachable

A docked ship is locked.

It is not magically invulnerable.

Other players may attempt to enter it using cutting equipment or other breaching tools.

Breaching should be a commitment rather than a simple button press.

Possible security layers include:

- Exterior airlock.
- Staging-area bulkhead.
- Cargo-room security.
- Medical-room door.
- Additional bridge bulkheads.
- Reinforced aftermarket doors.

---

## 9.2 Security alerts

The owners can receive alerts as attackers move deeper into the vessel.

Example escalation:

> **EXTERIOR AIRLOCK TAMPER DETECTED**

Then:

> **EXTERIOR SECURITY BREACH**

Then:

> **INNER BULKHEAD BREACH**

Then:

> **COMMAND DECK SECURITY BREACH**

Then, if theft is attempted:

> **VESSEL OWNERSHIP OVERRIDE INITIATED**

These alerts create decisions for the owners while they are elsewhere in the station.

Do they abandon their current objective and run home?
Do they send only one person?
Do they keep going and gamble that the thieves will fail?

---

## 9.3 Burglary versus ship theft

The game distinguishes between two levels of theft.

### Burglary

A crew breaches another ship and steals cargo or equipment.

This can be done with normal breaching tools if the attackers can physically reach the storage areas.

### Full ship theft

A crew attempts to steal the vessel itself.

This requires reaching the command room and using an extremely rare specialized hacking / ownership-override device.

The override tool is envisioned as legendary or similarly rare.

A strong candidate rule is that the tool is consumed or burned out during a successful ownership transfer, which makes the decision to use it meaningful.

This consumption rule was discussed but is still a tunable design choice.

---

## 9.4 Ship ownership hack

A full theft sequence could work like this:

1. Find another player's docked ship.
2. Reach the corresponding dock through the station.
3. Cut or breach the exterior door.
4. Move through the vessel.
5. Reach the command room.
6. Connect the rare override device to the command console.
7. Begin a hacking process.
8. Defend the bridge while the hack progresses.
9. The owners receive an emergency alert.
10. If completed, ownership transfers.

The hack should take enough time to create a defendable event.

It should not simply be instant ownership after reaching the bridge.

---

## 9.5 Why whole-ship theft matters

Stealing the whole ship is more meaningful than merely stealing an inventory.

The vessel may contain:

- Loot from several excursions.
- A customized module layout.
- Medical capability.
- Vehicles.
- Cargo sleds.
- Rare equipment.
- Sentimental value.
- A large amount of invested progression.

A successful theft can leave the original crew stranded inside the station.

Possible stranded-state solutions discussed include:

- Steal another ship.
- Reclaim the stolen ship before it leaves.
- Find an emergency or public extraction method.
- Negotiate with another crew.
- Ride out with another group.
- Repair an abandoned vessel if the game eventually supports that.

These options are not all finalized, but the key principle is:

> Losing the ship should create a new problem rather than automatically ending the game.

---

# 10. Ship Progression and Module Tradeoffs

## 10.1 Ships as hulls with finite interior volume

Ships should not be a simple linear ladder where every new vessel is better in every way.

Each hull has limited internal space.

Modules compete for that space.

Possible module categories include:

- Cargo.
- Medical.
- Security.
- Vehicle storage.
- AI / navigation systems.
- Crew space.
- Utility equipment.

A small hull forces difficult tradeoffs.

A larger hull loosens those tradeoffs, allowing the group to have good cargo and good medical capability at the same time, but larger ships are more expensive and more obvious targets.

---

## 10.2 Cargo-focused vessel

Potential strengths:

- Large cargo hold.
- Under-hull storage.
- Cargo lift or crane.
- Multiple sled capacity.
- Vehicle bay.

Potential weaknesses:

- Worse medical facilities.
- Less internal security.
- Larger visible profile.

---

## 10.3 Medical / recovery vessel

Potential strengths:

- Multiple recovery beds.
- More reconstruction charges.
- Faster recovery.
- Better support for bringing incapacitated teammates or prisoners aboard.

Potential weaknesses:

- Reduced cargo capacity.
- Smaller vehicle space.

---

## 10.4 Security-focused vessel

Potential strengths:

- Reinforced bulkheads.
- Stronger locks.
- Cameras.
- Better intrusion alarms.
- Remote door control.
- More time for the owners to respond to a breach.

Potential weaknesses:

- Less cargo volume.
- Less medical capacity.

---

## 10.5 General-purpose vessel

A balanced ship with:

- Reasonable cargo.
- Reasonable medical capability.
- Reasonable security.
- No single exceptional specialization.

This may be the most common casual choice.

---

## 10.6 Larger ships

Larger hulls can support more upgraded systems at once.

A larger ship might have:

- Strong medical facilities.
- Large cargo capacity.
- A vehicle bay.
- Better security.
- Better onboard AI.

However, size itself can create disadvantages:

- Higher purchase or repair cost.
- More visible from the station exterior.
- More attractive to thieves.
- Potentially limited to larger docking ports.
- More interior distance for the crew to manage.

The exact disadvantages remain open for tuning.

---

# 11. Ship AI and Remote Relocation

## 11.1 Starter AI

The starter ship can have a basic onboard AI, but it should feel limited.

Possible baseline functions:

- Docking assistance.
- Crew vital monitoring.
- Intrusion alerts.
- Emergency autonomous return behavior.

It does **not** initially need to support full remote relocation.

---

## 11.2 Early navigation-AI upgrade

Remote ship calling should be an earned capability rather than something every starter ship has automatically.

An early-to-mid early progression upgrade could improve the onboard AI enough to navigate autonomously between docking ports.

This is intended to be a meaningful but achievable grind: one of the first upgrades that substantially changes how the squad moves through the station.

Upgraded AI can support:

- Receiving relocation requests from station docking terminals.
- Undocking autonomously.
- Navigating around the station exterior.
- Redocking at the requested port.
- Providing better security notifications.

Manual piloting remains valuable because it allows direct scouting and exact control.

---

## 11.3 Calling the ship from a docking terminal

A player at a compatible station dock can access a terminal and request their ship.

The intended logic is:

1. Reach a docking terminal.
2. Authenticate with the ship.
3. Request relocation to the current dock.
4. The onboard AI undocks from the old location.
5. The ship physically flies around the station.
6. Arrival time depends on distance.
7. The ship docks at the new location.

Approximate examples discussed:

- One nearby port away: seconds or tens of seconds.
- A moderate distance: roughly a minute.
- Opposite side of the station: potentially several minutes.

Exact numbers are balancing questions, but distance should matter.

---

## 11.4 The player should not need to stare at the terminal for minutes

The terminal interaction itself can require a short vulnerable authentication period.

After that, the relocation is committed.

The squad is free to:

- Defend the docking area.
- Organize cargo.
- Stabilize a teammate.
- Watch nearby corridors.

This makes the wait an event rather than a menu channel.

---

## 11.5 Calling the ship exposes information

A remote relocation should have consequences.

Possible information exposed to other players:

- An inbound vessel displayed on a docking board.
- The physical ship visible moving around the station exterior.
- Docking machinery activating.
- Audio cues near the destination dock.

Calling a ship can therefore resemble calling an extraction helicopter, except the arriving extraction point is the player's actual persistent vessel.

Other players may decide to contest the dock.

---

## 11.6 Dock restrictions

Not every dock should always be callable.

Possible reasons a remote call fails:

- Local docking control has no power.
- Docking clamps are damaged.
- The dock is occupied.
- Security lockdown prevents relocation.
- The local terminal is broken.
- The ship's onboard AI is not advanced enough.

This allows utilities, repairs, access credentials, and station state to matter.

---

# 12. Ordinary Raid Loop

A typical raid should work even without rare ship theft, story missions, or the AI core.

The basic loop is:

1. Enter the active station environment with the squad's ship.
2. Circle the station if desired and choose a docking port.
3. Dock.
4. Review current missions / contracts.
5. Equip weapons, utilities, medical tools, sleds, or other equipment.
6. Leave the ship.
7. Travel through the station toward an objective.
8. Encounter AI, loot, environmental problems, and potentially other players.
9. Deviate from the original plan if something interesting happens.
10. Complete jobs or abandon them depending on circumstances.
11. Fill personal inventories.
12. Acquire physical cargo that may require carrying equipment.
13. Decide whether to return to the ship.
14. Deposit loot and large cargo.
15. Heal or recover teammates.
16. Resupply or change equipment if supported.
17. Decide whether to undock and leave or open the airlock and go back inside.

The ship creates **small extraction moments inside the larger raid**.

Every time the group returns safely to the vessel, it has essentially won.

The squad can leave.

Or it can say:

> "We're already here. One more run."

---

# 13. Missions and Contracts

## 13.1 Purpose

Missions exist to provide initial direction.

They should answer:

> "Why are we leaving the ship right now?"

They should not rigidly dictate the entire session.

---

## 13.2 Possible contract types

Examples include:

- Medical retrieval.
- Recover specific supplies.
- Retrieve station data.
- Restore or inspect equipment.
- Search for a missing scavenger crew.
- Recover a particular container.
- Enter a restricted sector.
- Retrieve research equipment.
- Recover weapons or security hardware.
- Bounty contracts.
- Story-related data retrieval.
- Repair or activate station infrastructure.

---

## 13.3 Story missions

Story missions can gradually lead the player deeper into understanding the station.

Early story jobs should still make sense for a scavenger.

Examples:

- Someone pays for data from an old server.
- A buyer wants a prototype from Research.
- A client wants a specific station component.
- Someone wants to know why a dead sector is drawing power.
- A valuable archive requires the crew to restore a communications system first.

Over time, these jobs can reveal the station's history and teach the player how its infrastructure connects.

The player is not initially trying to solve the mystery.

They are trying to make money.

The mystery becomes important because it keeps intersecting with profitable jobs.

---

# 14. Loot and Economy

## 14.1 General loot categories

The basic progression economy can remain understandable and familiar.

Players recover:

- Credits / valuables.
- Crafting materials.
- Weapons.
- Weapon parts.
- Armor or equipment.
- Utility tools.
- Medical equipment.
- Ship components.
- Vehicle parts.
- Rare access or hacking equipment.
- Large physical cargo.

---

## 14.2 Containers

A recovered container can represent a bundle of useful material.

Opening or processing a container after extraction may yield:

- Crafting parts.
- Weapon components.
- Complete weapons.
- Rare upgrade materials.
- Utilities.

Different container types can have different loot families.

The exact economy does not need to reinvent extraction games purely for novelty.

The distinctive part is how players physically acquire and transport some of the highest-value items.

---

## 14.3 Crafting and upgrades

Recovered parts can support:

- Crafting weapons.
- Improving weapons.
- Repairing equipment.
- Building utilities.
- Improving ship modules.
- Improving cargo equipment.
- Improving the onboard AI.
- Repairing or upgrading vehicles.

Weapon progression should not become a simple ladder where a million-credit rifle makes every cheaper rifle irrelevant.

Utilities and access capability are especially important forms of progression.

---

## 14.4 Utility progression creates access

Better gear does not only make the player stronger in combat.

It should let them do more things.

Examples:

- Cutting torches open sealed areas.
- Security credentials bypass certain doors.
- Hacking tools access protected systems.
- Oxygen equipment permits entry into depressurized zones.
- Heavy lifting / cargo tools allow recovery of larger objects.
- Better scanners reveal information.
- Stabilizers protect fragile cargo.
- Better ship AI enables remote relocation.

This means progression changes the parts of the station the squad can meaningfully interact with.

---

# 15. Physical Cargo

## 15.1 Cargo should physically exist

Large valuables should not simply disappear into an inventory grid.

Examples could include:

- Large containers.
- Industrial machinery.
- Server units.
- Medical equipment.
- Reactor components.
- Ship parts.
- Sealed weapons crates.
- Research equipment.
- Strange biological or alien objects if the story eventually supports them.

Some items may be impossible to carry normally.

---

## 15.2 Cargo sled

A core utility is a small sci-fi flatbed cargo sled.

It is essentially the space-station equivalent of a warehouse cart or pallet transporter.

It floats slightly above the ground or otherwise uses futuristic low-friction technology.

The player physically pushes or pulls it.

It can carry:

- Backpacks.
- Containers.
- Large cargo.
- Multiple pieces of loot.
- Bodies.
- Downed teammates.

---

## 15.3 The sled is not just extra inventory slots

The load should physically affect the sled.

Possible effects:

- Heavier loads accelerate more slowly.
- Heavy loads are harder to stop.
- Large objects make turning difficult.
- Doorways become a problem.
- Tight maintenance corridors may become inaccessible.
- Two players may need to help maneuver extremely awkward cargo.

The inconvenience should create co-op interaction without becoming deliberately miserable.

---

## 15.4 Physical cargo creates information

A player moving an empty sled tells other players something.

They may think:

> "Why is that squad bringing an empty cargo sled toward Engineering?"

A heavily loaded sled tells them even more.

Greed becomes visible.

---

## 15.5 Cargo can be abandoned, hidden, or stolen

If a fight starts, the crew can drop the sled and fight.

They may:

- Leave it in the open.
- Hide it in a room.
- Have one teammate stay with it.
- Abandon it entirely.
- Lose it to another squad.

A thief does not necessarily need to individually loot every item.

They may simply take the entire sled.

---

# 16. Vehicles

## 16.1 Small utility vehicles

The station can contain practical civilian or industrial vehicles rather than combat vehicles.

Examples discussed:

- Small airport-style utility cars.
- Electric cargo tugs.
- Small bikes.
- Compact service vehicles.

The design should avoid turning them into tanks or major combat platforms.

They are primarily transportation and logistics tools.

---

## 16.2 Why vehicles matter

The station is enormous.

Small vehicles can make travel through specific routes enjoyable and efficient.

A vehicle can:

- Move players quickly through wide corridors.
- Tow cargo sleds.
- Carry limited cargo.
- Move incapacitated players.
- Support long-distance station traversal.

---

## 16.3 Vehicles should not replace walking

The station naturally limits where vehicles fit.

They work well in:

- Cargo tunnels.
- Industrial corridors.
- Main service routes.
- Large promenades.

They work poorly or not at all in:

- Stairs.
- Tight maintenance corridors.
- Narrow office interiors.
- Small rooms.

Elevators create a deliberately funny physical question:

> "Can we fit the tug in there?"

Sometimes the answer is yes.
Sometimes the answer becomes a terrible mistake.

---

## 16.4 Vehicle routes as map knowledge

Because the station is authored, experienced players can learn vehicle-friendly paths.

For example:

> "Don't take the stairs. There's a service tunnel under Medical."

This gives map knowledge another layer.

---

## 16.5 Extracting vehicles

A better ship with an under-hull cargo bay or vehicle-capable lift can bring a utility vehicle home.

The vehicle then becomes part of the player's persistent equipment.

The crew can:

- Repair it.
- Upgrade its battery.
- Improve towing ability.
- Add cargo attachments.
- Bring it into later raids.

A starter ship may not have enough physical space for a proper vehicle.

A tiny bike may fit if the player sacrifices staging space, but a tug likely requires an upgraded cargo system or garage module.

---

## 16.6 Tug and sled combinations

A small cargo tug can tow one or more loaded sleds.

This creates high-efficiency logistics at the cost of visibility and vulnerability.

A squad hauling two full sleds behind a tug is carrying a huge amount of value in one obvious convoy.

If ambushed, another squad can potentially steal the entire vehicle and drive away with the haul.

---

# 17. PvP Philosophy

## 17.1 Other scavengers are not automatically enemies

The game should not necessarily label every other player red and reward immediate murder.

Other crews are competitors.

The player chooses how to treat them.

Possible interactions include:

- Ignore one another.
- Warn each other away.
- Negotiate passage.
- Trade information.
- Temporarily cooperate.
- Revive an enemy.
- Rob them.
- Hunt them.
- Steal their cargo.
- Steal their ship.

Proximity voice chat strongly supports this style of play.

---

## 17.2 Social mercy can matter

A squad may win a firefight and still choose not to erase the other group.

Example:

- Win the fight.
- Loot what is needed.
- Say GG.
- Revive one enemy survivor.
- Tell them to recover their friends.
- Leave and continue the original job.

The systems should allow this without forcing it.

---

# 18. Bounty System

The PvP structure can borrow from the spirit of DMZ's bounty / hunting pressure.

## 18.1 Basic idea

Players who repeatedly hunt and kill other scavengers accumulate a bounty.

The bounty grows as their behavior becomes more clearly predatory.

Other players can then accept or act on that bounty.

---

## 18.2 Self-defense versus deliberate hunting

The player suggested that the game should attempt to determine whether a kill was aggressive or defensive.

Examples of useful signals:

- Who dealt meaningful damage first.
- How much damage each side dealt before the kill.
- Whether the player repeatedly initiates unrelated fights.
- Number of player kills within the same raid.
- Whether the same squad is constantly moving toward other crews.

However, exact moral blame is difficult to calculate perfectly.

A practical direction is for the system to recognize **patterns** rather than pretending it knows every social context.

One accidental or defensive kill may generate little or no bounty.

Repeated unrelated kills make it increasingly clear that the squad is hunting players.

---

## 18.3 Alive or dead bounties

Bounties can pay differently depending on how the target is delivered.

Example:

- Kill target and provide proof: lower payout.
- Capture target alive: higher payout.

This directly connects the bounty system to body carrying and ship medical systems.

A wanted player can become physical cargo.

---

## 18.4 Capture creates emergent rescue missions

If a bounty hunter incapacitates and captures a player instead of killing them, that player's teammates gain a natural objective:

> Recover our friend before they are delivered.

This does not require a scripted mission system.

The players create the mission through the bounty and body systems.

---

# 19. Death, DBNO, and Recovery

## 19.1 Avoid instant permanent removal

The game should preserve the feeling of danger without making a single death remove someone from a co-op session for a long period.

A player first enters a downed / critically incapacitated state rather than immediately disappearing.

---

## 19.2 DBNO

A basic down-but-not-out state can allow teammates to stabilize or temporarily recover a player depending on the severity of the injury.

The exact medical simulation is still open, but the important principle is:

> A teammate going down creates a rescue problem.

---

## 19.3 The Rephabilitator

A working-name sci-fi revival tool was discussed: the **Rephabilitator**.

It is essentially a specialized electrical / medical recovery device.

Possible rules:

- Valuable enough that the squad decides who carries it.
- Limited charges or batteries.
- Takes a useful equipment slot.
- Can restore a critically incapacitated teammate in the field.
- The revived player may return in poor condition rather than fully healthy.

The exact name can change later.

The important role is that it allows emergency recovery away from the ship.

---

## 19.4 No Rephabilitator? Carry the body home

If the squad cannot restore the teammate in the field, the backup solution is physical recovery.

The squad can:

- Carry the teammate over a shoulder.
- Drag them.
- Put them on a cargo sled.
- Potentially transport them in a utility vehicle.

Bring the incapacitated player to the ship's medical section and the ship can restore them.

This turns "respawning" into a logistics problem that fits the rest of the game.

---

## 19.5 Keep the downed player involved

A candidate UX rule is that an incapacitated player should remain as involved as possible rather than staring at a spectator screen for twenty minutes.

Possible options discussed:

- Crawl very slowly before complete incapacitation.
- Continue using voice chat.
- Rotate view while being carried.
- Ping.
- Potentially use a sidearm during certain partial-down states.

The exact implementation remains open, but the principle is important for co-op fun.

---

## 19.6 Enemy bodies

Bodies from other crews follow the same physical rules.

They can potentially be:

- Carried.
- Dragged.
- Put on a sled.
- Looted.
- Hidden.
- Recovered by their team.
- Captured for bounty purposes.
- Revived by another crew if the systems allow it.

The game should allow strange social situations to emerge from this.

---

# 20. Squad Wipes and Ship Survival

## 20.1 The ship should not be lost just because the squad dies outside it

A central fairness principle is:

> **You should lose your ship because something actually happened to the ship, not because the game deleted it when the squad wiped elsewhere.**

If all crew members are incapacitated outside the ship, the vessel remains physically docked.

---

## 20.2 Emergency autonomous return

The ship's onboard AI can detect that no crew members remain alive or functional.

It can initiate an emergency recovery / return protocol.

One possible flow:

1. Crew wipe occurs.
2. The ship detects the loss of crew vitals.
3. Emergency return countdown begins.
4. The ship remains docked for a period.
5. If nobody interferes, it seals itself, undocks, and autonomously returns to the scavenger home base.
6. Everything already stored aboard is preserved.
7. Everything the crew was carrying when they went down remains on the station.

This keeps the ship valuable without making ordinary wipes absurdly punishing.

---

## 20.3 Recovery window / re-entry idea

A further idea discussed is that the emergency return does not happen instantly.

During the countdown, the original squad may potentially re-enter the same active station instance using emergency gear or alternate transport and attempt to recover:

- Their bodies.
- Their carried loot.
- Their cargo sled.
- Their ship.

Meanwhile, the squad that killed them may be heading toward the same ship.

This creates a natural rematch.

The exact implementation of same-instance re-entry is still unresolved and would require careful matchmaking/session design.

---

## 20.4 The ship can still be stolen during the emergency window

If another crew reaches the ship before the autonomous return completes, they may:

- Loot it.
- Breach its cargo.
- Use a rare override tool to steal the whole vessel.

If the ship is physically stolen, then it is genuinely lost.

This respects the principle that the ship disappears only because another system caused it to disappear.

---

# 21. Extraction

Extraction is intentionally simple.

There is no magical green zone.

The squad extracts by:

1. Returning to its ship.
2. Getting everyone aboard.
3. Closing / securing the vessel.
4. Undocking.
5. Flying away from the station / leaving the raid area.

That's it.

The ship is the extraction point.

---

# 22. The "One More" Loop

A distinctive rhythm emerges because returning to the ship does not have to end the raid.

The squad may return with:

- Completed mission rewards.
- Loot from another crew.
- Full backpacks.
- A cargo sled.
- A recovered teammate.

They are safe enough to leave.

But the ship is still docked.

They can:

- Deposit the loot.
- Heal.
- Change gear.
- Grab ammunition.
- Empty the cargo sled.
- Lower cargo into the under-hull hold.

Then someone says:

> "Industrial is right next to us."

The squad has already succeeded.

Opening the airlock again is a voluntary escalation.

This may become the game's strongest "one more" mechanism:

> **One more expedition out of the ship, not necessarily one more entire match.**

---

# 23. Story Progression Toward the AI Core

## 23.1 The AI core as the ultimate score

The station's AI core may become the ultimate objective of the story.

Not because the player is destined to save the station.

Because the core is extraordinarily valuable.

Every major station has an AI core, but cores are rare, complicated, difficult to manufacture, and worth a fortune.

The player's endgame motivation is still fundamentally scavenger logic:

> **If we can steal the station's brain, we become rich.**

---

## 23.2 The player is not trying to shut the station down for moral reasons

The station shutting down is the consequence of removing the thing coordinating it.

The player may understand that removing the core will cripple or kill the station.

They do it anyway because of the value.

This keeps the endgame aligned with the player's identity as a scavenger rather than suddenly turning the campaign into a heroic "defeat the evil AI" story.

---

## 23.3 Story missions prepare the heist

Earlier jobs can gradually teach the player what is needed to reach and remove the core.

Possible requirements:

- Access credentials.
- Knowledge of restricted routes.
- Specialized cutting equipment.
- Power-routing control.
- Security bypasses.
- Heavy cargo transport.
- A sufficiently large ship.
- Stabilization equipment.
- Rare disconnect tools.

The player may not initially realize that ordinary jobs are preparing them for the final heist.

---

# 24. The AI Core as Physical Cargo

## 24.1 The core should not be an inventory item

The AI core should be physically large and heavy.

It might be refrigerator-sized or otherwise substantial enough that the squad immediately realizes it cannot simply be put in a backpack.

Removing it becomes a logistics operation.

The squad needs:

- Correct tools.
- Cargo equipment.
- Potentially a specialized sled.
- A route out.
- A ship with enough cargo capacity.

---

## 24.2 The core has a theoretical maximum value

The core does not have one fixed sale price.

Instead, it begins with a theoretical pristine value.

An example number discussed was:

> **1,000,000 credits**

That is what a near-perfectly preserved core might be worth.

Every incorrect or reckless action can reduce the value.

---

## 24.3 Damage through incorrect extraction

Ways to reduce value could include:

- Cutting the wrong connection.
- Ripping cables instead of safely disconnecting them.
- Using improper tools.
- Removing it without correct stabilization.
- Dropping it.
- Hitting walls while transporting it.
- Excessive sled acceleration or impact.
- Gunfire damaging it.
- Environmental damage.
- Loading it incorrectly.

A messy extraction might look like:

> 1,000,000 → 940,000 → 810,000 → 650,000 → 420,000 → 170,000

The squad can still succeed with a heavily damaged core.

They simply bring home a much less valuable version of the prize.

---

## 24.4 Stabilizers and protective equipment

A normal cargo sled may technically move the core, but the object is fragile enough that every bump is dangerous.

Specialized equipment could include:

- Cushioned mounts.
- Magnetic stabilizers.
- Shock isolation.
- Dedicated core transport frames.

These protect value at the cost of preparation, money, equipment space, or time.

This makes the final heist partly about deciding how perfectly the crew wants to prepare.

---

## 24.5 Pressure causes players to abandon perfection

The strongest part of the core-value system is that it creates a natural breakdown of priorities.

At first:

> "Careful. Don't hit the wall. That's twenty thousand credits."

Later, when security, creatures, and players are closing in:

> "I DON'T CARE. JUST MOVE IT."

The game does not need a separate mission score.

The physical condition of the object is the score.

---

# 25. Removing the Core Changes the Station

Disconnecting the AI core can trigger the final station crisis.

Possible consequences:

- Central coordination disappears.
- Lights fail.
- Doors fail open or closed.
- Elevators stop.
- Security units switch to autonomous emergency behavior.
- Maintenance machines freeze or behave unpredictably.
- Atmospheric control degrades.
- Containment systems begin failing.
- Previously sealed threats escape.
- Docking systems become unreliable.

The player has spent the entire game learning the station while the AI maintained it.

The final heist destroys that predictability.

---

## 25.1 Other players can realize what happened

A station-wide alert may announce something like:

> **WARNING: CENTRAL STATION CONTROL LOST**

Experienced players understand what that implies:

> Someone is stealing the core.

The final challenge therefore does not need to be a conventional boss fight.

Other scavengers may become the threat simply because the crew is physically transporting the most valuable object on the station.

---

## 25.2 The core can be stolen from the thieves

Because the core remains physical cargo, another crew can kill or drive away the original heist team and take it.

The group that did all the preparation may lose the prize meters from the dock.

The game does not care who "deserves" it.

Whoever physically gets the core onto a ship and leaves with it wins that object.

---

# 26. Possible Larger Campaign Structure

One long-term possibility is that individual huge stations become campaign-scale targets.

A station has:

- Its own layout.
- History.
- AI behavior.
- Threats.
- Districts.
- Story missions.
- AI core.

Eventually the player steals or destroys the value of that station's core and moves on to another derelict.

Different stations could fail for different reasons.

This is not yet required for the base concept, but it offers a way to expand beyond endlessly resetting one station.

---

# 27. Replayability

Replayability should not depend purely on fully regenerating a new map every week.

The strongest replayability sources currently are:

- Different contracts.
- Different loot distributions.
- Different station-state conditions.
- Different open or closed routes.
- Different AI locations.
- Different security responses.
- Different player populations.
- Other player ships appearing at different docks.
- Bounty targets.
- Ship burglary opportunities.
- Physical cargo opportunities.
- Changing player equipment and utility access.
- Different ship builds.
- Different vehicles available.
- Story progress opening deeper areas.
- The decision to repeatedly return to the station from the ship during the same raid.

The station becomes replayable because the player understands it well enough to notice when something is different.

---

# 28. Example Ordinary Raid

This example intentionally avoids the AI core, legendary ship theft, and other rare endgame events.

### Step 1: Arrival

Four friends approach the station in a small scavenger ship.

They circle part of the station, notice two other ships near Commercial, and decide to dock closer to Medical.

### Step 2: Initial plan

The squad checks its jobs.

The primary plan is a medical retrieval contract.

They bring:

- Standard weapons.
- One cutting tool.
- One Rephabilitator.
- One cargo sled.

### Step 3: Enter station

The group leaves the ship and starts moving toward Medical.

### Step 4: Distraction

Gunfire breaks out nearby.

One friend immediately wants to third-party it for loot.

The others fail to convince them otherwise and follow.

### Step 5: PvP fight

The squad arrives late to a fight between scavengers.

They win.

They loot useful weapons, backpacks, and materials.

One enemy remains recoverable.

The group decides to revive that player, says GG, tells them to recover their friends, and leaves.

### Step 6: Original job

The squad continues to Medical.

They use the cutting tool to enter a locked area and complete the medical objective.

### Step 7: Overloaded

Because of the earlier PvP fight, everyone is already carrying more than expected.

The cargo sled is also loaded.

The group decides not to push deeper yet.

### Step 8: Return to ship

They walk back to the ship and secure:

- PvP loot.
- Contract rewards.
- Medical cargo.
- Materials.

The large cargo remains on the sled in the staging area because the starter ship has no under-hull lift.

### Step 9: Decision

Everyone is now safe aboard.

They can simply undock and bank the entire expedition.

Then someone notices Industrial is close.

They still have ammunition.

The Rephabilitator still has a charge.

The squad opens the airlock again.

### Step 10: Second excursion

The raid continues.

This second trip may become completely different depending on what the players encounter.

That is the intended rhythm of the game.

---

# 29. Example Remote Ship Rescue

The squad has traveled far across the station.

One teammate is critically incapacitated.

The Rephabilitator is empty.

The ship is on the opposite side of the station.

Instead of carrying the body all the way back:

1. The remaining players place their friend on the cargo sled.
2. They reach a nearby docking bay.
3. A player accesses the docking terminal.
4. The upgraded onboard AI is contacted.
5. The ship undocks from its current port.
6. Estimated arrival is several minutes because it is far away.
7. The players defend the dock with their incapacitated teammate and cargo.
8. Other players may notice an inbound ship.
9. The vessel arrives.
10. The squad rushes the body into Medical.
11. The teammate is restored.
12. The squad can immediately leave or continue the raid.

This is more interesting than simply forcing the squad to walk twenty minutes backward.

---

# 30. Example Ship Burglary

The squad is deep in Engineering.

A warning appears:

> **EXTERIOR AIRLOCK TAMPER DETECTED**

They debate whether to return.

A second warning arrives:

> **EXTERIOR SECURITY BREACH**

Now someone is definitely inside the ship.

The squad starts heading back.

The thieves reach the staging area and find a loaded cargo sled.

Instead of individually looting every item, they simply take the sled.

The owners arrive in time to see their entire haul disappearing around a corridor corner.

No mission objective needs to appear.

Everyone understands what to do.

---

# 31. Example Full Ship Theft

A crew sees an expensive vessel docked at another ring while manually flying around the station.

One player has a legendary command-override tool.

They decide to attempt the theft.

1. Dock at a nearby port.
2. Travel through the station to the target ship.
3. Breach the airlock.
4. Fight through security layers.
5. Reach the bridge.
6. Connect the override tool.
7. Start the hack.
8. The owners receive a command-deck warning.
9. They abandon their current loot run and sprint home.
10. The thieves defend the bridge.
11. If the hack completes, the ship changes ownership.
12. The thieves must decide what to do with the ship they originally arrived in.

Possible outcomes:

- Split the squad and take both ships.
- Abandon the old starter ship.
- Use the stolen ship immediately.
- Leave the stolen ship docked temporarily and continue looting.

This creates a large emergent event without a scripted mission.

---

# 32. Example Bounty Capture

A squad has repeatedly killed unrelated scavengers.

Their bounty has grown significantly.

Another group decides to hunt them.

One wanted player is critically downed.

Instead of finishing them:

1. The bounty hunters stabilize the target.
2. Put them on a cargo sled.
3. Transport them toward their ship or a bounty delivery point.
4. The captured player's teammates pursue.
5. The hunters must decide whether the higher alive payout is worth the extra risk.

The bounty system, body system, cargo system, and PvP system all create the event together.

---

# 33. Example Final AI-Core Heist

The squad has spent a long campaign acquiring:

- Core-room access.
- Correct disconnect tools.
- A stabilized heavy cargo sled.
- A large enough ship.
- Strong medical support.
- Knowledge of routes through the station.

They reach the core.

The pristine value is approximately one million credits.

They begin disconnection.

One player makes a mistake and damages a connection.

Value drops.

They place the core onto the stabilized sled and begin moving.

Security escalates.

The core is hit during a firefight.

Value drops again.

The AI finally goes offline.

The station begins failing.

A normal elevator no longer works.

The group takes a worse route.

They hit the sled against a bulkhead while rushing.

More value is lost.

A station-wide warning tells every experienced scavenger what has happened.

Another crew begins hunting them.

At this point the original team stops caring about perfect handling and simply tries to survive.

They eventually get the damaged core aboard.

The final reward is not determined by a hidden mission grade.

The sale value is the remaining physical condition of the object they actually extracted.

---

# 34. Progression Philosophy

Progression should primarily expand **capability**, not just raw combat stats.

Good progression examples:

- Better cutting tool → access new rooms.
- Better ship AI → call the ship remotely.
- Larger ship → support better cargo and medical systems simultaneously.
- Cargo lift → extract multiple large objects per raid.
- Vehicle bay → bring a tug into the station.
- Better stabilizer → safely transport fragile high-value cargo.
- Better security → make ship burglary take longer.
- Better medbay → recover more teammates.
- Better credentials → pass through certain security systems.

This keeps the game from becoming a pure gear-score ladder.

---

# 35. What Makes the Concept Distinctive

The concept is not simply "Tarkov in space."

Its identity comes from several systems reinforcing one another.

## The ship is physically part of the raid

It is not a menu or extraction cutscene.

## The ship can move without ending the raid

Players can reposition their base around the station.

## The ship can potentially be robbed or stolen

Extraction infrastructure itself is at risk.

## Returning to the ship does not have to end the session

Players can deposit loot and go back inside.

## Loot can be physical and awkward

Large cargo creates logistics problems.

## Bodies remain meaningful

A downed teammate becomes a recovery problem instead of simply a spectator.

## Vehicles are mundane tools

They move people and cargo rather than turning the game into vehicle combat.

## The station is learnable

Players build real knowledge of districts, service paths, docks, and shortcuts.

## PvP is socially ambiguous

Other scavengers are not automatically villains.

## The station AI and security respond to what players actually do

Stealing important property matters more than merely existing.

## The final story objective is still a scavenger objective

The player does not save the station.

They eventually try to steal the most valuable thing left inside it.

---

# 36. Core Design Pillars

The entire concept can currently be reduced to these pillars:

1. **Ship as mobile extraction point**  
   The player's ship is physically present, customizable, movable, vulnerable, and central to the raid.

2. **Physical logistics**  
   Cargo, bodies, vehicles, sleds, doors, and ship space create practical problems players solve together.

3. **Friendly extraction stakes**  
   Failure matters, but ordinary death should create rescue opportunities rather than constantly removing friends from play.

4. **Authored station, changing state**  
   Players learn the geography while power, access, AI, loot, and hazards change around it.

5. **PvEvP without mandatory hostility**  
   Other scavengers can become enemies, allies, victims, bounty targets, or simply people who walk away.

6. **Capability-based progression**  
   Better tools and ship systems let players do new things rather than only deal larger numbers.

7. **Player-created objectives**  
   Ship theft, body recovery, stolen cargo, bounty rescue, remote docking, and opportunistic looting can generate missions without a quest marker.

8. **Greed as pacing**  
   Returning to the ship gives the squad repeated opportunities to leave safely or risk another excursion.

9. **Story through scavenging**  
   The player learns what happened to the station because valuable work keeps pulling them deeper.

10. **The AI core as the ultimate heist**  
    The endgame is not saving the station. It is finishing the job of looting it.

---

# 37. Current Open Questions

These ideas have been discussed but are not fully decided yet.

## Exact title

The game is still untitled.

## Exact cause of abandonment

Possibilities include biological containment failure, corporate evacuation, AI-related crisis, unknown external discovery, or a combination. The mystery is intentionally unresolved at this stage.

## Exact creature design

The idea of contained biological threats is strong, but the specific enemy roster is not finalized.

## Exact injury / DBNO rules

The desired experience is clear, but details such as bleed-out, crawling, partial revives, field recovery, and incapacitation duration still need design.

## Exact Rephabilitator rules

Open questions include:

- One charge or multiple?
- How rare?
- How large?
- Does revival impose injuries?
- Can it revive enemies?

## Exact squad-wipe behavior

The current preferred direction is ship autonomous return rather than automatic ship deletion, but same-instance re-entry and recovery windows still need technical and balance decisions.

## Exact bounty logic

The system should distinguish patterns of hunting from normal self-defense as well as reasonably possible without pretending to perfectly determine blame.

## Exact ship-hacking tool behavior

The rare override tool may be consumed on use, but this remains tunable.

## Exact ship persistence after theft

A more advanced idea is that stolen ships retain names, registration, appearance, and possibly remain identifiable later, allowing original owners to recognize and reclaim them. This is attractive but would require significant persistence infrastructure.

## Exact station generation

Fully procedural corridors are currently less favored because they weaken map learning. Randomized loot and dynamic station state are preferred. Limited procedural interiors could still be explored later.

## Exact station cycle / session structure

The station may be an active lobby that players enter while it is already in progress, but matchmaking and persistence rules have not been finalized.

## Exact economy scale

Numbers like the one-million-credit AI core are conceptual examples, not final balance values.

## Exact home base outside the station

The scavenger port, hub, market, or larger meta-game location outside the station has not yet been designed in detail.

---

# 38. Final Identity

This game is fundamentally about being a scavenger in a place too large, too valuable, and too dangerous to ever feel completely finished.

You arrive in a ship that is simultaneously your home, your stash, your ambulance, your garage, and your way out.

You go into the station because you have a job.

Then you hear shooting.

Then somebody sees a locked room.

Then your friend decides the industrial machine in the corner is absolutely coming home with you.

Then somebody gets critically downed.

Then you realize the ship is on the opposite side of the station.

Then you call it.

Then another crew notices the inbound vessel.

Then the docking bay becomes a firefight.

Then you finally get everyone aboard.

And you are safe.

You can leave.

But there is still room in the under-hull cargo bay.

And Industrial is only two corridors away.

So somebody opens the airlock again.

That is the game.
