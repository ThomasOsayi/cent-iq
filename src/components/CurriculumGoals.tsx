import { CheckCircle } from "lucide-react";

const topics = [
  { icon: "💰", title: "Saving & Budgeting", detail: "12 of 12 lessons", status: "✓", statusColor: "text-green" },
  { icon: "💳", title: "Credit & Debt", detail: "8 of 10 lessons", status: "80%", statusColor: "text-orange-accent" },
  { icon: "📈", title: "Investing & Growth", detail: "5 of 14 lessons", status: "36%", statusColor: "text-text-muted" },
  { icon: "🏠", title: "Taxes & Income", detail: "0 of 8 lessons", status: "—", statusColor: "text-text-muted" },
];

const checks = [
  "State standards mapping for all 50 states",
  "Coverage tracking and gap analysis",
  "Suggested lesson plans to fill gaps",
];

export default function CurriculumGoals() {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="section-label">Curriculum Coverage</div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
              Your curriculum goals, on track
            </h2>
            <p className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mb-6">
              Map CentIQ lessons to your state&apos;s requirements. Track coverage across all required financial literacy topics and see exactly what&apos;s been taught.
            </p>
            <ul className="flex flex-col gap-3.5">
              {checks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-text-secondary leading-relaxed">
                  <CheckCircle size={22} className="text-green shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-cream rounded-[24px] p-10 flex items-center justify-center min-h-[380px]">
            <div className="w-full max-w-[380px] flex flex-col gap-3">
              {topics.map((t) => (
                <div key={t.title} className="bg-white rounded-[14px] px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{t.icon}</span>
                    <div>
                      <div className="text-sm font-semibold">{t.title}</div>
                      <div className="text-[11px] text-text-muted">{t.detail}</div>
                    </div>
                  </div>
                  <div className={`text-sm font-bold ${t.statusColor}`}>{t.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
