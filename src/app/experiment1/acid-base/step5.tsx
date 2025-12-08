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
    { id: "start", label: "Lepaskan NaOH secara perlahan dari buret" },
    { id: "swirl", label: "Putar labu kerucut secara terus-menerus" },
    { id: "approach", label: "Perlambat laju reaksi hingga warna merah muda bertahan sebentar" },
    { id: "dropwise", label: "Tambahkan NaOH setetes demi setetes" },
    { id: "endpoint", label: "Berhenti saat warna merah muda samar dan permanen muncul selama 30 detik" },
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
      title="Susun Langkah Prosedur Titrasi"
    />
  );
}
