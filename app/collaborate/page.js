'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, PenTool, Video, Scissors, Globe, Film } from 'lucide-react';
import Link from 'next/link';

export default function CollaboratePage() {
  const services = [
    {
      title: 'Ad Films & Brand Campaigns',
      icon: <Film className="w-8 h-8 text-red-500" />,
      desc: 'Cinematic ad films and creative brand campaigns that connect emotionally and visually.',
    },
    {
      title: 'Short Films & Micro Dramas',
      icon: <Video className="w-8 h-8 text-red-500" />,
      desc: 'Crafting short narratives that leave a lasting impact — from scripting to post-production.',
    },
    {
      title: 'Video Editing & Post Production',
      icon: <Scissors className="w-8 h-8 text-red-500" />,
      desc: 'Professional editing, sound design, and grading for films, ads, and content creators.',
    },
    {
      title: 'Graphic Design',
      icon: <PenTool className="w-8 h-8 text-red-500" />,
      desc: 'Designing posters, social media creatives, and brand assets with strong visual storytelling.',
    },
    {
      title: 'Website Development',
      icon: <Globe className="w-8 h-8 text-red-500" />,
      desc: 'Building cinematic and responsive websites that bring your brand to life online.',
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 bg-black text-white min-h-screen">
      {/* Intro */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-red-500">Collaborate With Us</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Let’s create something unforgettable together. Whether you’re a brand, an artist, or a storyteller —  
          Agasthya Productions is ready to turn your vision into cinematic reality.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:shadow-red-500/20 hover:border-red-500 transition-all"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              {service.icon}
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-6">
          Have a project in mind? Reach out to us via email or Instagram.  
          We’d love to bring your story to life.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link
            href="mailto:agasthyaproductions05@gmail.com"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-red-500 rounded-full text-white hover:bg-red-600 transition"
          >
            <Mail className="w-5 h-5" /> Email Us
          </Link>

          <Link
            href="https://www.instagram.com/agasthyaproductions/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-700 rounded-full text-gray-300 hover:bg-gray-800 transition"
          >
            <Instagram className="w-5 h-5" /> DM on Instagram
          </Link>
        </div>

        {/* Simple Contact Form (non-functional for now) */}
        <form className="space-y-4 max-w-md mx-auto text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <textarea
            placeholder="Tell us about your project..."
            rows="4"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 transition text-white py-2 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
