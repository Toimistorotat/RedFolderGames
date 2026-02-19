import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import './css/tailwind.css'
import Home from './pages/Home'
import { Space } from './components/Space.jsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}
export default App;