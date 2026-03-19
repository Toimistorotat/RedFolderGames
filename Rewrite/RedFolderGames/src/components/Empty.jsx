import '../css/tailwind.css'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Empty() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                <p>empty</p>
                <Countdown initialSeconds={5} />
            </div>
        </div>
    );
}

export function EmptySpecial() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="p-5 bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 rounded-xl shadow-lg text-center text-3xl">
                <p className="text-white!">empty special</p>
                <Countdown initialSeconds={10} />
            </div>
        </div>
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