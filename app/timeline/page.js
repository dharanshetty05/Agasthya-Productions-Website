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
      platform: 'YouTube',
      link: 'https://www.youtube.com/embed/WU6EQF1rzDQ?si=28qylpoK7ygVYR9h',
      thumb: '/timeline/intro.png',
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

      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Every story leaves a mark. Scroll through our cinematic journey — from the first frame to our latest creation.
      </p>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full border-l border-gray-800"></div>

        <div className="space-y-16">
          {releases.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className="relative md:flex md:items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {/* Dot */}
                <div className="absolute left-[0.75rem] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-black z-10"></div>

                {/* Card Container */}
                <div
                  className={`md:w-5/12 ${
                    isLeft ? 'md:pr-12 text-right' : 'md:pl-12 text-left md:ml-auto'
                  }`}
                >
                  <motion.div
                    className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-red-500/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                      <p className="absolute text-gray-700 text-sm uppercase tracking-widest">
                        {item.title}
                      </p>

                      {item.link && (
                        <button
                          onClick={() => setActiveVideo(item)}
                          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition"
                        >
                          <Play className="w-10 h-10 text-red-500" />
                        </button>
                      )}
                    </div>

                    {/* Text Info */}
                    <div className="p-4">
                      <p className="text-sm text-red-400">{item.type}</p>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{item.date}</p>

                      {item.platform && (
                        <p className="text-xs text-gray-500 mt-2">{item.platform}</p>
                      )}
                    </div>
                  </motion.div>
                </div>

                <div className="md:w-5/12"></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Player */}
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
