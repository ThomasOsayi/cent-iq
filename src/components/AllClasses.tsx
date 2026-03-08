"use client";

import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const classes = [
  { icon: "📗", name: "Period 2 — Economics", detail: "28 students · Budgeting unit", score: "92%", scoreColor: "text-green", bg: "bg-green-light" },
  { icon: "📙", name: "Period 3 — Personal Finance", detail: "32 students · Credit unit", score: "87%", scoreColor: "text-green", bg: "bg-[#FFF3E0]" },
  { icon: "📘", name: "Period 5 — Financial Lit", detail: "24 students · Investing unit", score: "78%", scoreColor: "text-orange-accent", bg: "bg-[#E3F2FD]" },
];

const checks = [
  "Multi-class management with period-level detail",
  "Easily assign lessons to any class",
  "At-a-glance student performance",
];

export default function AllClasses() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section className="section-padding">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Class Management
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-[clamp(32px,3.5vw,46px)] leading-[1.12] tracking-tight mb-5"
            >
              All your classes, in one place
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mb-6"
            >
              Manage multiple classes, periods, and grade levels from a single dashboard. Assign lessons, track progress, and identify students who need support.
            </motion.p>
            <ul className="flex flex-col gap-3.5 mb-8">
              {checks.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 text-[15px] text-text-secondary font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-green-light flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 stroke-green" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            {/* Decorative dots */}
            <div className="absolute -top-5 -right-5 w-[120px] h-[120px] opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-green) 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }} />

            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="bg-white rounded-[20px] border border-border overflow-hidden will-change-transform relative"
              whileHover={{ boxShadow: "0 24px 64px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.04)" }}
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-green to-green-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="px-5 py-3.5 border-b border-border flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
              </div>
              <div className="p-6">
                <div className="text-[11px] font-extrabold text-text-muted uppercase tracking-[1.5px] mb-4">My Classes</div>
                {classes.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4, backgroundColor: "rgba(11,138,94,0.02)" }}
                    className="flex items-center justify-between py-4 border-b border-border/50 last:border-none rounded-input px-1"
                  >
                    <div className="flex items-center gap-3.5">
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: -3 }}
                        className={`w-10 h-10 ${c.bg} rounded-[12px] flex items-center justify-center text-base`}
                      >
                        {c.icon}
                      </motion.div>
                      <div>
                        <div className="text-sm font-semibold">{c.name}</div>
                        <div className="text-xs text-text-muted">{c.detail}</div>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`text-[15px] font-bold ${c.scoreColor}`}
                    >
                      {c.score}
                    </motion.div>
                  </motion.div>
                ))}

                {/* Add class button */}
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "var(--color-green)", color: "white", borderStyle: "solid" }}
                  className="w-full mt-4 py-2.5 rounded-[12px] bg-green-light text-green-dark border-[1.5px] border-dashed border-green text-[13px] font-semibold cursor-pointer"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  + Add New Class
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}