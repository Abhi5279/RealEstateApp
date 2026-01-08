
"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { House, Globe, Menu, X, Search, Info, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8
        ${scrolled ? "bg-white   shadow-md" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[#2d5a43] flex items-center justify-center border border-white/20">
              <House className="w-6 h-6 text-white" />
            </div>
            <span className="font-serif font-bold text-xl text-foreground hidden sm:block">
              PropertyDealer
            </span>
          </Link>

          

          {/* Desktop Navigation - English Only */}
          <nav className="hidden md:flex items-center gap-1">

            <Link href="/" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#2d5a43] text-white hover:bg-[#f1ede4] transition-colors">
              Home
            </Link>
            <Link href="/properties" className="px-4 py-2 rounded-lg text-sm font-medium text-black/90  hover:bg-[#f1ede4] transition-colors">
              Properties
            </Link>
            <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-black/90 hover:bg-[#f1ede4] transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-medium text-black/90 hover:bg-[#f1ede4] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            
            {/* Language Toggle - Visible on Mobile (Side of Menu Button) */}
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-white text-slate-900 h-9 rounded-xl px-3 gap-2 shadow-sm transition-all active:scale-95">
              <Globe className="w-4 h-4 text-[#2d5a43]" />
              <span className="font-bold">हि</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg text-white h-10 w-10 md:hidden hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className={`w-7 h-7  text-black`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu - English Only */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#2d5a43]/95 border-t border-white/10 p-4 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 duration-300 backdrop-blur-lg">
            
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 bg-white/10 text-white"
            >
              <House className="w-5 h-5" />
              Home
            </Link>

            <Link 
              href="/properties" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10"
            >
              <Search className="w-5 h-5" />
              Properties
            </Link>

            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10"
            >
              <Info className="w-5 h-5" />
              About Us
            </Link>

            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}