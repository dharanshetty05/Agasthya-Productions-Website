'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  const team = [
    { name: 'Dharan Shetty', role: 'Founder & Director', tagline: 'The visionary storyteller behind Agasthya Productions.' },
    { name: 'Ayush Jain', role: 'Writer, Director, Editor', tagline: 'Transforms words into visuals that move hearts.' },
    { name: 'Harshavardhan M R', role: 'Writer, Actor', tagline: 'Brings stories to life with expression and emotion.' },
    { name: 'Koushik Shanke', role: 'Cinematographer, Editor', tagline: 'Frames reality into visual poetry.' },
    { name: 'Sharan Math', role: 'Director, Editor', tagline: 'Crafts immersive worlds through cinematic precision.' },
    { name: 'Sanath Bhat', role: 'Writer, Actor', tagline: 'Creates characters that connect and inspire.' },
    { name: 'Vikas Vathsal', role: 'Actor', tagline: 'Breathes authenticity into every performance.' },
  ];

  const timeline = [
    { date: '28 Dec 2023', event: 'Founded Agasthya Productions' },
    { date: '7 Sept 2024', event: "Released Agasthya's Intro Video (25K+ views on Instagram)" },
    { date: '16 Nov 2024', event: 'Released Fortunes on YouTube (1K+ views)' },
    { date: '26 Jan 2025', event: 'Released Karma on YouTube (4K+ views)' },
    { date: '19 Feb 2025', event: 'Won 2 awards at AdFlix Ad Film Contest 🏆' },
    { date: '30 Mar 2025', event: 'Released Avashyakathe on YouTube (3K+ views)' },
    { date: '24 Apr 2025', event: 'Award Ad Films released on YouTube (1K+ views)' },
    { date: '28 May 2025', event: 'Fevicol Ad Film released on Instagram (15.2K+ views)' },
    { date: '14 July 2025', event: 'Released our first micro drama *Just Maath Maathalli* on Instagram' },
  ];

  return (
    <section className="pt-28 pb-16 px-6 bg-black text-white min-h-screen">
      {/* 🎬 Intro */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-6">
          Agasthya Productions <span className="text-red-500">–</span> Where Stories Come To Life
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          At Agasthya Productions, we believe every story starts with a spark of imagination. 
          From that spark, we transform ideas into powerful visuals that touch the heart. 
          Whether it's short films, documentaries, or commercials, 
          we craft experiences that stay with you forever.
        </p>
      </motion.div>

      {/* 👥 Team Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-10">Our Core Team</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-red-500/20 hover:scale-[1.03] transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center">
                {/* Placeholder Circle for Future Photos */}
                <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center text-2xl font-semibold">
                  {member.name.split(' ')[0][0]}
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-red-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm italic">“{member.tagline}”</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🕰 Timeline Section */}
      <motion.div
        className="max-w-4xl mx-auto border-l border-gray-700 pl-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-10">Our Journey</h2>

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute -left-[1.15rem] top-1.5 w-4 h-4 bg-red-500 rounded-full"></div>
            <h3 className="text-lg font-semibold">{item.date}</h3>
            <p className="text-gray-400">{item.event}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ✨ Outro / CTA */}
      <motion.div
        className="text-center mt-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-400 italic mb-4">
          “We’re on a mission to redefine storytelling and bring emotions to life — one frame at a time.”
        </p>
        <p className="text-sm text-gray-500">
          Follow our journey on Instagram and YouTube for behind-the-scenes and new releases.
        </p>
      </motion.div>
    </section>
  );
}
