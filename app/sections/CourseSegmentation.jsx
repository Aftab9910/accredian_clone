"use client";

import { motion } from "framer-motion";

const courses = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    img: "/images/program.jpg",
  },
  {
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    img: "/images/industry.jpg",
  },
  {
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    img: "/images/topic.jpg",
  },
  {
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    img: "/images/level.jpg",
  },
];

export default function CourseSegmentation() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Tailored <span className="text-blue-600">Course Segmentation</span>
      </h2>

      <p className="mt-4 text-gray-700 text-lg">
        Explore <span className="text-blue-600">Custom-fit Courses</span>{" "}
        Designed to Address Every Professional Focus
      </p>

      {/* Grid */}
      <div className="mt-16 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {courses.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
