"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Cpu, TrendingUp, Box } from "lucide-react";

const items = [
  {
    icon: Lightbulb,
    title: "Tailored Solutions",
    desc: "Programs customized to your organization's goals and challenges.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning experiences.",
  },
  {
    icon: TrendingUp,
    title: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
  },
  {
    icon: Box,
    title: "Flexible Delivery",
    desc: "Online and offline options tailored to your needs.",
  },
];

export default function Edge() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        The <span className="text-blue-600">Accredian Edge</span>
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        Key Aspects of{" "}
        <span className="text-blue-600">Our Strategic Training</span>
      </p>

      {/* Timeline */}
      <div className="mt-16 relative max-w-6xl mx-auto px-6">
        {/* Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300"></div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Icon Circle */}
                <div className="bg-white border-4 border-blue-500 p-4 rounded-full shadow-lg z-10">
                  <Icon className="text-blue-600" size={28} />
                </div>

                {/* Text */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
