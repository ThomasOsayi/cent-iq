"use client";

import { motion } from "motion/react";

const integrations = [
  { icon: "🎓", name: "Google Classroom" },
  { icon: "📐", name: "Canvas" },
];

export default function Integrations() {
  return (
    <section className="section-padding bg-green text-white text-center relative overflow-hidden">
      <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)] rounded-full" />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[13px] font-bold tracking-[2px] uppercase text-white/50 mb-4"
        >
          Integrations
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5"
        >
          Best-in-class LMS connectivity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[17px] leading-relaxed text-white/70 max-w-[560px] mx-auto"
        >
          CentIQ integrates with the tools your school already uses. Single sign-on, automatic grade sync, and rostering make setup effortless.
        </motion.p>

        {/* Logo cards */}
        <div className="flex gap-5 items-center justify-center mt-12 flex-wrap">
          {integrations.map((int, i) => (
            <motion.div
              key={int.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.08, boxShadow: "0 12px 32px rgba(0,0,0,0.15)" }}
              className="w-[72px] h-[72px] bg-white/12 border border-white/15 rounded-[18px] flex items-center justify-center text-[28px] cursor-default relative group"
              style={{ transition: "background 0.3s" }}
            >
              {int.icon}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {int.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Names row */}
        <div className="mt-10 flex gap-6 justify-center flex-wrap text-sm">
          {integrations.map((int, i) => (
            <span key={int.name} className="text-white/80">
              {int.name}{i < integrations.length - 1 && <span className="ml-6 text-white/20">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
