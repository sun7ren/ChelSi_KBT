"use client";

import DragOrder from "@/components/DragOrder";

type Item = {
  id: string;
  label: string;
};

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Step4() {
  const items: Item[] = [
    { id: "stand", label: "Jepit buret pada dudukan retort" },
    { id: "fill", label: "Isi buret dengan larutan NaOH" },
    { id: "removeBubbles", label: "Hilangkan gelembung udara dari ujung buret" },
    { id: "indicator", label: "Tambahkan 2–3 tetes fenolftalein ke HCl" },
    { id: "position", label: "Letakkan labu erlenmeyer di bawah buret" },
  ];

  const correctOrder = [
    "stand",
    "fill",
    "removeBubbles",
    "indicator",
    "position",
  ];

  return (
    <DragOrder
      items={items}
      correctOrder={correctOrder}
      title="Arrange the Experiment Setup Steps"
    />
  );
}
