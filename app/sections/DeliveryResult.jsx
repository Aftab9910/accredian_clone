"use client";

import { motion } from "framer-motion";
import { BarChart3, Presentation, MonitorPlay } from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
    icon: BarChart3,
  },
  {
    id: "2",
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
    icon: Presentation,
  },
  {
    id: "3",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: MonitorPlay,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How We <span className="text-blue-600">Deliver Results</span> That
          Matter?
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          A Structured Three-Step Approach to{" "}
          <span className="text-blue-600">Skill Development</span>
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-16 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={i}
              className={`relative bg-gray-200 rounded-2xl p-10 shadow-md border border-blue-200
              ${i === 2 ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Left Blue Bar */}
              <div className="absolute left-0 top-10 w-2 h-20 bg-blue-600 rounded-r-full"></div>

              {/* Right Blue Bar */}
              <div className="absolute right-0 top-10 w-2 h-20 bg-blue-600 rounded-l-full"></div>

              {/* Step Number */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-blue-400 flex items-center justify-center text-sm font-semibold bg-white">
                {step.id}
              </div>

              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-700 max-w-md mx-auto">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
