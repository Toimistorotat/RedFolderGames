import '../css/TTShooter.css';
import Header from '../HeaderTTS';
import Footer from '../Footer';
import {Loading} from '../extras/Loading.jsx';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

export default function TacTicalshooter() {
  const Name = "TacTical Shooter"; // Replace with actual game name if needed

    const [loading, setLoading] = useState(true);

    // Simulate data fetching
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 8000);
    }, []);
  return (
    <>
    {loading ? (
        <Loading className="loadingScreen"/>
    ) : (
      <div>
        <Header />
        <div className="bigbody">
          <div className="cube right">
            <section id="hero" className="hero section">
              <h1>{Name}</h1>
              <p><strong>Squad-based tactical realism in a permanent world.</strong></p>
              <p>{Name} is a hardcore, story-driven FPS where you lead a squad through a war-torn city.</p>
            </section>
          </div>
          <div className="cube left">
            <section id="about">
              <h2>About The Game</h2>
              <p>
                Inspired by games like <i>Ready or Not</i>, <i>Squad</i>, and <i>Tarkov</i>, {Name} drops you into a sprawling urban warzone.
                You command a four-person team — yourself and three AI operatives — and carry out missions in a city that never resets.
                Fail a mission? It stays failed. Blow up a radio tower? It stays destroyed.
                Every bullet, every body, every victory — it all Stays.
              </p>
            </section>
          </div>
          <div className="cube right">
            <section id="features">
              <h2>Core Features</h2>
              <ul>
                <li>Squad-based tactical FPS with AI or co-op players</li>
                <li>Permadeath system with character-switching</li>
                <li>Recoverable dog tags (KIA vs MIA)</li>
                <li>Persistent open-world map</li>
                <li>Mission-based campaign with no replays</li>
                <li>Playable solo or up to 4-player co-op</li>
              </ul>
            </section>
          </div>
          <div className="cube right">
            <section id="features-explained">
              <h3>Features Explained</h3>
              <p><strong>Permadeath</strong>: When your character dies, you take control of a surviving squadmate. If the entire squad dies, the mission fails permanently and cannot be retried in the same campaign.</p>
              <p><strong>Dog Tags</strong>: Recover dog tags from fallen operatives during missions. Tags let you honor the dead. Leave them behind? They’re marked MIA forever and lost from the memorial wall.</p>
              <p><strong>Squad Swapping</strong>: You only control one character at a time. The others follow orders. But if your controlled operator dies, you instantly assume control of a surviving teammate — if any remain.</p>
            </section>
          </div>
          <div className="cube left">
            <section id="npc">
              <h2>Your Fireteam</h2>
              <p>
                You lead a team of 3 AI soldiers, each with their own name, voice, and operational background.
                Give them simple commands — hold, breach, cover — and they'll support you in combat. Squadmates experience stress and trauma over time, and their performance may change during the campaign.
                If you die, you take control of the next squadmate. But when they're all gone — so is your chance.
              </p>
            </section>
          </div>
          <div className="cube right">
            <section id="world">
              <h2>The World</h2>
              <p>
                China is in chaos. A failed military coup has left cities torn between loyalist forces, rogue generals, and insurgent militias.
                You are part of a covert U.S. operation deployed to secure key objectives, rescue stranded assets, and survive a conflict spiraling out of control.
                Morality is murky. You're not here to save the world — just to make it out with your team.
              </p>
              <h2>Campaign Structure & Progression</h2>
              <p>The campaign in TacTical Shooter isn’t divided into levels — it’s a continuous, evolving operation. Every mission you complete, every life you lose, and every day that passes shapes the course of the story. There are no traditional checkpoints or restarts. The campaign moves forward — with or without you.
                You begin on the USS Olympus, deployed just beyond the warzone. From there, you plan missions, select objectives, and decide how to allocate your limited resources. Each decision alters the situation on the ground: factions rise or fall, supply lines shift, and new threats appear. No two campaigns unfold the same way.
                The world advances through Operational Days. Each day you play — each mission you undertake — advances the in-game calendar. The conflict evolves dynamically based on time, performance, and survival. Fail to act, and opportunities disappear. Push too hard, and fatigue or attrition may destroy your squad.
                Progression isn’t measured by stats or unlocks, but by what you accomplish and what you endure. Surviving operatives carry their experience and scars into every new mission. Lost soldiers, failed objectives, or destroyed infrastructure become permanent parts of your campaign history.
                The story builds organically toward multiple endings shaped by your leadership and persistence. You may extract your team after a grueling series of victories, abandon the region after catastrophic losses, or simply run out of men, supplies, and hope. The outcome isn’t scripted — it’s earned through every decision you make along the way.</p>
            </section>
          </div>
          <div className="cube left">
            <section id="time-system">
              <h3>Operational Real-Time System</h3>
              <p>
                Time in <strong>{Name}</strong> moves similarly to real life — one Hour of gameplay equals 12 Hours in-game time.
                The world changes naturally around you, following a continuous day and night cycle that never speeds up or slows down.
                If you play for two hours, 1 day pass in the game world.
                Time only progresses while you’re playing — when you quit, the world freezes. Nothing happens off-screen, and no timers continue running.
                This keeps the campaign focused on your actions, not artificial countdowns or online persistence.
                You can still skip time intentionally by resting or sleeping, advancing to a new hour or day to recover your squad or plan operations.
                But mission deadlines, rescues, and extractions are all tied to <em>in-game time</em>, so every rest, every delay, every decision costs you something.
                The result is a grounded sense of realism — where timing your assault at dawn or waiting for nightfall isn’t a menu choice,
                it’s a tactical decision that shapes your challenge.
              </p>
              <h3>Mission Timers & Scheduling</h3>
              <p>
                Every mission in <strong>{Name}</strong> takes place within a living operational timeline.
                Objectives, enemy activity, and extractions are all bound to the in-game clock —
                creating real urgency without breaking immersion.
                Some operations have strict time limits. A hostage might survive for three in-game days,
                or an enemy convoy may only appear between specific hours.
                Wait too long, and the situation changes — the hostage is executed,
                the convoy leaves, or the intel goes cold.
                There are no restarts or rewinds — only consequences.
                You’ll have to plan carefully around daylight, weather, and squad fatigue.
                Evac windows, supply drops, and reinforcements all depend on when you strike.
                Whether you go in at dawn or under the cover of night could mean the difference
                between a clean extraction and a mission gone dark.
              </p>
            </section>
          </div>
          <div className="cube right">
            <section id="rest-recovery">
              <h3>Rest &amp; Recovery</h3>
              <p>
                In <strong>{Name}</strong>, survival isn’t just about firepower — it’s about endurance.
                Your squad grows tired, injured, and mentally strained over time.
                Fatigue affects aim, reaction speed, and decision-making, while untreated wounds or trauma
                can reduce combat efficiency or even lead to mission failure.
              </p>
              <p>
                Between operations, you can return to safe zones such as your command ship or secured buildings to rest.
                Sleeping restores stamina and stabilizes squad morale but advances the in-game clock,
                forcing you to balance recovery against mission urgency.
                Rest too little, and exhaustion will catch up to you in combat.
                Rest too long, and the world moves on without you.
              </p>
              <p>
                Healing and maintenance are deliberate processes — no instant recovery, no magic syringes.
                Medical supplies, rations, and time are all resources.
                Every choice to rest, patch up, or push forward carries weight, shaping your campaign’s pace and outcome.
              </p>
            </section>
          </div>
          <div className="cube left">
            <section id="fatigue-mental">
              <h3>Fatigue &amp; Mental State WIP</h3>
              <p>
                Every soldier in <strong>{Name}</strong> is more than just a weapon — they’re human.
                Under constant pressure, exhaustion and stress begin to take their toll.
                Long missions, injuries, loud firefights, and witnessing teammates fall can push even the toughest
                operator to their breaking point.
              </p>
              <p>
                Fatigue builds over time and affects focus, movement, and accuracy.
                A tired soldier will aim slower, react later, and make mistakes that fresh operatives wouldn’t.
                Mental state works alongside this — anxiety, fear, and adrenaline influence behavior,
                sometimes causing hesitation or overreaction during intense combat.
              </p>
              <p>
                A calm squad fights better. Keeping morale up through rest, successful missions,
                and recovered dog tags helps maintain discipline and coordination.
                Neglecting their mental state can lead to breakdowns, panic under fire, or refusal to follow commands.
                These systems make your squad feel alive — strong, fragile, and real — just like the world they fight in.
              </p>
            </section>
          </div>
          <div className="cube right">
            <section id="squad-leadership">
              <h3>Squad Morale &amp; Leadership</h3>
              <p>
                In <strong>{Name}</strong>, you’re not just another operator — you’re the squad leader.
                Every decision, every command, and every casualty affects how your team sees you.
                Morale isn’t a number on a screen; it’s the trust your squad has in your leadership.
              </p>
              <p>
                Your actions shape their confidence.
                Leading them safely through missions, securing objectives, and extracting alive raises morale and discipline.
                Reckless decisions, unnecessary risks, or leaving a man behind erodes trust.
                A demoralized squad becomes slower to react, less accurate, and may even ignore direct orders under fire.
              </p>
              <p>
                The way you communicate matters too.
                Calm, strategic leadership keeps your team stable even when everything goes wrong.
                Panic or aggression spreads like wildfire — and once confidence breaks, holding the squad together becomes a fight of its own.
              </p>
              <p>
                Maintaining high morale is key to long-term survival.
                Recovering fallen teammates’ dog tags, allowing time for rest, and achieving mission success
                all reinforce loyalty and unity.
                In the field, leadership is more than rank — it’s the difference between a coordinated squad and a body count.
              </p>
            </section>
          </div>
          <div className="cube left">
            <section id="squad-progression">
              <h3>Squad Progression &amp; Roster</h3>
              <p>
                Every operator under your command in <strong>{Name}</strong> has a history — and you’re part of how it unfolds.
                Your squad isn’t a set of replaceable AI units, but a roster of individuals who grow, adapt, and carry the marks of every mission.
              </p>
              <p>
                Soldiers gain experience through completed operations, improving traits such as weapon handling, awareness, and composure.
                A veteran with dozens of missions behind them will react faster, aim steadier, and keep calm under pressure.
                But experience also comes with weight — long campaigns leave scars, injuries, and fatigue that don’t disappear overnight.
              </p>
              <p>
                Wounded or exhausted operators can be rested or treated aboard the carrier, forcing you to rotate active members of your roster.
                Lose a soldier in combat, and their slot remains empty until a new recruit joins your team — but no replacement can erase their legacy.
                Their name, stats, and dog tag remain part of your campaign history forever.
              </p>
              <p>
                Over time, your roster becomes a reflection of your leadership — a living record of every success, failure, and sacrifice.
                Whether you command hardened veterans or a constantly rebuilding squad of rookies depends on one thing: how you lead them.
              </p>
            </section>
          </div>
          <div className="cube right">
            <section id="carrier-hub">
              <h3>Carrier Hub &amp; Management</h3>
              <p>
                Between operations, your home is the <strong>USS Olympus</strong> — a massive aircraft carrier stationed just beyond the conflict zone.
                It’s more than a base; it’s the heart of your campaign. Every decision you make here determines how well you’ll survive out there.
              </p>
              <p>
                The carrier serves as a fully explorable hub.
                Visit the <strong>Armory</strong> to customize loadouts, manage resources, and upgrade weapons.
                Step into the <strong>Briefing Room</strong> to receive new intel, plan missions, and review completed operations.
                In the <strong>Medbay</strong>, treat injuries, manage squad recovery times, and monitor psychological stability.
                The <strong>Barracks</strong> hold your roster — a quiet space filled with personal belongings, bunk beds, and the ghosts of those who didn’t make it back.
              </p>
              <p>
                As time passes, the ship evolves.
                New personnel arrive, conversations change, and the memorial wall in the main corridor grows longer with every lost squadmate.
                Walk those halls often — they remind you what your choices cost.
              </p>
              <p>
                From this hub, you prepare, rest, and reflect.
                It’s where tactical planning meets human reality — a fragile balance of readiness, morale, and memory.
                Every mission starts and ends here, but what happens in between is entirely up to you.
              </p>
            </section>
          </div>
          <div className="cube left">
            <section id="mission-structure">
              <h3>Mission Structure &amp; Objectives</h3>
              <p>
                Operations in <strong>{Name}</strong> are more than checklists — they’re living, reactive scenarios.
                Every mission you choose shapes the campaign, the map, and the fate of your squad.
                Objectives aren’t just assigned; they’re consequences of what’s happening in the world around you.
              </p>
              <p>
                Missions are launched from the carrier’s briefing room, each offering unique objectives, conditions, and risks.
                Some are time-sensitive — rescue missions, high-value target extractions, convoy interceptions —
                while others emerge dynamically from your past actions, like re-securing zones you once abandoned or retaliating after a failed op.
              </p>
              <p>
                Every decision has weight.
                Completing a mission strengthens your position and stabilizes allied control,
                while failure permanently changes the map — enemies regroup, civilians flee, and new threats appear.
                The city evolves with or without you, reacting to your victories and your mistakes alike.
              </p>
              <p>
                Objectives vary from stealth infiltrations and rescue operations to full-scale assaults and defensive holds.
                Each op demands tactical awareness, resource management, and trust in your squad.
                There are no scripted wins — only what you earn through planning, precision, and perseverance.
              </p>
            </section>
          </div>
          <div className="cube right">
            <section id="world-factions">
              <h3>The World &amp; Factions</h3>
              <p>
                The story of <strong>{Name}</strong> unfolds in the aftermath of a failed military coup in mainland China.
                What was once a unified nation is now a fractured warzone — divided by loyalty, ideology, and desperation.
                Cities crumble as factions fight for power, and civilians are caught in the crossfire.
                You and your squad are deployed deep inside this chaos, operating off the record to contain what’s left of the conflict.
              </p>
              <p>
                The world is a living, reactive environment.
                Factions rise and fall, occupy new territories, and fight each other as much as they fight you.
                Your actions can influence their strength — destroy their supply lines, assassinate their leaders, or defend critical areas,
                and the balance of power shifts.
                Ignore them too long, and they adapt, reinforce, and retaliate.
              </p>
              <p>
                The primary forces in play include:
              </p>
              <ul>
                <li><strong>PLA Loyalists</strong> — remnants of China’s original army, disciplined but divided.
                  They believe they’re restoring order, no matter the civilian cost.</li>
                <li><strong>Coup Forces</strong> — rogue generals with stolen tech and heavy firepower.
                  Ruthless, unpredictable, and responsible for most of the destruction.</li>
                <li><strong>Insurgent Militias</strong> — regional fighters, scavengers, and survivors.
                  They know the terrain and use ambush tactics to brutal effect.</li>
                <li><strong>Black Market Syndicate</strong> — private contractors and smugglers profiting from the war.
                  Loyal to no one but their wallets, they’ll sell weapons to anyone who can pay.</li>
              </ul>
              <p>
                Each faction controls its own zones, tactics, and priorities.
                Sometimes they clash with one another; other times, they form uneasy alliances.
                Navigating this web of conflict is as much about strategy as firepower —
                every mission you take can alter the fragile balance of a world on the edge of collapse.
              </p>
            </section>
          </div>
          <div className="cube left">
            <section id="combat-tactics">
              <h3>Combat &amp; Tactics</h3>
              <p>
                Combat in <strong>{Name}</strong> is built around precision, planning, and pressure.
                Every bullet matters, every corner is a risk, and every engagement can be your last.
                The game rewards patience and coordination over reflex — a single wrong move can unravel an entire operation.
              </p>
              <p>
                Firefights are slow, brutal, and grounded in realism.
                There are no floating hit markers or arcade indicators — only muzzle flashes, shouts, and the ringing echo of suppressed fire.
                Bullets penetrate surfaces, armor offers limited protection, and cover is your best ally.
                Staying low, keeping quiet, and using the environment smartly can mean the difference between a successful extraction and a squad wipe.
              </p>
              <p>
                Communication and positioning define success.
                You can issue tactical commands to your AI teammates — breach, cover, flank, hold —
                and they’ll respond dynamically to your orders and the flow of combat.
                Each squad member follows realistic line-of-sight and reaction times,
                forcing you to think like a real unit rather than a lone soldier.
              </p>
              <p>
                Suppression and morale play major roles in combat.
                Heavy fire can pin enemies down, break their confidence, or force them to retreat —
                but the same applies to you. Prolonged exposure to gunfire increases stress and lowers accuracy,
                creating a sense of chaos that mirrors real combat psychology.
              </p>
              <p>
                Every encounter is an opportunity — or a threat.
                Whether you’re breaching a building, holding a street corner, or exfiltrating under fire,
                the outcome depends entirely on your leadership, preparation, and nerve.
                There are no second chances — only decisions you’ll have to live with.
              </p>
            </section>
          </div>
          <div className="cube right">
            <section id="weapons-equipment">
              <h3>Weapons &amp; Equipment</h3>
              <p>
                Every weapon in <strong>{Name}</strong> is a tool — not a toy.
                Guns are modeled with real-world physics, recoil, and handling, built for authenticity and precision.
                There are no overpowered loadouts or unrealistic upgrades, only what works and what doesn’t under fire.
              </p>
              <p>
                Players and AI alike are subject to the same ballistic rules.
                Bullets pierce materials based on caliber and surface thickness,
                magazines have limited capacity, and reloading takes time.
                Your weapon jams, overheats, or misfires if poorly maintained — keeping it functional is as vital as your aim.
              </p>
              <p>
                Loadouts are chosen before each mission aboard the carrier’s Armory.
                Every slot matters: primary weapon, sidearm, gear, and tactical tools.
                Carry too much, and you’ll move slower; go light, and you’ll run out of options fast.
                There’s no “meta” — only what fits your strategy and the mission ahead.
              </p>
              <p>
                Tactical gear expands your approach.
                <strong>Breaching tools</strong> like C4, bolt cutters, and lockpicks open new routes.
                <strong>Drones</strong> and <strong>signal jammers</strong> provide recon or electronic countermeasures.
                <strong>Medical kits</strong> and <strong>bandages</strong> can stabilize wounds but require time and cover to use.
                Every piece of equipment is situational, forcing you to adapt and improvise.
              </p>
              <p>
                Ammunition, rations, and repair kits are all limited resources tied to your campaign economy.
                What you expend on one operation won’t be instantly replaced —
                every bullet you fire and every tool you use has to be earned back through success and survival.
              </p>
            </section>
          </div>
          <div className="cube left">
            <section id="logistics-resources">
              <h3>Logistics &amp; Resource Management</h3>
              <p>
                Warfare isn’t only fought on the ground — it’s sustained through logistics.
                In <strong>{Name}</strong>, every mission, bullet, and bandage is part of a larger campaign economy.
                Resources are limited, and managing them efficiently can be the difference between survival and collapse.
              </p>
              <p>
                Supplies come from successful operations, recovered materials, and field scavenging.
                Ammunition, medical kits, fuel, and mechanical parts must all be tracked and rationed.
                Overextending your squad or wasting equipment on low-priority targets can leave you dangerously underprepared for critical missions.
              </p>
              <p>
                The <strong>Armory</strong> and <strong>Logistics Deck</strong> aboard the carrier act as the campaign’s nerve center.
                Here you allocate supplies, repair weapons, maintain vehicles, and manage your inventory of tactical gear.
                Each decision — whether to upgrade a rifle, patch a damaged suit, or save parts for later —
                impacts your squad’s readiness and the missions you’re able to undertake.
              </p>
              <p>
                Economic support is tied directly to performance.
                High mission success rates earn funding, intelligence, and access to better equipment.
                Failures or heavy losses strain your logistics, reducing resupply shipments and morale aboard the ship.
                Nothing in the campaign comes free — everything must be earned, maintained, or salvaged.
              </p>
              <p>
                Managing logistics isn’t just an afterthought; it’s part of the experience.
                Planning ahead, preparing for worst-case scenarios, and making hard trade-offs give your campaign weight and realism.
                In <strong>{Name}</strong>, war isn’t about endless resources — it’s about how far you can go before they run out.
              </p>
            </section>
          </div>
          <div className="cube right">
            <section id="failure">
              <h3>Failure &amp; Consequences</h3>
              <p>
                In <strong>{Name}</strong>, failure isn’t the end — it’s part of the story.
                Every operation, success or disaster, shapes the world and the campaign that follows.
                Missions don’t reset, enemies don’t forget, and the cost of mistakes is permanent.
              </p>
              <p>
                When an operation fails, the consequences ripple outward.
                Objectives are lost, allies withdraw, and enemy forces adapt to your actions.
                A missed extraction can lead to reinforcements being cut off, or a failed rescue may
                mean the loss of critical intelligence that changes future missions.
                Every decision — or hesitation — leaves its mark.
              </p>
              <p>
                Losing a squad member is more than a tactical setback.
                Their absence affects morale, squad performance, and your campaign’s emotional core.
                Their dog tag will either hang on the carrier’s memorial wall or remain missing in action,
                depending on whether you recovered it.
                You don’t reload saves to undo losses — you live with them.
              </p>
              <p>
                Resource shortages, broken gear, and mounting fatigue can force you into desperate situations.
                Sometimes survival means retreating or abandoning objectives altogether.
                The campaign adapts dynamically to your outcomes — success reshapes the world, but failure defines its scars.
              </p>
              <p>
                <strong>{Name}</strong> doesn’t punish you for losing; it challenges you to continue.
                The story doesn’t stop because things went wrong — it evolves.
                How you recover, rebuild, and push forward determines the legacy of your squad and the world they leave behind.
              </p>
            </section>
          </div>
          <div className="cube left">
            <section id="campaign-progression">
              <h3>Campaign Structure &amp; Progression</h3>
              <p>
                The campaign in <strong>{Name}</strong> isn’t divided into levels — it’s a continuous, evolving operation.
                Every mission you complete, every life you lose, and every day that passes shapes the course of the story.
                There are no traditional checkpoints or restarts. The campaign moves forward — with or without you.
              </p>
              <p>
                You begin on the <strong>USS Olympus</strong>, deployed just beyond the warzone.
                From there, you plan missions, select objectives, and decide how to allocate your limited resources.
                Each decision alters the situation on the ground: factions rise or fall, supply lines shift, and new threats appear.
                No two campaigns unfold the same way.
              </p>
              <p>
                The world advances through <strong>Operational Days</strong>.
                Each day you play — each mission you undertake — advances the in-game calendar.
                The conflict evolves dynamically based on time, performance, and survival.
                Fail to act, and opportunities disappear. Push too hard, and fatigue or attrition may destroy your squad.
              </p>
              <p>
                Progression isn’t measured by stats or unlocks, but by what you accomplish and what you endure.
                Surviving operatives carry their experience and scars into every new mission.
                Lost soldiers, failed objectives, or destroyed infrastructure become permanent parts of your campaign history.
              </p>
              <p>
                The story builds organically toward multiple endings shaped by your leadership and persistence.
                You may extract your team after a grueling series of victories, abandon the region after catastrophic losses,
                or simply run out of men, supplies, and hope.
                The outcome isn’t scripted — it’s earned through every decision you make along the way.
              </p>
            </section>
          </div>
          <div className="cube right">
            <section id="endgame-legacy">
              <h3>Endgame &amp; Legacy</h3>
              <p>
                Every campaign in <strong>{Name}</strong> ends — but how it ends is entirely up to you.
                There are no scripted finales or guaranteed victories.
                The world you leave behind reflects every choice, sacrifice, and mistake you made along the way.
              </p>
              <p>
                As the conflict draws to a close, the final missions emerge organically from your campaign’s history.
                Your resources, surviving operators, and strategic decisions determine the outcome —
                whether it’s a full evacuation, a desperate last stand, or a quiet extraction under the cover of night.
                Every path carries its own weight, and no two endings are the same.
              </p>
              <p>
                When the dust settles, the game doesn’t simply fade to black.
                The aftermath unfolds aboard the <strong>USS Olympus</strong>.
                The memorial wall stands as a record of everyone who didn’t make it home,
                their names etched in steel — or left blank if their dog tags were never recovered.
                Survivors reflect on what’s been lost and what was achieved, offering closure or regret depending on your actions.
              </p>
              <p>
                After the credits, your <strong>Campaign Report</strong> is compiled —
                a permanent archive of your operational timeline.
                It details completed missions, failed objectives, confirmed KIA and MIA operatives,
                total days in operation, and your overall success rating as a commander.
                This report becomes your personal history — proof of how far you and your squad made it before the war took its final toll.
              </p>
              <p>
                <strong>{Name}</strong> isn’t about winning. It’s about leaving something behind.
                Your leadership, your decisions, and your legacy are what define the end —
                not whether you survived, but whether it mattered that you tried.
              </p>
            </section>
          </div>
          <div className="cube left">
            <section id="coop-multiplayer">
              <h3>Co-Op &amp; Multiplayer Integration</h3>
              <p>
                <strong>{Name}</strong> is designed first and foremost as a single-player experience —
                but every system, from AI command to squad mechanics, is built to support full cooperative play.
                Up to three other players can seamlessly replace AI squadmates, joining your campaign as part of the same fireteam.
              </p>
              <p>
                Co-op doesn’t create a separate mode or break the story.
                Human players step directly into the roles of your existing squad members,
                experiencing the same persistent world, time system, and mission consequences.
                If one of them falls in combat, they’re treated like any other operator — permanently gone unless their dog tag is recovered.
              </p>
              <p>
                Communication is vital.
                Players share the same resources, equipment pools, and operational timeline.
                Every bullet fired and every decision made affects the group as a whole.
                Leadership remains centralized — the host acts as squad commander — but trust, coordination,
                and discipline determine whether the mission succeeds or the squad burns together.
              </p>
              <p>
                Drop-in, drop-out support keeps the experience fluid.
                Friends can join before deployment or connect mid-operation to replace fallen or missing AI teammates.
                Progress, inventory, and casualties are synchronized across all participants,
                ensuring that the world evolves consistently for everyone involved.
              </p>
              <p>
                Whether played solo or with friends, <strong>{Name}</strong> remains one continuous story —
                one squad, one war, and one shared legacy of survival.
              </p>
            </section>
          </div>
          <div className="cube right">
            <section id="technical-visual">
              <h3>Technical Design &amp; Visual Style</h3>
              <p>
                <strong>{Name}</strong> is built on a foundation of grounded realism —
                every design choice, visual detail, and sound effect exists to immerse you completely in the experience of modern warfare.
                The goal isn’t spectacle; it’s authenticity, tension, and the quiet unease that comes from knowing any moment could be your last.
              </p>
              <p>
                The game’s visuals are defined by a subdued, cinematic tone.
                Natural lighting and volumetric weather systems bring life to the city —
                from blinding midday heat to the cold blue haze of pre-dawn operations.
                Buildings crumble realistically under fire, smoke and dust fill the air after explosions,
                and every surface tells a story of a world breaking apart under the weight of conflict.
              </p>
              <p>
                Sound design plays an equally critical role.
                Every gunshot echoes differently depending on environment and distance.
                The sharp crack of nearby fire contrasts with the deep, delayed rumble of distant combat.
                Squad radio chatter filters through static and stress, while ambient city noise — sirens, wind, and the distant hum of drones —
                reminds you that this world is alive even when you’re not fighting.
              </p>
              <p>
                Built for modern hardware using a high-fidelity engine such as <strong>Unreal Engine 5</strong>,
                the game leverages advanced physics simulation, dynamic destruction, and AI-driven environmental reactions.
                Real-time lighting and shadow systems ensure that every mission, every time of day, and every weather condition
                feels distinct and unpredictable.
              </p>
              <p>
                The user interface follows the same minimalist philosophy.
                No bright markers or intrusive HUD — just subtle indicators, realistic instrumentation,
                and diegetic feedback through your gear and communication systems.
                The world itself is your map, your compass, and your warning system.
              </p>
              <p>
                The result is a visual and technical experience that feels as grounded as it is beautiful —
                not exaggerated or stylized, but immersive, oppressive, and unmistakably real.
                <strong>{Name}</strong> isn’t just played — it’s lived.
              </p>
            </section>
          </div>
          <div className="cube left">
            <section id="notes" className="notes section">
              <h3>Notes</h3>
              <p>
                This site and concept are created by Redking as a personal vision for a game that may never get made — but deserves to exist.
                It's a love letter to {Name}s, to forgotten squadmates, and to the idea that sometimes one game is all you need.
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
      )}
    </>
  );
}


/*
<section id="about-redfolder">
  <h3>About RedFolderGames</h3>
  <p>
    <strong>RedFolderGames</strong> is not a studio built on funding, marketing, or safety nets —  
    it’s built on ambition, grit, and a belief that games can still mean something.  
    Formed out of passion rather than profit, RedFolderGames exists to create experiences that 
    challenge players, not just entertain them.
  </p>
  <p>
    <strong>{Name}</strong> represents everything we love about the art of interactive storytelling —  
    risk, consequence, emotion, and authenticity.  
    It’s a concept born in late-night conversations, forged from the frustration of modern trends,  
    and shaped by the question: <em>“What if we made one game that truly mattered, even if it broke us doing it?”</em>
  </p>
  <p>
    There’s no guarantee this game will ever exist beyond design.  
    But that’s not the point.  
    The point is to dream big, to build something that doesn’t compromise —  
    something <em>studio-death ready</em>, where every mechanic, story, and bullet is there for a reason.
  </p>
  <p>
    Whether <strong>{Name}</strong> is ever fully realized or remains a digital blueprint,  
    it stands as proof that games can still be <em>personal</em>.  
    They can have weight, silence, and reflection.  
    They can make you feel loss, pride, and purpose — just like the people who fight and fall within them.
  </p>
  <p>
    <strong>From the basement, the only way is up.</strong>  
    – RedFolderGames
  </p>
</section>
*/