"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function BottomCTA() {
  return (
    <section className="bg-green text-white text-center py-[100px] px-10 relative overflow-hidden">
      <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)] rounded-full" />

      {/* Animated shine sweep */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.06)_50%,rgba(255,255,255,0.03)_55%,transparent_60%)] animate-[ctaShine_6s_ease-in-out_infinite] pointer-events-none" />

      <div className="max-w-[640px] mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[clamp(32px,4vw,46px)] leading-[1.15] tracking-tight mb-5"
        >
          Ready to bring financial literacy to your community?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[17px] leading-relaxed opacity-85 mb-9"
        >
          Join schools and institutions across the country in empowering the next generation with essential money skills.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3.5 justify-center flex-wrap"
        >
          <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <Link href="#demo" className="inline-flex items-center gap-2 bg-white text-green-dark px-8 py-3.5 rounded-pill text-base font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              Book a Demo
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <Link href="#" className="inline-flex items-center gap-2 border-[1.5px] border-white/35 text-white px-8 py-3.5 rounded-pill text-base font-semibold hover:border-white hover:bg-white/8 transition-all duration-300">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <style>{`@keyframes ctaShine { 0%,100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }`}</style>
    </section>
  );
}