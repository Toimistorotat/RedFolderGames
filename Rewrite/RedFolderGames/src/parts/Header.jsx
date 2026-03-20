import '../css/multiuse.css'
import Button from '@mui/material/Button';
import NavMenu from '../components/navmenu.jsx';

import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isHome = pathname === "/RedFolderGames/" || pathname === "/RedFolderGames";
    const isTTS = pathname.startsWith("/RedFolderGames/TTS");

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [message, setMessage] = useState("");
    const [Visible, setVisibility] = useState(true)

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const Clicker = async () => {
        const next = clickCount + 1;
        setClickCount(next);

        if (next >= 5) {
            setMessage("You found me. You won't do it again tho");            setClickCount(0);

            await delay(1500);

            setVisibility(false);
        }
    };

    return Visible ? (
        <div>
            <nav
                className={`glowborder p-3 flex justify-between items-center
            ${isTTS ? "fixed top-0 left-0 right-0 z-50 mx-5 mt-5" : "m-5"}`}
            >
                {isHome && (
                    <>
                        <button
                            onClick={Clicker}
                            className="text-2xl text-red-500 cursor-pointer relative"
                        >
                            RedFolderGirls
                        </button>

                        {message && (
                            <p className="text-red-500">
                                {message}
                            </p>
                        )}
                    </>
                )}

                {isTTS && (
                    <button
                        onClick={() => navigate("/RedFolderGames/")}
                        className="group text-2xl text-red-500 cursor-pointer relative"
                    >
                        <span className="group-hover:hidden">RedFolderGames</span>
                        <span className="hidden group-hover:inline">HOME</span>
                    </button>
                )}

                {isTTS && (
                    <div className="absolute left-1/2 -translate-x-1/2 flex gap-3">
                        <Button variant="contained" onClick={toggleMenu}>
                            {isMenuOpen ? "Hide Menu" : "Show Menu"}
                        </Button>

                        {isMenuOpen && (
                            <div className="fixed top-20 left-1/2 -translate-x-1/2">
                                <NavMenu />
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </div>
    ) : null;
};