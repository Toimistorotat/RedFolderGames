import React, { useState, useEffect } from "react";
import {Logo} from './Loading.jsx'
import "../css/Typewriter.css";

function Typer({ texts, speeds, onDone }) {
  const [out, setOut] = useState("");
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index >= texts.length) {
      setDone(true);
      onDone?.();
      return;
    }

    const text = texts[index];
    const speed = speeds[index];
    let i = 0;
    let timerId;

    const tick = () => {
      setOut((prev) => prev + text[i]);
      i += 1;

      if (i >= text.length) {
        setIndex((prev) => prev + 1);
        setOut(""); // Clear output for the next text
        clearTimeout(timerId);
        return; // Stop scheduling
      }

      const ch = text[i];
      let delay = speed;
      if (".!?".includes(ch)) delay *= 10; // Longer pause for punctuation
      else if (",;:".includes(ch)) delay *= 5; // Shorter pause

      timerId = setTimeout(tick, delay);
    };

    tick(); // Start typing
    return () => clearTimeout(timerId);
  }, [texts, speeds, index]);

  return (
    <p className={`intro-text theme ${done ? "done" : ""}`}>
      <span>{out}</span>
      <span className="caret" aria-hidden="true">|</span>
    </p>
  );
}

export default function TypewriterIntro() {
  const texts = [
    "cd /RedFolderGames run cmd Showcase\n",
    "[[status] loading 10%... \n[status] 20%...\n[status] 30%... \n[status] 40%.. \n[status] 50%.. \n[status] 60%..\n[status] 70%... \n[status] 80%... \n[status] 90%...\n[status] 100%.... \n",
    "HHello, I am RedKing. I'm a game fanatic and I love playing video games.\n I love how they can bring another world, another challenges, another perspectives on the worlds and on yourself.\n You can have fun with your friends. You can have fun alone. You can meet new people and you can make yourself feel proud.\n Of course, video games are not everything, but who's to say that video games are bad for you? You should never believe those people if they are not doctors of course.\n But you should always enjoy what you are playing. Or if you are not enjoying, then go play something else. But video games, they are special."
  ];
  const idletext = [
    "Hello, I am RedKing. I'm a game fanatic and I love playing video games.\n I love how they can bring another world, another challenges, another perspectives on the worlds and on yourself.\n You can have fun with your friends. You can have fun alone. You can meet new people and you can make yourself feel proud.\n Of course, video games are not everything, but who's to say that video games are bad for you? You should never believe those people if they are not doctors of course.\n But you should always enjoy what you are playing. Or if you are not enjoying, then go play something else. But video games, they are special."
  ]

  const speeds = [200, 10, 90]; // Different speeds for each corresponding text
  const [replayKey, setReplayKey] = useState(0);
  const [finished, setFinished] = useState(false);
  
  const replay = () => {
    setFinished(false);
    setReplayKey((k) => k + 1);
  };

  return (
    <section className="intro-wrap">
      <h1 className="intro-title"><Logo /></h1>
      <div className="console-window">
        <div className="header">
          <div className="status-dot flex justify-center">
            <div className="green status-dot">
              <span className="icon text">O</span>
            </div>
          </div>
          <div className="status-dot flex justify-center">
            <div className="yellow status-dot">
              <span className="icon text">-</span>
            </div>
          </div>
          <div className="status-dot flex justify-center">
            <div className="red status-dot">
              <span className="icon text">X</span>
            </div>
          </div>
        </div>
        <div className="intro-typer theme">
          <Typer
            key={replayKey}
            texts={texts}
            speeds={speeds}
            onDone={() => setFinished(true)}
          />
          {finished? <p className="intro-text theme">{idletext}</p> : <></> }
        </div>
      </div>

      <div className="intro-cta" style={{alignSelf: "flex-end"}}>
        {finished && <button className="btn replay" onClick={replay}>Replay</button>}
      </div>
    </section>
  );
}
