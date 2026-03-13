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
import calculationService from './services/CalculationService.jsx'

function App() {
  const [calculations, setCalculations] = useState([])
  const [feedbacks, setFeedbacks] = useState([])
  const [message, setMessage] = useState("")

  const startHook = () => {
    feedbackService.getAll().then(response => {
      console.log(response)
      setFeedbacks(response)
    })
  }

  const startHookC = () => {
    calculationService.getAllC().then(response => {
      setCalculations(response)
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

  const addCalculation = (e, name, expression) => {
    e.preventDefault();

    if (expression.length < 2) {
      alert("Expression cannot be empty.");
      return; // stop submission
    }

    calculationService.addC({ name, expression })
    .then(() => {
      startHookC();
      alert("Calculation saved!");
    });
  }

{/*}  useEffect(() => {
    feedbackService.getAll().then(response => {
      console.log('GET response:', response)
      setFeedbacks(Array.isArray(response) ? response : [])
    })
  }, [])

  useEffect(() => {
    calculationService.getAllC().then(response => {
      console.log('GET response:', response)
      setCalculations(Array.isArray(response) ? response : [])
    })
  }, []) */}

  useEffect(() => {
    startHook(),
    startHookC()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/RedFolderGames/" element={<Home feedbacks={feedbacks} addFeedback={addFeedback} calculations={calculations} addCalculation={addCalculation} message={message}  />} />
        <Route path="/RedFolderGames/TTS" element={<TTS />} />
      </Routes>
    </Router>
  )
}

export default App;