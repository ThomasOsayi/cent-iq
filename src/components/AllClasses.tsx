import { CheckCircle } from "lucide-react";

const classes = [
  { icon: "📗", name: "Period 2 — Economics", detail: "28 students · Budgeting unit", score: "92%", scoreColor: "text-green", bg: "bg-green-light" },
  { icon: "📙", name: "Period 3 — Personal Finance", detail: "32 students · Credit unit", score: "87%", scoreColor: "text-green", bg: "bg-[#FFF3E0]" },
  { icon: "📘", name: "Period 5 — Financial Lit", detail: "24 students · Investing unit", score: "78%", scoreColor: "text-orange-accent", bg: "bg-[#E3F2FD]" },
];

const checks = [
  "Multi-class management with period-level detail",
  "Drag-and-drop lesson assignment",
  "At-a-glance student performance",
];

export default function AllClasses() {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="section-label">Class Management</div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
              All your classes, in one place
            </h2>
            <p className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mb-6">
              Manage multiple classes, periods, and grade levels from a single dashboard. Assign lessons, track progress, and identify students who need support.
            </p>
            <ul className="flex flex-col gap-3.5 mb-8">
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
                <div className="text-xs font-bold text-text-muted uppercase tracking-[1px] mb-4">My Classes</div>
                {classes.map((c) => (
                  <div key={c.name} className="flex items-center justify-between py-3.5 border-b border-cream-dark last:border-none">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 ${c.bg} rounded-input flex items-center justify-center text-base`}>{c.icon}</div>
                      <div>
                        <div className="text-sm font-semibold">{c.name}</div>
                        <div className="text-xs text-text-muted">{c.detail}</div>
                      </div>
                    </div>
                    <div className={`text-sm font-semibold ${c.scoreColor}`}>{c.score}</div>
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
