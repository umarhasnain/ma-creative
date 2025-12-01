'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-20">

        {/* Logo */}
        <Link href="/" onClick={handleNavClick} className="flex items-center gap-2">
          
          <div className="relative w-28 sm:w-32 md:w-40 lg:w-44 h-auto">
            <Image
              src="/images/logo.gif"
              alt="Muhammad Ahsan"
              width={300}
              height={300}
              className="object-contain w-full h-auto"
              priority
            />
          </div>

        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link href="/portfolio" className="hover:text-orange-500 transition-colors">Portfolio</Link>
          <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
          
          <Link
            href="/contact"
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-all"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
            <Link href="/" onClick={handleNavClick} className="hover:text-orange-500 transition-colors">Home</Link>
            <Link href="/portfolio" onClick={handleNavClick} className="hover:text-orange-500 transition-colors">Portfolio</Link>
            <Link href="/about" onClick={handleNavClick} className="hover:text-orange-500 transition-colors">About</Link>

            <Link
              href="/contact"
              onClick={handleNavClick}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-center hover:scale-105 transition-all"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
