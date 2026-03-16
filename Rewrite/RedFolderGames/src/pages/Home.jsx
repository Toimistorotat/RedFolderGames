import { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Typewriter from '../components/Typewriter'
import Fold from '../components/Folders.jsx'
import { Space } from '../components/Space.jsx'
import { Logo } from '../components/Loading.jsx'
import { Feedback, FeedbackList } from '../components/FeedBack.jsx'
import Calculator from '../components/Calculator.jsx'

export default function FrontPage({ feedbacks, addFeedback, message }) {

    const [display, setDisplay] = useState(false)
    return (
        <>
            <div className="flex w-full">

                {/* Left spacer */}
                <div className="flex-1">
                    sup
                </div>

                {/* Center column */}
                <div className="flex flex-col items-center w-[850px]">
                    <Logo />

                    <div className="flex flex-col gap-10 w-full">
                        <Header />

                        <div className="w-full">
                            <Typewriter />
                        </div>

                        <Fold />

                        <div>
                            {message && <p>{message}</p>}
                            <FeedbackList feedbacks={feedbacks} />
                            <Feedback addFeedback={addFeedback} />
                        </div>

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

*/}