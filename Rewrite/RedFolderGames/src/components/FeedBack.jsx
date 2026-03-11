import '../css/tailwind.css'
import { useState } from 'react'

export function Feedback({ addFeedback }) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="divForm">
            <h2>Gimme Some Feedback please</h2>

            <form onSubmit={e => addFeedback(e, name, message)}>
                Name:
                <input
                    onChange={e => setName(e.target.value)}
                    value={name}
                    type="text"
                    name="name"
                />

                Message:
                <textarea
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    name="message"
                    rows={4}
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white/5"
                />

                <input type="submit" value="Lähetä" />
            </form>
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