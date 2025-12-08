"use client";

import Image from "next/image";

type HeaderProps = {
  center?: React.ReactNode;
  right?: React.ReactNode;
};

export default function Header({ center, right }: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-between p-6 bg-white shadow-sm">
      {/* Left: logo + name */}
      <div className="flex flex-row items-center gap-4">
        <Image src="/logo.png" alt="Logo ChelSi" width={100} height={30} />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-blue-800">ChelSi</h1>
          <p className="mt-1 text-lg text-blue-600 italic">
            Laboratorium Anda, Kapan Saja, Di Mana Saja.
          </p>
        </div>
      </div>

      {/* Center */}
      <div className="flex-1 flex justify-center">{center}</div>

      {/* Right: actions */}
      <div className="flex items-center gap-4">{right}</div>
    </header>
  );
}
