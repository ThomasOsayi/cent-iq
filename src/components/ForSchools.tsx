import Link from "next/link";
import { CheckCircle } from "lucide-react";

const students = [
  { emoji: "👩‍🎓", name: "Sarah M.", detail: "Period 2 · Budgeting", score: "92%", bg: "bg-green-light" },
  { emoji: "👨‍🎓", name: "Marcus J.", detail: "Period 2 · Saving", score: "88%", bg: "bg-[#FFF3E0]" },
  { emoji: "👩‍🎓", name: "Emily K.", detail: "Period 3 · Credit", score: "95%", bg: "bg-[#E3F2FD]" },
  { emoji: "👨‍🎓", name: "David R.", detail: "Period 3 · Investing", score: "79%", bg: "bg-[#FCE4EC]" },
];

const checklist = [
  "Teacher Dashboard to track student progress and assign lessons",
  "Class Rankings that drive healthy competition and engagement",
  "Curriculum aligned content that meets state financial literacy requirements",
];

export default function ForSchools() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Mockup */}
          <div className="bg-green-light rounded-[24px] p-10 flex items-center justify-center min-h-[380px]">
            <div className="w-full max-w-[420px] bg-white rounded-card shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="px-5 py-4 border-b border-border flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
              </div>
              <div className="p-5">
                <div className="text-[12px] font-bold text-text-muted uppercase tracking-[1px] mb-4">Teacher Dashboard</div>
                {students.map((s) => (
                  <div key={s.name} className="flex items-center justify-between py-3 border-b border-cream-dark last:border-none">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 ${s.bg} rounded-input flex items-center justify-center text-base`}>{s.emoji}</div>
                      <div>
                        <div className="text-sm font-semibold">{s.name}</div>
                        <div className="text-xs text-text-muted">{s.detail}</div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-green">{s.score}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Content */}
          <div>
            <div className="section-label">For Schools</div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
              Transform financial education in your classroom
            </h2>
            <p className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mb-6">
              400+ lessons aligned to state and national standards. Give students the financial skills they need with engaging, curriculum-aligned content.
            </p>
            <ul className="flex flex-col gap-3.5 mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-text-secondary leading-relaxed">
                  <CheckCircle size={22} className="text-green shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/for-schools" className="inline-flex items-center gap-2 bg-green text-white px-7 py-3.5 rounded-pill text-[15px] font-semibold hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-btn transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
