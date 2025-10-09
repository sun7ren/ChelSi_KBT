"use client";

import { useState } from "react";

type Tab = {
  label: string;
  value: string;
};

type TabsProps = {
  tabs: Tab[];
  onChange: (value: string) => void;
  activeTab: string;
};

export default function Tabs({ tabs, onChange, activeTab }: TabsProps) {
  return (
    <div className="flex gap-4 border-b">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`pb-2 px-4 ${
            activeTab === tab.value
              ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
