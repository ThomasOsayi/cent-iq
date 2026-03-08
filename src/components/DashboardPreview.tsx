"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";

const tabsList = [
  { icon: "📊", label: "Dashboard" },
  { icon: "📚", label: "Lessons" },
  { icon: "👩‍🎓", label: "Students" },
  { icon: "📈", label: "Analytics" },
  { icon: "🏆", label: "Rankings" },
  { icon: "⚙️", label: "Settings" },
];

const AUTO_INTERVAL = 5000;

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval>>(undefined);

  // 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Indicator position
  const updateIndicator = useCallback((index: number) => {
    const tab = tabsRef.current[index];
    if (!tab || !indicatorRef.current) return;
    indicatorRef.current.style.left = `${tab.offsetLeft}px`;
    indicatorRef.current.style.width = `${tab.offsetWidth}px`;
  }, []);

  // Switch tab
  const switchTab = useCallback((index: number, manual = false) => {
    setActiveTab(index);
    setTimerKey((k) => k + 1);
    updateIndicator(index);
    if (manual) {
      clearInterval(autoRef.current);
      autoRef.current = setInterval(() => {
        setActiveTab((prev) => {
          const next = (prev + 1) % tabsList.length;
          setTimerKey((k) => k + 1);
          return next;
        });
      }, AUTO_INTERVAL);
    }
  }, [updateIndicator]);

  // Auto-advance
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const next = (prev + 1) % tabsList.length;
        setTimerKey((k) => k + 1);
        return next;
      });
    }, AUTO_INTERVAL);
    return () => clearInterval(autoRef.current);
  }, []);

  // Update indicator on tab change
  useEffect(() => { updateIndicator(activeTab); }, [activeTab, updateIndicator]);
  useEffect(() => { setTimeout(() => updateIndicator(0), 100); }, [updateIndicator]);

  return (
    <section className="section-padding text-center">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          One platform for everything
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5"
        >
          Your home base for financial literacy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[17px] leading-relaxed text-text-secondary max-w-[600px] mx-auto"
        >
          Manage your classes, track student progress, assign lessons, view analytics, and more — all from one beautiful dashboard built for educators.
        </motion.p>

        {/* 3D Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
          style={{ perspective: 1200 }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="bg-white rounded-[24px] border border-border overflow-hidden will-change-transform"
            whileHover={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)" }}
          >
            {/* Tabs */}
            <div className="flex border-b border-border overflow-x-auto scrollbar-hide relative">
              {tabsList.map((tab, i) => (
                <button
                  key={tab.label}
                  ref={(el) => { tabsRef.current[i] = el; }}
                  onClick={() => switchTab(i, true)}
                  className={`px-7 py-[18px] text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors duration-300 flex items-center gap-2 ${
                    activeTab === i ? "text-green" : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
              <div
                ref={indicatorRef}
                className="absolute bottom-0 h-[3px] rounded-t"
                style={{
                  background: "linear-gradient(90deg, var(--color-green), var(--color-green-dark))",
                  transition: "left 0.4s cubic-bezier(0.22, 1, 0.36, 1), width 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
              <div
                key={timerKey}
                className="absolute bottom-0 h-[3px] bg-green/15 rounded"
                style={{
                  left: indicatorRef.current?.style.left,
                  width: indicatorRef.current?.style.width,
                  animation: `timerFill ${AUTO_INTERVAL}ms linear both`,
                }}
              />
            </div>

            {/* Panels */}
            <div className="p-9 min-h-[340px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === 0 && <DashboardPanel key="dash" />}
                {activeTab === 1 && <LessonsPanel key="lessons" />}
                {activeTab === 2 && <StudentsPanel key="students" />}
                {activeTab === 3 && <AnalyticsPanel key="analytics" />}
                {activeTab === 4 && <RankingsPanel key="rankings" />}
                {activeTab === 5 && <SettingsPanel key="settings" />}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`@keyframes timerFill { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }`}</style>
    </section>
  );
}

/* ═══ PANEL TRANSITION WRAPPER ═══ */
function Panel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ═══ TAB 0: DASHBOARD ═══ */
function DashboardPanel() {
  const stats = [
    { label: "Active Students", target: 247, suffix: "", comma: false, sub: "↑ 12%", subNote: "this month", fill: 78 },
    { label: "Lessons Completed", target: 1832, suffix: "", comma: true, sub: "", subNote: "Across 6 classes", fill: 65 },
    { label: "Avg. Score", target: 89, suffix: "%", comma: false, sub: "↑ 5%", subNote: "from last week", fill: 89 },
  ];

  return (
    <Panel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 0.12} />
        ))}
      </div>
    </Panel>
  );
}

function StatCard({
  label, target, suffix, comma, sub, subNote, fill, delay,
}: {
  label: string; target: number; suffix: string; comma: boolean;
  sub: string; subNote: string; fill: number; delay: number;
}) {
  const valRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const el = valRef.current;
    if (!el) return;
    const duration = 1400;
    const start = performance.now();
    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      let current = Math.round(eased * target);
      el.textContent = (comma ? current.toLocaleString() : String(current)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    setTimeout(() => requestAnimationFrame(update), delay * 1000);
    if (barRef.current) {
      barRef.current.style.width = "0%";
      setTimeout(() => {
        if (barRef.current) barRef.current.style.width = `${fill}%`;
      }, delay * 1000 + 200);
    }
    return () => { started.current = false; };
  }, [target, suffix, comma, fill, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: 4 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, rotateX: 2, rotateY: -1, boxShadow: "0 12px 32px rgba(0,0,0,0.06)" }}
      className="bg-cream rounded-[18px] p-7 text-left relative overflow-hidden cursor-default"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-text-muted mb-3.5">{label}</div>
      <div ref={valRef} className="font-serif text-[44px] leading-none mb-1.5 tracking-tight">0{suffix}</div>
      <div className="text-[13px] text-text-muted flex items-center gap-1">
        {sub && <span className="text-green font-semibold">{sub}</span>}
        {subNote}
      </div>
      <div className="h-[7px] bg-green/10 rounded-full mt-5 overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full relative"
          style={{
            width: "0%",
            background: "linear-gradient(90deg, var(--color-green), var(--color-green-dark))",
            transition: "width 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-linear-to-r from-transparent to-white/35 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}

/* ═══ TAB 1: LESSONS ═══ */
function LessonsPanel() {
  const lessons = [
    { title: "Creating Your First Budget", meta: "Video · 4 min · Quiz included", gradient: "from-green to-green-dark" },
    { title: "Understanding Credit Scores", meta: "Video · 5 min · Quiz included", gradient: "from-orange-accent to-[#C56A30]" },
    { title: "Intro to Compound Interest", meta: "Video · 3 min · Quiz included", gradient: "from-[#3B82F6] to-[#2563EB]" },
    { title: "Taxes & Your First Paycheck", meta: "Video · 6 min · Quiz included", gradient: "from-[#8B5CF6] to-[#7C3AED]" },
  ];

  return (
    <Panel>
      <div className="flex gap-2 mb-5">
        <span className="px-4 py-1.5 bg-green text-white rounded-full text-xs font-semibold">All Topics</span>
        <span className="px-4 py-1.5 bg-green-light text-green-dark rounded-full text-xs font-semibold">Budgeting</span>
        <span className="px-4 py-1.5 bg-cream rounded-full text-xs font-semibold text-text-muted">Credit</span>
        <span className="px-4 py-1.5 bg-cream rounded-full text-xs font-semibold text-text-muted">Investing</span>
      </div>
      {lessons.map((l, i) => (
        <motion.div
          key={l.title}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ x: 4, backgroundColor: "rgba(11,138,94,0.02)" }}
          className="flex items-center gap-3.5 py-3.5 border-b border-border/50 last:border-none rounded-input px-1"
        >
          <div className={`w-11 h-11 rounded-[12px] shrink-0 bg-linear-to-br ${l.gradient}`} />
          <div className="text-left flex-1">
            <div className="text-sm font-semibold">{l.title}</div>
            <div className="text-[11px] text-text-muted">{l.meta}</div>
          </div>
          <span className="text-[12px] text-green font-bold whitespace-nowrap">Assign →</span>
        </motion.div>
      ))}
    </Panel>
  );
}

/* ═══ TAB 2: STUDENTS ═══ */
function StudentsPanel() {
  const students = [
    { emoji: "👩‍🎓", name: "Sarah M.", detail: "Lesson 12 · Budgeting", score: "95%", color: "text-green", bg: "bg-green-light" },
    { emoji: "👨‍🎓", name: "Marcus J.", detail: "Lesson 10 · Saving", score: "88%", color: "text-green", bg: "bg-[#FFF3E0]" },
    { emoji: "👩‍🎓", name: "Emily K.", detail: "Lesson 14 · Credit", score: "92%", color: "text-green", bg: "bg-[#E3F2FD]" },
    { emoji: "👨‍🎓", name: "David R.", detail: "Lesson 6 · Investing", score: "52%", color: "text-orange-accent", bg: "bg-[#FCE4EC]", warning: true },
  ];

  return (
    <Panel>
      <div className="flex justify-between items-center mb-4">
        <div className="text-[13px] font-bold uppercase tracking-[1px] text-text-muted text-left">Period 2 — Economics</div>
        <div className="text-xs text-green font-semibold">28 students</div>
      </div>
      {students.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ x: 4 }}
          className="flex items-center justify-between py-3.5 border-b border-border/50 last:border-none px-1 rounded-input"
        >
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 ${s.bg} rounded-full flex items-center justify-center text-base`}>{s.emoji}</div>
            <div className="text-left">
              <div className="text-sm font-semibold">{s.name}</div>
              <div className="text-[11px] text-text-muted">{s.detail}</div>
            </div>
          </div>
          <div className={`text-sm font-bold ${s.color}`}>
            {s.score} {s.warning && "⚠️"}
          </div>
        </motion.div>
      ))}
    </Panel>
  );
}

/* ═══ TAB 3: ANALYTICS ═══ */
function AnalyticsPanel() {
  const bars = [35, 48, 42, 58, 52, 72, 68, 88];
  const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];

  return (
    <Panel>
      <div className="flex gap-4 mb-7">
        {[
          { label: "Avg Score", val: "89%", color: "text-green" },
          { label: "Completion", val: "73%", color: "text-orange-accent" },
          { label: "Engagement", val: "4.2h", color: "text-green-dark" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex-1 bg-cream rounded-[14px] p-5 text-center"
          >
            <div className="text-[11px] uppercase tracking-[1px] text-text-muted mb-1.5">{m.label}</div>
            <div className={`font-serif text-4xl ${m.color}`}>{m.val}</div>
          </motion.div>
        ))}
      </div>
      <div className="bg-cream rounded-[14px] p-6">
        <div className="text-[12px] font-bold uppercase tracking-[1px] text-text-muted mb-4 text-left">Class Performance Trend</div>
        <div className="flex items-end gap-[6px] h-[100px]">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scaleY: 1.08, filter: "brightness(1.1)" }}
              className={`flex-1 rounded-t relative group cursor-default ${i >= 5 ? "bg-green" : "bg-green-light"}`}
              style={{ originY: 1 }}
            >
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                {months[i]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* ═══ TAB 4: RANKINGS ═══ */
function RankingsPanel() {
  const ranks = [
    { rank: 1, name: "Sarah M.", badge: "🥇", score: "2,450 pts", cls: "bg-linear-to-r from-[#FFD700] to-[#FFA500] text-white" },
    { rank: 2, name: "Emily K.", badge: "🥈", score: "2,310 pts", cls: "bg-linear-to-r from-[#C0C0C0] to-[#A0A0A0] text-white" },
    { rank: 3, name: "Marcus J.", badge: "🥉", score: "2,180 pts", cls: "bg-linear-to-r from-[#CD7F32] to-[#A0522D] text-white" },
    { rank: 4, name: "Alex T.", badge: "", score: "1,950 pts", cls: "bg-cream text-text-muted" },
    { rank: 5, name: "Jordan L.", badge: "", score: "1,820 pts", cls: "bg-cream text-text-muted" },
  ];

  return (
    <Panel>
      <div className="text-[13px] font-bold uppercase tracking-[1px] text-text-muted mb-4 text-left">Period 2 — Economics Leaderboard</div>
      {ranks.map((r, i) => (
        <motion.div
          key={r.rank}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ x: 6, backgroundColor: "var(--color-green-light)" }}
          className="flex items-center gap-3.5 py-3 px-4 rounded-[12px] mb-1.5 transition-colors"
        >
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-extrabold ${r.cls}`}>
            {r.rank}
          </div>
          <div className="text-sm font-semibold flex-1 text-left">{r.name}</div>
          {r.badge && <span className="text-base">{r.badge}</span>}
          <div className={`text-sm font-bold ${r.rank <= 3 ? "text-green" : "text-text-muted"}`}>{r.score}</div>
        </motion.div>
      ))}
    </Panel>
  );
}

/* ═══ TAB 5: SETTINGS ═══ */
function SettingsPanel() {
  const [toggles, setToggles] = useState([true, true, false]);

  return (
    <Panel>
      <div className="text-[13px] font-bold uppercase tracking-[1px] text-text-muted mb-5 text-left">Class Settings</div>
      <div className="flex flex-col gap-4">
        {[
          { title: "Notifications", desc: "Email alerts for student milestones" },
          { title: "Leaderboard Visibility", desc: "Show rankings to students" },
          { title: "Auto-Assign Quizzes", desc: "Automatically assign quizzes after lessons" },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center justify-between p-4 px-5 bg-cream rounded-[12px]"
          >
            <div className="text-left">
              <div className="text-sm font-semibold">{s.title}</div>
              <div className="text-xs text-text-muted">{s.desc}</div>
            </div>
            <motion.div
              onClick={() => setToggles((prev) => prev.map((v, j) => (j === i ? !v : v)))}
              className={`w-11 h-6 rounded-full relative cursor-pointer ${toggles[i] ? "bg-green" : "bg-border"}`}
              animate={{ backgroundColor: toggles[i] ? "var(--color-green)" : "var(--color-border)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
                animate={{ left: toggles[i] ? "calc(100% - 22px)" : "2px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Panel>
  );
}