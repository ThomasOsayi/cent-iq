"use client";

import { useCallback, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function FoundationPage() {
  return (
    <main>
      <FoundationHero />
      <MissionSection />
      <OfferingsSection />
      <EligibilitySection />
      <FoundationForm />
      <FoundationCTA />
      <Footer />
    </main>
  );
}

/* ═══ Check item ═══ */
function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-base leading-relaxed text-text-secondary">
      <div className="w-[22px] h-[22px] rounded-full bg-green-light flex items-center justify-center shrink-0 mt-0.5">
        <svg className="w-3 h-3 stroke-green" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      {children}
    </li>
  );
}

/* ═══ HERO ═══ */
function FoundationHero() {
  return (
    <section className="relative w-full h-[clamp(420px,60vh,580px)] flex items-end overflow-hidden -mt-[76px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1800&q=85')", backgroundPosition: "center 30%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-10 section-inner w-full pb-16 pt-32 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green/85 backdrop-blur-sm px-5 py-2 rounded-full text-[13px] font-semibold mb-5"
        >
          💚 CentIQ Foundation
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(40px,5.5vw,64px)] leading-[1.05] max-w-[500px] mb-4"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
        >
          Financial literacy for all
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-relaxed max-w-[460px] opacity-90 mb-8"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.15)" }}
        >
          We believe every young person deserves the chance to build a strong financial foundation, regardless of their zip code or background.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-3.5 flex-wrap"
        >
          <Link href="#request-form" className="inline-flex items-center gap-2 bg-green text-white px-8 py-3.5 rounded-pill text-base font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,138,94,0.3)] transition-all duration-300">
            Get Free Access
          </Link>
          <Link href="#mission" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border-[1.5px] border-white/30 text-white px-8 py-3.5 rounded-pill text-base font-semibold hover:bg-white/25 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ MISSION ═══ */
function MissionSection() {
  return (
    <section id="mission" className="section-padding">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-[24px] overflow-hidden border border-border"
        >
          <div
            className="min-h-[320px] lg:min-h-[420px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=85')" }}
          />
          <div className="bg-cream p-14 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-label" style={{ color: "var(--color-orange-accent)" }}>Our Mission</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="font-serif text-[clamp(28px,3vw,38px)] leading-[1.15] mb-5">
              Breaking down barriers to financial education
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-base leading-relaxed text-text-secondary mb-4">
              Too many young people graduate without basic financial skills, and those from underserved communities are often hit hardest.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-base leading-relaxed text-text-secondary">
              The CentIQ Foundation provides full platform access for schools and organizations serving underserved communities: 400+ lessons to help students build real financial skills.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ OFFERINGS (Monarch-style colorful alternating cards) ═══ */
const offerings = [
  {
    title: "Full Platform Access",
    desc: "Complete access to all 400+ CentIQ lessons, quizzes, and features at no cost. The same content available to every school — free for underserved communities.",
    icon: "📚",
    features: ["📹 400+ Video Lessons", "📝 Quizzes & Assessments", "🎮 Gamified Learning"],
    gradient: "from-green-light to-[#d0f0e0]",
    reversed: false,
  },
  {
    title: "Teacher Tools",
    desc: "Full dashboard access to track student progress, assign lessons, and view analytics. Everything teachers need to run an effective financial literacy program.",
    icon: "📊",
    features: ["📋 Student Progress Tracking", "📚 Lesson Assignment", "📈 Analytics Dashboard"],
    gradient: "from-[#E3F2FD] to-[#BBDEFB]",
    reversed: true,
  },
  {
    title: "Ongoing Support",
    desc: "Help with setup, implementation, and making the most of CentIQ for your students. Our team is here to ensure your program succeeds from day one.",
    icon: "💚",
    features: ["🛠️ Setup Assistance", "📞 Dedicated Support", "📖 Implementation Guidance"],
    gradient: "from-[#FFF3E0] to-[#FFE0B2]",
    reversed: false,
  },
];

function OfferingCard({ offering, index }: { offering: typeof offerings[number]; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 25 });
  const sy = useSpring(my, { stiffness: 200, damping: 25 });
  const rx = useTransform(sy, [-0.5, 0.5], [3, -3]);
  const ry = useTransform(sx, [-0.5, 0.5], [-3, 3]);
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); }, [mx, my]);
  const onLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="grid grid-cols-1 lg:grid-cols-2 rounded-[24px] overflow-hidden border border-border mb-7 min-h-[280px] will-change-transform hover:shadow-[0_20px_48px_rgba(0,0,0,0.06)] transition-shadow duration-400"
    >
      {/* Content */}
      <div className={`p-12 flex flex-col justify-center ${offering.reversed ? "order-2" : "order-1"}`}>
        <h3 className="font-serif text-[28px] tracking-tight mb-3">{offering.title}</h3>
        <p className="text-[15px] leading-relaxed text-text-secondary mb-5">{offering.desc}</p>
        <Link href="#request-form" className="inline-flex items-center gap-2 bg-green text-white px-7 py-3 rounded-pill text-[15px] font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,138,94,0.3)] transition-all duration-300 self-start">
          Get Free Access
        </Link>
      </div>

      {/* Visual */}
      <div className={`bg-linear-to-br ${offering.gradient} flex items-center justify-center p-10 ${offering.reversed ? "order-1" : "order-2"}`}>
        <div className="flex gap-5 items-center">
          <motion.div
            whileHover={{ scale: 1.08, rotate: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-20 h-20 rounded-[24px] bg-white/80 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex items-center justify-center text-[40px]"
          >
            {offering.icon}
          </motion.div>
          <div className="flex flex-col gap-3">
            {offering.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-[12px] px-4 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[13px] font-medium"
              >
                {f}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function OfferingsSection() {
  return (
    <section className="section-padding text-center" style={{ paddingTop: "40px" }}>
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-label">What We Offer</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-tight mb-3">
          Free access for underserved communities
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[17px] leading-relaxed text-text-secondary max-w-[520px] mx-auto mb-14">
          Complete access to everything CentIQ offers — at no cost to qualifying schools and organizations.
        </motion.p>

        <div style={{ perspective: "1200px" }}>
          {offerings.map((o, i) => <OfferingCard key={o.title} offering={o} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ═══ ELIGIBILITY ═══ */
const eligibilityCriteria = [
  "Title I schools",
  "Community organizations in underserved areas",
  "After-school programs serving low-income students",
  "Nonprofits focused on youth development",
  "Schools with high free/reduced lunch eligibility",
  "Programs serving first-generation students",
];

function EligibilitySection() {
  return (
    <section className="section-padding text-center">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-label">Who This Is For</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-tight">
          Serving those who need it most
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-cream border border-border rounded-[20px] p-14 max-w-[780px] mx-auto mt-10 text-left"
        >
          <p className="text-base font-semibold mb-5">We prioritize schools and organizations serving:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {eligibilityCriteria.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="flex items-center gap-2.5 text-[15px] text-text-secondary"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green shrink-0" />
                {c}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ FORM ═══ */
function FoundationForm() {
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
    <section id="request-form" className="section-padding bg-cream text-center">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-label">Get Started</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-tight mb-5">
          Request free access
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mx-auto">
          Tell us about your school or organization and we&apos;ll get back to you about providing free CentIQ access.
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
            { label: "Your Name", type: "text", placeholder: "Your full name", required: true },
            { label: "Email Address", type: "email", placeholder: "your.email@example.com", required: true },
            { label: "School or Organization", type: "text", placeholder: "Your school or organization name", required: true },
          ].map((f) => (
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
              <option>Program Director</option>
              <option>Nonprofit Leader</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">Tell us about your community <span className="text-orange-accent">*</span></label>
            <textarea placeholder="Tell us about the students you serve and how CentIQ could help..." className={`${inputClass} resize-y min-h-[80px]`} />
          </div>

          <motion.button
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(11,138,94,0.35)" }}
            whileTap={{ scale: 0.98 }}
            className="hero-btn-shine w-full py-4 mt-2 rounded-pill text-base font-semibold cursor-pointer text-white border-none"
            style={{ background: "linear-gradient(135deg, var(--color-green), var(--color-green-dark))", fontFamily: "var(--font-dm-sans)", boxShadow: "0 4px 16px rgba(11,138,94,0.25)" }}
          >
            ✨ Request Free Access
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ CTA ═══ */
function FoundationCTA() {
  return (
    <section className="bg-green text-white text-center py-[100px] px-10 relative overflow-hidden">
      <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)] rounded-full" />
      <div className="max-w-[640px] mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-serif text-[clamp(28px,3.5vw,42px)] leading-[1.15] tracking-tight mb-5">
          Every student deserves financial literacy
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[17px] leading-relaxed opacity-85 mb-9">
          If you serve underserved communities, we want to help. Reach out and let&apos;s get CentIQ to your students.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="inline-block">
            <Link href="#request-form" className="inline-flex items-center gap-2 bg-white text-green-dark px-8 py-3.5 rounded-pill text-base font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              Request Free Access
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}