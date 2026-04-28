"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const tabs = ["About the Course", "About the Delivery", "Miscellaneous"];

const faqData = {
  "About the Course": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "We offer customized programs across leadership, technology, data, and innovation domains tailored to business needs.",
    },
    {
      q: "What domain specializations are available?",
      a: "Programs cover Gen-AI, Product Innovation, Digital Transformation, Leadership, and more.",
    },
  ],
  "About the Delivery": [
    {
      q: "How are the programs delivered?",
      a: "Through live sessions, workshops, and hands-on real-world projects.",
    },
  ],
  Miscellaneous: [
    {
      q: "Can programs be customized?",
      a: "Yes, all programs are tailored to organizational goals.",
    },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("About the Course");
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ FIX: prevent hydration / mount issues
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked <span className="text-blue-600">Questions</span>
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg border transition ${
                activeTab === tab
                  ? "bg-white text-blue-600 shadow-md"
                  : "bg-transparent text-gray-600 border-gray-300"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* FAQ Box */}
        <div className="mt-10 space-y-4 text-left bg-white p-6 rounded-xl shadow-md">
          <AnimatePresence mode="wait">
            {faqData[activeTab].map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="border-b pb-4"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.q}
                  </span>

                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-2">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105">
            Enquire Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
