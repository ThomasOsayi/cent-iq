"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { target: 95, label: "Found it easy to understand" },
  { target: 89, label: "Said it helped with class content" },
  { target: 73, label: "Rated it fun or engaging" },
  { target: 53, label: "Used it outside of class" },
];

function AnimatedStat({ target, label, delay }: { target: number; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current || !ref.current) return;
    started.current = true;
    const el = ref.current;
    const duration = 2000;
    const start = performance.now();
    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + "%";
      if (progress < 1) requestAnimationFrame(update);
    };
    setTimeout(() => requestAnimationFrame(update), delay);
  }, [isInView, target, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="relative text-center"
    >
      <div
        ref={ref}
        className="font-serif text-[64px] leading-none tracking-tight mb-2.5"
        style={{
          background: "linear-gradient(180deg, white 0%, rgba(255,255,255,0.8) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        0%
      </div>
      <div className="text-[15px] text-white/65">{label}</div>
    </motion.div>
  );
}

export default function PilotResults() {
  return (
    <section className="section-padding bg-green text-white text-center relative overflow-hidden">
      <div className="absolute -top-[150px] -left-[150px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[200px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)] rounded-full" />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[13px] font-bold tracking-[2px] uppercase text-white/50 mb-4"
        >
          Pilot Results
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-4"
        >
          Real results from Bishop Mora Salesian
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[17px] leading-relaxed text-white/65 max-w-[520px] mx-auto"
        >
          Results from our pilot demonstrate the real-world impact of engaging financial education.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {stats.map((s, i) => (
            <AnimatedStat key={s.target} target={s.target} label={s.label} delay={200 + i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}