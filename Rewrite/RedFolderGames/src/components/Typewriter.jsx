import React, { useState, useEffect, memo } from "react";
import '../css/tailwind.css'

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
        setOut("");
        clearTimeout(timerId);
        return;
      }

      const ch = text[i];
      let delay = speed;
      if (".!?".includes(ch)) delay *= 10;
      else if (",;:".includes(ch)) delay *= 5;

      timerId = setTimeout(tick, delay);
    };

    tick();
    return () => clearTimeout(timerId);
  }, [texts, speeds, index, onDone]);

  return (
    <p className={`${done ? "done" : ""}`}>
      <span className="!font-mono text-[20px] !whitespace-pre-line !text-green-500">
        {out}
      </span>
    </p>
  );
}

const texts = [
  "> cd /RedFolderGames\n> run cmd showcase\n\n",
  "[[status] loading 10%...\n[status] 20%...\n[status] 30%...\n[status] 40%...\n[status] 50%...\n[status] 60%...\n[status] 70%...\n[status] 80%...\n[status] 90%...\n[status] 100%...\n\n",
  ">> Hello, I am RedKing.\n\
> I'm a game fanatic and I love playing video games.\n\n\
> I love how games can bring another world,\n\
> another challenge,\n\
> another perspective on the world — and yourself.\n\n\
> You can play alone.\n\
> You can play with friends.\n\
> You can meet new people.\n\n\
> Of course, games are not everything.\n\
> But who decides games are bad for you?\n\
> Probably someone who never played them.\n\n\
> If you enjoy a game, keep playing.\n\
> If you don't, find another one.\n\n\
> But video games… they are special.\n"
];

const idletext = [
  "> Hello, I am RedKing.\n\
> I'm a game fanatic and I love playing video games.\n\n\
> I love how games can bring another world,\n\
> another challenge,\n\
> another perspective on the world — and yourself.\n\n\
> You can play alone.\n\
> You can play with friends.\n\
> You can meet new people.\n\n\
> Of course, games are not everything.\n\
> But who decides games are bad for you?\n\
> Probably someone who never played them.\n\n\
> If you enjoy a game, keep playing.\n\
> If you don't, find another one.\n\n\
> But video games… they are special.\n"
];

const speeds = [200, 10, 90];

function TypewriterIntro() {
  const [replayKey, setReplayKey] = useState(0);
  const [finished, setFinished] = useState(false);

  const replay = () => {
    setFinished(false);
    setReplayKey((k) => k + 1);
  };

  return (
    <div className='pt-1 rounded-xl shadow-[5px_5px_25px_rgba(255,255,255,0.25)] bg-white/5 w-full border-1 border-white/10 min-h-[400px] mt-5 h-[690px]'>
      <div className='flex gap-2 justify-end p-2 border-b-1 border-white/25 mb-2'>
        <div className='h-5 w-5 bg-green-500 rounded-full flex justify-center'>
          <span className='relative left-[0.6px] bottom-[3px] text-green-900/75 font-bold'>O</span>
        </div>
        <div className='h-5 w-5 bg-yellow-500 rounded-full flex justify-center'>
          <span className='relative left-[0.6px] bottom-[9px] text-yellow-900/75 font-bold text-2xl'>-</span>
        </div>
        {!finished && (
          <div className='h-5 w-5 bg-red-500 rounded-full flex justify-center'>
            <span className='relative left-[0.6px] bottom-[2.2px] text-red-900/75 font-bold'>X</span>
          </div>
        )}
        {finished && (
          <div className='h-5 w-5 bg-red-500 rounded-full flex justify-center'>
            <span
              className='relative left-[0.6px] bottom-[2.2px] text-red-900/75 font-bold cursor-pointer'
              onClick={() => setFinished(false)}
            >
              X
            </span>
          </div>
        )}
      </div>

      <div className='p-2'>
        {!finished && (
          <Typer
            key={replayKey}
            texts={texts}
            speeds={speeds}
            onDone={() => setFinished(true)}
          />
        )}

        {finished && (
          <p className="!font-mono text-[20px] !whitespace-pre-line !text-green-500">
            {idletext[0]}
          </p>
        )}
      </div>

      <div className="align-self-end mt-auto">
        {finished && (
          <button
            className="bg-red-500 hover:bg-red-300 text-white px-4 py-2 rounded-md ml-3"
            onClick={replay}
          >
            Replay
          </button>
        )}
      </div>
    </div>
  );
}

export default memo(TypewriterIntro);