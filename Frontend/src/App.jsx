import './css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TacTicalShooterPage from './pages/TacTicalShooterPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TacTicalShooterPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
