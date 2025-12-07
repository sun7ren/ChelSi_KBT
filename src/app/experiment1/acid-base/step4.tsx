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
    { id: "stand", label: "Clamp the burette onto the retort stand" },
    { id: "fill", label: "Fill burette with NaOH solution" },
    { id: "removeBubbles", label: "Remove air bubbles from the burette tip" },
    { id: "indicator", label: "Add 2–3 drops of phenolphthalein to HCl" },
    { id: "position", label: "Place conical flask under burette" },
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
