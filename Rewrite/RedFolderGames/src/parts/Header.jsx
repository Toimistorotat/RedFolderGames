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
    const isAE = pathname.startsWith("/RedFolderGames/AirborneExodus");
    const isUntitled = pathname.startsWith("/RedFolderGames/UntitledExtraction");

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [message, setMessage] = useState("");
    const [Visible, setVisibility] = useState(true)

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const pageLinks = isUntitled
        ? [
            { label: "Island", target: "raid-island" },
            { label: "Dossier", target: "raid-systems-dossier" }
        ]
        : [
            { label: "Top", target: "top" },
            { label: "Systems", target: "ae-systems" },
            { label: "Core", target: "ae-core-fantasy" }
        ];

    const scrollToPageSpot = (target) => {
        if (target === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        document.getElementById(target)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

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
            ${isTTS ? "fixed top-0 left-0 right-0 z-50 mx-5 mt-5" : ""}
            ${isAE ? "ae-siteHeader" : ""}
            ${isUntitled ? "ues-siteHeader" : ""}
            ${!isTTS && !isAE && !isUntitled ? "m-5" : ""}`}
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
                        className="rfg-homeSwap group text-2xl text-red-500 cursor-pointer relative"
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

                {(isAE || isUntitled) && (
                    <>
                        <button
                            onClick={() => navigate("/RedFolderGames/")}
                            className="rfg-pageHome rfg-homeSwap group"
                            type="button"
                        >
                            <span className="group-hover:hidden">RedFolderGames</span>
                            <span className="hidden group-hover:inline">HOME</span>
                        </button>

                        <div className="rfg-pageHeaderCenter">
                            <div className="rfg-pageQuickNav" aria-label="Page navigation">
                                {pageLinks.map((link) => (
                                    <button
                                        key={link.target}
                                        type="button"
                                        onClick={() => scrollToPageSpot(link.target)}
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="rfg-pageHeaderStatus">
                            <span>{isAE ? "Carrier Ops" : "Raid Island"}</span>
                            <strong>{isAE ? "Fuel Margin Low" : "No Forced Timer"}</strong>
                        </div>
                    </>
                )}
            </nav>
        </div>
    ) : null;
};
