'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WatchPage() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null); // index of active video for modal

  const categories = ['All', 'Short Film', 'Ad Film', 'Micro Drama'];

  const videos = [
    {
      title: 'Fortunes',
      category: 'Short Film',
      platform: 'YouTube',
      src: 'https://www.youtube.com/embed/xjIGvCydzFg?si=PPzFs4AoUwlPOtCP',
    },
    {
      title: 'Karma',
      category: 'Short Film',
      platform: 'YouTube',
      src: 'https://www.youtube.com/embed/OVpS7SQspG0?si=To-KiiaCtktPyQJS',
    },
    {
      title: 'Fevicol',
      category: 'Ad Film',
      platform: 'Instagram',
      src: 'https://www.instagram.com/reel/DKMkVWlMcn4/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==',
    },
    {
      title: 'Just Maath Maathalli',
      category: 'Micro Drama',
      platform: 'Instagram',
      src: 'https://www.instagram.com/reel/DMFp5l_owWW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      title: 'Avashyakathe',
      category: 'Short Film',
      platform: 'YouTube',
      src: 'https://www.youtube.com/embed/v8LvFdHM1cI?si=W9egELpfBmfwaJpX',
    },
    {
      title: 'Tranquillo Pillow',
      category: 'Ad Film',
      platform: 'YouTube',
      src: 'https://www.youtube.com/embed/QILVJSS2spw?si=pqB0uU_keEw-j1HE',
    },
    {
      title: 'P D Pillows',
      category: 'Ad Film',
      platform: 'YouTube',
      src: 'https://www.youtube.com/embed/REc7dJJGZrI?si=Dlt6054-hgne84H7',
    },
  ];

  const filtered = filter === 'All' ? videos : videos.filter((v) => v.category === filter);

  // helper: convert instagram link to embed url (simple transform)
  const instagramEmbed = (url) => {
    try {
      // remove query params
      const cleaned = url.replace(/\?.*$/, '');
      // ensure trailing slash
      const withSlash = cleaned.endsWith('/') ? cleaned : cleaned + '/';
      return withSlash + 'embed';
    } catch (e) {
      return url;
    }
  };

  return (
    <section className="pt-28 pb-20 px-6 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Watch
        </motion.h1>

        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          All our films, ad films, and micro dramas — curated in one place. Click any video to open a fullscreen player.
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === c
                  ? 'bg-red-500 text-white border-red-500'
                  : 'border-gray-700 text-gray-300 hover:bg-gray-900'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => {
            const i = videos.indexOf(item); // original index for modal
            return (
              <motion.div
                key={i}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
              >
                <div className="relative aspect-video bg-black">
                  {/* thumbnail-ish: show embedded iframe (small) */}
                  {item.platform === 'YouTube' ? (
                    <iframe
                      src={item.src}
                      title={item.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  ) : (
                    // Instagram embed (constructed URL) — some browsers or Instagram policies may block embeds;
                    // we provide a fallback link below in case iframe doesn't show.
                    <iframe
                      src={instagramEmbed(item.src)}
                      title={item.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  )}

                  {/* overlay play CTA */}
                  <button
                    onClick={() => setActive(i)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition"
                    aria-label={`Play ${item.title}`}
                  >
                    <div className="px-4 py-2 bg-red-500 rounded-full text-white font-semibold">
                      Play
                    </div>
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-400">{item.category} • {item.platform}</p>
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-red-400 hover:underline"
                    >
                      Open
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Player */}
      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <div className="w-full max-w-5xl">
            <div className="relative bg-black rounded-lg overflow-hidden">
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-50 bg-black/60 text-white px-3 py-1 rounded-md"
              >
                Close
              </button>

              <div className="aspect-video">
                {videos[active].platform === 'YouTube' ? (
                  <iframe
                    src={videos[active].src + '&autoplay=1'}
                    title={videos[active].title}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <iframe
                      src={instagramEmbed(videos[active].src)}
                      title={videos[active].title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                    {/* Fallback note */}
                    <div className="p-4 text-center bg-gray-900 text-sm text-gray-300">
                      If the Instagram reel doesn't display due to embed restrictions,{' '}
                      <a
                        href={videos[active].src}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-400 underline"
                      >
                        open it on Instagram
                      </a>
                      .
                    </div>
                  </>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{videos[active].title}</h3>
                <p className="text-gray-400">{videos[active].category} • {videos[active].platform}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
