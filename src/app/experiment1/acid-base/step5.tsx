"use client";

import { useState } from "react";
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

export default function Step5() {
  const items: Item[] = [
    { id: "start", label: "Slowly release NaOH from the burette" },
    { id: "swirl", label: "Continuously swirl the conical flask" },
    { id: "approach", label: "Slow down as the pink color persists briefly" },
    { id: "dropwise", label: "Add NaOH drop by drop" },
    { id: "endpoint", label: "Stop at faint, permanent pink for 30 seconds" },
  ];

  const correctOrder: string[] = [
    "start",
    "swirl",
    "approach",
    "dropwise",
    "endpoint",
  ];

  const [shuffledItems] = useState<Item[]>(() => shuffleArray(items));

  return (
    <DragOrder
      items={shuffledItems}
      correctOrder={correctOrder}
      title="Arrange the Titration Procedure Steps"
    />
  );
}
