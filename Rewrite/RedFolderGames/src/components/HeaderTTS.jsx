import Button from '@mui/material/Button';
import '../css/HeaderTTS.css';
import { useNavigate } from "react-router-dom";
import NavMenu from './extras/navmenu.jsx';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(prevMenuState => !prevMenuState);
    };

    return (
        <nav className=" glowborder">
            <ul className="">
                <li className=''>
                    <Button className='' onClick={() => navigate("/RedFolderGames/")}>
                        <b className=''>RedFolderGAmes</b>
                    </Button>
                </li>
                <div className="">
                    <Button variant="contained" onClick={toggleMenu}>
                        {isMenuOpen ? 'Hide Menu' : 'Show Menu'}
                    </Button>
                </div>
            </ul>
            {/* Centering the NavMenu */}
            {isMenuOpen && (
                <div className="position-fixed top-50 start-50 translate-middle">
                    <NavMenu />
                </div>
            )}
        </nav>
    );
}
