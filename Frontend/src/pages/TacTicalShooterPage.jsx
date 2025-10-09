import '../css/TTShooter.css';
import Header from '../HeaderTTS';
import Footer from '../Footer';
import Button from '@mui/material/Button';

export default function TacTicalshooter() {
    return (
        <> 
            <Header />

            <div className="bigbody">
                <div className="cube right">
                    <section id="hero" className="hero section">
                      <h1>TacTical Shooter</h1>
                      <p><strong>Squad-based tactical realism in a permanent world that remembers.</strong></p>
                      <p>TacTical Shooter is a hardcore, story-driven FPS where you lead a squad through a war-torn city. One shot. One run. One team.</p>
                    </section>
                </div>
                <div className="cube left">
                    <section id="about">
                      <h2>About The Game</h2>
                      <p>
                        Inspired by games like <i>Ready or Not</i>, <i>Squad</i>, and <i>Tarkov</i>, TacTical Shooter drops you into a sprawling urban warzone.
                        You command a four-person team — yourself and three AI operatives — and carry out missions in a city that never resets. 
                        Fail a mission? It stays failed. Blow up a radio tower? It stays destroyed. 
                        Every bullet, every body, every victory — it all leaves a mark.
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
                    </section>
                </div>
                <div className="cube left">
                    <section id="notes" className="notes section">
                      <h3>Notes</h3>
                      <p>
                        This site and concept are created by Redking as a personal vision for a game that may never get made — but deserves to exist.  
                        It's a love letter to tactical shooters, to forgotten squadmates, and to the idea that sometimes one game is all you need.
                      </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
