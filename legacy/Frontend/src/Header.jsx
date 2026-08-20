import Button from '@mui/material/Button'
import './css/multiuse.css'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return <nav className="fixed-top ps-2 navbar navbar-expand-lg navbar-dark background glowborder">
            <a className="navbar-brand" href="#">RedFolderGames</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">

                    
                  </ul>
                </div>
            </nav>
}

/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> */