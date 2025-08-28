import Button from '@mui/material/Button'
//import './css/header.css'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return <nav class="ms-2 navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">RedFolderGames</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <Button className='custom-nav2' onClick={()=>navigate("/")}><b className='custom-nav'>home</b></Button>
                    </li>
                    <li class="nav-item">
                      <Button className='custom-nav2' onClick={()=>navigate("/TTS")}><b className='custom-nav'>TacticalSHooter</b></Button>
                    </li>
                    <li class="nav-item">
                      <Button className='custom-nav2' onClick={()=>navigate("#")}><b className='custom-nav'>disabled</b></Button>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                  </ul>
                </div>
            </nav>
}