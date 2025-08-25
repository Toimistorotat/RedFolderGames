import Button from '@mui/material/Button'
//import './css/header.css'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return <nav className="navbar mainnavbar">
        <ul className="navbar-nav d-flex flex-wrap w-100">
            <li className='nav-item'><Button className='custom-nav2' onClick={()=>navigate("/")}><b className='custom-nav'>home</b></Button></li>
        </ul>
    </nav>
}