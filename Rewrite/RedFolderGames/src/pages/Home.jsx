import { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
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

    const [display, setDisplay] = useState(false)
    const [extras, setExtras] = useState(false)
    const [Ttoggle, setTtoggle] = useState(false)
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

                        <div className="w-full" aria-label="Introduction message from the creator Redking in terminal style">
                            {!Ttoggle && (
                                <Terminal setTtoggle={setTtoggle} extras={!extras} />
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
            four Mostly done
            One Done
*/}