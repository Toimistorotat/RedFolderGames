import { useEffect, useState } from 'react';

import Header from '../parts/Header.jsx'
import Footer from '../parts/Footer.jsx';
import Terminal from '../components/Terminal'
import Fold from '../components/Folders.jsx'
import { Space } from '../components/Space.jsx'
import { Logo } from '../components/Loading.jsx'
import { Feedback, FeedbackList } from '../components/FeedBack.jsx'
import ChangelogPage from '../components/Changelogs.jsx'

import Calculator from '../components/Calculator.jsx'
import FaceToggle from '../components/Facetest.jsx'
import Typewriter from '../components/Typewriter.jsx'

export default function FrontPage({ feedbacks, addFeedback, message }) {
    const [guideMode, setGuideMode] = useState("");
    const [display, setDisplay] = useState(false)
    const [extras, setExtras] = useState(false)
    const [Ttoggle, setTtoggle] = useState(false)

    useEffect(() => {
        const startGuide = () => {
            const wantsGuide = sessionStorage.getItem("rf-guide");
            if (wantsGuide !== "credits") return;

            const terminalEl = document.getElementById("terminal");
            terminalEl?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });

            setTimeout(() => {
                setGuideMode("credits");
                sessionStorage.removeItem("rf-guide");
            }, 700);
        };

        window.addEventListener("rf-start-guide", startGuide);

        return () => window.removeEventListener("rf-start-guide", startGuide);
    }, []);

    return (
        <>
            <div className="flex w-full">

                {/* Left spacer */}
                <div className="flex-1">
                    <button onClick={() => setExtras(prev => !prev)}>sup</button>
                </div>

                {/* Center column */}
                <div className="flex flex-col items-center w-212.5">
                    <Logo />

                    <div className="flex flex-col gap-10 w-full">
                        <Header />

                        <div id="terminal" className="w-full" aria-label="Introduction message from the creator Redking in terminal style">
                            {!Ttoggle && (
                                <Terminal
                                    setTtoggle={setTtoggle}
                                    extras={!extras}
                                    guideMode={guideMode}
                                    onGuideDone={() => setGuideMode("")}
                                />
                            )}
                            {extras && Ttoggle && (
                                <Typewriter setTtoggle={setTtoggle} />
                            )}
                        </div>
                        {extras && (
                            <div>
                                <ChangelogPage />
                            </div>
                        )}
                        <Fold />

                        <div>
                            {message && <p>{message}</p>}
                            <FeedbackList feedbacks={feedbacks} />
                            <Feedback addFeedback={addFeedback} />
                        </div>

                        {extras && (
                            <div>
                                <FaceToggle />
                            </div>
                        )}

                        <Space />
                    </div>

                    <Footer />
                </div>

                {/* Right column */}
                <div className="flex-1 flex flex-col items-start pl-10">
                    <div className="justify-end">
                        <button onClick={() => setDisplay(prev => !prev)}>Calc</button>
                    </div>
                    {display && (
                        <div>
                            <Calculator />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
{/*
            what todo
            1. Add more description to the site, maybe a "about" section or something
            2. Add Accessibility options to the game Idea pages
            3. Add credits and the usual additions to Footer.jsx
            4. Rewrite the whole Typewriter component to be more dynamic and have option for it to cut off and start another while looking like a actual terminal.
            5. add hidden konamicode to unlock the terminals input system
            6. oh and fix the issues with tailwindcss as the extension keeps crying about some could be done this ways
            7. fix the calc for once and for all
            8. Change the pin look and fuction a bit
            four done
            One Done
            six done
            three done
*/}