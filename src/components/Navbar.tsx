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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-warm-white/92 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="font-serif text-[26px] text-green tracking-tight">
          CentIQ
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              {link.hasDropdown ? (
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                  className="flex items-center gap-1 text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )}

              {/* Dropdown */}
              {link.hasDropdown && dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] bg-white rounded-card border border-border shadow-card p-3 animate-fade-up">
                  {link.children?.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-3 rounded-input hover:bg-cream transition-colors group"
                    >
                      <div className="text-[15px] font-semibold text-text-primary group-hover:text-green transition-colors">
                        {child.label}
                      </div>
                      <div className="text-[13px] text-text-muted mt-0.5">
                        {child.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden sm:block text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Student Login
          </Link>
          <Link
            href="#demo"
            className="hidden sm:inline-flex items-center gap-2 bg-green text-white px-7 py-3 rounded-pill text-[15px] font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-btn transition-all duration-300"
          >
            Book a Demo
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary cursor-pointer"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-warm-white px-6 py-6 animate-fade-up">
          <div className="flex flex-col gap-2">
            {navLinks
              .filter((l) => !l.hasDropdown)
              .map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[16px] font-medium text-text-secondary hover:text-green py-3 border-b border-border/50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-center text-[15px] font-medium text-text-secondary hover:text-text-primary py-3 border border-border rounded-pill transition-colors"
            >
              Student Login
            </Link>
            <Link
              href="#demo"
              onClick={() => setMobileOpen(false)}
              className="text-center bg-green text-white px-7 py-3 rounded-pill text-[15px] font-semibold hover:bg-green-dark transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}