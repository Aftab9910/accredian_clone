"use client";

import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    { Icon: FaFacebook, link: "#" },
    { Icon: FaLinkedin, link: "#" },
    { Icon: FaTwitter, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaYoutube, link: "#" },
  ];

  return (
    <footer className="bg-gray-100 py-16 text-gray-700">
      <div className="max-w-5xl mx-auto px-6">
        {/* TOP SECTION */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600">accredian</h2>
            <p className="text-sm text-gray-500">credentials that matter</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {socialIcons.map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="cursor-pointer text-gray-600 hover:text-blue-600 transition"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition">
              Enquire Now
            </button>
            <p className="mt-3 text-gray-600">Speak with our Advisor</p>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <hr className="my-10 border-gray-300" />

        {/* MIDDLE SECTION */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT LINKS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="font-semibold text-lg mb-4 text-black">Accredian</h3>

            <ul className="space-y-3">
              {["About", "Blog", "Why Accredian"].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-blue-600 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT CONTACT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="font-semibold text-lg mb-4 text-black">
              Contact Us
            </h3>

            <p>
              Email us:{" "}
              <span className="text-blue-600">enterprise@accredian.com</span>
            </p>

            <p className="mt-3">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <hr className="my-10 border-gray-300" />

        {/* BOTTOM TEXT */}
        <motion.p
          className="text-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </motion.p>
      </div>
    </footer>
  );
}
