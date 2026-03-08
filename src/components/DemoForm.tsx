"use client";

import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const fields = [
  { label: "Your Name", type: "text", placeholder: "John Smith" },
  { label: "Email Address", type: "email", placeholder: "john@example.com" },
  { label: "Organization", type: "text", placeholder: "School or company name" },
];

export default function DemoForm() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 20 });
  const sy = useSpring(my, { stiffness: 150, damping: 20 });
  const rx = useTransform(sy, [-0.5, 0.5], [2, -2]);
  const ry = useTransform(sx, [-0.5, 0.5], [-2, 2]);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }, [mx, my]);

  const onLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  return (
    <section id="demo" className="section-padding text-center">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          Get Started
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5"
        >
          Book a demo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mx-auto"
        >
          Tell us about your organization and we&apos;ll schedule a personalized demo to show you how CentIQ can help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 4 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 800 }}
          className="max-w-[540px] mx-auto mt-12 bg-white border border-border rounded-[24px] p-11 text-left shadow-[0_8px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_56px_rgba(0,0,0,0.06)] transition-shadow duration-300 will-change-transform"
        >
          {fields.map((field, i) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
              className="mb-5"
            >
              <label className="block text-sm font-semibold mb-2">
                {field.label} <span className="text-orange-accent">*</span>
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-[12px] text-[15px] bg-warm-white outline-none focus:border-green focus:shadow-[0_0_0_4px_rgba(11,138,94,0.08)] focus:bg-white transition-all"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.64, duration: 0.4 }}
            className="mb-5"
          >
            <label className="block text-sm font-semibold mb-2">
              Your Role <span className="text-orange-accent">*</span>
            </label>
            <select className="w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-[12px] text-[15px] bg-warm-white outline-none focus:border-green focus:shadow-[0_0_0_4px_rgba(11,138,94,0.08)] transition-all appearance-none cursor-pointer" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A8A8A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
              <option value="">Select your role</option>
              <option>Teacher</option>
              <option>Administrator</option>
              <option>Financial Institution</option>
              <option>Community Organization</option>
              <option>Other</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.72, duration: 0.4 }}
            className="mb-5"
          >
            <label className="block text-sm font-semibold mb-2">How can we help?</label>
            <textarea
              placeholder="Tell us about your goals..."
              className="w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-[12px] text-[15px] bg-warm-white outline-none focus:border-green focus:shadow-[0_0_0_4px_rgba(11,138,94,0.08)] focus:bg-white transition-all resize-y min-h-[100px]"
            />
          </motion.div>

          <motion.button
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(11,138,94,0.35)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="hero-btn-shine w-full py-4 mt-2 rounded-pill text-base font-semibold cursor-pointer text-white border-none"
            style={{ background: "linear-gradient(135deg, var(--color-green), var(--color-green-dark))", fontFamily: "var(--font-dm-sans)", boxShadow: "0 4px 16px rgba(11,138,94,0.25)" }}
          >
            ✨ Request a Demo
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center gap-6 mt-6"
        >
          {[
            { icon: "🔒", text: "SSL encrypted" },
            { icon: "⚡", text: "Response within 24h" },
            { icon: "🚫", text: "No spam, ever" },
          ].map((t) => (
            <div key={t.text} className="flex items-center gap-1.5 text-xs text-text-muted">
              <span className="text-sm">{t.icon}</span> {t.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}