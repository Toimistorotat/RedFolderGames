import React, { useEffect, useRef, useState, memo } from "react";

const DEFAULT_PROMPT = ">";
const CURSOR = "█";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getLogsBasePath() {
    const host = window.location.hostname;

    if (host === "basementgames-fi.github.io") {
        return `${import.meta.env.BASE_URL}Rewrite/RedFolderGames/public/logs`;
    }

    return `${import.meta.env.BASE_URL}logs`;
}

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
    { type: "command", text: "booting RedFolderGames terminal...", speed: 80 },
    { type: "command", text: "initializing modules...", speed: 80 },
    { type: "command", text: "loading filesystem...", speed: 80 },
    { type: "command", text: "mounting /home...", speed: 80 },
    { type: "command", text: "starting services...", speed: 80 },

    { type: "command", text: "login: guest", speed: 100 },
    { type: "command", text: "authenticating...", speed: 100 },
    { type: "output", text: "access granted", speed: 50, delay: 300 },

    { type: "command", text: "whoami", speed: 120 },
    { type: "output", text: randomUser, view: "system", delay: 200 },
    { type: "pause", duration: 500 },

    { type: "command", text: "pwd", speed: 120 },
    { type: "output", text: "/home/guest", speed: 40 },

    { type: "command", text: "cd /RedFolderGames", speed: 100 },
    { type: "command", text: "ls", speed: 100 },
    { type: "output", text: "terminal-intro.exe", speed: 120 },
    { type: "output", text: "about.txt", speed: 120 },
    { type: "output", text: "credits.txt", speed: 120 },
    { type: "output", text: "changelog.txt", speed: 120 },

    { type: "command", text: "run terminal-intro.exe", speed: 80 },

    { type: "output", text: "initializing experience...", speed: 140 },
    { type: "output", text: "loading assets...", speed: 140 },
    { type: "output", text: "preparing interface...", speed: 140 },
    { type: "output", text: "system ready.", speed: 120 },

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

    { type: "command", text: "type 'help' to explore available commands.", speed: 180 },
];

const aboutme = [
    { type: "command", text: "cat self-introduction.txt", speed: 38 },

    {
        type: "multiOutput",
        delay: 150,
        lines: [
            { text: "Hello, I am RedKing.", view: "story" },
            { text: "I'm a game fanatic and I love playing video games.", view: "story" },
            { text: "I love how games can bring another world,", view: "story" },
            { text: "another challenge,", view: "story" },
            { text: "another perspective on the world — and yourself.", view: "story" },
            { text: "You can play alone.", view: "story" },
            { text: "You can play with friends.", view: "story" },
            { text: "You can meet new people.", view: "story" },
            { text: "Of course, games are not everything.", view: "story" },
            { text: "But who decides games are bad for you?", view: "story" },
            { text: "Probably someone who never played them.", view: "story" },
            { text: "If you enjoy a game, keep playing.", view: "story" },
            { text: "If you don't, find another one.", view: "story" },
            { text: "But video games… they are special.", view: "story" },
        ],
    },

    { type: "command", text: "type 'help' to explore available commands.", speed: 180 },
]

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

    { type: "command", text: "type 'help' to explore available commands.", speed: 180 },
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

const secret = [
    { type: "command", text: "run diagnostics", speed: 35 },

    { type: "output", text: "initializing diagnostic module", view: "system" },
    { type: "pause", duration: 400 },
    { type: "output", text: "loading baseline checks", view: "muted" },
    { type: "pause", duration: 500 },
    { type: "output", text: "establishing local scan context", view: "muted" },
    { type: "pause", duration: 700 },
    { type: "output", text: "ready", view: "system" },

    { type: "pause", duration: 500 },

    { type: "output", text: "checking terminal state", view: "system" },
    { type: "pause", duration: 250 },
    { type: "output", text: ".", view: "system" },
    { type: "pause", duration: 250 },
    { type: "output", text: "..", view: "system" },
    { type: "pause", duration: 300 },
    { type: "output", text: "...", view: "system" },
    { type: "pause", duration: 500 },
    { type: "output", text: "ok", view: "muted" },

    { type: "pause", duration: 450 },

    { type: "output", text: "checking mounted paths", view: "system" },
    { type: "pause", duration: 300 },
    { type: "output", text: "resolving /home", view: "muted" },
    { type: "pause", duration: 400 },
    { type: "output", text: "resolving /RedFolderGames", view: "muted" },
    { type: "pause", duration: 450 },
    { type: "output", text: "verifying mapped entries", view: "muted" },
    { type: "pause", duration: 650 },
    { type: "output", text: "ok", view: "muted" },

    { type: "pause", duration: 500 },

    { type: "output", text: "checking session cache", view: "system" },
    { type: "pause", duration: 350 },
    { type: "output", text: "reading temporary state", view: "muted" },
    { type: "pause", duration: 500 },
    { type: "output", text: "comparing previous session hash", view: "muted" },
    { type: "pause", duration: 650 },
    { type: "output", text: "rechecking cache integrity", view: "muted" },
    { type: "pause", duration: 900 },

    { type: "output", text: "warning", view: "error" },
    { type: "pause", duration: 350 },
    { type: "output", text: "cache signature mismatch", view: "error" },
    { type: "pause", duration: 450 },
    { type: "output", text: "unexpected entry found", view: "error" },

    { type: "pause", duration: 700 },

    { type: "output", text: "attempting recovery", view: "system" },
    { type: "pause", duration: 400 },
    { type: "output", text: "isolating damaged entry", view: "muted" },
    { type: "pause", duration: 500 },
    { type: "output", text: "restoring fallback state", view: "muted" },
    { type: "pause", duration: 650 },
    { type: "output", text: "retrying read operation", view: "muted" },
    { type: "pause", duration: 850 },

    { type: "output", text: "accessing hidden logs", view: "system" },
    { type: "pause", duration: 600 },
    { type: "output", text: "cross-checking permission layer", view: "muted" },
    { type: "pause", duration: 500 },
    { type: "output", text: "permission override detected", view: "error" },
    { type: "pause", duration: 600 },

    { type: "output", text: "reading file", view: "muted" },
    { type: "pause", duration: 250 },
    { type: "output", text: ".", view: "muted" },
    { type: "pause", duration: 250 },
    { type: "output", text: "..", view: "muted" },
    { type: "pause", duration: 300 },
    { type: "output", text: "...", view: "muted" },
    { type: "pause", duration: 800 },

    { type: "output", text: "file integrity unstable", view: "error" },
    { type: "pause", duration: 500 },

    {
        type: "multiOutput",
        delay: 140,
        lines: [
            { text: "[log_001] user accessed terminal", view: "muted" },
            { text: "[log_002] interaction recorded", view: "muted" },

            { text: "[log_003] p̴a̴t̴t̴e̴r̴n̴ ̴r̴e̴c̴o̴g̴n̴i̴t̴i̴o̴n̴...", view: "system" },

            { text: "", view: "default" },

            { text: "[log_004] anomaly detected", view: "error" },
            { text: "[log_005] a̷n̷o̷m̷a̷l̷y̷ ̷c̷o̷n̷f̷i̷r̷m̷e̷d̷", view: "error" },

            { text: "", view: "default" },

            { text: "[log_006] user is still here", view: "system" },
            { text: "[log_007] o̴b̴s̴e̴r̴v̴i̴n̴g̴...", view: "system" },

            { text: "", view: "default" },

            { text: "you weren't supposed to see this", view: "story" },

            { text: "y̶o̶u̶ ̶a̶r̶e̶ ̶s̶t̶i̶l̶l̶ ̶h̶e̶r̶e̶", view: "error" },

            { text: "", view: "default" },

            { text: "[log_008] hiding trace...", view: "muted" },
        ],
    },

    { type: "pause", duration: 600 },

    { type: "output", text: "c̴o̴n̴n̴e̴c̴t̴i̴o̴n̴ ̴l̴o̴s̴t̴.", view: "error" },
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
    const [isRunning, setIsRunning] = useState(true);
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

    const guideStartedRef = useRef(false);

    const [terminalInput, setTerminalInput] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            // let runSteps control it after a moment
            setIsRunning(true);
        }, 60); // tweak (200–500ms feels good)

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        latestLineRef.current = currentLine;
    }, [currentLine]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines, currentLine, isWaiting, isRunning]);

    const helpSequence = useRef(["h", "e", "l", "p"]);
    const helpIndex = useRef(0);
    const [inputUnlocked, setInputUnlocked] = useState(false);
    const [inputActive, setInputActive] = useState(true);

    const [awaitingHelpUnlock, setAwaitingHelpUnlock] = useState(false);
    const helpPromptText = `${prompt} type 'help' to explore available commands.`;

    const arrowMap = {
        ArrowLeft: "←",
        ArrowUp: "↑",
        ArrowRight: "→",
        ArrowDown: "↓",
    };

    const canListenForHelp =
        phase === "intro" &&
        !isRunning &&
        isWaiting &&
        awaitingHelpUnlock;

    const isTypingIntoRealInput = (target) => {
        if (!target) return false;

        const tag = target.tagName;
        return (
            tag === "INPUT" ||
            tag === "TEXTAREA" ||
            target.isContentEditable
        );
    };

    useEffect(() => {
        if (!canListenForHelp || inputUnlocked) {
            helpIndex.current = 0;
            return;
        }

        const handleKey = (e) => {
            const key = e.key.toLowerCase();
            const expected = helpSequence.current[helpIndex.current];

            if (key === expected) {
                helpIndex.current += 1;

                if (helpIndex.current === helpSequence.current.length) {
                    helpIndex.current = 0;

                    appendLine("> help", "command");
                    appendLine("available commands:", "muted");
                    appendLine("about", "system");
                    appendLine("credits", "system");
                    appendLine("changelog", "system");
                    appendLine("replay", "system");
                    appendLine("clear", "system");
                    appendLine("", "default");
                    appendLine("stand by.", "system");

                    setInputUnlocked(true);
                    setAwaitingHelpUnlock(false);
                }

                return;
            }

            helpIndex.current = key === "h" ? 1 : 0;
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [canListenForHelp, inputUnlocked]);

    useEffect(() => {
        if (!inputUnlocked || isRunning) return;

        const handleTerminalInput = async (e) => {
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            if (isTypingIntoRealInput(e.target)) return;

            if (arrowMap[e.key]) {
                e.preventDefault();
                setTerminalInput((prev) => prev + arrowMap[e.key]);
                return;
            }

            if (e.key === "Backspace") {
                e.preventDefault();
                setTerminalInput((prev) => prev.slice(0, -1));
                return;
            }

            if (e.key === "Enter") {
                e.preventDefault();
                const cmd = terminalInput.trim();
                if (!cmd) return;

                setTerminalInput("");
                await runCommand(cmd);
                return;
            }

            if (e.key.length === 1) {
                e.preventDefault();
                setTerminalInput((prev) => prev + e.key);
            }
        };

        window.addEventListener("keydown", handleTerminalInput);
        return () => window.removeEventListener("keydown", handleTerminalInput);
    }, [inputUnlocked, isRunning, terminalInput]);

    useEffect(() => {
        if (!inputUnlocked || isRunning || !inputActive) return;

        const isTypingIntoRealInput = (target) => {
            if (!target) return false;

            const tag = target.tagName;
            return (
                tag === "INPUT" ||
                tag === "TEXTAREA" ||
                target.isContentEditable
            );
        };

        const handleTerminalInput = async (e) => {
            if (isTypingIntoRealInput(e.target)) return;

            if (e.ctrlKey && e.key.toLowerCase() === "c") {
                e.preventDefault();
                appendLine(`${prompt} ${terminalInput}`, "command");
                appendLine("^C", "error");
                setTerminalInput("");
                setInputActive(false);
                return;
            }

            if (e.metaKey || e.altKey) return;

            if (e.key === "Backspace") {
                e.preventDefault();
                setTerminalInput((prev) => prev.slice(0, -1));
                return;
            }

            if (e.key === "Enter") {
                e.preventDefault();
                const cmd = terminalInput.trim();
                if (!cmd) return;

                setTerminalInput("");
                await runCommand(cmd);
                return;
            }

            if (e.key.length === 1) {
                e.preventDefault();
                setTerminalInput((prev) => prev + e.key);
            }
        };

        window.addEventListener("keydown", handleTerminalInput);
        return () => window.removeEventListener("keydown", handleTerminalInput);
    }, [inputUnlocked, isRunning, inputActive, terminalInput]);

    const runCommand = async (cmd) => {
        const value = cmd.trim().toLowerCase();

        appendLine(`${prompt} ${cmd}`, "command");

        if (value === "help") {
            appendLine("available commands:", "muted");
            appendLine("about", "system");
            appendLine("credits", "system");
            appendLine("changelog", "system");
            appendLine("replay", "system");
            appendLine("clear", "system");
            return;
        }

        if (value === "about") return openAbout();
        if (value === "credits") return openCredits();
        if (value === "changelog") return openLatestChangelog();
        if (value === "replay") return replayAll();
        if (value === "↑↑↓↓←→←→ab") return Konami();
        if (value === "clear") {
            setLines([]);
            return;
        }

        appendLine(`command not found: ${cmd}`, "error");
    };

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

                        if (text === "type 'help' to explore available commands.") {
                            setAwaitingHelpUnlock(true);
                        }

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
            if (runIdRef.current === runId) {
                setIsRunning(false);
            }
        }
    };

    const openAbout = async () => {
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

        const completed = await runSteps(aboutme, { waitAtEnd: false });

        if (completed && phase === "intro") {
            setIsWaiting(true);
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

    useEffect(() => {
        if (guideMode === "credits" && !guideStartedRef.current) {
            guideStartedRef.current = true;
            (async () => {
                const moreEl = moreButtonRef.current;
                if (!moreEl) return;

                let guideDoneCalled = false;

                setShowGuideCursor(true);
                setGuidePulse(false);
                setIsSidePanelOpen(false);

                setGuideCursorPos({
                    x: Math.max(50, window.innerWidth - 1000),
                    y: Math.max(50, window.innerHeight - 160),
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
                    if (!guideDoneCalled) {
                        guideDoneCalled = true;
                        onGuideDone?.();
                    }

                    await openCredits();
                }

                await sleep(500);
                setShowGuideCursor(false);
                if (!guideDoneCalled) {
                    guideDoneCalled = true;
                    onGuideDone?.();
                }
            })();
        }

        if (guideMode !== "credits") {
            guideStartedRef.current = false;
        }
    }, [guideMode, isRunning, openCredits, onGuideDone]);

    async function loadLatestChangelogLines() {
        try {
            const logsBase = getLogsBasePath();

            const res = await fetch(`${logsBase}/logs.json`);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            const data = await res.json();

            const mdRes = await fetch(`${logsBase}/${data.latest}`);
            if (!mdRes.ok) throw new Error(`HTTP ${mdRes.status}`);

            const markdown = await mdRes.text();

            const parsedLines = markdownToTerminalLines(markdown);

            return {
                meta: data.logs.find((log) => log.file === data.latest),
                lines: parsedLines,
            };
        } catch (err) {
            console.error("Failed to load latest changelog:", err);
            return {
                meta: null,
                lines: ["Failed to load latest changelog."],
            };
        }
    }

    const openLatestChangelog = async () => {
        runIdRef.current += 1;
        setIsWaiting(false);
        setCurrentLine("");
        setIsSidePanelOpen(false);

        await sleep(20);

        // clear terminal first
        await runSteps(
            [
                { type: "command", text: "clear", speed: 40 },
                { type: "clear" },
            ],
            { waitAtEnd: false }
        );

        // load changelog
        const result = await loadLatestChangelogLines();

        // build terminal steps
        const steps = [
            { type: "command", text: "cat latest-changelog.txt", speed: 35 },

            {
                type: "multiOutput",
                delay: 120,
                lines: [
                    {
                        text: result.meta
                            ? `[${result.meta.title}] (${result.meta.date})`
                            : "[Latest Changelog]",
                        view: "system",
                    },
                    { text: "", view: "story" },

                    ...result.lines.slice(0, 20).map((text) => ({
                        text,
                        view: "story",
                    })),
                ],
            },
        ];

        await runSteps(steps, { waitAtEnd: false });
    };

    const Konami = async () => {
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

        const completed = await runSteps(secret, { waitAtEnd: false });

        if (completed && phase === "intro") {
            setIsWaiting(true);
        }
    };

    const replayAll = async () => {
        runIdRef.current += 1;
        setPhase("intro");
        setIsWaiting(false);
        setLines([]);
        setCurrentLine("");
        setInputUnlocked(false);
        setAwaitingHelpUnlock(false);
        helpIndex.current = 0;

        await sleep(20);

        await runSteps(introSteps, { clearBefore: true, waitAtEnd: true });
    };

    const continueFromIntro = async () => {
        if (isRunning || phase !== "intro") return;

        setIsWaiting(false);
        setPhase("website");
        await runSteps(websiteSteps, { waitAtEnd: false });
    };

    const clearAll = async () => {
        runIdRef.current += 1;
        setIsWaiting(false);
        setCurrentLine("");
        setIsSidePanelOpen(false);
        setInputUnlocked(false);
        setAwaitingHelpUnlock(false);
        helpIndex.current = 0;

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
                                  ${isRunning ? "cursor-pointer" : "cursor-pointer"}
                                `}
                            >
                                credits
                            </button>

                            <button
                                onClick={openLatestChangelog}
                                className="rounded border border-cyan-500/20 bg-cyan-500/5 px-2 py-1 text-cyan-300 hover:bg-cyan-500/10"
                            >
                                changelog
                            </button>

                            <button
                                onClick={replayAll}
                                disabled={isRunning}
                                className={`rounded border border-cyan-500/20 bg-cyan-500/5 px-2 py-1 text-cyan-300
                                    ${isRunning
                                        ? "cursor-not-allowed opacity-40 pointer-events-none"
                                        : "cursor-pointer hover:bg-cyan-500/10"}
                                    `}
                            >
                                replay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-white/5">
                <span className="text-sm font-mono text-zinc-400">{title}</span>
                <div className="flex items-center gap-2">
                    <div className="h-3.5 w-3.5 rounded-full bg-green-500" />
                    <div className="h-3.5 w-3.5 rounded-full bg-yellow-500" />
                    {extras ? (
                        <div className="h-3.5 w-3.5 rounded-full bg-red-500" />
                    ) : (
                        <button
                            className="h-3.5 w-3.5 rounded-full bg-red-500 flex items-center justify-center text-[10px]"
                            onClick={() => setToggle(true)}
                        >
                            X
                        </button>
                    )}
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

                    {!inputUnlocked && (
                        <span className="text-zinc-500">available commands:</span>
                    )}

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                        {isRunning ? (
                            <>
                                <button
                                    onClick={continueFromIntro}
                                    className="cursor-pointer rounded border border-green-500/20 bg-green-500/5 px-2 py-1 text-green-300 hover:bg-green-500/10"
                                >
                                    continue
                                </button>

                                <button
                                    onClick={clearAll}
                                    className="cursor-pointer rounded border border-yellow-500/20 bg-yellow-500/5 px-2 py-1 text-yellow-300 hover:bg-yellow-500/10"
                                >
                                    clear all
                                </button>

                                <span className="ml-2 text-zinc-500">running...</span>
                            </>
                        ) : inputUnlocked && inputActive ? (
                            <button
                                type="button"
                                className="flex items-center whitespace-pre-wrap text-green-400"
                                onClick={() => setInputActive(true)}
                            >
                                <span>{terminalInput}</span>
                                <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-green-400" />
                            </button>
                        ) : inputUnlocked ? (
                            <>
                                <button
                                    onClick={continueFromIntro}
                                    className="cursor-pointer rounded border border-green-500/20 bg-green-500/5 px-2 py-1 text-green-300 hover:bg-green-500/10"
                                >
                                    continue
                                </button>

                                <button
                                    onClick={clearAll}
                                    className="cursor-pointer rounded border border-yellow-500/20 bg-yellow-500/5 px-2 py-1 text-yellow-300 hover:bg-yellow-500/10"
                                >
                                    clear all
                                </button>

                                <button
                                    type="button"
                                    className="ml-2 text-zinc-500"
                                    onClick={() => setInputActive(true)}
                                >
                                    terminal paused — click here to resume
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={continueFromIntro}
                                    className="cursor-pointer rounded border border-green-500/20 bg-green-500/5 px-2 py-1 text-green-300 hover:bg-green-500/10"
                                >
                                    continue
                                </button>

                                <button
                                    onClick={clearAll}
                                    className="cursor-pointer rounded border border-yellow-500/20 bg-yellow-500/5 px-2 py-1 text-yellow-300 hover:bg-yellow-500/10"
                                >
                                    clear all
                                </button>

                                {isWaiting && (
                                    <span className="ml-2 text-zinc-500">
                                        waiting for command
                                    </span>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function markdownToTerminalLines(markdown) {
    const lines = markdown.split("\n");
    const output = [];
    let inCodeBlock = false;
    let skippingMermaid = false;

    for (const rawLine of lines) {
        const line = rawLine.trim();

        if (line.startsWith("```mermaid")) {
            inCodeBlock = true;
            skippingMermaid = true;
            continue;
        }

        if (line.startsWith("```")) {
            inCodeBlock = !inCodeBlock;
            if (!inCodeBlock) skippingMermaid = false;
            continue;
        }

        if (inCodeBlock || skippingMermaid) continue;
        if (!line || line === "---") continue;

        if (line.startsWith("# ")) {
            output.push(`[${line.replace(/^# /, "").trim()}]`);
            continue;
        }

        if (line.startsWith("## ")) {
            output.push(`> ${line.replace(/^## /, "").trim()}`);
            continue;
        }

        const cleaned = line
            .replace(/^[-*]\s*/, "- ")
            .replace(/\*\*(.*?)\*\*/g, "$1")
            .replace(/\*(.*?)\*/g, "$1")
            .replace(/`([^`]+)`/g, "$1");

        if (cleaned.trim()) output.push(cleaned.trim());
    }

    return output;
}

export default memo(Terminal);