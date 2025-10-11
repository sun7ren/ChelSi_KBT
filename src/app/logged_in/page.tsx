"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/ui/Header";
import { supabase } from "@/lib/supabaseClient";
import AuthButton from "@/components/ui/AuthButton";

type Lab = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  href: string;
};

function CourseLikeCard({
  lab,
  active,
  onHoverEnter,
  onHoverLeave,
}: {
  lab: Lab;
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
      className={`group w-full h-full text-left overflow-hidden rounded-2xl border bg-white transition
        shadow-sm hover:shadow-md focus:outline-none outline-none
        ${active ? "border-blue-600 ring-2 ring-blue-600" : "border-gray-200"}`}
    >
      {/* Image banner */}
      <div className="relative w-full aspect-[16/9] bg-white overflow-hidden flex items-center justify-center">
        <img
          src={lab.image_url}
          alt={lab.title}
          width={200}
          height={200}
          draggable={false}
          className="block pointer-events-none select-none !w-[200px] !h-[200px]"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="inline-flex items-center rounded-md bg-blue-500 px-2 py-0.5 text-xs font-medium text-white">
          Lab
        </span>
        <h3 className="mt-2 text-base font-semibold text-gray-900">
          {lab.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{lab.description}</p>
        <div className="mt-3 text-xs text-gray-500">Course • Guided</div>
      </div>
    </div>
  );
}

export default function LoggedInHome() {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [activeLabId, setActiveLabId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLabs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('labs')
        .select('id, title, description, image_url, href');
      
      if (error) {
        console.error('Error fetching labs:', error);
      } else if (data && data.length > 0) {
        setLabs(data);
        setActiveLabId(data[0].id);
      }
      setLoading(false);
    };

    fetchLabs();
  }, []);

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-50">
      <Header
        center={
          <input
            type="text"
            placeholder="Search experiments..."
            className="w-full max-w-sm border-2 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        }
        right={<AuthButton />}
      />

      <main className="row-start-2 flex justify-center px-4 pt-10">
        <div className="w-full max-w-6xl flex flex-col gap-6">
          <div className="flex items-end justify-between px-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Lab Experiments</h2>
              <p className="text-sm text-gray-600">Choose a lab to begin your virtual experiment.</p>
            </div>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Loading labs...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
              {labs.map((lab) => (
                <Link key={lab.id} href={lab.href || `/experiment/${lab.id}`} className="block">
                  <CourseLikeCard
                    lab={lab}
                    active={activeLabId === lab.id}
                    onHoverEnter={() => setActiveLabId(lab.id)}
                    onHoverLeave={() => setActiveLabId(labs[0]?.id || null)}
                  />
                </Link>
              ))}
            </div>
          )}
           { !loading && labs.length === 0 && (
             <p className="text-center col-span-full text-gray-500">No labs available at the moment.</p>
           )}
        </div>
      </main>

      <footer className="flex justify-center items-center bg-blue-800 text-white p-4 mt-8 shadow-inner">
        Informatics Engineering × Chemical Engineering 2025
      </footer>
    </div>
  );
}

