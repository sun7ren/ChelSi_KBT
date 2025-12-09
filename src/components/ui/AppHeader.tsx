"use client";

import Header from "@/components/ui/Header";
import AuthButton from "@/components/ui/AuthButton";
import Link from "next/link";

type AppHeaderProps = {
  /** Show the "Explore" dropdown on the right */
  showExplore?: boolean;
  /** Show a "Home" link on the right */
  showHomeLink?: boolean;
};

export default function AppHeader({
  showExplore = false,
  showHomeLink = false,
}: AppHeaderProps) {
  return (
    <Header
      center={
        <input
          type="text"
          placeholder="Search experiments..."
          className="w-full md:w-[400px] border-2 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
        />
      }
      right={
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
          {showHomeLink && (
            <Link
              href="/"
              className="text-blue-600 hover:underline text-sm md:text-base"
            >
              Home
            </Link>
          )}

          {showExplore && (
            <select className="border px-3 py-2 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto text-sm md:text-base">
              <option>Explore</option>
              <option>Acids, Bases</option>
              <option>Atom Bonds</option>
              <option>Energy</option>
              <option>Electrochemistry</option>
              <option>Reaction</option>
            </select>
          )}

          {/* Auth area: Login/Register OR Logout (controlled by Supabase session) */}
          <div className="w-full md:w-auto text-center">
            <AuthButton />
          </div>
        </div>
      }
    />
  );
}
