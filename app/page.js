'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/showreel.mp4" type="video/mp4" />
      </video>

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* 🎬 Hero Text */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
          Agasthya <span className="text-red-500">Productions</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Where Stories Come To <span className="text-red-400">Life.</span>
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/watch"
            className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Watch Our Work
          </Link>
          <Link
            href="/collaborate"
            className="px-6 py-3 border border-gray-400 text-gray-200 rounded-full hover:bg-gray-800 transition"
          >
            Collaborate
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
