const testimonials = [
  { text: "Finally, a financial literacy tool my students actually want to use. The engagement levels have been incredible since we started with CentIQ.", author: "Mr. Rodriguez", role: "Economics Teacher, Bishop Mora" },
  { text: "CentIQ made learning about money actually fun. The videos are short and easy to understand, and the quizzes keep me on my toes.", author: "Maria S.", role: "11th Grade Student" },
  { text: "The teacher dashboard saves me hours every week. I can see exactly where each student is and assign targeted lessons in seconds.", author: "Ms. Chen", role: "Financial Literacy Teacher, Lincoln HS" },
  { text: "I use CentIQ outside of class too. I learned how to start saving and now I'm working towards my first investment. It feels real.", author: "James T.", role: "12th Grade Student" },
  { text: "Integration with Google Classroom was seamless. Our whole school was onboarded in under a week with zero friction from teachers.", author: "Dr. Patel", role: "Assistant Principal, Roosevelt Academy" },
  { text: "As a community bank partner, CentIQ helps us meet CRA requirements while genuinely making an impact. The reporting is exactly what regulators want to see.", author: "Jennifer K.", role: "VP Community Development, First National Bank" },
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="section-inner text-center">
        <div className="inline-flex items-center gap-1.5 bg-orange-accent text-white text-[15px] font-bold px-3.5 py-1.5 rounded-pill mb-2">
          ★ 4.9
        </div>
        <div className="text-sm text-text-muted mb-2">From educators and students nationwide</div>
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
          What educators are saying
        </h2>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white border border-border rounded-card p-7 text-left hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex gap-0.5 text-orange-accent mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] leading-relaxed text-text-secondary mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="text-[13px] font-semibold">{t.author}</div>
              <div className="text-[12px] text-text-muted">{t.role}</div>
            </div>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16 items-center mt-20 bg-cream rounded-[20px] p-12 text-left">
          <div className="flex flex-col gap-4">
            <span className="font-serif text-xl text-text-muted opacity-50">EdSurge</span>
            <span className="font-serif text-xl text-text-muted opacity-50">Forbes</span>
            <span className="font-serif text-xl text-text-muted opacity-50">Education Week</span>
          </div>
          <div>
            <p className="font-serif text-[22px] leading-[1.45] italic">
              &ldquo;CentIQ is redefining how the next generation learns about money. Their approach — short-form video, gamification, and real curriculum alignment — is exactly what schools have been waiting for.&rdquo;
            </p>
            <div className="text-[13px] text-text-muted mt-4">
              <strong className="text-text-primary">EdSurge</strong> · Best EdTech Tools of 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
