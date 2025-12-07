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
          className="w-200 border-2 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      }
      right={
        <div className="flex items-center gap-4">
          {showHomeLink && (
            <Link
              href="/"
              className="text-blue-600 hover:underline"
            >
              Home
            </Link>
          )}

          {showExplore && (
            <select className="border px-3 py-2 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Explore</option>
              <option>Acids, Bases</option>
              <option>Atom Bonds</option>
              <option>Energy</option>
              <option>Electrochemistry</option>
              <option>Reaction</option>
            </select>
          )}

          {/* Auth area: Login/Register OR Logout (controlled by Supabase session) */}
          <AuthButton />
        </div>
      }
    />
  );
}
