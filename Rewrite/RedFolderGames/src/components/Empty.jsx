import '../css/tailwind.css'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Empty() {

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div>
                    <p>empty</p>
                    <Countdown />
                </div>
            </div>
        </>
    )
}
export function EmptySpecial() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="p-5 bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 rounded-xl shadow-lg text-center text-3xl">
                    <p className="text-white!">empty special</p>
                    <Countdown />
                </div>
            </div>
        </>
    )
}
function Countdown() {
    const [seconds, setSeconds] = useState(10);
    const [devStopped, setDevStopped] = useState(false);
    const navigate = useNavigate();

    // countdown
    useEffect(() => {
        if (devStopped) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [devStopped]);

    // dev key listener
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

    // finish
    useEffect(() => {
        if (seconds <= 0 && !devStopped) {
            console.log("Countdown finished!");
        }
    }, [seconds, devStopped]);

    useEffect(() => {
        if (seconds <= 0 && !devStopped) {
            navigate("/RedFolderGames/");
        }
    }, [seconds, devStopped, navigate]);

    return (
        <div>
            <p className="text-white!">{devStopped ? "DEV MODE ACTIVE" : seconds}</p>
            <p>{seconds}</p>
            {devStopped && (
                <p className="text-xs text-yellow-400">dev override</p>
            )}
        </div>
    );
}