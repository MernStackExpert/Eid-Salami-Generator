"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Wallet } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#E2136E] rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-200 group-hover:rotate-12 transition-transform">
              <Wallet size={20} fill="white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#E2136E] to-[#b11b54] bg-clip-text text-transparent">
              Eid Salami
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-600 font-semibold text-sm">
            <Link href="/" className="hover:text-[#E2136E] transition-colors">Home</Link>
            <Link href="/salami" className="hover:text-[#E2136E] transition-colors">Generator</Link>
            <Link href="#" className="hover:text-[#E2136E] transition-colors">Features</Link>
            <Link href="/salami" className="bg-[#E2136E] text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-[#c1105d] active:scale-95 transition-all">
              Create Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#E2136E] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl font-semibold">
          <Link 
            href="/" 
            className="block px-3 py-4 text-gray-700 hover:bg-[#FDE8EF] hover:text-[#E2136E] rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/salami" 
            className="block px-3 py-4 text-gray-700 hover:bg-[#FDE8EF] hover:text-[#E2136E] rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Generator
          </Link>
          <Link 
            href="#" 
            className="block px-3 py-4 text-gray-700 hover:bg-[#FDE8EF] hover:text-[#E2136E] rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <div className="pt-4">
            <Link 
              href="/salami" 
              className="block w-full text-center bg-[#E2136E] text-white py-4 rounded-2xl font-bold shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Start Pranking
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}