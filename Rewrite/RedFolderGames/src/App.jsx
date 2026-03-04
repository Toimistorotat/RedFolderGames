import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import './css/tailwind.css'
import Home from './pages/Home'
import TTS from './pages/TacTicalShooterPage.jsx'
import { Space } from './components/Space.jsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TTS" element={<TTS />} />
        </Routes>
    </Router>
  )
}
export default App;