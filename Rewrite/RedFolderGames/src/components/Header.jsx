import '../css/multiuse.css'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return <nav className="glowborder m-5">
            <a className="text-2xl text-red-500" href="/">RedFolderGames</a>
                <div className="">
                </div>
            </nav>
}

/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> */