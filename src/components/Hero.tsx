"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Layers } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const floatRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scoreRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const countedRef = useRef(false);

  const setFloatRef = useCallback((el: HTMLDivElement | null, i: number) => {
    floatRefs.current[i] = el;
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    let raf: number;
    const speeds = [0.04, 0.03, 0.035, 0.025];
    const depths = [20, 15, 18, 12];

    const animate = () => {
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.08;
      const cx = currentRef.current.x;
      const cy = currentRef.current.y;

      // Float cards — translate + 3D rotate
      floatRefs.current.forEach((card, i) => {
        if (!card) return;
        const speed = speeds[i] || 0.03;
        const depth = depths[i] || 15;
        const mx = cx * depth * speed * 100;
        const my = cy * depth * speed * 100;
        const rx = -cy * 4 * speed * 100;
        const ry = cx * 4 * speed * 100;
        card.style.transform = `translate(${mx}px, ${my}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });

      // Hero content card — subtle tilt
      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${-cy * 1.5}deg) rotateY(${cx * 1.5}deg)`;
      }

      // Background — inverse parallax
      if (bgRef.current) {
        const scrollY = window.scrollY;
        const parallax = scrollY * 0.3;
        bgRef.current.style.transform = `translate(${-cx * 12}px, ${-cy * 8 + parallax}px) scale(1.05)`;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Animated counter
    const startCounter = () => {
      if (countedRef.current || !scoreRef.current) return;
      countedRef.current = true;
      const target = 95;
      const duration = 1800;
      const start = performance.now();
      const update = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        if (scoreRef.current) scoreRef.current.textContent = Math.round(eased * target) + "%";
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };
    const counterTimer = setTimeout(startCounter, 1200);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(raf);
      clearTimeout(counterTimer);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[clamp(620px,88vh,840px)] overflow-hidden -mt-[110px] pt-[110px]"
      style={{ perspective: "1200px" }}
    >
      {/* Background with parallax */}
      <div ref={bgRef} className="absolute -inset-10 z-0 will-change-transform transition-transform duration-100">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=85"
          alt="Students collaborating"
          className="w-full h-full object-cover object-[center_25%] brightness-[0.95] contrast-[1.05]"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-1 bg-[linear-gradient(105deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.35)_35%,rgba(0,0,0,0.08)_65%,transparent_100%)]" />
      <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_20%_80%,rgba(11,138,94,0.12)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 z-1 h-[200px] bg-linear-to-t from-warm-white via-warm-white/50 to-transparent" />

      {/* Double swoosh */}
      <div className="hero-swoosh absolute bottom-10 -left-[140px] w-[700px] h-[350px] border-[6px] border-green rounded-full opacity-0 z-2 pointer-events-none blur-[0.5px]" />
      <div className="hero-swoosh-2 absolute bottom-24 -left-[80px] w-[500px] h-[250px] border-[3px] border-green rounded-full opacity-0 z-2 pointer-events-none blur-[1px]" />

      {/* Particles */}
      <div className="absolute inset-0 z-2 pointer-events-none">
        <div className="hero-particle absolute top-[15%] left-[20%] w-1.5 h-1.5 bg-green rounded-full" />
        <div className="hero-particle absolute top-[30%] right-[25%] w-1 h-1 bg-green rounded-full" />
        <div className="hero-particle absolute top-[60%] left-[45%] w-[5px] h-[5px] bg-green rounded-full" />
        <div className="hero-particle absolute top-[20%] right-[15%] w-[3px] h-[3px] bg-green rounded-full" />
        <div className="hero-particle absolute bottom-[30%] left-[60%] w-1.5 h-1.5 bg-green rounded-full" />
      </div>

      {/* ─── Float Card: Progress ─── */}
      <div
        ref={(el) => setFloatRef(el, 0)}
        className="hero-float-1 absolute top-24 left-12 z-5 rounded-[18px] p-5 border border-white/60 will-change-transform hidden lg:block"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,255,255,0.78))",
          backdropFilter: "blur(24px) saturate(1.6)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 rounded-[18px] bg-linear-to-br from-white/30 to-transparent pointer-events-none" />
        <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-green mb-2">Current Lesson</div>
        <div className="font-serif text-[21px] mb-1">Saving &amp; Budgeting</div>
        <div className="text-[13px] text-text-muted mb-3.5">72% complete</div>
        <div className="w-[210px] h-2 bg-green-light rounded-full overflow-hidden relative">
          <div className="progress-fill h-full bg-linear-to-r from-green to-green-dark rounded-full w-0 relative">
            <div className="absolute right-0 top-0 bottom-0 w-5 bg-linear-to-r from-transparent to-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* ─── Float Card: Score ─── */}
      <div
        ref={(el) => setFloatRef(el, 1)}
        className="hero-float-2 absolute top-20 right-[70px] z-5 rounded-[18px] px-7 py-5 border border-white/60 text-center will-change-transform hidden md:block"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,255,255,0.78))",
          backdropFilter: "blur(24px) saturate(1.6)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 rounded-[18px] bg-linear-to-br from-white/30 to-transparent pointer-events-none" />
        <div className="absolute -inset-2.5 rounded-[22px] bg-[radial-gradient(circle,rgba(11,138,94,0.08)_0%,transparent_70%)] -z-10" />
        <div
          ref={scoreRef}
          className="font-serif text-[42px] leading-none bg-linear-to-br from-green to-green-dark bg-clip-text text-transparent"
        >
          0%
        </div>
        <div className="text-xs text-text-muted mt-1">Class Average</div>
      </div>

      {/* ─── Float Card: Streak ─── */}
      <div
        ref={(el) => setFloatRef(el, 2)}
        className="hero-float-3 absolute bottom-52 right-14 z-5 rounded-[18px] px-5 py-4 border border-white/60 items-center gap-4 will-change-transform hidden lg:flex"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,255,255,0.78))",
          backdropFilter: "blur(24px) saturate(1.6)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 rounded-[18px] bg-linear-to-br from-white/30 to-transparent pointer-events-none" />
        <div className="streak-pulse w-[52px] h-[52px] bg-linear-to-br from-green to-green-dark rounded-card flex items-center justify-center text-[26px] shadow-[0_8px_20px_rgba(11,138,94,0.25)]">
          🔥
        </div>
        <div>
          <div className="font-serif text-xl">7 Day Streak</div>
          <div className="text-xs text-text-muted mt-0.5">Keep it going!</div>
        </div>
      </div>

      {/* ─── Float Card: Badge (depth layer) ─── */}
      <div
        ref={(el) => setFloatRef(el, 3)}
        className="hero-float-4 absolute top-1/2 left-[30%] -translate-y-1/2 z-5 rounded-[18px] px-5 py-3.5 border border-white/60 items-center gap-2.5 opacity-85 will-change-transform hidden xl:flex"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.88), rgba(255,255,255,0.72))",
          backdropFilter: "blur(24px) saturate(1.6)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.1), 0 6px 18px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.7)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="w-9 h-9 bg-green-light rounded-input flex items-center justify-center text-lg">🏆</div>
        <div>
          <div className="text-[13px] font-semibold">Top 3 in class</div>
          <div className="text-[10px] text-text-muted">Achievement unlocked</div>
        </div>
      </div>

      {/* ─── Hero Content Card ─── */}
      <div
        ref={cardRef}
        className="absolute bottom-12 left-6 lg:left-10 z-10 max-w-[560px] p-9 lg:p-11 rounded-[24px] border border-white/70 will-change-transform animate-hero-card-in"
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
          backdropFilter: "blur(30px) saturate(1.8)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 rounded-[24px] bg-linear-to-br from-white/40 to-transparent pointer-events-none" />
        <h1 className="font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.12] tracking-tight mb-1 relative">
          Financial literacy for the next generation
          <span className="hero-underline" />
        </h1>
        <p className="text-[16px] lg:text-[17px] leading-relaxed text-text-secondary mb-8 max-w-[440px] animate-fade-up [animation-delay:0.6s]">
          Modern, gamified financial education for schools, communities, and institutions — in a format students actually love.
        </p>
        <Link
          href="#demo"
          className="hero-btn-shine inline-flex items-center gap-2.5 bg-linear-to-br from-green to-green-dark text-white px-9 py-4 rounded-pill text-base font-semibold shadow-[0_6px_20px_rgba(11,138,94,0.3)] hover:-translate-y-[3px] hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(11,138,94,0.4)] transition-all duration-400 animate-fade-up [animation-delay:0.8s]"
          style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
        >
          <Layers size={18} />
          Start learning today
        </Link>
      </div>
    </section>
  );
}