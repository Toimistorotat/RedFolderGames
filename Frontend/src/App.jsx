import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from './pages/FrontPage';
import TacTicalShooterPage from './pages/TacTicalShooterPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/TTS" element={<TacTicalShooterPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
