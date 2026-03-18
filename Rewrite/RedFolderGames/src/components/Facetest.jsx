import { useState } from "react";

export default function FaceToggle() {
    const [on, setOn] = useState(false);

    return (
        <button
            type="button"
            aria-pressed={on}
            onClick={() => setOn((prev) => !prev)}
            className={`
        relative h-40 w-72 rounded-full p-3
        transition-all duration-500 ease-in-out
        ${on
                    ? "bg-linear-to-br from-pink-400 via-purple-400 to-blue-400"
                    : "bg-zinc-600"}
      `}
        >
            {/* moving ball */}
            <div
                className={`
          absolute top-1/2 left-3 h-28 w-28 -translate-y-1/2
          rounded-full bg-white shadow-md overflow-hidden
          transition-transform duration-500 ease-in-out
          ${on ? "translate-x-[9.8rem]" : "translate-x-0"}
        `}
            >
                {/* face strip */}
                <div
                    className={`
            flex h-full w-[200%]
            transition-transform duration-500 ease-in-out
            ${on ? "-translate-x-1/2" : "translate-x-0"}
          `}
                >
                    <div className="relative h-full w-28 shrink-0">
                        <DeadFace />
                    </div>

                    <div className="relative h-full w-28 shrink-0">
                        <HappyFace />
                    </div>
                </div>
            </div>
        </button>
    );
}

function HappyFace() {
    return (
        <div className="relative h-full w-full">
            <div className="absolute left-5 top-[2.7rem] h-5 w-5 rounded-full bg-pink-200" />

            <div className="absolute left-8 top-5 h-4 w-6 overflow-hidden">
                <div className="h-6 w-6 rounded-full border-4 border-zinc-600" />
            </div>

            <div className="absolute right-5 top-5 h-4 w-6 overflow-hidden">
                <div className="h-6 w-6 rounded-full border-4 border-zinc-600" />
            </div>

            <div className="absolute left-[3.8rem] top-[2.7rem] h-5 w-8 -translate-x-1/2 overflow-hidden">
                <div className="absolute -top-3 h-8 w-8 rounded-full bg-zinc-700" />
            </div>
        </div>
    );
}

function DeadFace() {
    return (
        <div className="relative h-full w-full">
            <div className="absolute left-2 top-13 h-5 w-5">
                <span className="absolute left-1/2 top-1/2 block h-1 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded bg-zinc-600" />
                <span className="absolute left-1/2 top-1/2 block h-1 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded bg-zinc-600" />
            </div>

            <div className="absolute right-14 top-13 h-5 w-5">
                <span className="absolute left-1/2 top-1/2 block h-1 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded bg-zinc-600" />
                <span className="absolute left-1/2 top-1/2 block h-1 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded bg-zinc-600" />
            </div>

            <div className="absolute left-9 top-[4.9rem] h-1 w-10 -translate-x-1/2 rounded bg-zinc-600" />
        </div>
    );
}
