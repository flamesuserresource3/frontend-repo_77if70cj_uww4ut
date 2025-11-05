import React from 'react';
import { Music, Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-sm">
            <Music size={18} />
          </div>
          <span className="font-semibold tracking-tight">AuralMind</span>
          <span className="hidden sm:inline text-gray-400">/</span>
          <span className="hidden sm:inline text-sm text-gray-500">AI Music Therapy</span>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#benefits" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
          <a href="#get-started" className="hidden sm:inline text-sm text-gray-600 hover:text-gray-900 transition-colors">Get Started</a>
          <a
            href="#privacy"
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            <Shield size={16} /> Privacy-first
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
