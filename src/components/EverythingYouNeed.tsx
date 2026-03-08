"use client";

import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    icon: "📹",
    title: "Short-form video lessons",
    desc: "Bite-sized video content in vertical format. Students learn through the same swipe-based experience they use every day.",
    checks: ["400+ curriculum-aligned videos", "Mobile-first vertical format", "Quizzes included with each lesson"],
    iconBg: "from-green-light to-[#d0f0e0]",
    link: "Explore lessons",
    preview: "video",
  },
  {
    icon: "📊",
    title: "Real-time analytics",
    desc: "See exactly where students are, who needs help, and how your classes are performing — all updated in real time.",
    checks: ["Student-level insights", "Exportable PDF reports", "Early warning system"],
    iconBg: "from-[#FFF3E0] to-[#FFE0B2]",
    link: "See analytics",
    preview: "analytics",
  },
  {
    icon: "🎮",
    title: "Gamified learning",
    desc: "Streaks, leaderboards, badges, and live challenges keep students motivated and coming back for more.",
    checks: ["Class & school rankings", "Achievement badges", "Daily streak tracking"],
    iconBg: "from-[#E8EAF6] to-[#C5CAE9]",
    link: "View features",
    preview: "gamified",
  },
];

export default function EverythingYouNeed() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-inner text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[clamp(34px,4.5vw,52px)] leading-[1.12] tracking-tight mb-5"
        >
          Everything you need, all in one platform
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg leading-relaxed text-text-secondary max-w-[620px] mx-auto"
        >
          Standards-aligned curriculum, real-time analytics, and gamified content that actually engages students — delivered in a format they already love.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[72px] text-left" style={{ perspective: "1200px" }}>
          {cards.map((card, i) => (
            <FeatureCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ card, index }: { card: typeof cards[number]; index: number }) {
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
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="bg-white border border-border rounded-[24px] p-10 relative overflow-hidden cursor-default group hover:border-green transition-colors duration-400"
      whileHover={{
        boxShadow: "0 20px 60px rgba(11,138,94,0.1), 0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-green to-green-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }} />

      {/* Light sweep overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,138,94,0.03)_0%,transparent_50%,rgba(11,138,94,0.01)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

      {/* Icon */}
      <motion.div
        className={`w-[72px] h-[72px] rounded-[20px] bg-linear-to-br ${card.iconBg} flex items-center justify-center mb-7`}
        whileHover={{ y: -4, scale: 1.08, rotate: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <span className="text-[32px] group-hover:scale-110 transition-transform duration-300">{card.icon}</span>
      </motion.div>

      {/* Title */}
      <h3 className="font-serif text-[22px] tracking-tight mb-3 group-hover:text-green-dark transition-colors duration-300">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] leading-[1.7] text-text-secondary mb-6">{card.desc}</p>

      {/* Checklist */}
      <ul className="flex flex-col gap-3 mb-7">
        {card.checks.map((c) => (
          <li key={c} className="flex items-center gap-2.5 text-sm text-text-secondary font-medium">
            <div className="w-[22px] h-[22px] rounded-full bg-green-light group-hover:bg-green flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
              <svg className="w-3 h-3 stroke-green group-hover:stroke-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            {c}
          </li>
        ))}
      </ul>

      {/* Mini Preview */}
      <div className="bg-cream group-hover:bg-green-light rounded-card p-5 transition-colors duration-300 mb-6">
        {card.preview === "video" && <VideoPreview />}
        {card.preview === "analytics" && <AnalyticsPreview />}
        {card.preview === "gamified" && <GamifiedPreview />}
      </div>

      {/* Learn more link */}
      <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-green hover:text-green-dark group/link transition-colors">
        {card.link}
        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
      </a>
    </motion.div>
  );
}

/* ─── Video Preview ─── */
function VideoPreview() {
  const gradients = [
    "from-green to-green-dark",
    "from-orange-accent to-[#C56A30]",
    "from-[#3B82F6] to-[#2563EB]",
    "from-[#8B5CF6] to-[#7C3AED]",
  ];

  return (
    <div className="flex gap-2.5">
      {gradients.map((g, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.06 }}
          className={`w-[60px] h-[80px] rounded-input bg-linear-to-br ${g} relative overflow-hidden cursor-pointer`}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Analytics Preview ─── */
function AnalyticsPreview() {
  const bars = [35, 50, 42, 65, 58, 78, 85];

  return (
    <>
      <div className="flex justify-between items-center mb-3.5">
        <div className="text-[11px] font-bold uppercase tracking-[1px] text-text-muted">Weekly Trend</div>
        <div className="text-xs font-semibold text-green">↑ 8%</div>
      </div>
      <div className="flex items-end gap-[5px] h-14">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scaleY: 1.1 }}
            className={`flex-1 rounded-t ${i >= 3 ? "bg-green" : "bg-green-light"}`}
            style={{ originY: 1 }}
          />
        ))}
      </div>
    </>
  );
}

/* ─── Gamified Preview ─── */
function GamifiedPreview() {
  const badges = ["🔥", "🏆", "⭐", "🎯", "💎"];

  return (
    <>
      <div className="flex justify-between items-center mb-3.5">
        <div className="text-[11px] font-bold uppercase tracking-[1px] text-text-muted">Recent Badges</div>
      </div>
      <div className="flex gap-2.5 items-center">
        {badges.map((b, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.12, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-11 h-11 rounded-[12px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-xl cursor-default"
          >
            {b}
          </motion.div>
        ))}
      </div>
      <div className="mt-3.5 flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-green-light rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "72%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, var(--color-green), var(--color-green-dark))" }}
          />
        </div>
        <span className="text-[11px] font-semibold text-green">Level 7</span>
      </div>
    </>
  );
}