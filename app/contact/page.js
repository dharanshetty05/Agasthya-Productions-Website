'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 px-6 bg-black text-white min-h-screen">
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-red-500">Contact Us</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          We’d love to hear from you! Whether it’s feedback, collaboration ideas, or just a hello —  
          drop us a message and let’s connect.
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-10 bg-gray-900 rounded-2xl border border-gray-800 shadow-lg p-8 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-center sm:text-left space-y-3">
          <h2 className="text-2xl font-semibold">Agasthya Productions</h2>
          <p className="text-gray-400">Bengaluru, Karnataka, India</p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 mt-4">
            <Link
              href="mailto:agasthyaproductions05@gmail.com"
              className="flex items-center gap-2 hover:text-red-400 transition"
            >
              <Mail className="w-5 h-5 text-red-500" /> agasthyaproductions05@gmail.com
            </Link>

            <div className="flex gap-4 mt-3 sm:mt-0">
              <Link
                href="https://www.instagram.com/agasthyaproductions/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.youtube.com/@agasthyaproductions"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition"
              >
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Map Placeholder (Optional — can be replaced with Google Maps iframe later) */}
        <div className="w-full sm:w-1/2 bg-gray-800 rounded-xl h-56 flex items-center justify-center text-gray-500 text-sm italic">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.03748531540307!2d77.5347308720919!3d12.933425929048003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e46f4ebaf2b%3A0x3887990bfba6e6b4!2sPESIT%20Campus%2C%20Pes%20boy&#39;s%20hostel%20PESIT%20Campus%2C%20100%20ft%20Ring%20Road%2C%20Outer%20Ring%20Rd%2C%20Dwaraka%20Nagar%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560085!5e0!3m2!1sen!2sin!4v1762509547731!5m2!1sen!2sin" className="w-full h-56 rounded-xl border-none"></iframe>
        </div>
      </motion.div>

      {/* Message Form */}
      <motion.div
        className="max-w-2xl mx-auto bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Send Us a Message</h2>

        <form className="space-y-4">
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
            placeholder="Your Message"
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
