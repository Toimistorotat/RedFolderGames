import React, { useEffect, useRef, useState, memo } from "react";

const DEFAULT_PROMPT = ">";
const CURSOR = "█";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getCharDelay(char, baseSpeed = 35) {
    if (".!?".includes(char)) return baseSpeed * 8;
    if (",;:".includes(char)) return baseSpeed * 4;
    if (char === " ") return baseSpeed * 0.8;
    return baseSpeed;
}

function getLineClass(view) {
    switch (view) {
        case "command":
            return "text-green-400";
        case "loading":
            return "text-yellow-300";
        case "system":
            return "text-cyan-300";
        case "story":
            return "text-zinc-200";
        case "muted":
            return "text-zinc-500";
        case "error":
            return "text-red-400";
        default:
            return "text-green-500";
    }
}

const randomUser = (() => {
    if (typeof window === "undefined" || typeof sessionStorage === "undefined") {
        return "user0000@redfolder";
    }

    const stored = sessionStorage.getItem("rf-user");
    if (stored) return stored;

    const id = `user${Math.floor(1000 + Math.random() * 9000)}@redfolder`;
    sessionStorage.setItem("rf-user", id);
    return id;
})();

const introSteps = [
    { type: "command", text: "cd /RedFolderGames", speed: 55 },
    { type: "command", text: "run terminal-intro", speed: 40 },

    {
        type: "multiOutput",
        delay: 160,
        lines: [
            { text: "[status] loading 10%...", view: "loading" },
            { text: "[status] loading 20%...", view: "loading" },
            { text: "[status] loading 35%...", view: "loading" },
            { text: "[status] loading 48%...", view: "loading" },
            { text: "[status] loading 62%...", view: "loading" },
            { text: "[status] loading 80%...", view: "loading" },
            { text: "[status] loading 100%...", view: "loading" },
            { text: "", view: "loading" },
        ],
    },

    { type: "command", text: "whoami", speed: 60 },
    { type: "output", text: randomUser, view: "system", delay: 200 },

    { type: "pause", duration: 5000 },

    { type: "command", text: "clear", speed: 40 },
    { type: "clear" },

    { type: "command", text: "cat self-introduction.txt", speed: 38 },


    { type: "type", text: "Hello, I am RedKing.", view: "story", speed: 80 },
    { type: "type", text: "I'm a game fanatic and I love playing video games.", view: "story", speed: 80 },
    { type: "pause", duration: 300 },

    { type: "type", text: "I love how games can bring another world,", view: "story", speed: 85 },
    { type: "type", text: "another challenge,", view: "story", speed: 85 },
    { type: "type", text: "another perspective on the world — and yourself.", view: "story", speed: 85 },
    { type: "pause", duration: 300 },

    { type: "type", text: "You can play alone.", view: "story", speed: 80 },
    { type: "type", text: "You can play with friends.", view: "story", speed: 80 },
    { type: "type", text: "You can meet new people.", view: "story", speed: 80 },
    { type: "pause", duration: 300 },

    { type: "type", text: "Of course, games are not everything.", view: "story", speed: 85 },
    { type: "type", text: "But who decides games are bad for you?", view: "story", speed: 85 },
    { type: "type", text: "Probably someone who never played them.", view: "story", speed: 85 },
    { type: "pause", duration: 300 },

    { type: "type", text: "If you enjoy a game, keep playing.", view: "story", speed: 80 },
    { type: "type", text: "If you don't, find another one.", view: "story", speed: 80 },
    { type: "pause", duration: 250 },

    { type: "type", text: "But video games… they are special.", view: "story", speed: 90 },

    { type: "pause", duration: 300 },
];

const websiteSteps = [
    { type: "command", text: "cat website-description.txt", speed: 38 },

    {
        type: "multiOutput",
        delay: 150,
        lines: [
            { text: "This website is a place for game ideas, concepts and weird experiments.", view: "story" },
            { text: "Some pages are unfinished on purpose.", view: "story" },
            { text: "Some hidden bits are there just for fun.", view: "story" },
            { text: "", view: "story" },
            { text: "Use the site to explore ideas, not just read static info.", view: "story" },
            { text: "A few pages may cut off, change, or lead somewhere unexpected.", view: "story" },
            { text: "", view: "story" },
            { text: "Welcome to the terminal side of the website.", view: "system" },
        ],
    },
];

const Credits = [
    { type: "command", text: "cat website-credits.txt", speed: 38 },
    {
        type: "multiOutput",
        delay: 500,
        lines: [
            { text: "Big thanks to Toostiainen for the great feedback and ideas.", view: "story" },
            { text: "Suggestions like adding credits and improving folder structure helped a lot.", view: "story" },
            { text: "Genuinely a great guy to work with.", view: "story" },
            { text: "", view: "story" },

            { text: "Thanks to my friends for testing, ideas, and general support during this project.", view: "story" },
            { text: "", view: "story" },

            { text: "Built with:", view: "system" },
            { text: "• React (Frontend) – https://react.dev/", view: "system" },
            { text: "• Tailwind CSS (Styling) – https://tailwindcss.com/", view: "system" },
            { text: "• PHP (Backend)", view: "system" },
            { text: "", view: "system" },

            { text: "Appreciation to the creators and open-source community behind these tools.", view: "system" },
        ],
    },
];

function Terminal({
    title = "terminal",
    prompt = DEFAULT_PROMPT,
    minHeight = "min-h-[400px]",
    height = "h-[690px]",
    extras,
    setTtoggle,
    guideMode,
    onGuideDone
}) {
    const [lines, setLines] = useState([]);
    const [currentLine, setCurrentLine] = useState("");
    const [currentView, setCurrentView] = useState("command");

    const [phase, setPhase] = useState("intro");
    const [isRunning, setIsRunning] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    const [showGuideCursor, setShowGuideCursor] = useState(false);
    const [guideCursorPos, setGuideCursorPos] = useState({ x: -100, y: -100 });
    const [guidePulse, setGuidePulse] = useState(false);

    const scrollRef = useRef(null);
    const latestLineRef = useRef("");
    const runIdRef = useRef(0);
    const moreButtonRef = useRef(null);
    const creditsButtonRef = useRef(null);

    const runCreditsGuide = async () => {
        const moreEl = moreButtonRef.current;
        if (!moreEl) return;

        setShowGuideCursor(true);
        setGuidePulse(false);
        setIsSidePanelOpen(false);

        setGuideCursorPos({
            x: window.innerWidth - 1000,
            y: window.innerHeight - 160,
        });

        await sleep(900);

        const moreRect = moreEl.getBoundingClientRect();
        setGuideCursorPos({
            x: moreRect.left + moreRect.width / 2,
            y: moreRect.top + moreRect.height / 2,
        });

        await sleep(900);

        setGuidePulse(false);
        setIsSidePanelOpen(true);

        await sleep(100);
        setGuidePulse(false);

        const creditsEl = creditsButtonRef.current;
        if (creditsEl) {
            const creditsRect = creditsEl.getBoundingClientRect();
            setGuideCursorPos({
                x: creditsRect.left + creditsRect.width / 5,
                y: creditsRect.top + creditsRect.height / 2,
            });

            await sleep(1000);
            setGuidePulse(true);

            await sleep(500);
            setGuidePulse(false);

            setShowGuideCursor(false);
            onGuideDone?.();

            while (isRunning) {
                await sleep(200);
            }
            await openCredits();
        }

        await sleep(500);
        setShowGuideCursor(false);
        onGuideDone?.();
    };

    const guideStartedRef = useRef(false);

    useEffect(() => {
        if (guideMode === "credits" && !isRunning && !guideStartedRef.current) {
            guideStartedRef.current = true;
            runCreditsGuide();
        }

        if (guideMode !== "credits") {
            guideStartedRef.current = false;
        }
    }, [guideMode, isRunning]);

    useEffect(() => {
        latestLineRef.current = currentLine;
    }, [currentLine]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines, currentLine, isWaiting, isRunning]);

    const appendLine = (text, view = "default") => {
        setLines((prev) => [...prev, { text, view }]);
    };

    const isCancelled = (runId) => runIdRef.current !== runId;

    const runSteps = async (steps, options = {}) => {
        const runId = ++runIdRef.current;

        if (options.clearBefore) {
            setLines([]);
            setCurrentLine("");
        }

        setIsRunning(true);
        setIsWaiting(false);

        try {
            for (const step of steps) {
                if (isCancelled(runId)) return false;

                switch (step.type) {
                    case "command": {
                        const text = step.text ?? "";
                        const speed = step.speed ?? 35;
                        const stepPrompt = step.prompt ?? prompt;

                        setCurrentView("command");
                        setCurrentLine(`${stepPrompt} `);

                        for (let i = 0; i < text.length; i++) {
                            if (isCancelled(runId)) return false;
                            const ch = text[i];
                            setCurrentLine((prev) => prev + ch);
                            await sleep(getCharDelay(ch, speed));
                        }

                        appendLine(`${stepPrompt} ${text}`, "command");
                        setCurrentLine("");
                        await sleep(step.enterDelay ?? 80);
                        break;
                    }

                    case "type": {
                        const text = step.text ?? "";
                        const speed = step.speed ?? 35;
                        const withPrompt = step.withPrompt ?? false;
                        const stepPrompt = step.prompt ?? prompt;
                        const view = step.view ?? "default";

                        setCurrentView(view);
                        setCurrentLine(withPrompt ? `${stepPrompt} ` : "");

                        for (let i = 0; i < text.length; i++) {
                            if (isCancelled(runId)) return false;
                            const ch = text[i];
                            setCurrentLine((prev) => prev + ch);
                            await sleep(getCharDelay(ch, speed));
                        }

                        if (step.enter !== false) {
                            appendLine(latestLineRef.current, view);
                            setCurrentLine("");
                            await sleep(step.enterDelay ?? 80);
                        }
                        break;
                    }

                    case "typeChunks": {
                        const chunks = step.chunks ?? [];
                        const withPrompt = step.withPrompt ?? false;
                        const stepPrompt = step.prompt ?? prompt;
                        const view = step.view ?? "default";

                        setCurrentView(view);
                        setCurrentLine(withPrompt ? `${stepPrompt} ` : "");

                        for (const chunk of chunks) {
                            const text = chunk.text ?? "";
                            const speed = chunk.speed ?? 35;

                            for (let i = 0; i < text.length; i++) {
                                if (isCancelled(runId)) return false;
                                const ch = text[i];
                                setCurrentLine((prev) => prev + ch);
                                await sleep(getCharDelay(ch, speed));
                            }
                        }

                        if (step.enter !== false) {
                            appendLine(latestLineRef.current, view);
                            setCurrentLine("");
                            await sleep(step.enterDelay ?? 80);
                        }
                        break;
                    }

                    case "append": {
                        const text = step.text ?? "";
                        const speed = step.speed ?? 35;

                        for (let i = 0; i < text.length; i++) {
                            if (isCancelled(runId)) return false;
                            const ch = text[i];
                            setCurrentLine((prev) => prev + ch);
                            await sleep(getCharDelay(ch, speed));
                        }
                        break;
                    }

                    case "delete": {
                        const count = step.count ?? 1;
                        const speed = step.speed ?? 20;

                        for (let i = 0; i < count; i++) {
                            if (isCancelled(runId)) return false;
                            setCurrentLine((prev) => prev.slice(0, -1));
                            await sleep(speed);
                        }
                        break;
                    }

                    case "output": {
                        appendLine(step.text ?? "", step.view ?? "default");
                        await sleep(step.delay ?? 50);
                        break;
                    }

                    case "multiOutput": {
                        const outputLines = step.lines ?? [];
                        const delay = step.delay ?? 50;
                        const fallbackView = step.view ?? "default";

                        for (const line of outputLines) {
                            if (isCancelled(runId)) return false;

                            if (typeof line === "string") {
                                appendLine(line, fallbackView);
                            } else {
                                appendLine(line.text ?? "", line.view ?? fallbackView);
                            }

                            await sleep(delay);
                        }
                        break;
                    }

                    case "cut": {
                        appendLine(`${latestLineRef.current}${step.marker ?? " ^C"}`, step.view ?? currentView);
                        setCurrentLine("");
                        await sleep(step.delay ?? 120);
                        break;
                    }

                    case "clear": {
                        setLines([]);
                        setCurrentLine("");
                        await sleep(step.delay ?? 100);
                        break;
                    }

                    case "pause": {
                        await sleep(step.duration ?? 300);
                        break;
                    }

                    default:
                        break;
                }
            }

            if (options.waitAtEnd) {
                setIsWaiting(true);
            }

            return true;
        } finally {
            setIsRunning(false);
        }
    };

    const openCredits = async () => {
        runIdRef.current += 1;
        setIsWaiting(false);
        setCurrentLine("");
        setIsSidePanelOpen(false);

        await sleep(20);

        await runSteps(
            [
                { type: "command", text: "clear", speed: 40 },
                { type: "clear" },
            ],
            { waitAtEnd: false }
        );

        const completed = await runSteps(Credits, { waitAtEnd: false });

        if (completed && phase === "intro") {
            setIsWaiting(true);
        }
    };

    const replayAll = async () => {
        runIdRef.current += 1;
        setPhase("intro");
        setIsWaiting(false);
        setIsRunning(false);
        setLines([]);
        setCurrentLine("");
        await sleep(20);
        runSteps(introSteps, { clearBefore: true, waitAtEnd: true });
    };

    const continueFromIntro = async () => {
        if (isRunning || phase !== "intro") return;

        setIsWaiting(false);
        setPhase("website");
        await runSteps(websiteSteps, { waitAtEnd: false });
    };

    const clearAll = async () => {
        runIdRef.current += 1;
        setIsRunning(false);
        setIsWaiting(false);
        setCurrentLine("");
        setIsSidePanelOpen(false);

        await sleep(20);

        await runSteps(
            [
                {
                    type: "typeChunks",
                    view: "command",
                    withPrompt: true,
                    prompt,
                    enter: true,
                    chunks: [
                        { text: "clear", speed: 48 },
                        { text: " ", speed: 15 },
                        { text: "all", speed: 30 },
                    ],
                },
                { type: "pause", duration: 80 },
                { type: "clear", delay: 120 },
            ],
            { waitAtEnd: false }
        );
    };

    useEffect(() => {
        runSteps(introSteps, { clearBefore: true, waitAtEnd: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={`relative rounded-xl shadow-[5px_5px_25px_rgba(255,255,255,0.18)] bg-white/5 w-full border border-white/10 mt-5 ${minHeight} ${height} flex flex-col overflow-hidden`}
        >
            {showGuideCursor && (
                <>
                    <div
                        className="pointer-events-none fixed z-9999 h-4 w-4 rounded-full border-2 border-white bg-white/20 transition-all duration-700 ease-in-out"
                        style={{
                            left: guideCursorPos.x,
                            top: guideCursorPos.y,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                    {guidePulse && (
                        <div
                            className="pointer-events-none fixed z-9998 h-10 w-10 rounded-full border border-cyan-300 animate-ping"
                            style={{
                                left: guideCursorPos.x,
                                top: guideCursorPos.y,
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                    )}
                </>
            )}
            <div
                className="absolute right-0 top-35 z-20"
                onMouseEnter={() => setIsSidePanelOpen(true)}
                onMouseLeave={() => setIsSidePanelOpen(false)}
            >
                <div className="flex items-center">
                    <button
                        ref={moreButtonRef}
                        type="button"
                        onClick={() => setIsSidePanelOpen((prev) => !prev)}
                        className="rounded-l-md border border-r-0 border-cyan-500/20 bg-cyan-500/5 px-2 py-1 font-mono text-sm text-cyan-300 leading-none hover:bg-cyan-500/10"
                    >
                        more
                    </button>

                    <div
                        className={`overflow-hidden border border-white/10 bg-black/85 transition-[width,opacity] duration-200
                          rounded-s-3xl
                          ${isSidePanelOpen ? "w-40 opacity-100" : "w-0 opacity-0"}
                        `}
                    >
                        <div className="flex flex-col gap-2 p-2 font-mono text-sm">
                            <button
                                ref={creditsButtonRef}
                                onClick={openCredits}
                                className={`rounded border border-cyan-500/20 bg-cyan-500/5 px-2 py-1 text-yellow-300 hover:bg-cyan-500/10
                                  ${isRunning ? "cursor-not-allowed opacity-40" : "cursor-pointer"}
                                `}
                            >
                                credits
                            </button>

                            <button
                                onClick={replayAll}
                                disabled={isRunning}
                                className={`rounded border border-cyan-500/20 bg-cyan-500/5 px-2 py-1 text-cyan-300 hover:bg-cyan-500/10
                                  ${isRunning ? "cursor-not-allowed opacity-40" : "cursor-pointer"}
                                `}
                            >
                                replay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center px-3 py-2 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-2">

                    {extras && (
                        <div className="h-3.5 w-3.5 rounded-full bg-red-500" />
                    )}
                    {!extras && (
                        <div className='h-3.5 w-3.5 bg-red-500 rounded-full flex justify-center'>
                            <span className="text-[10px]" onClick={() => setTtoggle(true)}>X</span>
                        </div>
                    )}
                    <div className="h-3.5 w-3.5 rounded-full bg-yellow-500" />
                    <div className="h-3.5 w-3.5 rounded-full bg-green-500" />
                    <span className="ml-3 text-sm font-mono text-zinc-400">{title}</span>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 font-mono text-[18px] leading-7"
            >
                {lines.map((line, index) => (
                    <div
                        key={`${index}-${line.text}`}
                        className={`whitespace-pre-wrap wrap-break-words ${getLineClass(line.view)}`}
                    >
                        {line.text}
                    </div>
                ))}

                {(isRunning || currentLine.length > 0) && (
                    <div
                        className={`whitespace-pre-wrap wrap-break-words ${getLineClass(currentView)}`}
                    >
                        {currentLine}
                        <span className="animate-pulse">{CURSOR}</span>
                    </div>
                )}
            </div>

            <div className="border-t border-white/10 bg-black/20 px-4 py-3 font-mono">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-green-400">{prompt}</span>
                    <span className="text-zinc-500">available commands:</span>

                    {phase === "intro" && (
                        <>
                            <button
                                onClick={continueFromIntro}
                                disabled={isRunning}
                                className={`rounded border border-green-500/20 bg-green-500/5 px-2 py-1 text-green-300 hover:bg-green-500/10 disabled:cursor-not-allowed disabled:opacity-40 ${isRunning ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
                            >
                                continue
                            </button>

                            <button
                                onClick={clearAll}
                                disabled={isRunning}
                                className={`rounded border border-yellow-500/20 bg-yellow-500/5 px-2 py-1 text-yellow-300 hover:bg-yellow-500/10 disabled:cursor-not-allowed disabled:opacity-40 ${isRunning ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
                            >
                                clear all
                            </button>
                        </>
                    )}

                    {isRunning && (
                        <span className="ml-2 text-zinc-500">
                            running...
                        </span>
                    )}

                    {!isRunning && isWaiting && phase === "intro" && (
                        <span className="ml-2 text-zinc-500">
                            waiting for command
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default memo(Terminal);