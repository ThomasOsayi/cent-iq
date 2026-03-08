"use client";

import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const students = [
  { emoji: "👩‍🎓", name: "Sarah M.", detail: "12 of 14 lessons complete", pct: 95, color: "from-green to-green-dark", bg: "bg-green-light" },
  { emoji: "👨‍🎓", name: "Marcus J.", detail: "10 of 14 lessons complete", pct: 88, color: "from-green to-green-dark", bg: "bg-[#FFF3E0]" },
  { emoji: "👨‍🎓", name: "David R.", detail: "", pct: 52, color: "from-orange-accent to-[#C56A30]", bg: "bg-[#FCE4EC]", warning: true },
];

const checks = [
  "Individual student progress dashboards",
  "Identify students who may need extra support",
  "Share reports with administration",
];

export default function StudentAnalytics() {
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
              Student Analytics
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-[clamp(32px,3.5vw,46px)] leading-[1.12] tracking-tight mb-5"
            >
              Track every student&apos;s progress
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mb-6"
            >
              Know exactly where each student stands. See completion rates, quiz scores, and engagement patterns — then help them before they fall behind.
            </motion.p>
            <ul className="flex flex-col gap-3.5">
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
            <div className="absolute -top-5 -right-5 w-[120px] h-[120px] opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-green) 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }} />

            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="bg-white rounded-[20px] border border-border overflow-hidden will-change-transform"
              whileHover={{ boxShadow: "0 24px 64px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.04)" }}
            >
              <div className="px-5 py-3.5 border-b border-border flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[11px] font-extrabold text-text-muted uppercase tracking-[1.5px]">Student Progress</div>
                  <span className="text-[11px] font-semibold text-green bg-green-light px-2.5 py-1 rounded-full">Period 2</span>
                </div>

                {students.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4, backgroundColor: "rgba(11,138,94,0.02)" }}
                    className="flex items-center justify-between py-4 border-b border-border/50 last:border-none rounded-input px-1"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-9 h-9 ${s.bg} rounded-full flex items-center justify-center text-base`}
                      >
                        {s.emoji}
                      </motion.div>
                      <div>
                        <div className="text-sm font-semibold">{s.name}</div>
                        {s.warning ? (
                          <div className="text-[10px] text-orange-accent font-bold flex items-center gap-1">⚠️ May need attention</div>
                        ) : (
                          <div className="text-[11px] text-text-muted">{s.detail}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[140px] h-[7px] bg-green-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full bg-linear-to-r ${s.color}`}
                        />
                      </div>
                      <span className={`text-xs font-bold w-9 text-right ${s.pct >= 70 ? "text-green" : "text-orange-accent"}`}>
                        {s.pct}%
                      </span>
                    </div>
                  </motion.div>
                ))}

                {/* Class average footer */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="mt-5 p-3.5 px-5 bg-cream rounded-[12px] flex justify-between items-center"
                >
                  <span className="text-xs text-text-muted">Class average</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-[5px] bg-green-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "78%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-green rounded-full"
                      />
                    </div>
                    <span className="text-[13px] font-bold text-green">78%</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}