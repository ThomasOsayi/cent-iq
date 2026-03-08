"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ForSchoolsPage() {
  return (
    <main>
      <SchoolsHero />
      <DashboardRow />
      <LessonRow />
      <StudentRow />
      <CollabSection />
      <PilotResultsBar />
      <FeaturesGrid />
      <CurriculumSection />
      <PilotForm />
      <SchoolsCTA />
      <Footer />
    </main>
  );
}

/* ═══ REUSABLE: 3D Tilt Mockup ═══ */
function TiltMockup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 25 });
  const sy = useSpring(my, { stiffness: 200, damping: 25 });
  const rx = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const ry = useTransform(sx, [-0.5, 0.5], [-5, 5]);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }, [mx, my]);
  const onLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={`bg-white rounded-[20px] border border-border overflow-hidden will-change-transform ${className}`}
      whileHover={{ boxShadow: "0 24px 64px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.04)" }}
    >
      <div className="px-5 py-3.5 border-b border-border flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  );
}

/* Reusable checklist item */
function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-base text-text-secondary leading-relaxed">
      <div className="w-6 h-6 rounded-full bg-green-light flex items-center justify-center shrink-0 mt-0.5">
        <svg className="w-3.5 h-3.5 stroke-green" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      {children}
    </li>
  );
}

/* ═══ HERO — Full-bleed lifestyle image (Monarch-style) ═══ */
function SchoolsHero() {
  return (
    <section className="relative w-full h-[clamp(420px,60vh,580px)] flex items-end overflow-hidden -mt-[76px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1800&q=85')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 section-inner w-full pb-16 pt-32 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green/85 backdrop-blur-sm px-5 py-2 rounded-full text-[13px] font-semibold mb-5"
        >
          🏫 For Schools
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(36px,5vw,56px)] leading-[1.08] max-w-[600px] mb-4"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
        >
          The complete financial literacy solution for schools
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-relaxed max-w-[480px] opacity-90 mb-8"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.15)" }}
        >
          400+ short-form video lessons aligned to state and national standards. Engage students in a format they love.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-3.5 flex-wrap"
        >
          <Link href="#pilot-form" className="inline-flex items-center gap-2 bg-green text-white px-8 py-3.5 rounded-pill text-base font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,138,94,0.3)] transition-all duration-300">
            Request a Pilot
          </Link>
          <Link href="#features" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border-[1.5px] border-white/30 text-white px-8 py-3.5 rounded-pill text-base font-semibold hover:bg-white/25 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300">
            See Features
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ ROW 1: Teacher Dashboard (text left, mockup right) ═══ */
function DashboardRow() {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-serif text-[clamp(30px,3.5vw,44px)] leading-[1.12] tracking-tight mb-6"
            >
              Your entire classroom in a single dashboard
            </motion.h2>
            <ul className="flex flex-col gap-4">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Check>Monitor student progress in real-time, assign specific lessons, and identify students who need extra support.</Check>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <Check>Motivate students with class and school-wide leaderboards that celebrate progress and consistency.</Check>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <Check>Content aligned with state standards and JumpStart financial literacy requirements.</Check>
              </motion.div>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <div className="absolute -top-5 -right-5 w-[120px] h-[120px] opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-green) 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }} />
            <TiltMockup>
              <div className="flex justify-between items-center mb-4">
                <div className="text-[11px] font-extrabold text-text-muted uppercase tracking-[1.5px]">My Classes</div>
                <div className="text-[11px] text-green font-semibold">3 active</div>
              </div>
              {[
                { icon: "📗", name: "Period 2 — Economics", detail: "28 students · Budgeting unit", score: "92%", scoreColor: "text-green", bg: "bg-green-light" },
                { icon: "📙", name: "Period 3 — Personal Finance", detail: "32 students · Credit unit", score: "87%", scoreColor: "text-green", bg: "bg-[#FFF3E0]" },
                { icon: "📘", name: "Period 5 — Financial Lit", detail: "24 students · Investing unit", score: "78%", scoreColor: "text-orange-accent", bg: "bg-[#E3F2FD]" },
              ].map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4, backgroundColor: "rgba(11,138,94,0.02)" }}
                  className="flex items-center justify-between py-4 border-b border-border/50 last:border-none rounded-input px-1"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 ${c.bg} rounded-[12px] flex items-center justify-center text-base`}>{c.icon}</div>
                    <div>
                      <div className="text-sm font-semibold">{c.name}</div>
                      <div className="text-xs text-text-muted">{c.detail}</div>
                    </div>
                  </div>
                  <div className={`text-[15px] font-bold ${c.scoreColor}`}>{c.score}</div>
                </motion.div>
              ))}
            </TiltMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══ ROW 2: Lesson Library (mockup left, text right — reversed) ═══ */
function LessonRow() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Mockup left */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 relative"
            style={{ perspective: 1000 }}
          >
            <div className="absolute -bottom-5 -left-5 w-[120px] h-[120px] opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-green) 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }} />
            <TiltMockup>
              <div className="flex gap-2 mb-4">
                <span className="px-4 py-1.5 bg-green text-white rounded-full text-xs font-semibold">All Topics</span>
                <span className="px-4 py-1.5 bg-green-light text-green-dark rounded-full text-xs font-semibold">Budgeting</span>
                <span className="px-4 py-1.5 bg-cream rounded-full text-xs font-semibold text-text-muted">Credit</span>
              </div>
              {[
                { title: "Creating Your First Budget", meta: "Video · 4 min · Quiz included", gradient: "from-green to-green-dark" },
                { title: "Understanding Credit Scores", meta: "Video · 5 min · Quiz included", gradient: "from-orange-accent to-[#C56A30]" },
                { title: "Intro to Compound Interest", meta: "Video · 3 min · Quiz included", gradient: "from-[#3B82F6] to-[#2563EB]" },
              ].map((l, i) => (
                <motion.div
                  key={l.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4, backgroundColor: "rgba(11,138,94,0.02)" }}
                  className="flex items-center gap-3.5 py-3.5 border-b border-border/50 last:border-none rounded-input px-1"
                >
                  <div className={`w-11 h-11 rounded-[12px] shrink-0 bg-linear-to-br ${l.gradient}`} />
                  <div className="flex-1 text-left">
                    <div className="text-sm font-semibold">{l.title}</div>
                    <div className="text-[11px] text-text-muted">{l.meta}</div>
                  </div>
                  <span className="text-[12px] text-green font-bold whitespace-nowrap">Assign →</span>
                </motion.div>
              ))}
            </TiltMockup>
          </motion.div>

          {/* Content right */}
          <div className="order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-serif text-[clamp(30px,3.5vw,44px)] leading-[1.12] tracking-tight mb-5"
            >
              400+ lessons, organized and searchable
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mb-6"
            >
              Browse standards-aligned lessons organized by topic, grade level, and state standards. Filter, search, and assign in seconds.
            </motion.p>
            <ul className="flex flex-col gap-3.5">
              {["Covers budgeting, credit, investing, taxes, and more", "Mapped to JumpStart and state standards", "Quizzes included with each lesson"].map((t, i) => (
                <motion.div key={t} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }}>
                  <Check>{t}</Check>
                </motion.div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ ROW 3: Student Progress (text left, mockup right) ═══ */
function StudentRow() {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-serif text-[clamp(30px,3.5vw,44px)] leading-[1.12] tracking-tight mb-6"
            >
              Track every student&apos;s progress
            </motion.h2>
            <ul className="flex flex-col gap-4">
              {[
                "See completion rates, quiz scores, and engagement patterns — then help students before they fall behind.",
                "Individual student progress dashboards with real-time updates.",
                "Share reports with administration and stakeholders.",
              ].map((t, i) => (
                <motion.div key={t} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}>
                  <Check>{t}</Check>
                </motion.div>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <TiltMockup>
              <div className="flex justify-between items-center mb-4">
                <div className="text-[11px] font-extrabold text-text-muted uppercase tracking-[1.5px]">Student Progress</div>
                <span className="text-[11px] font-semibold text-green bg-green-light px-2.5 py-1 rounded-full">Period 2</span>
              </div>
              {[
                { emoji: "👩‍🎓", name: "Sarah M.", detail: "12 of 14 lessons", pct: 95, color: "from-green to-green-dark", pctColor: "text-green", bg: "bg-green-light" },
                { emoji: "👨‍🎓", name: "Marcus J.", detail: "10 of 14 lessons", pct: 88, color: "from-green to-green-dark", pctColor: "text-green", bg: "bg-[#FFF3E0]" },
                { emoji: "👨‍🎓", name: "David R.", detail: "", pct: 52, color: "from-orange-accent to-[#C56A30]", pctColor: "text-orange-accent", bg: "bg-[#FCE4EC]", warning: true },
              ].map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4, backgroundColor: "rgba(11,138,94,0.02)" }}
                  className="flex items-center justify-between py-4 border-b border-border/50 last:border-none rounded-input px-1"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 ${s.bg} rounded-full flex items-center justify-center text-base`}>{s.emoji}</div>
                    <div>
                      <div className="text-sm font-semibold">{s.name}</div>
                      {s.warning ? (
                        <div className="text-[10px] text-orange-accent font-bold">⚠️ May need attention</div>
                      ) : (
                        <div className="text-[11px] text-text-muted">{s.detail}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-[120px] h-[7px] bg-green-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full rounded-full bg-linear-to-r ${s.color}`}
                      />
                    </div>
                    <span className={`text-xs font-bold w-9 text-right ${s.pctColor}`}>{s.pct}%</span>
                  </div>
                </motion.div>
              ))}
            </TiltMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══ COLLAB SECTION (Monarch: lifestyle image + text in card) ═══ */
function CollabSection() {
  return (
    <div className="section-inner px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 lg:grid-cols-2 rounded-[24px] overflow-hidden my-20"
      >
        <div
          className="min-h-[320px] lg:min-h-[420px] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=85')" }}
        />
        <div className="bg-cream p-16 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-[clamp(28px,3vw,38px)] leading-[1.15] mb-5"
          >
            Engage students in a format they already love
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base leading-relaxed text-text-secondary mb-7"
          >
            Short-form video lessons, gamified challenges, and live group activities — delivered through the same swipe-based experience students use every day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link href="#pilot-form" className="inline-flex items-center gap-2 bg-green text-white px-7 py-3 rounded-pill text-[15px] font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,138,94,0.3)] transition-all duration-300">
              Request a Pilot
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══ PILOT RESULTS BAR (green full-bleed) ═══ */
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
      className="text-center relative"
    >
      <div
        ref={ref}
        className="font-serif text-[52px] leading-none tracking-tight mb-2.5"
        style={{ background: "linear-gradient(180deg, white 0%, rgba(255,255,255,0.8) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        0%
      </div>
      <div className="text-[14px] text-white/60">{label}</div>
    </motion.div>
  );
}

function PilotResultsBar() {
  return (
    <section className="section-padding bg-green text-white text-center relative overflow-hidden">
      <div className="absolute -top-[150px] -left-[150px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[200px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)] rounded-full" />
      <div className="section-inner relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[13px] font-bold tracking-[2px] uppercase text-white/50 mb-4">Pilot Results</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-4">
          Real results from Bishop Mora Salesian
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[17px] text-white/65 max-w-[480px] mx-auto">
          Results from our pilot demonstrate the real-world impact of engaging financial education.
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          <AnimatedStat target={95} label="Found it easy to understand" delay={200} />
          <AnimatedStat target={89} label="Said it helped with class content" delay={350} />
          <AnimatedStat target={73} label="Rated it fun or engaging" delay={500} />
          <AnimatedStat target={53} label="Used it outside of class" delay={650} />
        </div>
      </div>
    </section>
  );
}

/* ═══ FEATURES GRID ═══ */
const features = [
  { icon: "📊", title: "Teacher Dashboard", desc: "Monitor student progress in real-time, assign specific lessons, and identify students who need extra support." },
  { icon: "🏆", title: "Class Rankings", desc: "Motivate students with class and school-wide leaderboards that celebrate progress and consistency." },
  { icon: "📚", title: "Curriculum Aligned", desc: "Content aligned with state standards and JumpStart financial literacy requirements." },
  { icon: "👥", title: "Group Activities", desc: "Facilitate class discussions with live game modes and collaborative challenges." },
  { icon: "🔗", title: "Easy Integration", desc: "Works with Google Classroom, Canvas, and other LMS platforms. Single sign-on available." },
  { icon: "📹", title: "Short-Form Videos", desc: "Bite-sized video lessons in a vertical format students already use and love." },
];

function FeatureTiltCard({ feature, index }: { feature: typeof features[number]; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 250, damping: 25 });
  const sy = useSpring(my, { stiffness: 250, damping: 25 });
  const rx = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const ry = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); }, [mx, my]);
  const onLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      whileHover={{ borderColor: "var(--color-green)", boxShadow: "0 20px 48px rgba(11,138,94,0.08)" }}
      className="bg-white border border-border rounded-[20px] p-9 relative overflow-hidden cursor-default group will-change-transform"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-green to-green-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }} />
      <motion.div whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="w-[52px] h-[52px] bg-green-light rounded-[14px] flex items-center justify-center text-2xl mb-5">{feature.icon}</motion.div>
      <h3 className="font-serif text-xl mb-2.5 tracking-tight group-hover:text-green-dark transition-colors duration-300">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{feature.desc}</p>
    </motion.div>
  );
}

function FeaturesGrid() {
  return (
    <section id="features" className="section-padding bg-cream text-center">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-label">Features</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-tight">
          Everything you need to teach financial literacy
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14" style={{ perspective: "1200px" }}>
          {features.map((f, i) => <FeatureTiltCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ═══ CURRICULUM ═══ */
const topics = ["Saving and budgeting fundamentals", "Credit, debt, and interest", "Investing and compound growth", "Taxes and income", "Consumer protection", "Financial decision-making"];
const timeline = [
  { week: "Week 1", desc: "Teacher onboarding and account setup", accent: true },
  { week: "Week 2", desc: "Student registration and orientation", accent: true },
  { week: "Week 3+", desc: "Regular lessons integrated into curriculum", accent: true },
  { week: "Ongoing", desc: "Progress monitoring and support", accent: false },
];

function CurriculumSection() {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-label">Curriculum</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-[clamp(32px,3.5vw,46px)] leading-[1.12] tracking-tight mb-5">
              Standards-aligned content that fits your requirements
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mb-6">
              Our curriculum covers all essential financial literacy topics and is designed to meet state requirements and national standards.
            </motion.p>
            <ul className="flex flex-col gap-3.5">
              {topics.map((t, i) => (
                <motion.div key={t} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06 }}>
                  <Check>{t}</Check>
                </motion.div>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 4 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cream rounded-[20px] p-9 border border-border"
          >
            <h3 className="font-serif text-[22px] mb-6">Implementation Timeline</h3>
            {timeline.map((t, i) => (
              <motion.div key={t.week} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }} className="grid grid-cols-[80px_1fr] gap-4 py-[18px] border-b border-border last:border-none">
                <span className={`text-[13px] font-bold px-3 py-1 rounded-lg text-center self-start ${t.accent ? "bg-green-light text-green" : "bg-cream-dark text-text-secondary"}`}>{t.week}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{t.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══ PILOT FORM ═══ */
function PilotForm() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 20 });
  const sy = useSpring(my, { stiffness: 150, damping: 20 });
  const rx = useTransform(sy, [-0.5, 0.5], [2, -2]);
  const ry = useTransform(sx, [-0.5, 0.5], [-2, 2]);
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); }, [mx, my]);
  const onLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);
  const inputClass = "w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-[12px] text-[15px] bg-warm-white outline-none focus:border-green focus:shadow-[0_0_0_4px_rgba(11,138,94,0.08)] focus:bg-white transition-all";

  return (
    <section id="pilot-form" className="section-padding bg-cream text-center">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-label">Get Started</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-tight mb-5">Request a pilot for your school</motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mx-auto">
          Fill out the form below and we&apos;ll reach out to schedule a demo and discuss how CentIQ can work for your students.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 4 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={onMove} onMouseLeave={onLeave}
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 800 }}
          className="max-w-[540px] mx-auto mt-12 bg-white border border-border rounded-[24px] p-11 text-left shadow-[0_8px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_56px_rgba(0,0,0,0.06)] transition-shadow duration-300 will-change-transform"
        >
          {[
            { label: "Your Name", type: "text", placeholder: "John Smith", required: true },
            { label: "Email Address", type: "email", placeholder: "john@school.edu", required: true },
            { label: "School Name", type: "text", placeholder: "Lincoln High School", required: true },
          ].map((f, i) => (
            <div key={f.label} className="mb-5">
              <label className="block text-sm font-semibold mb-2">{f.label} {f.required && <span className="text-orange-accent">*</span>}</label>
              <input type={f.type} placeholder={f.placeholder} className={inputClass} />
            </div>
          ))}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">Your Role <span className="text-orange-accent">*</span></label>
            <select className={`${inputClass} appearance-none cursor-pointer`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A8A8A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
              <option value="">Select your role</option>
              <option>Teacher</option>
              <option>Administrator</option>
              <option>Curriculum Director</option>
              <option>Other</option>
            </select>
          </div>
          {[
            { label: "Grade Levels", placeholder: "e.g., 9-12" },
            { label: "Approximate Student Count", placeholder: "e.g., 500" },
          ].map((f) => (
            <div key={f.label} className="mb-5">
              <label className="block text-sm font-semibold mb-2">{f.label}</label>
              <input type="text" placeholder={f.placeholder} className={inputClass} />
            </div>
          ))}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">Anything else you&apos;d like us to know?</label>
            <textarea placeholder="Tell us about your goals..." className={`${inputClass} resize-y min-h-[80px]`} />
          </div>
          <motion.button
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(11,138,94,0.35)" }}
            whileTap={{ scale: 0.98 }}
            className="hero-btn-shine w-full py-4 mt-2 rounded-pill text-base font-semibold cursor-pointer text-white border-none"
            style={{ background: "linear-gradient(135deg, var(--color-green), var(--color-green-dark))", fontFamily: "var(--font-dm-sans)", boxShadow: "0 4px 16px rgba(11,138,94,0.25)" }}
          >
            ✨ Request a Pilot
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ SCHOOLS CTA ═══ */
function SchoolsCTA() {
  return (
    <section className="bg-green text-white text-center py-[100px] px-10 relative overflow-hidden">
      <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] rounded-full" />
      <div className="max-w-[640px] mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-serif text-[clamp(28px,3.5vw,42px)] leading-[1.15] tracking-tight mb-5">
          Ready to transform financial education?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[17px] leading-relaxed opacity-85 mb-9">
          Bring modern financial literacy to your students with 400+ standards-aligned lessons.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="inline-block">
            <Link href="#pilot-form" className="inline-flex items-center gap-2 bg-white text-green-dark px-8 py-3.5 rounded-pill text-base font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              Request a Pilot
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}