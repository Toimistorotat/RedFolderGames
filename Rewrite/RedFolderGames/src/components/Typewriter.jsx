import React, { useState, useEffect } from "react";
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
    <p className={`${done ? "done" : ""}`}>
      <span className='font-mono text-[20px] whitespace-pre-line text-green-500'>{out}</span>
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
    <div className='pt-1 rounded-xl shadow-[5px_5px_25px_rgba(255,255,255,0.25)] bg-white/5 w-full border-1 border-white/10 min-h-[400px] mt-5 h-[500px]'>
      <div className='flex gap-2 justify-end p-2 border-b-1 border-white/25 mb-2'>
        <div className='h-5 w-5 bg-green-500 rounded-full flex justify-center'><span className='relative left-[0.6px] bottom-[3px] text-green-900/75 font-bold'>O</span></div>
        <div className='h-5 w-5 bg-yellow-500 rounded-full flex justify-center'><span className='relative left-[0.6px] bottom-[9px] text-yellow-900/75 font-bold text-2xl'>-</span></div>
        <div className='h-5 w-5 bg-red-500 rounded-full flex justify-center'><span className='relative left-[0.6px] bottom-[2.2px] text-red-900/75 font-bold'>X</span></div>
      </div>
      <div className='p-2'>
          <div>
            <Typer
              key={replayKey}
              texts={texts}
              speeds={speeds}
              onDone={() => setFinished(true)}
            />
            {finished ? <p className="font-mono text-2xl whitespace-pre-line text-green-500">{idletext}</p> : <></>}
          </div>
      </div>

      <div className="flex flex-end">
        {finished && <button className="bg-red-500 hover:bg-red-300 text-white px-4 py-2 rounded-md ml-2" onClick={replay}>Replay</button>}
      </div>
    </div>
  );
}
