"use client";
import { useState } from "react";
import Header from "@/components/ui/Header";
import { useRouter } from 'next/navigation';

type StepCard = {
  id: string;
  title: string;
  desc: string;
  img: string;
};

function CourseLikeCard({
  card,
  active,
  onHoverEnter,
  onHoverLeave,
}: {
  card: StepCard;
  active: boolean;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      onFocus={onHoverEnter}
      onBlur={onHoverLeave}
      className={`group w-full text-left overflow-hidden rounded-2xl border bg-white transition
        shadow-sm hover:shadow-md focus:outline-none outline-none
        ${active ? "border-blue-600 ring-2 ring-blue-600" : "border-gray-200"}`}
    >
      {/* image banner (centered, fixed 200x200) */}
      <div className="relative w-full aspect-[16/9] bg-white overflow-hidden flex items-center justify-center">
        <img
          src={card.img}
          alt={card.title}
          width={200}
          height={200}
          draggable={false}
          className="block pointer-events-none select-none !w-[200px] !h-[200px]"
        />
      </div>

      {/* content */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-blue-500 px-2 py-0.5 text-xs font-medium text-white">
            Lab
          </span>
        </div>

        <h3 className="mt-2 text-base font-semibold text-gray-900">
          {card.title}
        </h3>

        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{card.desc}</p>

        <div className="mt-3 text-xs text-gray-500">Course • Guided</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeStep, setActiveStep] = useState("");
  const router = useRouter();

  const cards: StepCard[] = [
    { id: "step1", title: "Acids Bases", desc: "Simulate acid-base reactions safely in a virtual environment.", img: "/cards/acidb.gif" },
    { id: "step2", title: "Atom Bonds", desc: "Learn about atomic structures, bonding, and molecular geometry interactively.", img: "/cards/atom.gif" },
    { id: "step3", title: "Energy", desc: "Experiment with energy transfer, transformations, and conservation.", img: "/cards/energy.gif" },
    { id: "step4", title: "Electrochemistry", desc: "Study redox reactions, electrolysis, and battery experiments virtually.", img: "/cards/elec.gif" },
    { id: "step5", title: "Reaction", desc: "Classify and analyze various chemical reactions in a controlled virtual lab", img: "/cards/reaction.gif" },
  ];

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen bg-white">
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
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Register
            </button>
          </>
        }
      />

      {/* MAIN */}
      <main className="row-start-2 flex justify-center px-1 pt-10 ">
        <div className="flex flex-col gap-6">
          {/* Section header */}
          <div className="flex items-end justify-between px-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Lab content for you</h2>
              <p className="text-sm text-gray-600">Follow the steps below to complete your titration.</p>
            </div>
            <button
              type="button"
              className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Show more
            </button>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {cards.map((c) => (
              <CourseLikeCard
                key={c.id}
                card={c}
                active={activeStep === c.id}
                onHoverEnter={() => {setActiveStep(c.id); activeStep == 'step1' ? router.push('/experiment1'): router.push('')}}
                onHoverLeave={() => setActiveStep("step1")}
              />

            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center bg-blue-800 text-white p-4 mt-8 shadow-inner">
        Informatics Engineering × Chemical Engineering 2025
      </footer>
    </div>
  );
}
