import Button from '@mui/material/Button'
import './css/HeaderTTS.css'
import { useNavigate } from "react-router-dom"
import NavMenu from './extras/navmenu.jsx'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navigate = useNavigate();
    return <nav className="navbar mainnavbar headertts flex-wrap">
        <ul className="navbar-nav d-flex flex-row w-100 headertts">
            <li className='nav-item headertts'><Button className='custom-nav2 headertts' onClick={()=>navigate("/")}><b className='custom-nav headertts'>home</b></Button></li>
            <div className="position-fixed widht-740">
                <Button variant="contained" onClick={toggleMenu} className="">
                    {isMenuOpen ? 'Hide Menu' : 'Show Menu'}
                </Button>
                {isMenuOpen && <NavMenu />}
            </div>
        </ul>
    </nav>
}