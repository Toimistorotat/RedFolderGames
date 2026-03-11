import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './css/tailwind.css'
import Home from './pages/Home'
import TTS from './pages/TacTicalShooterPage.jsx'
import { Space } from './components/Space.jsx';
import feedbackService from './services/FeedbackService.jsx'

function App() {

  const [feedbacks, setFeedbacks] = useState([])
  const [message, setMessage] = useState("")

  const startHook = () => {
    feedbackService.getAll().then(response => {
      setFeedbacks(response)
    })
  }

  const addFeedback = (e, name, messageText) => {
    e.preventDefault()

    const feedback = {
      name: name,
      message: messageText,
      date: new Date().toISOString()
    }

    feedbackService.add(feedback).then(response => {
      setMessage("Palaute lisätty")
      setFeedbacks(prev => prev.concat(response))
    })
  }

  useEffect(() => {
    feedbackService.getAll().then(response => {
      console.log('GET response:', response)
      setFeedbacks(Array.isArray(response) ? response : [])
    })
  }, [])

  useEffect(() => {
    startHook()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home feedbacks={feedbacks} addFeedback={addFeedback} message={message} />} />
        <Route path="/TTS" element={<TTS />} />
      </Routes>
    </Router>
  )
}

export default App;