"use client";

import Link from "next/link";
import { motion } from "motion/react";

const columns = [
  { title: "Product", links: [{ label: "For Schools", href: "/for-schools" }, { label: "For Institutions", href: "/for-institutions" }, { label: "Foundation", href: "/foundation" }, { label: "Curriculum", href: "#" }] },
  { title: "Resources", links: [{ label: "Student Login", href: "#" }, { label: "Support", href: "#" }] },
  { title: "Legal", links: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }, { label: "Accessibility", href: "#" }] },
];

const socials = [
  { label: "𝕏", href: "#" },
  { label: "in", href: "#" },
  { label: "ig", href: "#" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border pt-20 pb-10 px-10 bg-warm-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-16 mb-16">
          <div>
            <Link href="/" className="font-serif text-2xl text-green mb-4 block">CentIQ</Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-[280px]">
              Financial literacy for the next generation. Empowering students, schools, and communities.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -2, backgroundColor: "var(--color-green)", color: "white" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-9 h-9 rounded-full bg-cream flex items-center justify-center text-text-muted text-sm font-semibold"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[1.5px] mb-5">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-green hover:translate-x-0.5 transition-all inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-6 flex items-center justify-between flex-wrap gap-4">
          <span className="text-[13px] text-text-muted">&copy; 2026 CentIQ. All rights reserved.</span>
          <span className="text-[13px] text-text-muted">josh@centiqapp.com</span>
        </div>
      </div>
    </motion.footer>
  );
}