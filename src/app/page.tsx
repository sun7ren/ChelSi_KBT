"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import Image from "next/image";
import Card from "@/components/ui/card";
import cardsData from "./data/cardsData.json";
import Link from "next/link";
import AuthButton from "@/components/ui/AuthButton";


type TabKey = "AcidsBases" | "AtomBonds" | "Energy" | "Electrochemistry" | "Reaction";
type CardData = {
  image: string;
  title: string;
  description: string;
  href: string
};

const tabNames: Record<TabKey, string> = {
  AcidsBases: "Asam Basa",
  AtomBonds: "Ikatan Atom",
  Energy: "Energi",
  Electrochemistry: "Elektrokimia",
  Reaction: "Reaksi"
};

export default function Home() {
  const tabs: TabKey[] = ["AcidsBases", "AtomBonds", "Energy", "Electrochemistry", "Reaction"];
  const [activeTab, setActiveTab] = useState<TabKey>(tabs[0]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header
        center={
          <input
            type="text"
            placeholder="Cari eksperimen..."
            className="w-full md:w-[400px] border-2 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          />
        }

        right={
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center w-full md:w-auto">
            <select className="border px-3 py-2 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto text-sm md:text-base">
              <option>Jelajahi</option>
              <option>Asam, Basa</option>
              <option>Ikatan Atom</option>
              <option>Energi</option>
              <option>Elektrokimia</option>
              <option>Reaksi</option>
            </select>
            <div className="w-full md:w-auto text-center">
              <AuthButton />
            </div>
          </div>
        }
      />


      {/* Info */}
      <main className="flex-1">
        <div className="relative w-full flex justify-center items-center">
          <Image
            src="/starting-id.png"
            alt="Logo ChelSi"
            width={1920}
            height={600}
            className="w-full h-auto"
            priority
            style={{ zIndex: 0 }}
          />

          <div
            className="absolute inset-0 flex justify-center items-end pb-6 px-6 md:px-24"
            style={{ zIndex: 1 }}
          >
            <Link href="/about" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Tentang
            </Link>
          </div>
        </div>


        {/* Tabs */}
        <div className="border-b flex flex-wrap justify-center gap-4 md:gap-8 mt-6 px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-2 text-sm md:text-lg font-medium ${activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              {tabNames[tab]}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-6">
          {cardsData[activeTab]?.length > 0 ? (
            cardsData[activeTab].map((card: CardData) => (
              <Card
                key={card.title}
                image={card.image}
                title={card.title}
                description={card.description}
                href="/experiment1"
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 mt-6">
              Tidak ada eksperimen yang tersedia untuk tab ini.
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center bg-blue-800 text-white p-4 mt-8 shadow-inner">
        Teknik Informatika × Teknik Kimia 2025
      </footer>
    </div>
  );
}
