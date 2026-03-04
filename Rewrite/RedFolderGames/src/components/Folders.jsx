import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Games = [
    {
        name: "TacTical Shooter",
        link: "/TTS",
        info: "TacTical Shooter is a top-down shooter game where players navigate through various levels, battling enemies and completing missions. With its strategic gameplay and engaging mechanics, TTS offers an exciting experience for fans of the shooter genre."
    },
    {
        name: "Example Game",
        link: "/RedFolderGames/Example",
        info: "This is an example game used to demonstrate the bookmark component. It showcases how to structure game information and display it effectively within the application."
    }
];

function Mark() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null); // store the whole game object

    const closeModal = () => setSelected(null);

    return (
        <div className="flex flex-col items-center gap-4">

            {/* Title */}
            <div className="w-full flex justify-center">
                <h2 className="text-sm text-zinc-200 tracking-wide">Folders</h2>
            </div>

            {/* Folder row */}
            <div className="flex gap-3">
                {Games.map((game) => {
                    const active = selected?.name === game.name;

                    return (
                        <button
                            key={game.name}
                            type="button"
                            onClick={() => setSelected(game)}
                            className={`
                relative px-4 py-2 text-sm font-semibold
                rounded-t-lg border
                transition
                ${active
                                    ? "bg-zinc-900 text-red-400 border-zinc-700 border-b-black"
                                    : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:text-red-400 hover:border-zinc-700"
                                }
                focus:outline-none focus:ring-2 focus:ring-red-500/40
              `}
                        >
                            {/* folder tab */}
                            <span
                                className={`
                  absolute -top-2 left-3 w-10 h-3 rounded-t-md border
                  ${active
                                        ? "bg-zinc-900 border-zinc-700"
                                        : "bg-zinc-950 border-zinc-800"
                                    }
                `}
                            />
                            {game.name}
                        </button>
                    );
                })}
            </div>

            {/* Preview panel */}
            {selected && (
                <dialog
                    open
                    className="
                      absolute top-216 left-1/2
                      -translate-x-1/2 -translate-y-1/2
                      w-[900px] max-w-[95vw]
                      bg-black text-red-400
                      border border-zinc-700
                      rounded-xl shadow-lg
                      overflow-hidden
                      mt-18
                    "
                >
                    {/* top bar */}
                    <div className="flex items-center justify-between px-4 py-2 bg-zinc-950 border-b border-zinc-800">
                        <div className="flex gap-2">
                            <div className='h-5 w-5 bg-green-500 rounded-full flex justify-center'><span className='relative left-[0.6px] bottom-[3px] text-green-900/75 font-bold'>O</span></div>
                            <div className='h-5 w-5 bg-yellow-500 rounded-full flex justify-center'><span className='relative left-[0.6px] bottom-[9px] text-yellow-900/75 font-bold text-2xl'>-</span></div>
                            <div className='h-5 w-5 bg-red-500 rounded-full flex justify-center'><span className='relative left-[0.6px] bottom-[2.2px] text-red-900/75 font-bold'>X</span></div>
                        </div>
                        <div className="text-xs text-zinc-400">
                            Preview / {selected.name.replaceAll(" ", "_")}.txt
                        </div>
                    </div>

                    <div className="p-4">
                        <p className="text-zinc-200 text-sm mb-2">
                            Take a look at <span className="text-red-400 font-semibold">{selected.name}</span>
                        </p>

                        <p className="text-red-400 text-sm leading-relaxed">
                            {selected.info}
                        </p>

                        <div className="mt-4 flex gap-2">
                            <button
                                type="button"
                                onClick={() => navigate(selected.link)}
                                className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white text-sm"
                            >
                                Open
                            </button>

                            <button
                                type="button"
                                onClick={closeModal}
                                autoFocus
                                className="bg-zinc-800 hover:bg-zinc-700 px-4 py-1 rounded text-sm text-zinc-200"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
}

export default Mark;