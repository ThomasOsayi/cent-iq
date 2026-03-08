"use client";

import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const checks = [
  "Web app for teachers and administrators",
  "Mobile app for students",
  "Progress syncs across all devices",
];

export default function MultiDevice() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const phoneY = useTransform(springY, [-0.5, 0.5], [8, -8]);

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
          {/* Phone Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="order-1 lg:order-1 bg-linear-to-br from-green to-green-dark rounded-[24px] p-12 flex items-center justify-center min-h-[540px] relative overflow-hidden"
          >
            {/* Dot grid pattern */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="absolute top-6 left-5 z-10 bg-white/92 backdrop-blur-sm rounded-[12px] px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-2 text-xs font-semibold border border-white/50"
            >
              <span className="text-base">💻</span> Web App
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="absolute top-6 right-5 z-10 bg-white/92 backdrop-blur-sm rounded-[12px] px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-2 text-xs font-semibold border border-white/50"
            >
              <span className="text-base">📱</span> iOS & Android
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-white/92 backdrop-blur-sm rounded-[12px] px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-2 text-xs font-semibold border border-white/50"
            >
              <span className="text-base">🔄</span> Real-time sync
            </motion.div>

            {/* Phone */}
            <motion.div
              style={{ rotateX, rotateY, y: phoneY, transformStyle: "preserve-3d" }}
              className="w-[280px] bg-white rounded-[44px] border-8 border-[#1a1a1a] overflow-hidden relative z-2 will-change-transform"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Notch */}
              <div className="w-[100px] h-[28px] bg-[#1a1a1a] rounded-b-[18px] mx-auto relative">
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[44px] h-[6px] bg-[#2a2a2a] rounded-full" />
              </div>

              <div className="bg-linear-to-b from-green-light via-white to-cream">
                {/* Status bar */}
                <div className="flex justify-between items-center px-5 py-2 text-[10px] font-semibold text-text-muted">
                  <span>9:41</span>
                  <span className="flex items-center gap-1 text-[8px]">●●●● WiFi 🔋</span>
                </div>

                {/* App header */}
                <div className="text-center py-2 pb-3">
                  <div className="font-serif text-lg text-green">CentIQ</div>
                  <div className="text-[10px] text-text-muted">Welcome back, Sarah! 👋</div>
                </div>

                {/* Streak */}
                <div className="mx-4 mb-2.5 bg-linear-to-br from-green to-green-dark rounded-card p-4 text-white flex items-center gap-3">
                  <span className="text-[28px]">🔥</span>
                  <div>
                    <div className="text-base font-bold">7 Day Streak!</div>
                    <div className="text-[10px] opacity-75">Complete today&apos;s lesson to keep going</div>
                  </div>
                </div>

                {/* Current lesson */}
                <div className="mx-4 mb-2.5 bg-white rounded-card p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/3">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted">Continue Learning</span>
                    <span className="text-[10px] font-semibold text-green">72%</span>
                  </div>
                  <div className="text-sm font-bold mb-1">Saving &amp; Budgeting</div>
                  <div className="text-[11px] text-text-muted mb-2.5">Lesson 8 of 12 · 4 min video</div>
                  <div className="h-[5px] bg-green-light rounded-full overflow-hidden">
                    <div className="w-[72%] h-full bg-linear-to-r from-green to-green-dark rounded-full" />
                  </div>
                </div>

                {/* Quick stats */}
                <div className="flex gap-2 mx-4 mb-2.5">
                  {[
                    { val: "🏆 #3", label: "Class Rank", bg: "bg-green-light", color: "text-green" },
                    { val: "94%", label: "Quiz Avg", bg: "bg-cream", color: "text-orange-accent" },
                    { val: "12", label: "Badges", bg: "bg-green-light", color: "text-green" },
                  ].map((s) => (
                    <div key={s.label} className={`flex-1 ${s.bg} rounded-[12px] p-3 text-center`}>
                      <div className={`font-serif text-lg ${s.color}`}>{s.val}</div>
                      <div className="text-[9px] text-text-muted mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Activity items */}
                {[
                  { icon: "✅", bg: "bg-green-light", title: "Quiz: Credit Basics", sub: "Scored 94% · 2 min ago" },
                  { icon: "⭐", bg: "bg-[#FFF3E0]", title: "New Badge: Quick Learner", sub: "Completed 5 lessons this week" },
                ].map((a) => (
                  <div key={a.title} className="mx-4 mb-2 bg-white rounded-[12px] p-3 shadow-[0_1px_6px_rgba(0,0,0,0.03)] flex items-center gap-2.5 border border-black/2">
                    <div className={`w-8 h-8 ${a.bg} rounded-lg flex items-center justify-center text-sm shrink-0`}>{a.icon}</div>
                    <div>
                      <div className="text-[11px] font-semibold">{a.title}</div>
                      <div className="text-[9px] text-text-muted">{a.sub}</div>
                    </div>
                  </div>
                ))}

                {/* Tab bar */}
                <div className="flex justify-around px-4 py-2.5 pb-5 border-t border-black/4 bg-white mt-1">
                  {[
                    { icon: "🏠", label: "Home", active: true },
                    { icon: "📚", label: "Learn", active: false },
                    { icon: "🏆", label: "Rank", active: false },
                    { icon: "👤", label: "Profile", active: false },
                  ].map((tab) => (
                    <div key={tab.label} className={`flex flex-col items-center gap-1 text-[9px] ${tab.active ? "text-green" : "text-text-muted"}`}>
                      <span className="text-xs">{tab.icon}</span>
                      {tab.label}
                    </div>
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
              className="section-label flex items-center gap-2 flex-wrap"
            >
              Multi-Platform
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-[clamp(32px,3.5vw,46px)] leading-[1.12] tracking-tight mb-5"
            >
              On every device, always in sync
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mb-6"
            >
              Students learn on their phones. Teachers manage from their desktops. CentIQ works seamlessly across web, iOS, and Android — with everything synced in real time.
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