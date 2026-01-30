import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import TacTicalShooterPage from './pages/TacTicalShooterPage';
import Empty from './pages/empty';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop />
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
