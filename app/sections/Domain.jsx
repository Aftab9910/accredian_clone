"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  CreditCard,
} from "lucide-react";

const domains = [
  { title: "Product & Innovation Hub", icon: Lightbulb },
  { title: "Gen-AI Mastery", icon: Brain },
  { title: "Leadership Elevation", icon: Users },
  { title: "Tech & Data Insights", icon: BarChart3 },
  { title: "Operations Excellence", icon: Settings },
  { title: "Digital Enterprise", icon: Globe },
  { title: "Fintech Innovation Lab", icon: CreditCard },
];

export default function Domain() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Our <span className="text-blue-600">Domain Expertise</span>
      </h2>

      <p className="mt-4 text-gray-700 text-lg">
        <span className="text-blue-600">Specialized Programs</span> Designed to
        Fuel Innovation
      </p>

      {/* Grid */}
      <div className="mt-16 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {domains.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer
              ${i === domains.length - 1 ? "md:col-start-2" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Icon className="mx-auto text-blue-600 mb-4" size={40} />

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
