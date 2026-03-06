import { CheckCircle } from "lucide-react";

const checks = [
  "Class performance trends over time",
  "Topic mastery breakdowns",
  "Engagement and time-on-task metrics",
];

const bars = [40, 55, 45, 70, 60, 85, 78, 92];

export default function ReportsSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-2">
            <div className="section-label">Reports &amp; Analytics</div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
              Reports as powerful as they are beautiful
            </h2>
            <p className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mb-6">
              Dive into class-wide trends or zoom into individual performance. Custom reports make it easy to share results with administrators and stakeholders.
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

          {/* Visual */}
          <div className="order-1 lg:order-1 bg-green-light rounded-[24px] p-10 flex items-center justify-center min-h-[380px]">
            <div className="w-full text-center">
              {/* Stat pills */}
              <div className="flex gap-3 justify-center mb-6">
                <div className="bg-white rounded-[12px] px-6 py-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="text-[11px] text-text-muted uppercase tracking-[1px] mb-1">Avg Score</div>
                  <div className="font-serif text-[28px] text-green">89%</div>
                </div>
                <div className="bg-white rounded-[12px] px-6 py-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="text-[11px] text-text-muted uppercase tracking-[1px] mb-1">Completion</div>
                  <div className="font-serif text-[28px] text-orange-accent">73%</div>
                </div>
              </div>
              {/* Bar chart */}
              <div className="bg-white rounded-card p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="flex items-end gap-2 h-[120px] justify-center">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className={`w-6 rounded-t ${i >= 5 ? "bg-green" : "bg-green-light"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="text-[11px] text-text-muted mt-3">Class performance: Sep → Apr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
