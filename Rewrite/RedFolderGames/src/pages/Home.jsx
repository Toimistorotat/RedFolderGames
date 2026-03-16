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

                        <div className="w-full" aria-label="Introduction message from the creator Redking in terminal style">
                            <Typewriter />
                        </div>

                        <Fold />

                        <div>
                            {message && <p>{message}</p>}
                            <FeedbackList feedbacks={feedbacks} />
                            <Feedback addFeedback={addFeedback} />
                        </div>

                        <Space />
                        <div className="flex items-center justify-center rounded-2xl bg-[#0b1020] p-6 shadow-[0_0_40px_rgba(37,99,235,0.18)]">
                            <svg
                                viewBox="0 0 400 320"
                                className="h-auto w-full max-w-[420px]"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#7dd3fc" />
                                        <stop offset="50%" stopColor="#38bdf8" />
                                        <stop offset="100%" stopColor="#2563eb" />
                                    </linearGradient>

                                    <filter id="darkGlow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow
                                            dx="0"
                                            dy="0"
                                            stdDeviation="6"
                                            floodColor="#000000"
                                            floodOpacity="0.95"
                                        />
                                        <feDropShadow
                                            dx="0"
                                            dy="0"
                                            stdDeviation="12"
                                            floodColor="#000000"
                                            floodOpacity="0.65"
                                        />
                                    </filter>

                                    <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow
                                            dx="0"
                                            dy="0"
                                            stdDeviation="4"
                                            floodColor="#38bdf8"
                                            floodOpacity="0.9"
                                        />
                                        <feDropShadow
                                            dx="0"
                                            dy="0"
                                            stdDeviation="10"
                                            floodColor="#2563eb"
                                            floodOpacity="0.55"
                                        />
                                    </filter>
                                </defs>

                                {/* black glow underlayer */}
                                <path
                                    d="M20 20 L365 20 L365 245"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#darkGlow)"
                                    opacity="0.95"
                                />
                                <path
                                    d="M20 20 L360 245"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#darkGlow)"
                                    opacity="0.95"
                                />
                                <path
                                    d="M20 55 L20 300 L360 300"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#darkGlow)"
                                    opacity="0.95"
                                />
                                <path
                                    d="M20 55 L360 300"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#darkGlow)"
                                    opacity="0.95"
                                />

                                {/* blue main lines */}
                                <path
                                    d="M20 20 L365 20 L365 245"
                                    fill="none"
                                    stroke="url(#blueGradient)"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#blueGlow)"
                                />
                                <path
                                    d="M20 20 L360 245"
                                    fill="none"
                                    stroke="url(#blueGradient)"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#blueGlow)"
                                />
                                <path
                                    d="M20 55 L20 300 L360 300"
                                    fill="none"
                                    stroke="url(#blueGradient)"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#blueGlow)"
                                />
                                <path
                                    d="M20 55 L360 300"
                                    fill="none"
                                    stroke="url(#blueGradient)"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#blueGlow)"
                                />
                            </svg>
                        </div>
                        <div className="relative w-[400px] h-[300px] bg-slate-900 rounded-xl overflow-hidden">

                            {/* top-right triangle */}
                            <div
                                className="
          absolute
          top-0 right-0
          w-[260px] h-[200px]
          bg-gradient-to-br from-blue-400 to-blue-700
          shadow-[0_0_25px_rgba(59,130,246,0.8)]
          [clip-path:polygon(0_0,100%_0,100%_100%)]
        "
                            />

                            {/* bottom-left triangle */}
                            <div
                                className="
          absolute
          bottom-0 left-0
          w-[260px] h-[200px]
          bg-gradient-to-tr from-blue-400 to-blue-700
          shadow-[0_0_25px_rgba(59,130,246,0.8)]
          [clip-path:polygon(0_100%,0_0,100%_100%)]
        "
                            />

                        </div>
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
*/}