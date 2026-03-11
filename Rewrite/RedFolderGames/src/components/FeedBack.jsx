import '../css/tailwind.css'
import { useState } from 'react'
import { Button } from '@mui/material'

export function Feedback({ addFeedback }) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="divForm">
            <div className='pt-1 rounded-xl shadow-[5px_5px_25px_rgba(255,255,255,0.25)] bg-white/5 w-full border-1 border-white/10 mt-5 pb-5'>
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
                    <div className="text-xs text-zinc-400">
                        Preview / Gimme Some Feedback please.txt
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
    const list = Array.isArray(feedbacks) ? feedbacks : []

    return (
        <div>
            <h2>Feedback</h2>
            <ul>
                {list.map(f => (
                    <li key={f.id}>
                        <strong>{f.name}</strong>: {f.message}
                    </li>
                ))}
            </ul>
        </div>
    )
}