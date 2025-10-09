"use client";

import Image from "next/image";
import { useState } from "react";
import Step1 from "./acid-base/step1";
import Step2 from "./acid-base/step2";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Header from "@/components/ui/Header";

export default function Home() {
  const steps = [
    { 
      id: "step1", 
      title: "Step 1: Apparatus", 
      component: <Step1 />, 
      description: "Select 5 apparatus to be used for acid-base neutralization." 
    },
    { 
      id: "step2", 
      title: "Step 2: Chemicals", 
      component: <Step2 />, 
      description: "Identify the three chemicals needed" 
    },
    { 
      id: "step3", 
      title: "Step 3: Pre-Experiment", 
      component: null, 
      description: "Prior to starting, take precautionary actions such as wearing goggles and rinsing apparatus." 
    },
    { 
      id: "step4", 
      title: "Step 4: Experiment", 
      component: null, 
      description: "Set up the apparatus, prepare solutions, and begin titration by adding base to acid slowly." 
    },
    { 
      id: "step5", 
      title: "Step 5: Titration", 
      component: null, 
      description: "Approach the endpoint carefully, drop by drop, until a faint pink color appears." 
    },
    { 
      id: "step6", 
      title: "Step 6: Results", 
      component: null, 
      description: "Record burette readings, calculate average titre, and analyze results." 
    },
  ];

  const [activeStep, setActiveStep] = useState("step1");

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
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
                  <a href="/" className="mr-15 text-blue-600">Home</a>
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
      <main className="row-start-2 flex justify-center px-6 py-10">
        <div className="max-w-screen-xl w-full flex flex-col gap-10">
          {/* Intro */}
          <div className="text-center">
            <h2 className="font-bold text-3xl mb-4 text-blue-900">Acid-Base Titration Experiment</h2>
            <p className="mb-2">
              To determine the concentration of an unknown acid or base by neutralizing it with a base or acid of known concentration.
            </p>
            <p className="mb-0">Acid + Base → Salt + Water</p>
          </div>

          <div className="flex gap-8 items-start">
            {/* Left: Simulation Screen */}
            <div className="flex-1 bg-white rounded-2xl border border-blue-200 shadow-lg p-4 min-h-[400px]">
              {steps.find((s) => s.id === activeStep)?.component ?? (
                <p className="text-gray-500">No simulation available for this step.</p>
              )}
            </div>

            {/* Right: Steps Accordion */}
            <div className="w-96">
              <Accordion
                type="single"
                collapsible
                value={activeStep}
                onValueChange={(val) => val && setActiveStep(val)}
                className="w-full space-y-4"
              >
                {steps.map((step) => (
                  <AccordionItem
                    key={step.id}
                    value={step.id}
                    className="rounded-xl border border-blue-200 shadow-sm overflow-hidden"
                  >
                    <AccordionTrigger
                      className="px-4 py-4 text-left font-semibold transition 
                        bg-blue-50 hover:bg-blue-100 
                        data-[state=open]:bg-blue-800 data-[state=open]:text-white 
                        data-[state=open]:border-l-4 data-[state=open]:border-orange-500"
                    >
                      {step.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm bg-white text-gray-700">
                      {step.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="row-start-3 flex justify-center items-center bg-blue-800 text-white p-4 mt-8 shadow-inner">
        Informatics Engineering × Chemical Engineering 2025
      </footer>
    </div>
  );
}
