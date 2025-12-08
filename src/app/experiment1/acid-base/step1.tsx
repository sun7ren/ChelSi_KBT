"use client";

import Image from "next/image";
import { useState } from "react";

export default function Step1() {
  const apparatusList = [
    { name: "Burette", src: "/apparatus/burette.png" },
    { name: "Pipette", src: "/apparatus/pipette.png" },
    { name: "Conical Flask", src: "/apparatus/conical_flask.png" },
    { name: "Beaker", src: "/apparatus/beaker.png" },
    { name: "Funnel", src: "/apparatus/funnels.png" },
    { name: "Dividing Funnel", src: "/apparatus/dividing_funnel.png" },
    { name: "Graduated Cylinder", src: "/apparatus/graduated_cylinder.png" },
    { name: "Flat Flask", src: "/apparatus/flat_flask.png" },
    { name: "Dropper", src: "/apparatus/dropper.png" },
  ];

  const correctAnswers = ["Burette", "Pipette", "Conical Flask", "Beaker", "Graduated Cylinder"];
  const [selected, setSelected] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);

  function toggleSelect(name: string) {
    setSelected((prev) => {
      if (prev.includes(name)) {
        return prev.filter((n) => n !== name);
      } else {
        if (prev.length >= 5) return prev;
        return [...prev, name];
      }
    });
  }

  function checkAnswer() {
    const correct = selected.filter((n) => correctAnswers.includes(n)).length;
    setScore(correct);
  }

  return (
    <div>
      {/* Apparatus Grid */}
      <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-lg border border-gray-300">
        {apparatusList.map((a, i) => (
          <div
            key={i}
            onClick={() => toggleSelect(a.name)}
            className={`group p-2 border rounded cursor-pointer relative flex items-center justify-center transition
              ${
                selected.includes(a.name)
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 hover:border-blue-400"
              }`}
          >
            <div className="w-28 h-28 flex items-center justify-center">
              <Image
                src={a.src}
                alt={a.name}
                width={100}
                height={100}
                className="object-contain max-h-full max-w-full"
              />
            </div>
            {/* Hover label */}
            <div className="absolute bottom-1 left-1 bg-white/90 text-xs px-1 rounded opacity-0 group-hover:opacity-100 transition">
              {a.name}
            </div>
          </div>
        ))}
      </div>

      {/* Check Answer */}
      <button
        onClick={checkAnswer}
        className="mt-4 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700"
      >
        Selesai dengan Langkah 1
      </button>

      {/* Score Message */}
      {score !== null && (
        <p className="mt-2 text-lg font-semibold">
          Anda mendapatkan {score} / {correctAnswers.length} bener!
        </p>
      )}
    </div>
  );
}
