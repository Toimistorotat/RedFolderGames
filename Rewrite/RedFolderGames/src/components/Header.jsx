import '../css/multiuse.css'
import '../css/tailwind.css'
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from "react-router-dom";
import NavMenu from './navmenu.jsx';
import { useState } from 'react';

export default function Header() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isTTS = pathname.startsWith("/RedFolderGames/TTS");

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <nav
            className={`glowborder p-3 flex justify-between items-center
            ${isTTS ? "fixed top-0 left-0 right-0 z-50 mx-5 mt-5" : "m-5"}`}
        >
            <a
                className="text-2xl text-red-500 cursor-pointer"
                onClick={() => navigate("/RedFolderGames/")}
            >
                RedFolderGames
            </a>

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
    );
}

/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> */