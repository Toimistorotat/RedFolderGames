import React, { useState } from 'react';
import '../css/TTShooter.css';
import Header from '../HeaderTTS';
import Button from '@mui/material/Button';

export default function TacTicalshooter() {
    return (
        <> 
            <Header />
            <header id="header" className="headertss">   
            </header>
                
            <div className="bigbody">
                <div className="cube right">
                    <section id="hero" class="hero section">
                        <h1>TacTical Shooter</h1>
                        <p>blablblbalbla</p>
                        <b>Ahh Yes</b>
                        <p>blablablbalab</p>
                        <i>Testing Testing Kill All Humans</i>
                    </section>
                </div>
                <div className="cube left">
                    <section id="about">
                        <h2>About The Game</h2>
                        <p>Overview of the gameplay, tone, and what makes it special.</p>
                    </section>
                </div>
                <div className="cube right">
                    <section id="features">
                        <h2>Features</h2>
                        <ul>
                        <li>Squad-based tactical FPS with AI teammates</li>
                        <li>Permadeath + dog tag recovery system</li>
                        <li>Open persistent map</li>
                        <li>Story-driven, but sandbox in feel</li>
                        </ul>
                    </section>
                </div>
                <div className="cube right">
                    <section id="features-explained">
                        <h3>Features Explained</h3>
                        <p>Permadeath: meaning if your squad dies during a mission you fail the mission permanently you cannot re do it during this run of the game</p>
                        <p>DogTags: Recover fallen squadmates’ dog tags to honor them. Leave them behind? MIA forever.</p>
                    </section>
                </div>
                <div className="cube left">
                    <section id="npc">
                        <h2>Your Fireteam</h2>
                        <p>Explanation of AI control, character-switching, squad deaths, and emotional weight.</p>
                    </section>
                </div>
                <div className="cube right">
                    <section id="world">
                        <h2>The World</h2>
                        <p>China in chaos. Rogue factions. Morality blurred. You’re just trying to get your squad home.</p>
                    </section>
                </div>
                <div className="cube left">
                    <section id="notes" class="notes section">
                        <h3>Notes</h3>
                        <p>This is a personal concept project. Built to imagine what a successful game studio might feel like.</p>
                    </section>
                </div>
            </div>
        </>
    );
}
