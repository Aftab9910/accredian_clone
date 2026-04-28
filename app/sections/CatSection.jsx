"use client";

import { motion } from "framer-motion";
import { Lightbulb, Settings, Wrench } from "lucide-react";

const steps = [
  {
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
    icon: Lightbulb,
  },
  {
    title: "Application",
    desc: "Practical implementation through real-world scenarios.",
    icon: Settings,
  },
  {
    title: "Tools",
    desc: "Resources and techniques for effective skill mastery.",
    icon: Wrench,
  },
];

export default function CATFramework() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 text-center overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Our Proven Approach to{" "}
          <span className="text-blue-600">Learning Excellence</span>
        </p>
      </motion.div>

      {/* SVG Curve Path */}
      <div className="relative mt-20 max-w-6xl mx-auto px-6">
        <svg
          className="absolute top-0 left-0 w-full h-64 hidden md:block"
          viewBox="0 0 1000 200"
          fill="none"
        >
          <motion.path
            d="M50,100 C150,0 300,200 400,100 S650,0 750,100 S900,200 950,100"
            stroke="#3B82F6"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
        </svg>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {steps.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Circle */}
                <div className="w-40 h-40 rounded-full border-4 border-blue-500 flex flex-col items-center justify-center bg-white shadow-md">
                  <Icon className="text-blue-600 mb-2" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                {/* Text */}
                <p className="mt-4 text-gray-600 max-w-xs">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
