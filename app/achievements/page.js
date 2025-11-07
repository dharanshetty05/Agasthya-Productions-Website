'use client';

import { motion } from 'framer-motion';
import { Award, Star, Film } from 'lucide-react';

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Best Ad Film (Judges' Choice)",
      event: "AdFlix Ad Film Contest",
      project: "Tranquillo Pillows Ad Film",
      year: "2025",
      icon: <Award className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Best Ad Film (Audience Choice)",
      event: "AdFlix Ad Film Contest",
      project: "P D Pillows Ad Film",
      year: "2025",
      icon: <Award className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Best Director",
      event: "Cinefest Short Film Competition",
      project: "Karma Short Film",
      year: "2024",
      icon: <Star className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Best Film (Runners' Up)",
      event: "PoV: Pause and Play Short Film Competition",
      project: "Karma Short Film",
      year: "2024",
      icon: <Star className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Official Selection",
      event: "MSRIT Udbhav Short Film Competition",
      project: "Karma Short Film",
      year: "2025",
      icon: <Film className="w-10 h-10 text-yellow-400" />,
    },
  ];

  return (
    <section className="pt-28 pb-16 px-6 bg-black text-white min-h-screen">
      {/* 🏆 Header Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-red-500">Achievements & Awards</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          In every frame we create, there’s a story of dedication, creativity, and teamwork. 
          These milestones remind us that great cinema is built not on luck, but on relentless passion and hard work.
        </p>
      </motion.div>

      {/* 🏅 Awards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {achievements.map((award, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center shadow-lg hover:shadow-red-500/30 hover:scale-[1.02] transition-all"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-center mb-4">{award.icon}</div>
            <h2 className="text-xl font-semibold mb-1">{award.title}</h2>
            <p className="text-red-400 font-medium mb-2">{award.event}</p>
            <p className="text-gray-400 text-sm italic mb-2">{award.project}</p>
            <p className="text-gray-600 text-xs">{award.year}</p>
          </motion.div>
        ))}
      </div>

      {/* ✨ Outro Quote */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-400 italic text-lg">
          “Cinema is the art of making dreams visible — and hard work is the light that brings them to life.” 🎥
        </p>
      </motion.div>
    </section>
  );
}
