import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Foundation() {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="h-[400px] bg-cream-dark rounded-[24px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-green to-green-dark opacity-10" />
            <div className="relative z-10 text-center text-green-dark">
              <svg className="w-[60px] h-[60px] mx-auto mb-3 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              <p className="text-sm font-semibold">CentIQ Foundation</p>
              <p className="text-xs opacity-60 mt-1">[Community photo placeholder]</p>
            </div>
          </div>
          <div>
            <div className="section-label">CentIQ Foundation</div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
              Investing in financial futures
            </h2>
            <p className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mb-6">
              The CentIQ Foundation partners with schools and organizations serving underserved communities to bring financial literacy where it&apos;s needed most — completely free.
            </p>
            <ul className="flex flex-col gap-3.5 mb-8">
              <li className="flex items-start gap-3 text-base text-text-secondary leading-relaxed">
                <CheckCircle size={22} className="text-green shrink-0 mt-0.5" />
                <div><strong className="text-text-primary">Community Focus</strong><br /><span className="text-text-muted">Reaching low-to-moderate income communities</span></div>
              </li>
              <li className="flex items-start gap-3 text-base text-text-secondary leading-relaxed">
                <CheckCircle size={22} className="text-green shrink-0 mt-0.5" />
                <div><strong className="text-text-primary">Full Platform Access</strong><br /><span className="text-text-muted">400+ lessons included at no cost</span></div>
              </li>
            </ul>
            <Link href="/foundation" className="inline-flex items-center gap-2 bg-green text-white px-7 py-3.5 rounded-pill text-[15px] font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-btn transition-all duration-300">
              Learn About Our Foundation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
