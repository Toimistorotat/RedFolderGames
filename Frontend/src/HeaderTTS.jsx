import Button from '@mui/material/Button';
import './css/HeaderTTS.css';
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
        <nav className="navbar mainnavbar headertts flex-wrap">
            <ul className="navbar-nav d-flex flex-row w-100 headertts">
                <li className='nav-item headertts'>
                    <Button className='custom-nav2 headertts' onClick={() => navigate("/RedFolderGames/")}>
                        <b className='custom-nav headertts'>home</b>
                    </Button>
                </li>
                <div className="position-fixed width-900">
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
