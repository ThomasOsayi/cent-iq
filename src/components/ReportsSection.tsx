"use client";

import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Calendar } from "lucide-react";

const chartData = [
  { month: "Sep", quiz: 52, completion: 35 },
  { month: "Oct", quiz: 58, completion: 48 },
  { month: "Nov", quiz: 61, completion: 42 },
  { month: "Dec", quiz: 70, completion: 58 },
  { month: "Jan", quiz: 74, completion: 65 },
  { month: "Feb", quiz: 82, completion: 72 },
  { month: "Mar", quiz: 85, completion: 78 },
  { month: "Apr", quiz: 89, completion: 85 },
];

const insights = [
  { icon: "📈", label: "Strongest Topic", value: "Saving & Budgeting", color: "text-green", bg: "bg-green-light" },
  { icon: "⚠️", label: "Needs Focus", value: "Investing & Growth", color: "text-orange-accent", bg: "bg-[#FFF3E0]" },
  { icon: "🏆", label: "Top Student", value: "Sarah M. — 95%", color: "text-text-primary", bg: "bg-green-light" },
];

const checks = [
  "Class performance trends over time",
  "Topic mastery breakdowns",
  "Engagement and time-on-task metrics",
];

export default function ReportsSection() {
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
    <section className="section-padding bg-cream">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Mockup (left) */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-1 relative"
            style={{ perspective: 1000 }}
          >
            <div className="absolute -bottom-5 -left-5 w-[120px] h-[120px] opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-green) 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }} />

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
                {/* Header */}
                <div className="flex justify-between items-center mb-5">
                  <div className="flex gap-1">
                    {["Overview", "By Student", "By Topic"].map((tab, i) => (
                      <span key={tab} className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${i === 0 ? "bg-green text-white" : "bg-cream text-text-muted"}`}>
                        {tab}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-text-muted">
                    <Calendar size={12} />
                    Sep 2025 — Apr 2026
                  </div>
                </div>

                {/* Stat pills */}
                <div className="flex gap-3 mb-5">
                  {[
                    { label: "Avg Score", val: "89%", change: "↑ 7% vs last quarter", color: "text-green", bg: "bg-green-light", ring: 90 },
                    { label: "Completion", val: "73%", change: "↑ 12% vs last quarter", color: "text-orange-accent", bg: "bg-cream-dark", ring: 73 },
                    { label: "Engagement", val: "4.2h", change: "avg per week", color: "text-green-dark", bg: "bg-green-light", ring: 60 },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
                      className={`flex-1 ${s.bg} rounded-[14px] p-4 text-center relative overflow-hidden`}
                    >
                      {/* Mini ring */}
                      <svg className="absolute top-2 right-2 w-5 h-5" viewBox="0 0 24 24" style={{ transform: "rotate(-90deg)" }}>
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-10" />
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" className={s.color}
                          strokeDasharray="63" strokeDashoffset={63 - (63 * s.ring / 100)} strokeLinecap="round" />
                      </svg>
                      <div className="text-[10px] font-bold uppercase tracking-[1.2px] text-text-muted mb-1">{s.label}</div>
                      <div className={`font-serif text-[28px] leading-none ${s.color}`}>{s.val}</div>
                      <div className={`text-[10px] font-semibold mt-1.5 ${s.color}`}>{s.change}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-cream rounded-card p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-[1px] text-text-muted">Class Performance Trend</div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                        <div className="w-2 h-2 rounded-sm bg-green-light" /> Quiz Score
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                        <div className="w-2 h-2 rounded-sm bg-green" /> Completion
                      </div>
                    </div>
                  </div>

                  {/* Y axis + bars */}
                  <div className="flex gap-0">
                    <div className="flex flex-col justify-between pr-2 h-[140px]">
                      {["100", "75", "50", "25", "0"].map((l) => (
                        <span key={l} className="text-[9px] text-text-muted text-right w-6">{l}</span>
                      ))}
                    </div>
                    <div className="flex-1 relative">
                      {/* Gridlines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        {[...Array(5)].map((_, i) => <div key={i} className="h-px bg-black/4" />)}
                      </div>
                      {/* Bars */}
                      <div className="flex items-end gap-2 h-[140px] relative z-1">
                        {chartData.map((d, i) => (
                          <div key={d.month} className="flex-1 flex gap-[3px] items-end">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${d.quiz}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                              whileHover={{ scaleY: 1.05, filter: "brightness(1.1)" }}
                              className="flex-1 bg-green-light rounded-t cursor-default relative group"
                              style={{ originY: 1 }}
                            >
                              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-text-primary text-white text-[9px] font-semibold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {d.quiz}%
                              </div>
                            </motion.div>
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${d.completion}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.45 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                              whileHover={{ scaleY: 1.05, filter: "brightness(1.1)" }}
                              className="flex-1 bg-green rounded-t cursor-default relative group"
                              style={{ originY: 1 }}
                            >
                              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-text-primary text-white text-[9px] font-semibold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {d.completion}%
                              </div>
                            </motion.div>
                          </div>
                        ))}
                      </div>
                      {/* X labels */}
                      <div className="flex mt-2">
                        {chartData.map((d) => (
                          <div key={d.month} className="flex-1 text-center text-[9px] text-text-muted">{d.month}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insights */}
                <div className="flex gap-3 mt-5">
                  {insights.map((ins, i) => (
                    <motion.div
                      key={ins.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
                      className="flex-1 bg-white rounded-[12px] p-3 flex items-center gap-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
                    >
                      <div className={`w-8 h-8 ${ins.bg} rounded-lg flex items-center justify-center text-sm`}>{ins.icon}</div>
                      <div>
                        <div className={`text-[11px] font-semibold ${ins.color}`}>{ins.label}</div>
                        <div className="text-[10px] text-text-muted">{ins.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content (right) */}
          <div className="order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="section-label flex items-center gap-2"
            >
              Reports &amp; Analytics
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-[clamp(32px,3.5vw,46px)] leading-[1.12] tracking-tight mb-5"
            >
              Reports as powerful as they are beautiful
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mb-6"
            >
              Dive into class-wide trends or zoom into individual performance. Custom reports make it easy to share results with administrators and stakeholders.
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
        </div>
      </div>
    </section>
  );
}