"use client";

import { useState } from "react";

export default function Step2() {
  const chemicalList = [
    { name: "Asam Klorida (HCl)" },
    { name: "Natrium Hidroksida (NaOH)" },
    { name: "Fenolftalein" },
    { name: "Asam Sitrat (C₆H₈O₇)" },
    { name: "Natrium Bikarbonat (NaHCO₃)" },
    { name: "Asam Sulfat (H₂SO₄)" },
    { name: "Kalium Hidroksida (KOH)" },
    { name: "Metil Oranye" },
    { name: "Kertas Lakmus" },
  ];

  const correctAnswers = ["Asam Klorida (HCl)", "Natrium Hidroksida (NaOH)", "Fenolftalein"];
  const [selected, setSelected] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);

  function toggleSelect(name: string) {
    setSelected((prev) => {
      if (prev.includes(name)) {
        return prev.filter((n) => n !== name);
      } else {
        if (prev.length >= 3) return prev;
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
      {/* Chemical Grid */}
      <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-lg border border-gray-300">
        {chemicalList.map((a, i) => (
          <div
            key={i}
            onClick={() => toggleSelect(a.name)}
            className={`group p-2 border rounded cursor-pointer relative flex items-center justify-center transition
              ${selected.includes(a.name)
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300 hover:border-blue-400"
              }`}
          >
            <div className="w-28 h-28 flex items-center justify-center">
              <h3 className="text-center text-sm font-medium"> {a.name} </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Check Answer */}
      <button
        onClick={checkAnswer}
        className="mt-4 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700"
      >
        Selesai dengan Langkah 2
      </button>

      {/* Score Message */}
      {score !== null && (
        <p className="mt-2 text-lg font-semibold">
          Anda Mendapatkan {score} / {correctAnswers.length} benar!
        </p>
      )}
    </div>
  );
}
