"use client";

import { motion } from "motion/react";

const stats = [
  { value: "95%", label: "Found it easy to understand", icon: "📖" },
  { value: "89%", label: "Said it helped with class content", icon: "💪" },
  { value: "73%", label: "Rated it fun or engaging", icon: "💰" },
  { value: "53%", label: "Used it outside of class", icon: "📈" },
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="section-inner text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          Results
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5"
        >
          What the pilot data shows
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mx-auto"
        >
          Real results from the Bishop Mora Salesian High School pilot program.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(0,0,0,0.06)" }}
              className="bg-white border border-border rounded-[20px] p-8 text-center cursor-default group hover:border-green-light transition-colors duration-300"
            >
              <span className="text-[32px] block mb-4">{stat.icon}</span>
              <div className="font-serif text-[clamp(36px,4vw,48px)] text-green leading-none mb-3">
                {stat.value}
              </div>
              <p className="text-[14px] leading-relaxed text-text-secondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
