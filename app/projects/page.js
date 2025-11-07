'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Short Films', 'Ad Films', 'Music Videos'];

  const projects = [
    {
      title: 'Fortunes',
      category: 'Short Films',
      youtube: 'https://www.youtube.com/embed/xjIGvCydzFg?si=PPzFs4AoUwlPOtCP', 
      description: 'A heartwarming short film presented by Agasthya Productions.',
    },
    {
      title: 'AdFlix Pillow Ad',
      category: 'Ad Films',
      youtube: 'https://www.youtube.com/embed/QILVJSS2spw?si=pqB0uU_keEw-j1HE',
      description: 'Award-winning ad created for AdFlix contest.',
    },
    {
      title: 'Karma',
      category: 'Short Films',
      youtube: 'https://www.youtube.com/embed/OVpS7SQspG0?si=To-KiiaCtktPyQJS',
      description: 'A story about passion and persistence.',
    },
    {
      title: 'Fevicol Ad Film',
      category: 'Ad Films',
      instagram: 'https://www.youtube.com/embed/ARC6BJVtgP8?si=XyjxxVObjOvDE1l-',
      description: 'A funny ad film on the brand Fevicol',
    },
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="pt-28 px-6 min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Our Work</h1>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === cat
                ? 'bg-red-500 text-white border-red-500'
                : 'border-gray-600 text-gray-300 hover:bg-gray-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="aspect-video">
              {project.youtube ? (
                <iframe
                  src={project.youtube}
                  title={project.title}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : project.instagram ? (
                <iframe
                  src={project.instagram + 'embed'}
                  title={project.title}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : null}
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <p className="text-xs mt-2 text-red-400">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
