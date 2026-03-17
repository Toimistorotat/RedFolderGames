import '../css/tailwind.css'
import { useState, useEffect, useRef } from "react"
import { Button } from '@mui/material'

export function Feedback({ addFeedback }) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [accepted, setAccepted] = useState(false)

    const text = "> Welcome to the feedback terminal\n> We do not recommend using your real names.\n> Please leave thoughtful feedback.\n> No slurs, spam, or disrespectful content.\n> Violations may be removed."
    const [display, setDisplay] = useState("")
    const [i, setI] = useState(0)
    const containerRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 1.0 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!visible) return

        if (i < text.length) {
            const timeout = setTimeout(() => {
                setDisplay(prev => prev + text[i])
                setI(i + 1)
            }, 15 + Math.random() * 100)

            return () => clearTimeout(timeout)
        }
    }, [i, visible])

    if (!accepted) {
        return (
            <div
                ref={containerRef}
                className='font-mono p-6 rounded-xl shadow-[5px_5px_25px_rgba(255,255,255,0.25)] bg-white/5 w-full border border-green-500/30 mt-5 pb-5'
            >

                <div className="text-xs text-zinc-400">
                    Admin / Thank_you_in_advance.txt
                </div>

                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800"></div>

                <p className="!text-green-500 !whitespace-pre-line">
                    {display}
                    {i < text.length && <span className="animate-pulse">_</span>}
                </p>

                {i >= text.length && (
                    <button
                        onClick={() => setAccepted(true)}
                        className="mt-6 border border-green-500 text-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition bg-white/3 animate-pulse"
                    >
                        {'>>'} Accept
                    </button>
                )}

            </div>
        )
    }

    return (
        <div className="divForm">
            <div className='pt-1 rounded-xl shadow-[5px_5px_25px_rgba(255,255,255,0.25)] bg-white/5 w-full border-1 border-white/10 mt-5 pb-5'>
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
                    <div className="text-xs text-zinc-400">
                        Feedback / Gimme_Some_Feedback_please.txt
                    </div>
                    <div className="flex gap-2">
                        <div className='h-5 w-5 bg-green-500 rounded-full flex justify-center'>
                            <span className='relative left-[0.6px] bottom-[3px] text-green-900/75 font-bold'>O</span>
                        </div>
                        <div className='h-5 w-5 bg-yellow-500 rounded-full flex justify-center'>
                            <span className='relative left-[0.6px] bottom-[9px] text-yellow-900/75 font-bold text-2xl'>-</span>
                        </div>
                        <div className='h-5 w-5 bg-red-500 rounded-full flex justify-center'>
                            <span className='relative left-[0.6px] bottom-[2.2px] text-red-900/75 font-bold cursor-pointer'>X</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={e => addFeedback(e, name, message)}>
                    <div className="flex ml-2">
                        <h2 className="!font-mono text-[20px] !whitespace-pre-line !text-green-500 animate-pulse">{'>>'} Name:</h2>
                        <input
                            onChange={e => setName(e.target.value)}
                            value={name}
                            type="text"
                            name="name"
                            className="text-lg text-green-500 w-[85%] !outline-none"
                        />
                    </div>
                    <div className="flex p-0">
                        <div className="ml-2">
                            <h2 className="!font-mono text-[20px] !whitespace-pre-line !text-green-500 animate-pulse">{'>>'} Feedback:</h2>
                            <div className="flex justify-center mt-3">
                                <Button type="submit" variant="outlined" className="m-20 !text-3xl animate-pulse">Send</Button>
                            </div>
                        </div>
                        <textarea
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                            name="message"
                            rows={4}
                            required
                            className="mt-0 block w-[80%] text-lg resize-none text-green-500 !outline-none"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export function FeedbackList({ feedbacks }) {
    const list = Array.isArray(feedbacks)
        ? [...feedbacks].sort((a, b) => {
            const dateDiff = new Date(a.date) - new Date(b.date)
            if (dateDiff !== 0) return dateDiff
            return (a.id ?? 0) - (b.id ?? 0)
        })
        : []

    return (
        <div>
            <h2 className="text-3xl">Feedback</h2>
            <p className="text-sm !text-white">Terminal look will be added later on</p>

            <ul className="flex flex-col gap-3">
                {list.map((f, i) => (
                    <li
                        key={f.id ?? i}
                        className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                        <div className="max-w-[60%] rounded-lg bg-white/10 px-4 py-2 font-mono text-green-400">
                            <strong>{f.name}</strong>: {f.message}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}