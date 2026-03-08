"use client";

import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Search } from "lucide-react";

const lessons = [
  { title: "Creating Your First Budget", meta: "Video · 4 min · Quiz included", gradient: "from-green to-green-dark" },
  { title: "Understanding Credit Scores", meta: "Video · 5 min · Quiz included", gradient: "from-orange-accent to-[#C56A30]" },
  { title: "Intro to Compound Interest", meta: "Video · 3 min · Quiz included", gradient: "from-[#3B82F6] to-[#2563EB]" },
];

const checks = [
  "Covers budgeting, credit, investing, taxes, and more",
  "Mapped to JumpStart and state standards",
  "Quizzes included with each lesson",
];

export default function LessonLibrary() {
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
          {/* Content (right on desktop) */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Lesson Library
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-[clamp(32px,3.5vw,46px)] leading-[1.12] tracking-tight mb-5"
            >
              Every lesson, organized and searchable
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mb-6"
            >
              Browse 400+ standards-aligned lessons organized by topic, grade level, and state standards. Filter, search, and assign in seconds.
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

          {/* Mockup (left on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 relative"
            style={{ perspective: 1000 }}
          >
            <div className="absolute -bottom-5 -left-5 w-[120px] h-[120px] opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-green) 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }} />

            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="bg-white rounded-[20px] border border-border overflow-hidden will-change-transform relative"
              whileHover={{ boxShadow: "0 24px 64px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.04)" }}
            >
              <div className="px-5 py-3.5 border-b border-border flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
              </div>
              <div className="p-6">
                {/* Filter chips */}
                <div className="flex gap-2 mb-4">
                  <span className="px-4 py-1.5 bg-green text-white rounded-full text-xs font-semibold">All Topics</span>
                  <span className="px-4 py-1.5 bg-green-light text-green-dark rounded-full text-xs font-semibold">Budgeting</span>
                  <span className="px-4 py-1.5 bg-cream rounded-full text-xs font-semibold text-text-muted">Credit</span>
                  <span className="px-4 py-1.5 bg-cream rounded-full text-xs font-semibold text-text-muted">Investing</span>
                </div>

                {/* Search bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-cream rounded-input mb-4">
                  <Search size={15} className="text-text-muted" />
                  <span className="text-[13px] text-text-muted">Search lessons...</span>
                </div>

                {lessons.map((l, i) => (
                  <motion.div
                    key={l.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4, backgroundColor: "rgba(11,138,94,0.02)" }}
                    className="flex items-center gap-3.5 py-3.5 border-b border-border/50 last:border-none rounded-input px-1"
                  >
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      className={`w-11 h-11 rounded-[12px] shrink-0 bg-linear-to-br ${l.gradient} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs">▶</span>
                      </div>
                    </motion.div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-semibold">{l.title}</div>
                      <div className="text-[11px] text-text-muted">{l.meta}</div>
                    </div>
                    <span className="text-[12px] text-green font-bold whitespace-nowrap">Assign →</span>
                  </motion.div>
                ))}

                {/* Pagination dots */}
                <div className="flex justify-center gap-1.5 mt-4">
                  <div className="w-2 h-2 rounded-full bg-green" />
                  <div className="w-2 h-2 rounded-full bg-green-light" />
                  <div className="w-2 h-2 rounded-full bg-green-light" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}