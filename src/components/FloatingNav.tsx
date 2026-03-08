"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  {
    label: "Product",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "For Schools", href: "/for-schools", desc: "400+ standards-aligned lessons" },
      { label: "For Institutions", href: "/for-institutions", desc: "CRA-compliant partnerships" },
      { label: "Foundation", href: "/foundation", desc: "Free access for underserved communities" },
    ],
  },
  { label: "For Schools", href: "/for-schools" },
  { label: "For Institutions", href: "/for-institutions" },
  { label: "Foundation", href: "/foundation" },
];

export default function FloatingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="sticky top-[42px] z-[150] px-4 lg:px-6 pt-2 pointer-events-none">
      <nav className="max-w-[1200px] mx-auto bg-white/96 backdrop-blur-xl saturate-[1.4] rounded-card shadow-nav px-5 lg:px-8 pointer-events-auto">
        <div className="flex items-center justify-between h-[62px]">
          <Link href="/" className="font-serif text-[24px] text-green tracking-tight">
            CentIQ
          </Link>

          <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                    className="flex items-center gap-1 text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )}

                {link.hasDropdown && dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[300px] bg-white rounded-card border border-border shadow-card-hover p-2.5 animate-fade-up">
                    {link.children?.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 rounded-input hover:bg-cream transition-colors group"
                      >
                        <div className="text-[14px] font-semibold text-text-primary group-hover:text-green transition-colors">
                          {child.label}
                        </div>
                        <div className="text-[12px] text-text-muted mt-0.5">
                          {child.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden sm:block text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Student Login
            </Link>
            <Link
              href="#demo"
              className="hidden sm:inline-flex items-center gap-2 bg-green text-white px-6 py-2.5 rounded-pill text-[14px] font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-btn transition-all duration-300"
            >
              Book a Demo
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary cursor-pointer"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border px-2 py-5 animate-fade-up">
            <div className="flex flex-col gap-1">
              {navLinks
                .filter((l) => !l.hasDropdown)
                .map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[15px] font-medium text-text-secondary hover:text-green py-3 px-3 rounded-input hover:bg-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
            <div className="mt-4 flex flex-col gap-2.5 px-3">
              <Link
                href="#"
                onClick={() => setMobileOpen(false)}
                className="text-center text-[14px] font-medium text-text-secondary hover:text-text-primary py-2.5 border border-border rounded-pill transition-colors"
              >
                Student Login
              </Link>
              <Link
                href="#demo"
                onClick={() => setMobileOpen(false)}
                className="text-center bg-green text-white px-7 py-2.5 rounded-pill text-[14px] font-semibold hover:bg-green-dark transition-all"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}