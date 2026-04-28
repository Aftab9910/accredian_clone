"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    logo: "/logos/adp.svg",
    text: `"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."`,
  },
  {
    logo: "/logos/bayer.svg",
    text: `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Testimonials from{" "}
            <span className="text-blue-600">Our Partners</span>
          </h2>

          <p className="mt-3 text-lg text-gray-700">
            What <span className="text-blue-600">Our Clients</span> Are Saying
          </p>
        </motion.div>

        {/* Slider */}
        <div className="mt-16 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm border"
                >
                  <img
                    src={item.logo}
                    alt="logo"
                    className="h-12 mx-auto mb-6 object-contain"
                  />

                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === i ? "bg-blue-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
