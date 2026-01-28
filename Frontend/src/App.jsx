import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from './pages/FrontPage';
import TacTicalShooterPage from './pages/TacTicalShooterPage';
import Empty from './pages/empty';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/RedFolderGames/" element={<FrontPage />}></Route>
        <Route path="/RedFolderGames/TTS" element={<TacTicalShooterPage />}></Route>
        <Route path="/RedFolderGames/empty" element={<Empty />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
