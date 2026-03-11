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

  const addFeedback = (e, name, message) => {
    e.preventDefault();

    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return; // stop submission
    }

    feedbackService.add({ name, message })
      .then(() => {
        startHook();
        alert("Feedback sent!");
      });
  };

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
        <Route path="/RedFolderGames/" element={<Home feedbacks={feedbacks} addFeedback={addFeedback} message={message} />} />
        <Route path="/RedFolderGames/TTS" element={<TTS />} />
      </Routes>
    </Router>
  )
}

export default App;