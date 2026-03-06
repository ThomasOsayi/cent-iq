import { CheckCircle } from "lucide-react";

const lessons = [
  { title: "Creating Your First Budget", meta: "Video · 4 min · Quiz", gradient: "from-green to-green-dark" },
  { title: "Understanding Credit Scores", meta: "Video · 5 min · Quiz", gradient: "from-orange-accent to-[#C56A30]" },
  { title: "Intro to Compound Interest", meta: "Video · 3 min · Quiz", gradient: "from-[#3B82F6] to-[#2563EB]" },
];

const checks = [
  "Covers budgeting, credit, investing, taxes, and more",
  "Mapped to JumpStart and state standards",
  "Auto-generates quizzes from lesson content",
];

export default function LessonLibrary() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div className="section-label">Lesson Library</div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
              Every lesson, organized and searchable
            </h2>
            <p className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mb-6">
              Browse 400+ standards-aligned lessons organized by topic, grade level, and state standards. Filter, search, and assign in seconds.
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

          {/* Mockup */}
          <div className="order-2 lg:order-1 bg-green-light rounded-[24px] p-10 flex items-center justify-center min-h-[380px]">
            <div className="w-full max-w-[420px] bg-white rounded-card shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="px-5 py-4 border-b border-border flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
              </div>
              <div className="p-5">
                {/* Filter chips */}
                <div className="flex gap-2 mb-4">
                  <span className="px-3.5 py-1.5 bg-green text-white rounded-full text-xs font-semibold">All Topics</span>
                  <span className="px-3.5 py-1.5 bg-green-light text-green-dark rounded-full text-xs font-semibold">Budgeting</span>
                  <span className="px-3.5 py-1.5 bg-cream rounded-full text-xs font-semibold text-text-muted">Credit</span>
                </div>
                {lessons.map((l) => (
                  <div key={l.title} className="flex items-center justify-between py-3.5 border-b border-cream-dark last:border-none">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-linear-to-br ${l.gradient} rounded-input shrink-0`} />
                      <div>
                        <div className="text-[13px] font-semibold">{l.title}</div>
                        <div className="text-[11px] text-text-muted">{l.meta}</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-green font-semibold">Assign →</span>
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
