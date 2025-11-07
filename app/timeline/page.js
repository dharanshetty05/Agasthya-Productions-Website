'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

export default function TimelinePage() {
  const [activeVideo, setActiveVideo] = useState(null);

  const releases = [
    {
      date: '7 Sept 2024',
      title: "Agasthya's Intro Video",
      type: 'Intro Video',
      platform: 'Instagram',
      link: 'https://www.instagram.com/p/CXYZ',
      thumb: '/timeline/intro.jpg', // placeholder
    },
    {
      date: '16 Nov 2024',
      title: 'Fortunes',
      type: 'Short Film',
      platform: 'YouTube',
      link: 'https://www.youtube.com/embed/xjIGvCydzFg?si=PPzFs4AoUwlPOtCP',
      thumb: '/timeline/fortunes.jpg',
    },
    {
      date: '26 Jan 2025',
      title: 'Karma',
      type: 'Short Film',
      platform: 'YouTube',
      link: 'https://www.youtube.com/embed/OVpS7SQspG0?si=To-KiiaCtktPyQJS',
      thumb: '/timeline/karma.jpg',
    },
    {
      date: '19 Feb 2025',
      title: 'AdFlix Ad Film Contest — 2 Awards',
      type: 'Awards',
      platform: 'AdFlix',
      link: '',
      thumb: '/timeline/adflix.jpg',
    },
    {
      date: '30 Mar 2025',
      title: 'Avashyakathe',
      type: 'Short Film',
      platform: 'YouTube',
      link: 'https://www.youtube.com/embed/v8LvFdHM1cI?si=W9egELpfBmfwaJpX',
      thumb: '/timeline/avashyakathe.jpg',
    },
    {
      date: '24 Apr 2025',
      title: 'Award Ad Films',
      type: 'Ad Film',
      platform: 'YouTube',
      link: 'https://www.youtube.com/embed/QILVJSS2spw?si=pqB0uU_keEw-j1HE',
      thumb: '/timeline/awardads.jpg',
    },
    {
      date: '28 May 2025',
      title: 'Fevicol Ad Film',
      type: 'Ad Film',
      platform: 'Instagram',
      link: 'https://www.instagram.com/reel/DKMkVWlMcn4/?utm_source=ig_web_button_share_sheet',
      thumb: '/timeline/fevicol.jpg',
    },
    {
      date: '14 July 2025',
      title: 'Just Maath Maathalli',
      type: 'Micro Drama',
      platform: 'Instagram',
      link: 'https://www.instagram.com/reel/DMFp5l_owWW/?utm_source=ig_web_copy_link',
      thumb: '/timeline/justmaath.jpg',
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 bg-black text-white min-h-screen">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-red-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Release Timeline
      </motion.h1>

      <p className="text-center text-gray-400 mb-10">
        Scroll through our cinematic journey — each project, one story closer to our dream.
      </p>

      {/* Horizontal Scrollable Timeline */}
      <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        <div className="flex space-x-8 min-w-max px-4">
          {releases.map((item, i) => (
            <motion.div
              key={i}
              className="relative w-72 flex-shrink-0 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {/* Card */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative w-full h-44 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  {/* Placeholder gradient text */}
                  <p className="absolute text-gray-700 text-sm uppercase tracking-widest">
                    {item.title}
                  </p>

                  {/* Play overlay */}
                  {item.link && (
                    <button
                      onClick={() => setActiveVideo(item)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
                    >
                      <Play className="w-10 h-10 text-red-500" />
                    </button>
                  )}
                </div>

                {/* Details */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.type}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>

                  {item.link && (
                    <p className="text-xs mt-2 text-red-400">
                      {item.platform}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-50 bg-black/70 p-2 rounded-full hover:bg-black transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {activeVideo.platform === 'YouTube' ? (
                <iframe
                  src={activeVideo.link + '&autoplay=1'}
                  className="w-full h-full"
                  allowFullScreen
                  allow="autoplay; fullscreen"
                />
              ) : activeVideo.platform === 'Instagram' ? (
                <iframe
                  src={activeVideo.link.replace(/\?.*$/, '') + '/embed'}
                  className="w-full h-full"
                  allowFullScreen
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                  No video link available
                </div>
              )}
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{activeVideo.title}</h3>
              <p className="text-gray-400 text-sm">
                {activeVideo.type} • {activeVideo.date}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
