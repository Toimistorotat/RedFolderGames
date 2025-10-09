import React, { useState } from "react";
import "./Typewriter.css";

function Typer({ text, speed = 40, respectReducedMotion = false, onDone }) {
  const [out, setOut] = React.useState("");
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const prefersReduced =
      respectReducedMotion &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setOut(text);
      setDone(true);
      onDone?.();
      return;
    }

    let i = 0;
    let timerId;

    const tick = () => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        setDone(true);
        onDone?.();
        return; // stop scheduling
      }
      const ch = text[i - 1];
      let delay = speed;
      if (".!?".includes(ch)) delay = speed * 10; // longer pause after punctuation
      else if (",;:".includes(ch)) delay = speed * 5; // longer pause after punctuation

      timerId = setTimeout(tick, delay);
    };

    timerId = setTimeout(tick, speed);
    return () => clearTimeout(timerId);
  }, [text, speed, respectReducedMotion]); // ✅ no onDone here

  return (
    <p className={`intro-text ${done ? "done" : ""}`}>
      <span>{out}</span>
      <span className="caret" aria-hidden="true">|</span>
    </p>
  );
}


export default function TypewriterIntro() {
  const fullText = `Hello, I am RedKing. I'm a game fanatic and I love playing video games.
I love how they can bring another world, another challenges, another perspectives on the worlds and on yourself.
You can have fun with your friends. You can have fun alone. You can meet new people and you can make yourself feel proud.
Of course video games are not everything, but who's to say that video games are bad for you?
You should never believe those people, if they are not doctors of course.
But you should always enjoy what you are playing. Or if you are not enjoying then go play something else. But video games, they are special.`;

  const [replayKey, setReplayKey] = useState(0);   // forces remount
  const [finished, setFinished] = useState(false);
  const [showInstant, setShowInstant] = useState(false);

  const replay = () => {
    setFinished(false);
    setShowInstant(false);
    setReplayKey(k => k + 1); // remount Typer => start from scratch
  };

  const skip = () => {
    setShowInstant(true);     // show full text without animation
    setFinished(true);
  };

  return (
    <section className="intro-wrap">
      <h1 className="intro-title">RedFolderGames</h1>

      <div className="intro-typer">
        {/* Ghost: reserves space, not visible */}
        <p className="intro-text ghost" aria-hidden="true">{fullText}</p>

        {/* Animated layer on top */}
        {showInstant ? (
          <p className="intro-text">
            <span>{fullText}</span>
          </p>
        ) : (
          <Typer
            key={replayKey}
            text={fullText}
            speed={40}
            respectReducedMotion={false}
            onDone={() => setFinished(true)}
          />
        )}
      </div>

      <div className="intro-cta">
        {finished && <button className="btn replay" onClick={replay}>Replay</button>}
        {!finished && <button className="btn skip" onClick={skip}>Skip</button>}
      </div>
    </section>
  );
}
