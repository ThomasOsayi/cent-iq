import Link from "next/link";
import { Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[clamp(600px,85vh,800px)] overflow-hidden -mt-[76px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
          alt="Students collaborating"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/30 via-40% to-black/5" />
        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-linear-to-t from-warm-white to-transparent" />
      </div>

      {/* Green decorative swoosh */}
      <div className="hero-swoosh absolute bottom-20 -left-[100px] w-[600px] h-[300px] border-[5px] border-green rounded-full opacity-0 z-2 pointer-events-none" />

      {/* Floating Card: Progress */}
      <div className="float-bob-1 absolute top-28 left-16 z-5 bg-white/88 backdrop-blur-2xl rounded-card p-5 shadow-float border border-white/50 hidden lg:block">
        <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-green mb-1.5">Current Lesson</div>
        <div className="font-serif text-[22px] mb-1">Saving &amp; Budgeting</div>
        <div className="text-[13px] text-text-muted mb-3">72% complete</div>
        <div className="w-[200px] h-2 bg-green-light rounded-full overflow-hidden">
          <div className="progress-fill h-full bg-green rounded-full w-0" />
        </div>
      </div>

      {/* Floating Card: Score */}
      <div className="float-bob-2 absolute top-28 right-20 z-5 bg-white/88 backdrop-blur-2xl rounded-card px-6 py-5 shadow-float border border-white/50 text-center hidden md:block">
        <div className="font-serif text-4xl text-green leading-none">95%</div>
        <div className="text-xs text-text-muted mt-1">Class Average</div>
      </div>

      {/* Floating Card: Streak */}
      <div className="float-bob-3 absolute bottom-48 right-16 z-5 bg-white/88 backdrop-blur-2xl rounded-card px-5 py-4 shadow-float border border-white/50 items-center gap-3.5 hidden lg:flex">
        <div className="w-12 h-12 bg-green rounded-[14px] flex items-center justify-center text-2xl">🔥</div>
        <div>
          <div className="font-serif text-xl">7 Day Streak</div>
          <div className="text-xs text-text-muted mt-0.5">Keep it going!</div>
        </div>
      </div>

      {/* Content Card */}
      <div className="absolute bottom-14 left-6 lg:left-10 z-10 bg-white/92 backdrop-blur-xl rounded-[20px] p-8 lg:p-10 max-w-[540px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] animate-card-up">
        <h1 className="font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.15] tracking-tight mb-3.5">
          Financial literacy for the next generation
        </h1>
        <p className="text-[16px] lg:text-[17px] leading-relaxed text-text-secondary mb-7 max-w-[440px]">
          Modern, gamified financial education for schools, communities, and financial institutions — in a format students actually love.
        </p>
        <Link
          href="#demo"
          className="inline-flex items-center gap-2.5 bg-green text-white px-8 py-3.5 rounded-pill text-base font-semibold hover:bg-green-dark hover:-translate-y-0.5 shadow-btn hover:shadow-[0_8px_24px_rgba(11,138,94,0.35)] transition-all duration-300"
        >
          <Layers size={18} />
          Start learning today
        </Link>
      </div>
    </section>
  );
}
