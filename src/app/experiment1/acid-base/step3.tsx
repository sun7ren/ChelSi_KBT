"use client";

import DragOrder from "@/components/DragOrder";

export default function Step3() {
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
  const items: Item[] = [
    { id: "goggles", label: "Kenakan kacamata pengaman" },
    { id: "rinse", label: "Bilas buret dengan air suling" },
    { id: "rinseNaOH", label: "Bilas buret dengan larutan NaOH" },
    { id: "pipetteRinse", label: "Bilas pipet dengan HCl" },
    { id: "measureAcid", label: "Pipet 25 mL HCl ke dalam labu erlenmeyer" },
  ];

  const correctOrder = [
    "goggles",
    "rinse",
    "rinseNaOH",
    "pipetteRinse",
    "measureAcid",
  ];

  return (
    <DragOrder
      items={items}
      correctOrder={correctOrder}
      title="Arrange the Pre-Experiment Steps"
    />
  );
}
