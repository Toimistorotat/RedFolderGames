import '../css/TTShooter.css'
import Header from '../HeaderTTS'
import Button from '@mui/material/Button'
export default function TacTicalshooter() {
    return (
        <> 
            <Header></Header>
                <div className="bigbody">
                    <div className="cube right">
                        <h1>TacTical Shooter</h1>
                        <p>blablblbalbla</p>
                        <b>Ahh Yes</b>
                        <p>blablablbalab</p>
                        <i>Testing Testing Kill All Humans</i>
                    </div>
                    <div className="cube left">
                        <h2>About The Game</h2>
                        <p>Overview of the gameplay, tone, and what makes it special.</p>
                    </div>
                    <div className="cube right">
                        <h2>Features</h2>
                        <ul>
                        <li>Squad-based tactical FPS with AI teammates</li>
                        <li>Permadeath + dog tag recovery system</li>
                        <li>Open persistent map</li>
                        <li>Story-driven, but sandbox in feel</li>
                        </ul>
                    </div>
                    <div className="cube left">
                        <h2>Your Fireteam</h2>
                        <p>Explanation of AI control, character-switching, squad deaths, and emotional weight.</p>
                    </div>
                    <div className="cube right">
                        <h2>The World</h2>
                        <p>China in chaos. Rogue factions. Morality blurred. You’re just trying to get your squad home.</p>
                    </div>
                    <div className="cube left">
                        <h2>Dog Tag System</h2>
                        <p>Recover fallen squadmates’ dog tags to honor them. Leave them behind? MIA forever.</p>
                    </div>
                    <div className="cube right">
                        <h3>Notes</h3>
                        <p>This is a personal concept project. Built to imagine what a successful game studio might feel like.</p>
                    </div>
                </div>
        </>
    )
}