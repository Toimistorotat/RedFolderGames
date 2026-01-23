import Button from '@mui/material/Button'
import './css/multiuse.css'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return <nav className="fixed-top ps-2 navbar navbar-expand-lg navbar-dark background glowborder">
            <a className="navbar-brand" href="#">RedFolderGames</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Button className='custom-nav2' onClick={()=>navigate("/RedFolderGames")}><b className='custom-nav'>Home</b></Button>
                    </li>
                    <li className="nav-item">
                      <Button className='custom-nav2' onClick={()=>navigate("/RedFolderGames/TTS")}><b className='custom-nav'>TacticalSHooter</b></Button>
                    </li>
                    <li className="nav-item">
                      <Button className='custom-nav2' onClick={()=>navigate("/RedFolderGames/empty")}><b className='custom-nav'>disabled</b></Button>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                  </ul>
                </div>
            </nav>
}