import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/Bookmark.css"
import "../css/multiuse.css"
const Games = [
    {
        Name: "TacTical Shooter",
        classy: "TTS-Dialog",
        link: "/RedFolderGames/TTS#hero",
        info: "TacTical Shooter is a top-down shooter game where players navigate through various levels, battling enemies and completing missions. With its strategic gameplay and engaging mechanics, TTS offers an exciting experience for fans of the shooter genre."
    },
    {
        Name: "Example Game",
        classy: "Example-Dialog",
        link: "/RedFolderGames/Example",
        info: "This is an example game used to demonstrate the bookmark component. It showcases how to structure game information and display it effectively within the application."
    }
];

function Mark() {
    const navigate = useNavigate();
    const [openDialogIndex, setOpenDialogIndex] = useState(null);

    const closeModal = () => {
        setOpenDialogIndex(null);
    };

    return (
        <>
            <div className="Container-Center">
                <h2 className="Center">Bookmarks</h2>
            </div>
            {Games.map((game, idx) => (
                <React.Fragment key={idx}>
                    <dialog
                        open={openDialogIndex === idx}
                        className={game.classy + " z-index"}
                    >
                        <button onClick={closeModal} autoFocus>Close</button><button onClick={() => navigate(game.link)}>Transfer</button>
                        <p>Take a look at {game.Name}</p>
                        <p>{game.info}</p>
                        
                    </dialog>
                    <div
                        className="Container-Center"
                        onClick={() => setOpenDialogIndex(idx)}
                    >
                        <div className="triangle z-index-"></div>
                        <div className="mark">
                            <div className="BookMark">
                                <mark>{game.Name}</mark>
                            </div>
                        </div>
                        <div className="triangle-end z-index-" style={{ marginLeft: '-27px' }}></div>
                    </div>
                </React.Fragment>
            ))}
        </>
    );
}

export default Mark;