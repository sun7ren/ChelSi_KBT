"use client";

import { useState } from "react";
import Step0 from "./acid-base/step0";
import Step1 from "./acid-base/step1";
import Step2 from "./acid-base/step2";
import Step3 from "./acid-base/step3";
import Step4 from "./acid-base/step4";
import Step5 from "./acid-base/step5";
import Step6 from "./acid-base/step6";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import AppHeader from "@/components/ui/AppHeader";

export default function Home() {
  const steps = [
    {
  id: "step0",
  title: "Langkah 0: Video Pengantar",
  component: <Step0 />,
  description: "Pengantar untuk percobaan Titrasi Asam-Basa.",
},
{
  id: "step1",
  title: "Langkah 1: Alat",
  component: <Step1 />,
  description: "Pilih 5 alat yang akan digunakan untuk proses netralisasi asam-basa.",
},
{
  id: "step2",
  title: "Langkah 2: Bahan Kimia",
  component: <Step2 />,
  description: "Identifikasi tiga bahan kimia yang dibutuhkan.",
},
{
  id: "step3",
  title: "Langkah 3: Pra-Percobaan",
  component: <Step3 />,
  description:
    "Sebelum memulai, lakukan tindakan pencegahan seperti memakai kacamata pelindung dan membilas alat.",
},
{
  id: "step4",
  title: "Langkah 4: Percobaan",
  component: <Step4 />,
  description:
    "Siapkan alat, persiapkan larutan, dan mulai titrasi dengan menambahkan basa ke asam secara perlahan.",
},
{
  id: "step5",
  title: "Langkah 5: Titrasi",
  component: <Step5 />,
  description:
    "Dekati titik akhir secara hati-hati, tetes demi tetes, hingga muncul warna merah muda yang samar.",
},
{
  id: "step6",
  title: "Langkah 6: Hasil",
  component: <Step6 />,
  description:
    "Catat pembacaan buret, hitung rata-rata titre, dan analisis hasil.",
},

  ];

  const [activeStep, setActiveStep] = useState("step0");

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <AppHeader showHomeLink />

      {/* MAIN */}
      <main className="flex-1 flex justify-center px-6 py-10">
        <div className="max-w-screen-xl w-full flex flex-col gap-10">
          {/* Intro */}
          <div className="text-center">
            <h2 className="font-bold text-3xl mb-4 text-blue-900">
              Acid-Base Titration Experiment
            </h2>
            <p className="mb-2">
              Untuk menentukan konsentrasi asam atau basa yang tidak diketahui dengan menetralkannya dengan basa atau asam yang konsentrasinya diketahui.
            </p>
            <p className="mb-0">Acid + Base → Salt + Water</p>
          </div>

          <div className="flex gap-8 items-start">
            {/* Left: Simulation Screen */}
            <div className="flex-1 bg-white rounded-2xl border border-blue-200 shadow-lg p-4 min-h-[400px]">
              {steps.find((s) => s.id === activeStep)?.component ?? (
                <p className="text-gray-500">
                  Tidak ada simulation yang tersedia untuk langkah ini.
                </p>
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
      <footer className="flex justify-center items-center bg-blue-800 text-white p-4 mt-8 shadow-inner">
        Informatics Engineering × Chemical Engineering 2025
      </footer>
    </div>
  );
}
