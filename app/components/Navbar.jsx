'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Watch', path: '/watch' },
    { name: 'Collaborate', path: '/collaborate' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-black/70 backdrop-blur-lg fixed top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Agasthya<span className="text-red-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="hover:text-red-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block px-6 py-3 border-b border-gray-700 hover:bg-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
