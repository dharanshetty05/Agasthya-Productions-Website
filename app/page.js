'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [active, setActive] = useState(null);

  // Showreel (Intro Video) — your provided embed link
  const showreelEmbed = 'https://www.youtube.com/embed/WU6EQF1rzDQ?si=28qylpoK7ygVYR9h';

  // Featured works
  const featured = [
    {
      title: 'Fortunes',
      type: 'Short Film',
      platform: 'YouTube',
      src: 'https://www.youtube.com/embed/xjIGvCydzFg?si=PPzFs4AoUwlPOtCP',
    },
    {
      title: 'Karma',
      type: 'Short Film',
      platform: 'YouTube',
      src: 'https://www.youtube.com/embed/OVpS7SQspG0?si=To-KiiaCtktPyQJS',
    },
    {
      title: 'Fevicol',
      type: 'Ad Film',
      platform: 'Instagram',
      src: 'https://www.instagram.com/reel/DKMkVWlMcn4/?utm_source=ig_web_button_share_sheet',
    },
    {
      title: 'Just Maath Maathalli',
      type: 'Micro Drama',
      platform: 'Instagram',
      src: 'https://www.instagram.com/reel/DMFp5l_owWW/?utm_source=ig_web_copy_link',
    },
  ];

  // helper to convert instagram url to embed (simple)
  const instagramEmbed = (url) => {
    try {
      const cleaned = url.replace(/\?.*$/, '');
      return cleaned.endsWith('/') ? cleaned + 'embed' : cleaned + '/embed';
    } catch {
      return url;
    }
  };

  return (
    <section className="bg-black text-white min-h-screen">
      {/* HERO / SHOWREEL */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* YouTube iframe as background showreel (muted autoplay loop) */}
        <iframe
          src={showreelEmbed + '&autoplay=1&mute=1&controls=0&loop=1&rel=0&modestbranding=1&playlist=WU6EQF1rzDQ'}
          title="Agasthya Showreel"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
          frameBorder="0"
          allow="autoplay; encrypted-media;"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Foreground content */}
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Agasthya <span className="text-red-500">Productions</span></h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stories. Crafted with <span className="text-red-400">Heart.</span>
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/watch" className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">Watch Our Work</Link>
            <Link href="/collaborate" className="px-6 py-3 border border-gray-400 text-gray-200 rounded-full hover:bg-gray-800 transition">Collaborate</Link>
          </div>

          <p className="text-sm text-gray-400 mt-6 italic max-w-2xl mx-auto">
            “I steal from every movie ever made.” — Quentin Tarantino
          </p>
        </motion.div>
      </header>

      {/* Featured Works */}
      <motion.section
        className="pt-14 pb-20 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-center">Featured Works</h2>
        <p className="text-center text-gray-400 mb-8">A curated selection from our catalogue — click to watch.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                {/* Placeholder title overlay */}
                <p className="absolute text-gray-600 uppercase tracking-wide text-sm">{item.title}</p>

                {/* Play CTA */}
                {item.src && (
                  <button
                    onClick={() => setActive(item)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition"
                    aria-label={`Play ${item.title}`}
                  >
                    <div className="px-4 py-2 bg-red-500 rounded-full text-white font-semibold">Play</div>
                  </button>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.type} • {item.platform}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Modal Player */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 z-50 bg-black/60 p-2 rounded-full hover:bg-black transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {active.platform === 'YouTube' ? (
                <iframe
                  src={active.src + '&autoplay=1'}
                  title={active.title}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : active.platform === 'Instagram' ? (
                <iframe
                  src={instagramEmbed(active.src)}
                  title={active.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">Video not available</div>
              )}
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{active.title}</h3>
              <p className="text-gray-400">{active.type} • {active.platform}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );

  // helper placed after return only for readability (works because function scope)
  // function instagramEmbed(url) {
  //   try {
  //     const cleaned = url.replace(/\?.*$/, '');
  //     return cleaned.endsWith('/') ? cleaned + 'embed' : cleaned + '/embed';
  //   } catch {
  //     return url;
  //   }
  // }
}
