'use client';

import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Work', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Watch', href: '/watch' },
    { name: 'Collaborate', href: '/collaborate' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 text-white mt-20">
      <motion.div
        className="max-w-6xl mx-auto px-6 py-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Brand Name + Tagline */}
        <h2 className="text-2xl font-bold mb-2">
          Agasthya <span className="text-red-500">Productions</span>
        </h2>
        <p className="text-gray-400 text-sm mb-6 italic">Where Stories Come To Life</p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-red-400 text-sm transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <Link
            href="https://www.instagram.com/agasthyaproductions/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://youtube.com/@agasthyaproductions?si=dlE_-rbCns-uhtIq"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <Youtube className="w-6 h-6" />
          </Link>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 my-4 w-3/4 mx-auto"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Agasthya Productions. All rights reserved.
        </p>
      </motion.div>

      <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition"
  aria-label="Back to top"
>
  ↑
</button>

    </footer>
  );
}
