import { CheckCircle } from "lucide-react";

const students = [
  { emoji: "👩‍🎓", name: "Sarah M.", pct: 95, color: "bg-green", bg: "bg-green-light" },
  { emoji: "👨‍🎓", name: "Marcus J.", pct: 88, color: "bg-green", bg: "bg-[#FFF3E0]" },
  { emoji: "👨‍🎓", name: "David R.", pct: 52, color: "bg-orange-accent", bg: "bg-[#FCE4EC]", warning: true },
];

const checks = [
  "Individual student progress dashboards",
  "Early warning flags for struggling students",
  "Exportable reports for administration",
];

export default function StudentAnalytics() {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="section-label">Student Analytics</div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
              Track every student&apos;s progress
            </h2>
            <p className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mb-6">
              Know exactly where each student stands. See completion rates, quiz scores, time spent, and engagement patterns — then intervene before they fall behind.
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
            <div className="w-full max-w-[420px] bg-white rounded-card shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="px-5 py-4 border-b border-border flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
              </div>
              <div className="p-5">
                <div className="text-xs font-bold text-text-muted uppercase tracking-[1px] mb-4">Student Progress</div>
                {students.map((s) => (
                  <div key={s.name} className="flex items-center justify-between py-3.5 border-b border-cream-dark last:border-none">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${s.bg} rounded-full flex items-center justify-center text-sm`}>{s.emoji}</div>
                      <div>
                        <div className="text-[13px] font-semibold">{s.name}</div>
                        {s.warning && <div className="text-[10px] text-orange-accent font-semibold">⚠️ Needs attention</div>}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[120px] h-1.5 bg-green-light rounded-full overflow-hidden">
                        <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                      </div>
                      <span className="text-[11px] text-text-muted w-8 text-right">{s.pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
