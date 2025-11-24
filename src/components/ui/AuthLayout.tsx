import React from 'react';
import Header from '@/components/ui/Header';
import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      {/* Main container to vertically center the content */}
      <main className="flex-grow flex items-center justify-center">
        {/* Max-width container for the two-column grid */}
        <div className="w-full max-w-6xl grid md:grid-cols-2 items-center">
          
          {/* Left Column: Illustration */}
          <div className="hidden md:flex items-center justify-center p-12">
            <Image
              src="/gifChem.gif"
              alt="Animated chemistry experiment"
              width={500}
              height={500}
              unoptimized={true}
              priority
            />
          </div>

          {/* Right Column: Form Area (your page content) */}
          <div className="flex items-center justify-center p-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;