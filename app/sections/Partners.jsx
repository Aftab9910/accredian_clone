"use client";

import { motion } from "framer-motion";

const logos = [
  "/logos/reliance.png",
  "/logos/hcl.png",
  "/logos/ibm.png",
  "/logos/Int.png",
  "/logos/adp.svg",
  "/logos/bayer.svg",
];

export default function Partners() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Our Proven <span className="text-blue-600">Partnerships</span>
      </h2>

      <p className="mt-4 text-gray-700 text-base md:text-lg">
        Successful Collaborations With the{" "}
        <span className="text-blue-600">Industry’s Best</span>
      </p>

      {/* Logos Grid */}
      <div className="mt-16 max-w-6xl mx-auto px-6 grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 place-items-center">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={logo}
              alt="company"
              className="h-14 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
