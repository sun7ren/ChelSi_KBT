"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import Image from "next/image";
import Card from "@/components/ui/card";
import cardsData from "./data/cardsData.json"; 
import Link from "next/link";

type TabKey = "AcidsBases" | "AtomBonds" | "Energy" | "Electrochemistry" | "Reaction";
type CardData = { 
  image: string; 
  title: string; 
  description: string; 
  href: string 
};

const backgroundImages = {
  home: "bg-[url('/starting.png')] bg-cover bg-center",
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
            placeholder="Search experiments..."
            className="w-200 border-2 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        }
        right={
          <>
            <select className="border px-3 py-2 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Explore</option>
              <option>Acids, Bases</option>
              <option>Atom Bonds</option>
              <option>Energy</option>
              <option>Electrochemistry</option>
              <option>Reaction</option>
            </select>
            <Link href="/authentication/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition">
              Login
            </Link>
            <Link href="/authentication/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Register
            </Link>
          </>
        }
      />

      {/* Info */}
      <main className="flex-1">
        <div className={`${backgroundImages.home} relative h-96 flex items-center justify-center mb-6`}>
          {/* <Image
            src="/starting.png"
            alt="ChelSi logo"
            className="object-cover w-full h-[400px]"
            width={1920}
            height={1080}
            style={{ zIndex: 0 }}
          /> */}
          <div
            className="absolute top-75 left-40 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 1, pointerEvents: "none" }} 
          >
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition pointer-events-auto"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b flex justify-center gap-8 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-2 text-lg font-medium ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {cardsData[activeTab]?.length > 0 ? (
            cardsData[activeTab].map((card: CardData) => (
              <Card
                key={card.title}
                image={card.image}
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 mt-6">
              No experiments available for this tab.
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center bg-blue-800 text-white p-4 mt-8 shadow-inner">
        Informatics Engineering × Chemical Engineering 2025
      </footer>
    </div>
  );
}
