"use client";

import Image from "next/image";

type HeaderProps = {
  center?: React.ReactNode;
  right?: React.ReactNode;
};

export default function Header({ center, right }: HeaderProps) {
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between p-4 md:p-6 bg-white shadow-sm gap-4 md:gap-0">
      {/* Left: logo + name */}
      <div className="flex flex-row items-center gap-4 w-full md:w-auto justify-center md:justify-start">
        <Image src="/logo.png" alt="Logo ChelSi" width={80} height={24} className="md:w-[100px] md:h-[30px]" />
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-800">ChelSi</h1>
          <p className="mt-1 text-sm md:text-lg text-blue-600 italic">
            Laboratorium Anda, Kapan Saja, Di Mana Saja.
          </p>
        </div>
      </div>

      {/* Center */}
      <div className="flex-1 flex justify-center w-full md:w-auto">{center}</div>

      {/* Right: actions */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end">{right}</div>
    </header>
  );
}
