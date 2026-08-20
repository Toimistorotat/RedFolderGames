import {
  BrowserRouter as Router,
  Routes, Route, useLocation
} from 'react-router-dom'
import { useCallback, useState, useEffect } from 'react'
import './css/tailwind.css'
import Home from './pages/Home'
import TTS from './pages/TacTicalShooterPage.jsx'
import AirborneExodusPage from './pages/AirborneExodusPage.jsx'
import UntitledExtractionPage from './pages/UntitledExtractionPage.jsx'
import CityExtractionPage from './pages/CityExtractionPage.jsx'
import SpaceExtractionPage from './pages/SpaceExtractionPage.jsx'
import feedbackService from './services/FeedbackService.jsx'
import commentsService from './services/CommentsTTSService'
import { Empty, EmptySpecial } from './pages/Empty.jsx'

const useSpecialEmpty = Math.random() < 0.1;

function AppRoutes() {
  const { pathname } = useLocation()
  const [feedbacks, setFeedbacks] = useState([])
  const [comments, setComments] = useState([])
  const [message] = useState("")
  const isHome = pathname === "/" || pathname === ""
  const commentsGameId = pathname.startsWith("/TTS")
    ? "tts"
    : pathname.startsWith("/AirborneExodus")
      ? "ae"
      : pathname.startsWith("/UntitledExtraction")
        ? "untitled"
      : pathname.startsWith("/CityExtraction")
          ? "city"
          : pathname.startsWith("/SpaceExtraction")
            ? "space"
          : null

  const startHook = () => {
    feedbackService.getAll()
      .then(response => {
        setFeedbacks(response)
      })
      .catch(error => {
        console.warn("Feedback unavailable:", error.message)
        setFeedbacks([])
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
      })
      .catch(error => {
        console.warn("Feedback submit failed:", error.message)
        alert("Feedback could not be sent right now.")
      });
  };

  useEffect(() => {
    if (isHome) startHook()
  }, [isHome])



  const startCommentsHook = useCallback((gameId = commentsGameId) => {
    if (!gameId) return

    commentsService.getByGame(gameId)
      .then(response => {
        setComments(response.comments ?? [])
      })
      .catch(error => {
        console.warn("Comments unavailable:", error.message)
        setComments([])
      })
  }, [commentsGameId])

  const addComment = (e, section_id, name, comment, parent_id = null, game_id = commentsGameId) => {
    e.preventDefault()

    if (comment.trim().length < 2) {
      alert("Comment must be at least 2 characters long.")
      return
    }

    commentsService.add({
      game_id,
      section_id,
      parent_id,
      name,
      comment
    }).then(() => {
      startCommentsHook(game_id)
      alert("Comment sent!")
    }).catch(error => {
      console.warn("Comment submit failed:", error.message)
      const serverMessage = error.response?.data?.message
      alert(serverMessage || "Comment could not be sent right now.")
    })
  }

  useEffect(() => {
    if (commentsGameId) startCommentsHook(commentsGameId)
  }, [commentsGameId, startCommentsHook])

  return (
    <Routes>
      <Route path="/" element={<Home feedbacks={feedbacks} addFeedback={addFeedback} message={message} />} />
      <Route path="/TTS" element={<TTS comments={comments} addComment={addComment} />} />
      <Route path="/AirborneExodus" element={<AirborneExodusPage comments={comments} addComment={addComment} />} />
      <Route path="/UntitledExtraction" element={<UntitledExtractionPage comments={comments} addComment={addComment} />} />
      <Route path="/CityExtraction" element={<CityExtractionPage comments={comments} addComment={addComment} />} />
      <Route path="/SpaceExtraction" element={<SpaceExtractionPage comments={comments} addComment={addComment} />} />
      <Route path="/Empty" element={<Empty />} />
      <Route path="*" element={useSpecialEmpty ? <EmptySpecial /> : <Empty />} />
    </Routes>
  )
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </Router>
  )
}

export default App;
