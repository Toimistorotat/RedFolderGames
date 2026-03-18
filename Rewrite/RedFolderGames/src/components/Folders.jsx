import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

const Games = [
    {
        name: "TacTical Shooter",
        link: "/RedFolderGames/TTS",
        info: "TacTical Shooter is a First Person shooter game where players navigate through various levels, battling enemies and completing missions. With its strategic gameplay and engaging mechanics, TTS offers an exciting experience for fans of the shooter genre."
    },
    {
        name: "Example Game",
        link: "/RedFolderGames/Example",
        info: "This is an example game used to demonstrate the bookmark component. It showcases how to structure game information and display it effectively within the application."
    }
];

const INITIAL_OFFSET_X = 36;
const INITIAL_OFFSET_Y = 110;
const WINDOW_SPACING_X = 34;
const WINDOW_SPACING_Y = 28;

const WINDOW_WIDTH = 900;
const WINDOW_HEIGHT = 320;
const SAFE_MARGIN = 12;
const TOP_SAFE_MARGIN = 12;
const BOTTOM_SAFE_MARGIN = 90;

function Fold() {
    const navigate = useNavigate();
    const windowRefs = useRef({});

    const createInitialWindows = () =>
        Games.reduce((acc, game, index) => {
            acc[game.name] = {
                ...game,
                visible: false,
                minimized: false,
                pinned: false,
                animating: false,
                zIndex: 40 + index,
                position: {
                    x: INITIAL_OFFSET_X + index * WINDOW_SPACING_X,
                    y: INITIAL_OFFSET_Y + index * WINDOW_SPACING_Y
                }
            };
            return acc;
        }, {});

    const [windows, setWindows] = useState(createInitialWindows);
    const [draggingWindow, setDraggingWindow] = useState(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [topZ, setTopZ] = useState(100);

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const getWindowSize = (name) => {
        const element = windowRefs.current[name];

        if (!element) {
            return { width: WINDOW_WIDTH, height: WINDOW_HEIGHT };
        }

        return {
            width: element.offsetWidth || WINDOW_WIDTH,
            height: element.offsetHeight || WINDOW_HEIGHT
        };
    };

    const getVisibleStartX = () => window.scrollX + SAFE_MARGIN;
    const getVisibleStartY = () => window.scrollY + TOP_SAFE_MARGIN;

    const getViewportOpenPosition = (index = 0) => ({
        x: getVisibleStartX() + INITIAL_OFFSET_X + index * WINDOW_SPACING_X,
        y: getVisibleStartY() + INITIAL_OFFSET_Y + index * WINDOW_SPACING_Y
    });

    const getSafePosition = (name, x, y, pinned) => {
        const { width, height } = getWindowSize(name);

        if (pinned) {
            const maxX = window.innerWidth - width - SAFE_MARGIN;
            const maxY = window.innerHeight - height - BOTTOM_SAFE_MARGIN;

            return {
                x: clamp(x, SAFE_MARGIN, Math.max(SAFE_MARGIN, maxX)),
                y: clamp(y, TOP_SAFE_MARGIN, Math.max(TOP_SAFE_MARGIN, maxY))
            };
        }

        const minX = window.scrollX + SAFE_MARGIN;
        const minY = window.scrollY + TOP_SAFE_MARGIN;
        const maxX = window.scrollX + window.innerWidth - width - SAFE_MARGIN;
        const maxY = window.scrollY + window.innerHeight - height - BOTTOM_SAFE_MARGIN;

        return {
            x: clamp(x, minX, Math.max(minX, maxX)),
            y: clamp(y, minY, Math.max(minY, maxY))
        };
    };

    const focusWindow = (name) => {
        setTopZ((prevTopZ) => {
            const nextZ = prevTopZ + 1;

            setWindows((prev) => ({
                ...prev,
                [name]: {
                    ...prev[name],
                    zIndex: nextZ
                }
            }));

            return nextZ;
        });
    };

    const openWindow = (name) => {
        const gameIndex = Games.findIndex((game) => game.name === name);
        const openPos = getViewportOpenPosition(gameIndex < 0 ? 0 : gameIndex);

        setTopZ((prevTopZ) => {
            const nextZ = prevTopZ + 1;

            setWindows((prev) => ({
                ...prev,
                [name]: {
                    ...prev[name],
                    visible: true,
                    minimized: false,
                    animating: false,
                    position: prev[name].visible ? prev[name].position : openPos,
                    zIndex: nextZ
                }
            }));

            return nextZ;
        });
    };

    const closeWindow = (name) => {
        setWindows((prev) => ({
            ...prev,
            [name]: {
                ...prev[name],
                visible: false,
                minimized: false,
                animating: false
            }
        }));
    };

    const minimizeWindow = (name) => {
        setWindows((prev) => ({
            ...prev,
            [name]: {
                ...prev[name],
                minimized: true,
                visible: true,
                animating: false
            }
        }));
    };

    const restoreWindow = (name) => {
        setTopZ((prevTopZ) => {
            const nextZ = prevTopZ + 1;

            setWindows((prev) => {
                const current = prev[name];
                const safePos = getSafePosition(
                    name,
                    current.position.x,
                    current.position.y,
                    current.pinned
                );

                return {
                    ...prev,
                    [name]: {
                        ...current,
                        minimized: false,
                        visible: true,
                        animating: false,
                        position: safePos,
                        zIndex: nextZ
                    }
                };
            });

            return nextZ;
        });
    };

    const togglePin = (name) => {
        setWindows((prev) => {
            const target = prev[name];
            const nextPinned = !target.pinned;

            const nextPosition = nextPinned
                ? {
                    x: target.position.x - window.scrollX,
                    y: target.position.y - window.scrollY
                }
                : {
                    x: target.position.x + window.scrollX,
                    y: target.position.y + window.scrollY
                };

            const safePos = getSafePosition(
                name,
                nextPosition.x,
                nextPosition.y,
                nextPinned
            );

            return {
                ...prev,
                [name]: {
                    ...target,
                    pinned: nextPinned,
                    position: safePos
                }
            };
        });
    };

    const handleFolderClick = (game) => {
        const target = windows[game.name];

        if (!target.visible) {
            openWindow(game.name);
            return;
        }

        if (target.minimized) {
            restoreWindow(game.name);
            return;
        }

        focusWindow(game.name);
    };

    const handleMouseDown = (e, name) => {
        e.preventDefault();
        document.body.style.userSelect = "none";

        const target = windows[name];
        focusWindow(name);

        setWindows((prev) => ({
            ...prev,
            [name]: {
                ...prev[name],
                animating: false
            }
        }));

        setDraggingWindow(name);

        if (target.pinned) {
            setOffset({
                x: e.clientX - target.position.x,
                y: e.clientY - target.position.y
            });
        } else {
            setOffset({
                x: e.pageX - target.position.x,
                y: e.pageY - target.position.y
            });
        }
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!draggingWindow) return;

            const target = windows[draggingWindow];
            if (!target) return;

            let newPos;

            if (target.pinned) {
                newPos = {
                    x: e.clientX - offset.x,
                    y: e.clientY - offset.y
                };
            } else {
                newPos = {
                    x: e.pageX - offset.x,
                    y: e.pageY - offset.y
                };
            }

            setWindows((prev) => ({
                ...prev,
                [draggingWindow]: {
                    ...prev[draggingWindow],
                    position: newPos
                }
            }));
        };

        const handleMouseUp = () => {
            if (!draggingWindow) {
                document.body.style.userSelect = "";
                return;
            }

            const releasedName = draggingWindow;
            const target = windows[releasedName];

            if (target) {
                const safePos = getSafePosition(
                    releasedName,
                    target.position.x,
                    target.position.y,
                    target.pinned
                );

                const needsSnap =
                    safePos.x !== target.position.x || safePos.y !== target.position.y;

                if (needsSnap) {
                    setWindows((prev) => ({
                        ...prev,
                        [releasedName]: {
                            ...prev[releasedName],
                            animating: true,
                            position: safePos
                        }
                    }));

                    window.setTimeout(() => {
                        setWindows((prev) => {
                            if (!prev[releasedName]) return prev;

                            return {
                                ...prev,
                                [releasedName]: {
                                    ...prev[releasedName],
                                    animating: false
                                }
                            };
                        });
                    }, 650);
                }
            }

            setDraggingWindow(null);
            document.body.style.userSelect = "";
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.style.userSelect = "";
        };
    }, [draggingWindow, offset, windows]);

    const WindowDots = ({ pinned, onPin, onMinimize, onClose }) => (
        <div
            className="flex gap-2"
            onMouseDown={(e) => e.stopPropagation()}
        >
            <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation();
                    onPin?.();
                }}
                className={`flex h-4 w-4 items-center justify-center rounded-full ${pinned ? "bg-green-400" : "bg-green-500"}`}
                title={pinned ? "Unpin window" : "Pin window"}
            >
                <span className="relative bottom-px text-[10px] font-bold text-green-950/70">
                    {pinned ? "•" : "o"}
                </span>
            </button>

            <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation();
                    onMinimize?.();
                }}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500"
                title="Minimize"
            >
                <span className="relative bottom-1.25 text-[16px] font-bold text-yellow-950/70">-</span>
            </button>

            <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation();
                    onClose?.();
                }}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500"
                title="Close"
            >
                <span className="relative bottom-px text-[10px] font-bold text-red-950/70">x</span>
            </button>
        </div>
    );

    const openWindows = Object.values(windows).filter(
        (windowItem) => windowItem.visible && !windowItem.minimized
    );

    const minimizedWindows = Object.values(windows).filter(
        (windowItem) => windowItem.visible && windowItem.minimized
    );

    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <div className="w-full flex justify-center">
                    <h2 className="text-sm text-zinc-200 tracking-wide">Folders</h2>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                    {Games.map((game) => {
                        const target = windows[game.name];
                        const active = target.visible && !target.minimized;

                        return (
                            <button
                                key={game.name}
                                type="button"
                                onClick={() => handleFolderClick(game)}
                                className={`
                                    relative px-4 py-2 text-sm font-semibold
                                    rounded-t-lg border transition
                                    ${active
                                        ? "bg-zinc-900 text-red-400 border-zinc-700 border-b-black"
                                        : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:text-red-400 hover:border-zinc-700"
                                    }
                                    focus:outline-none focus:ring-2 focus:ring-red-500/40
                                `}
                            >
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
            </div>

            {openWindows.map((game) => (
                <div
                    key={game.name}
                    className={`${game.pinned ? "fixed" : "absolute"} ${game.animating ? "transition-all duration-700 ease-out" : ""}`}
                    style={{
                        left: game.position.x,
                        top: game.position.y,
                        zIndex: game.zIndex
                    }}
                    onMouseDown={() => focusWindow(game.name)}
                >
                    <div
                        ref={(el) => {
                            windowRefs.current[game.name] = el;
                        }}
                        className="w-225 max-w-[95vw] overflow-hidden rounded-xl border border-white/10 bg-black/85 text-red-400 shadow-[5px_5px_25px_rgba(255,255,255,0.14)] backdrop-blur-md"
                    >
                        <div
                            onMouseDown={(e) => handleMouseDown(e, game.name)}
                            className={`select-none border-b border-zinc-800 bg-zinc-950 ${game.pinned ? "cursor-default" : "cursor-move"}`}
                        >
                            <div className="flex items-center justify-between px-4 pt-2">
                                <div className="text-xs text-zinc-400">
                                    Preview / {game.name.replaceAll(" ", "_")}.txt
                                </div>

                                <WindowDots
                                    pinned={game.pinned}
                                    onPin={() => togglePin(game.name)}
                                    onMinimize={() => minimizeWindow(game.name)}
                                    onClose={() => closeWindow(game.name)}
                                />
                            </div>

                            <div className="px-4 pb-3 pt-2">
                                <h2 className="text-2xl font-bold text-zinc-100">
                                    Take a look at <span className="text-red-400">{game.name}</span>
                                </h2>
                                <p className="text-sm text-zinc-400">
                                    Folder preview window
                                </p>
                            </div>
                        </div>

                        <div className="p-4">
                            <p className="text-red-400 text-lg leading-relaxed">
                                {game.info}
                            </p>

                            <div className="mt-4 flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => navigate(game.link)}
                                    className="rounded bg-red-600 px-4 py-1 text-sm text-white transition hover:bg-red-700"
                                >
                                    Open
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {minimizedWindows.length > 0 && (
                <div className="fixed bottom-4 left-1/2 z-200 flex max-w-[95vw] -translate-x-1/2 flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/90 p-2 shadow-lg backdrop-blur-md">
                    {minimizedWindows.map((game) => (
                        <button
                            key={game.name}
                            type="button"
                            onClick={() => restoreWindow(game.name)}
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white shadow-[5px_5px_25px_rgba(255,255,255,0.14)] transition hover:bg-white/10"
                            title={`Restore ${game.name}`}
                        >
                            {game.name}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}

export default Fold;