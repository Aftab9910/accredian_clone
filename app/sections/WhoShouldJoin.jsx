"use client";

import { motion } from "framer-motion";
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";

const audience = [
  {
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
    icon: MonitorCheck,
  },
  {
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
    icon: MonitorX,
  },
  {
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
    icon: GraduationCap,
  },
  {
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
    icon: Briefcase,
  },
];

export default function WhoShouldJoin() {
  return (
    <section className="py-20 bg-gray-100 flex justify-center">
      <div className="bg-blue-600 text-white rounded-2xl max-w-6xl w-full px-8 md:px-16 py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg opacity-80">Who Should Join?</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Strategic Skill Enhancement
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
          {audience.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Icon Box */}
                <div className="border-2 border-white p-3 rounded-lg">
                  <Icon size={28} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
