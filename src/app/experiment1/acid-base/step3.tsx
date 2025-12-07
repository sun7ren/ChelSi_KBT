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
    { id: "goggles", label: "Wear safety goggles" },
    { id: "rinse", label: "Rinse burette with distilled water" },
    { id: "rinseNaOH", label: "Rinse burette with NaOH solution" },
    { id: "pipetteRinse", label: "Rinse pipette with HCl" },
    { id: "measureAcid", label: "Pipette 25 mL of HCl into conical flask" },
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
