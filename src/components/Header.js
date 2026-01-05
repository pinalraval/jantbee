"use client";

import { useState } from "react";
import Button from "./Button";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "Categories", href: "#categories" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF3E4] border-b border-[#0000001A]">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="JANTBEE Logo"
              width={140}
              height={40}
              className="h-7 lg:h-9 w-auto"
              priority
            />
          </div>

          {/* Desktop Nav (Visible only on lg screens) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions & Hamburger Toggle */}
          <div className="flex items-center gap-2">
            {/* Sign up Button - Hidden on very small screens, visible from md up */}
            <div className="hidden md:block">
              <Button variant="primary" className="px-5 py-2">Sign up</Button>
            </div>
            
            {/* Unified Toggle Button - Visible on Mobile & Tablet (hidden on lg) */}
            <button 
              className="lg:hidden p-2 text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Cross Icon (X)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon (≡)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Responsive Dropdown Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-2 border-t border-gray-100 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile-only Sign up (shows inside menu when screen is small) */}
            <div className="md:hidden px-4 pt-4">
              <Button variant="primary" className="w-full">Sign up</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}