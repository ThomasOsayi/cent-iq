import Link from "next/link";
import { CheckCircle } from "lucide-react";

const BULLET_POINTS = [
  "Rewards Programs with tangible financial learning incentives",
  "Branded Experiences aligned to your institution's brand",
  "Community Reach to expand impact and meet CRA requirements",
];

const STATS = [
  { val: "2,400+", label: "Students Reached", bg: "bg-green-light", color: "text-green" },
  { val: "95%", label: "Satisfaction Rate", bg: "bg-cream", color: "text-orange-accent" },
  { val: "48", label: "Partner Institutions", bg: "bg-cream", color: "text-orange-accent" },
  { val: "CRA", label: "Compliance Ready", bg: "bg-green-light", color: "text-green" },
];

export function ForInstitutions() {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="section-label">For Institutions</div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">Drive community impact through financial empowerment</h2>
            <p className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mb-6">
              Partner with CentIQ to bring financial literacy to your customers and communities while meeting your CRA and community investment goals.
            </p>
            <ul className="flex flex-col gap-3.5 mb-8">
              {BULLET_POINTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-text-secondary leading-relaxed">
                  <CheckCircle size={22} className="text-green shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/for-institutions" className="inline-flex items-center gap-2 bg-green text-white px-7 py-3.5 rounded-pill text-[15px] font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-btn transition-all duration-300">
              Explore Partnerships
            </Link>
          </div>
          <div className="order-1 lg:order-2 bg-cream rounded-[24px] p-10 flex items-center justify-center min-h-[380px]">
            <div className="w-full max-w-[420px] bg-white rounded-card shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="px-5 py-4 border-b border-border flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
              </div>
              <div className="p-5">
                <div className="text-[12px] font-bold text-text-muted uppercase tracking-[1px] mb-4">Community Impact</div>
                <div className="grid grid-cols-2 gap-3">
                  {STATS.map((s) => (
                    <div key={s.label} className={`${s.bg} p-4 rounded-[12px] text-center`}>
                      <div className={`font-serif text-[28px] ${s.color}`}>{s.val}</div>
                      <div className="text-[11px] text-text-muted mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
