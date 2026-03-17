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
import commentsService from './services/CommentsTTSService'
import { Empty, EmptySpecial } from './components/Empty.jsx'

function App() {
  const [feedbacks, setFeedbacks] = useState([])
  const [comments, setComments] = useState([])
  const [message, setMessage] = useState("")

  const startHook = () => {
    feedbackService.getAll().then(response => {
      console.log(response)
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
    startHook()
  }, [])



  const startCommentsHook = () => {
    commentsService.getAll().then(response => {
      console.log(response)
      setComments(response.comments)
    })
  }

  const addComment = (e, section_id, name, comment, parent_id = null) => {
    e.preventDefault()

    if (comment.trim().length < 2) {
      alert("Comment must be at least 2 characters long.")
      return
    }

    commentsService.add({
      section_id,
      parent_id,
      name,
      comment
    }).then(() => {
      startCommentsHook()
      alert("Comment sent!")
    })
  }

  useEffect(() => {
    startCommentsHook()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/RedFolderGames/" element={<Home feedbacks={feedbacks} addFeedback={addFeedback} message={message} />} />
        <Route path="/RedFolderGames/TTS" element={<TTS comments={comments} addComment={addComment} />} />
        <Route path="/RedFolderGames/Empty" element={<Empty />} />
        <Route path="*" element={Math.random() < 0.1 ? <EmptySpecial /> : <Empty />} />
      </Routes>
    </Router>
  )
}

export default App;