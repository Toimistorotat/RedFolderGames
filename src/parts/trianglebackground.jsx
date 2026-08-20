import React, { useEffect, useMemo, useState } from "react";

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

const GRADIENTS = [
  "from-lime-300 to-lime-500",
  "from-green-300 to-green-500",
  "from-emerald-300 to-emerald-500",
  "from-teal-300 to-teal-500",
  "from-cyan-300 to-sky-500",
  "from-yellow-300 to-lime-400",
];

export default function TriangleBackground() {
  const configs = useMemo(() => {
    const count = 12;

    return Array.from({ length: count }).map(() => {
      return {
        gradient: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)],

        width: randomRange(150, 600),
        height: randomRange(150, 600),

        left: randomRange(-10, 90),
        top: randomRange(-10, 90),

        opacityMin: randomRange(0.25, 0.4),
        opacityMax: randomRange(0.5, 0.8),

        brightnessMin: randomRange(0.85, 0.95),
        brightnessMax: randomRange(1.1, 1.3),

        speed: randomRange(0.0006, 0.0015),
        offset: randomRange(0, Math.PI * 2),
      };
    });
  }, []);

  const [time, setTime] = useState(0);

  useEffect(() => {
    let frameId;
    let start;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      setTime(timestamp - start);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-gray-100 overflow-hidden">
      {configs.map((triangle, index) => {
        const wave =
          (Math.sin(time * triangle.speed + triangle.offset) + 1) / 2;

        const opacity =
          triangle.opacityMin +
          (triangle.opacityMax - triangle.opacityMin) * wave;

        const brightness =
          triangle.brightnessMin +
          (triangle.brightnessMax - triangle.brightnessMin) * wave;

        const hue =
          Math.sin(time * triangle.speed * 0.35 + triangle.offset) * 18;

        return (
          <div
            key={index}
            className={`absolute bg-linear-to-b ${triangle.gradient} [clip-path:polygon(50%_0%,0%_100%,100%_100%)]`}
            style={{
              width: `${triangle.width}px`,
              height: `${triangle.height}px`,
              left: `${triangle.left}%`,
              top: `${triangle.top}%`,
              opacity,
              filter: `brightness(${brightness}) hue-rotate(${hue}deg) saturate(1.15)`,
              transition: "opacity 120ms linear, filter 120ms linear",
              willChange: "opacity, filter",
            }}
          />
        );
      })}
    </div>
  );
}