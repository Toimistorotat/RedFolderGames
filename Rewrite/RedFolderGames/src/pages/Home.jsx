import { useState } from 'react';

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
    const [display, setDisplay] = useState(false);
    const [extras, setExtras] = useState(false);
    const [Ttoggle, setTtoggle] = useState(false);

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
        <div className="flex w-full">
            {/* Left spacer */}
            <div className="flex-1">
                <button onClick={() => setExtras((prev) => !prev)}>sup</button>
            </div>

            {/* Center column */}
            <div className="flex w-full max-w-7xl flex-col items-center">
                <Logo />

                <div className="flex w-full flex-col gap-10">
                    <div className="mx-auto w-full max-w-4xl">
                        <Header />
                    </div>

                    <div
                        id="terminal"
                        className="mx-auto w-full max-w-4xl"
                        aria-label="Introduction message from the creator Redking in terminal style"
                    >
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
                        <div className="w-full">
                            <ChangelogPage />
                        </div>
                    )}

                    <div className="mx-auto w-full max-w-4xl">
                        <Fold />
                    </div>

                    <div className="mx-auto w-full max-w-4xl">
                        {message && <p>{message}</p>}
                        <FeedbackList feedbacks={feedbacks} />
                        <Feedback addFeedback={addFeedback} />
                    </div>

                    {extras && (
                        <div className="mx-auto w-full max-w-4xl">
                            <FaceToggle />
                        </div>
                    )}

                    <div className="mx-auto w-full max-w-4xl">
                        <Space />
                    </div>
                </div>

                <div className="mx-auto w-full max-w-4xl">
                    <Footer onStartCreditsGuide={startCreditsGuide} />
                </div>
            </div>

            {/* Right column */}
            <div className="flex flex-1 flex-col items-start pl-10">
                <div className="justify-end">
                    <button onClick={() => setDisplay((prev) => !prev)}>Calc</button>
                </div>

                {display && (
                    <div>
                        <Calculator />
                    </div>
                )}
            </div>
        </div>
    );
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
            ten done
*/}