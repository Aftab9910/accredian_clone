"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-12 text-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Background Circles */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-blue-400 opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full bg-blue-300 opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1.1, 1.3, 1.1] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />

          {/* Icon */}
          <motion.div
            className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white rounded-xl shadow-md"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-blue-600 text-2xl">🎧</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Want to Learn More About Our Training Solutions?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-blue-100 mt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get Expert Guidance for Your Team’s Success!
          </motion.p>

          {/* Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-xl transition hover:scale-105">
              Contact Us →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
