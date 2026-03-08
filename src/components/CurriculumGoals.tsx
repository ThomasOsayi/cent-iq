"use client";

import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const topics = [
  { icon: "💰", title: "Saving & Budgeting", detail: "12 of 12 lessons · All standards met", pct: 100, color: "from-green to-green-dark", statusText: "✓", statusColor: "text-green", statusSize: "text-lg", bg: "bg-green-light" },
  { icon: "💳", title: "Credit & Debt", detail: "8 of 10 lessons · 2 remaining", pct: 80, color: "from-orange-accent to-[#C56A30]", statusText: "80%", statusColor: "text-orange-accent", statusSize: "text-sm", bg: "bg-[#E3F2FD]" },
  { icon: "📈", title: "Investing & Growth", detail: "5 of 14 lessons · In progress", pct: 36, color: "from-text-muted to-text-muted", statusText: "36%", statusColor: "text-text-muted", statusSize: "text-sm", bg: "bg-[#FFF3E0]" },
  { icon: "🏠", title: "Taxes & Income", detail: "0 of 8 lessons · Not started", pct: 0, color: "from-border to-border", statusText: "—", statusColor: "text-text-muted", statusSize: "text-sm", bg: "bg-cream" },
  { icon: "🛡️", title: "Consumer Protection", detail: "6 of 6 lessons · All standards met", pct: 100, color: "from-green to-green-dark", statusText: "✓", statusColor: "text-green", statusSize: "text-lg", bg: "bg-[#FCE4EC]" },
  { icon: "🧮", title: "Financial Decision-Making", detail: "3 of 8 lessons · In progress", pct: 38, color: "from-text-muted to-text-muted", statusText: "38%", statusColor: "text-text-muted", statusSize: "text-sm", bg: "bg-[#E8EAF6]" },
];

const checks = [
  "Standards mapping aligned to your state's requirements",
  "Coverage tracking and gap analysis",
  "Suggested lesson plans to fill gaps",
];

export default function CurriculumGoals() {
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
          {/* Content (left) */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Curriculum Coverage
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-[clamp(32px,3.5vw,46px)] leading-[1.12] tracking-tight mb-5"
            >
              Your curriculum goals, on track
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mb-6"
            >
              Map CentIQ lessons to your state&apos;s requirements. Track coverage across all required financial literacy topics and see exactly what&apos;s been taught.
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

          {/* Mockup (right) */}
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
                {/* Overall progress ring */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center bg-cream rounded-card p-5 mb-6"
                >
                  <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" style={{ transform: "rotate(-90deg)" }}>
                    <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-green-light)" strokeWidth="6" />
                    <motion.circle
                      cx="32" cy="32" r="28" fill="none"
                      stroke="var(--color-green)" strokeWidth="6" strokeLinecap="round"
                      strokeDasharray="176"
                      initial={{ strokeDashoffset: 176 }}
                      whileInView={{ strokeDashoffset: 53 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </svg>
                  <div className="font-serif text-[22px] text-green -mt-1">70% Complete</div>
                  <div className="text-[11px] text-text-muted mt-1">4 of 6 required topics started</div>
                </motion.div>

                {/* Topic rows */}
                {topics.map((t, i) => (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4, borderColor: "var(--color-green-light)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                    className="flex items-center gap-3.5 p-4 bg-white rounded-[14px] mb-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-transparent transition-colors"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: -3 }}
                      className={`w-11 h-11 ${t.bg} rounded-[12px] flex items-center justify-center text-[22px] shrink-0`}
                    >
                      {t.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold">{t.title}</div>
                      <div className="text-[11px] text-text-muted">{t.detail}</div>
                      <div className="w-full h-[5px] bg-green-light rounded-full mt-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${t.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full bg-linear-to-r ${t.color}`}
                        />
                      </div>
                    </div>
                    <div className={`${t.statusSize} font-bold ${t.statusColor} shrink-0 min-w-[44px] text-right`}>
                      {t.statusText}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}