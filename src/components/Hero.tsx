import Link from "next/link";
import { Layers, Video } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 lg:px-10 pt-20 pb-16 bg-linear-to-b from-warm-white to-cream">
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(11,138,94,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 bg-green-badge text-green-dark px-4 py-2 rounded-pill text-[13px] font-semibold tracking-wide mb-7">
            <Layers size={14} />
            400+ Standards-Aligned Lessons
          </div>
          <h1 className="font-serif text-[clamp(40px,5vw,60px)] leading-[1.1] tracking-tight mb-6">
            Financial literacy for<br />the <em className="italic text-green">next generation</em>
          </h1>
          <p className="text-lg leading-relaxed text-text-secondary mb-9 max-w-[480px]">
            CentIQ brings modern, gamified financial education to schools, communities, and financial institutions — in a format students actually love.
          </p>
          <div className="flex gap-3.5 flex-wrap mb-12">
            <Link href="#demo" className="inline-flex items-center gap-2 bg-green text-white px-7 py-3.5 rounded-pill text-[15px] font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-btn transition-all duration-300">
              Book a Demo
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 border-[1.5px] border-border px-7 py-3.5 rounded-pill text-[15px] font-semibold hover:border-text-muted hover:bg-black/2 transition-all duration-300">
              <Video size={16} />
              Watch Video
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-0.5 text-orange-accent">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              ))}
            </div>
            <div className="text-sm text-text-muted">
              <strong className="text-text-primary">95% of students</strong> found it easy to understand
            </div>
          </div>
        </div>
        <div className="flex justify-center relative">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
