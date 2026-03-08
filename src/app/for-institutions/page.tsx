"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ForInstitutionsPage() {
  return (
    <main>
      <InstitutionsHero />
      <MissionSection />
      <SolutionsGrid />
      <CRASection />
      <HowItWorks />
      <PartnerForm />
      <InstitutionsFAQ />
      <InstitutionsCTA />
      <Footer />
    </main>
  );
}

/* ═══ REUSABLE: Check item ═══ */
function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-[1.55] text-text-secondary">
      <div className="w-[22px] h-[22px] rounded-full bg-green-light flex items-center justify-center shrink-0 mt-0.5">
        <svg className="w-3 h-3 stroke-green" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      {children}
    </li>
  );
}

/* ═══ HERO — Full-bleed lifestyle image ═══ */
function InstitutionsHero() {
  return (
    <section className="relative w-full h-[clamp(420px,60vh,580px)] flex items-end overflow-hidden -mt-[76px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1800&q=85')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-10 section-inner w-full pb-16 pt-32 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green/85 backdrop-blur-sm px-5 py-2 rounded-full text-[13px] font-semibold mb-5"
        >
          🏦 For Institutions
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(36px,5vw,56px)] leading-[1.08] max-w-[600px] mb-4"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
        >
          Financial wellness as community investment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-relaxed max-w-[500px] opacity-90 mb-8"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.15)" }}
        >
          Partner with CentIQ to bring financial literacy to your customers and communities. Drive engagement, meet CRA requirements, and make a real impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-3.5 flex-wrap"
        >
          <Link href="#partner-form" className="inline-flex items-center gap-2 bg-green text-white px-8 py-3.5 rounded-pill text-base font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,138,94,0.3)] transition-all duration-300">
            Partner With Us
          </Link>
          <Link href="#solutions" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border-[1.5px] border-white/30 text-white px-8 py-3.5 rounded-pill text-base font-semibold hover:bg-white/25 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300">
            See Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ MISSION ═══ */
function MissionSection() {
  return (
    <section className="section-padding text-center">
      <div className="section-inner max-w-[720px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-label">Why Partner With Us</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-tight mb-5">
          Driving community impact through financial education
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[17px] leading-relaxed text-text-secondary max-w-[640px] mx-auto">
          Financial institutions are uniquely positioned to make a difference in their communities. CentIQ provides the platform and content (400+ lessons aligned to national standards) to help you deliver meaningful financial education at scale.
        </motion.p>
      </div>
    </section>
  );
}

/* ═══ SOLUTIONS GRID ═══ */
const solutions = [
  { icon: "🎁", title: "Rewards Programs", desc: "Incentivize customers to build financial literacy with tangible rewards, higher interest rates, or fee waivers." },
  { icon: "💬", title: "Customer Engagement", desc: "Reach financially engaged audiences with sponsored content and educational partnerships." },
  { icon: "🏷️", title: "White-Label Solutions", desc: "Offer CentIQ under your brand with customized content and seamless integration." },
  { icon: "📊", title: "Analytics & Reporting", desc: "Track program impact with detailed analytics and generate reports for stakeholders." },
  { icon: "✅", title: "Compliance Support", desc: "Documentation and reporting tools to support your regulatory requirements." },
  { icon: "⚙️", title: "Custom Programs", desc: "Tailored programs designed around your specific community needs and goals." },
];

function SolutionCard({ sol, index }: { sol: typeof solutions[number]; index: number }) {
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
      className="bg-white border border-border rounded-[20px] p-9 text-center relative overflow-hidden cursor-default group will-change-transform"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-green to-green-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }} />
      <motion.div
        whileHover={{ scale: 1.1, rotate: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="w-14 h-14 bg-green-light rounded-card flex items-center justify-center text-[26px] mx-auto mb-5"
      >
        {sol.icon}
      </motion.div>
      <h3 className="font-serif text-xl mb-2.5 tracking-tight group-hover:text-green-dark transition-colors duration-300">{sol.title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{sol.desc}</p>
    </motion.div>
  );
}

function SolutionsGrid() {
  return (
    <section id="solutions" className="section-padding bg-cream text-center">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-label">Solutions</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-tight mb-3">
          Flexible partnership options
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[17px] leading-relaxed text-text-secondary max-w-[600px] mx-auto">
          Whether you&apos;re looking to enhance customer engagement, meet regulatory requirements, or invest in your community, we have a solution for you.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14" style={{ perspective: "1200px" }}>
          {solutions.map((s, i) => <SolutionCard key={s.title} sol={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ═══ CRA COMPLIANCE (two-column card) ═══ */
function CRASection() {
  return (
    <div className="section-inner px-10 py-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 lg:grid-cols-2 bg-cream rounded-[24px] overflow-hidden border border-border my-20"
      >
        {/* Left — CRA details */}
        <div className="p-14 lg:border-r border-border flex flex-col justify-center">
          <motion.div
            whileHover={{ scale: 1.08, rotate: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-14 h-14 bg-green-light rounded-card flex items-center justify-center text-[28px] mb-5"
          >
            📋
          </motion.div>
          <h3 className="font-serif text-2xl tracking-tight mb-4">Community Reinvestment Act</h3>
          <p className="text-[15px] leading-relaxed text-text-secondary mb-5">
            Financial education programs can qualify for CRA credit under community development activities. CentIQ partnerships provide:
          </p>
          <ul className="flex flex-col gap-3.5">
            <Check>Documented community impact metrics</Check>
            <Check>Verified low-to-moderate income reach</Check>
            <Check>Comprehensive reporting for examiners</Check>
            <Check>Ongoing program support and documentation</Check>
          </ul>
        </div>

        {/* Right — explanation */}
        <div className="p-14 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-label" style={{ color: "var(--color-orange-accent)" }}>CRA Compliance</motion.div>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="font-serif text-[clamp(26px,3vw,34px)] leading-[1.15] tracking-tight mb-5">
            Meet CRA requirements while making real impact
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-[15px] leading-relaxed text-text-secondary mb-5">
            Financial education is a recognized community development activity under CRA. Our partnership programs are designed to maximize both community impact and regulatory value.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-[15px] leading-relaxed text-text-secondary mb-7">
            We work with you to document program reach, track outcomes, and generate the reporting you need for CRA examinations.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
            <Link href="#partner-form" className="inline-flex items-center gap-2 bg-green text-white px-7 py-3 rounded-pill text-[15px] font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,138,94,0.3)] transition-all duration-300">
              Learn About CRA Programs
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══ HOW IT WORKS (4-step flow) ═══ */
const steps = [
  { num: "1", title: "Schedule a Consultation", desc: "Tell us about your institution, goals, and the communities you serve." },
  { num: "2", title: "Choose Your Program", desc: "Select from rewards, white-label, sponsorship, or custom partnership models." },
  { num: "3", title: "Launch & Track", desc: "Deploy CentIQ to your customers or community with full analytics and reporting." },
  { num: "4", title: "Measure Impact", desc: "Generate CRA-ready reports and track real community outcomes over time." },
];

function HowItWorks() {
  return (
    <section className="section-padding text-center">
      <div className="section-inner">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-tight">
          How it works
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="text-center relative group"
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3.5 w-7 h-0.5 bg-border" />
              )}
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: "var(--color-green)", color: "white" }}
                className="w-16 h-16 rounded-full bg-green-light text-green-dark flex items-center justify-center font-serif text-2xl mx-auto mb-4 transition-colors duration-300"
              >
                {s.num}
              </motion.div>
              <h4 className="text-sm font-bold mb-2">{s.title}</h4>
              <p className="text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ PARTNER FORM ═══ */
function PartnerForm() {
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
    <section id="partner-form" className="section-padding bg-cream text-center">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-label">Partner With Us</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-tight mb-5">
          Start the conversation
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mx-auto">
          Tell us about your institution and goals. We&apos;ll reach out to discuss how CentIQ can help you make an impact.
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
            { label: "Email Address", type: "email", placeholder: "john@institution.com", required: true },
            { label: "Institution Name", type: "text", placeholder: "First National Bank", required: true },
          ].map((f) => (
            <div key={f.label} className="mb-5">
              <label className="block text-sm font-semibold mb-2">{f.label} {f.required && <span className="text-orange-accent">*</span>}</label>
              <input type={f.type} placeholder={f.placeholder} className={inputClass} />
            </div>
          ))}

          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">Institution Type <span className="text-orange-accent">*</span></label>
            <select className={`${inputClass} appearance-none cursor-pointer`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A8A8A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
              <option value="">Select type</option>
              <option>Bank</option>
              <option>Credit Union</option>
              <option>Community Development Financial Institution</option>
              <option>Insurance Company</option>
              <option>Other Financial Institution</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">Partnership Interests <span className="text-orange-accent">*</span></label>
            <select className={`${inputClass} appearance-none cursor-pointer`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A8A8A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
              <option value="">Select primary interest</option>
              <option>CRA Compliance</option>
              <option>Customer Engagement</option>
              <option>White-Label Solution</option>
              <option>Rewards Program</option>
              <option>Community Sponsorship</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">Tell us about your goals</label>
            <textarea placeholder="What are you hoping to achieve with financial literacy programs?" className={`${inputClass} resize-y min-h-[80px]`} />
          </div>

          <motion.button
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(11,138,94,0.35)" }}
            whileTap={{ scale: 0.98 }}
            className="hero-btn-shine w-full py-4 mt-2 rounded-pill text-base font-semibold cursor-pointer text-white border-none"
            style={{ background: "linear-gradient(135deg, var(--color-green), var(--color-green-dark))", fontFamily: "var(--font-dm-sans)", boxShadow: "0 4px 16px rgba(11,138,94,0.25)" }}
          >
            ✨ Submit Interest
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ FAQ ═══ */
function InstitutionsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="section-padding text-center">
      <div className="section-inner">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-serif text-[clamp(32px,4vw,44px)] leading-[1.15] tracking-tight">
          FAQs
        </motion.h2>
        <div className="max-w-[680px] mx-auto mt-14 flex flex-col gap-3">
          {[
            { q: "How does CentIQ help meet CRA requirements?", a: "Financial education is a recognized community development activity under the Community Reinvestment Act. CentIQ provides documented impact metrics, verified low-to-moderate income reach, and comprehensive reporting designed for CRA examinations." },
            { q: "What types of institutions partner with CentIQ?", a: "We work with banks, credit unions, CDFIs, insurance companies, and other financial institutions that want to invest in financial literacy for their customers and communities." },
            { q: "Can CentIQ be white-labeled under our brand?", a: "Yes. Our white-label solution lets you offer CentIQ under your brand with customized content and seamless integration into your existing platforms." },
            { q: "How do you track and report community impact?", a: "Our analytics dashboard tracks program reach, user engagement, learning outcomes, and demographic data. We generate examiner-ready reports that document your community development impact." },
          ].map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`border rounded-card overflow-hidden transition-all duration-300 bg-white ${isOpen ? "border-green shadow-[0_4px_20px_rgba(11,138,94,0.06)]" : "border-border hover:border-green-light"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group gap-4"
                >
                  <span className="text-base font-semibold group-hover:text-green transition-colors">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-green border-green text-white rotate-45" : "border-border text-text-primary"}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </div>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[15px] leading-relaxed text-text-secondary text-left">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══ CTA ═══ */
function InstitutionsCTA() {
  return (
    <section className="bg-green text-white text-center py-[100px] px-10 relative overflow-hidden">
      <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)] rounded-full" />
      <div className="max-w-[640px] mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-serif text-[clamp(28px,3.5vw,42px)] leading-[1.15] tracking-tight mb-5">
          Ready to invest in your community?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[17px] leading-relaxed opacity-85 mb-9">
          Join financial institutions across the country in bringing financial literacy to the next generation.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="inline-block">
            <Link href="#partner-form" className="inline-flex items-center gap-2 bg-white text-green-dark px-8 py-3.5 rounded-pill text-base font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              Partner With Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}