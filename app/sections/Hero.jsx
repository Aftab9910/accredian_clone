"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full bg-white pt-24 pb-16 text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Next-Gen <br />
            <span className="text-blue-600">Expertise</span> For <br />
            Your Enterprise
          </h1>

          <p className="mt-4 text-lg">
            Cultivate high-performance teams through expert learning.
          </p>

          {/* FEATURES TAGS */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map(
              (item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                >
                  {item}
                </motion.span>
              ),
            )}
          </div>

          {/* BUTTON */}
          <motion.button
            suppressHydrationWarning
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Speak with our Advisor
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
            alt="Hero"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
