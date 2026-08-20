import '../css/tailwind.css'
import TriangleBackground from '../parts/trianglebackground.jsx'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EmptyPage({
    title = "Error Code 404",
    lines = [],
    seconds,
    fancy = false,


}) {
    return (
        <>
            <TriangleBackground />
            <div className="relative z-10 flex min-h-screen items-center justify-center">
                <div
                    className={
                        fancy
                            ? "rounded-xl bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 p-5 text-center text-3xl shadow-lg"
                            : "text-center"
                    }
                >
                    {lines.map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}

                    <h1 className="text-3xl text-red-500">{title}</h1>
                    <Countdown initialSeconds={seconds} />
                </div>
            </div>
        </>
    );
}

const creepyMessages = [
    [
        "You should not be here.",
        "This place was not meant for you.",
    ],
    [
        "Something went wrong.",
        "Or maybe… something went right.",
    ],
    [
        "Access denied.",
        "We are watching.",
    ],
    [
        "This page does not exist.",
        "Or it never did.",
    ],
];

function getRandomLines() {
    return creepyMessages[Math.floor(Math.random() * creepyMessages.length)];
}

export function Empty() {
    return <EmptyPage seconds={5} lines={getRandomLines()} fancy />;
}

export function EmptySpecial() {
    return (
        <EmptyPage
            fancy
            seconds={10}
            lines={[
                "You should not be here.",
                "You were never meant to access this place.",
                "How did you even manage to do that?",
                "I hope to never see you again.",
            ]}
        />
    );
}
function Countdown({ initialSeconds }) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [devStopped, setDevStopped] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (devStopped) return;

        const timer = setInterval(() => {
            setSeconds((prev) => Math.max(prev - 1, 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [devStopped]);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key.toLowerCase() === "b") {
                console.log("DEV MODE: timer stopped");
                setDevStopped(true);
            }
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    useEffect(() => {
        if (seconds <= 0 && !devStopped) {
            navigate("/RedFolderGames/");
        }
    }, [seconds, devStopped, navigate]);

    return (
        <div>
            <p className="text-white!">
                {seconds}
            </p>
            {devStopped && (
                <p className="text-xs text-yellow-400">dev override</p>
            )}
        </div>
    );
}