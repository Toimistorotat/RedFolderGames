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

    const startCreditsGuide = () => {
        const terminalEl = document.getElementById("terminal");

        terminalEl?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });

        setTimeout(() => {
            setGuideMode("credits");
        }, 700);
    };

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

                    <Footer onStartCreditsGuide={startCreditsGuide} />
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

            2. Add Accessibility options to the game Idea pages




            7. fix the calc for once and for all (Not Important)
            8. Change the pin look and fuction a bit
            9. Improve the Nav Menu in TTS
            10. Improve Changelogs readability and Looks
            four done
            One Done
            six done
            three done
            five done but a bit changed
*/}