const TESTIMONIALS = [
  { text: "CentIQ made learning about money actually fun. The videos are short and easy to understand, and the quizzes keep me on my toes.", author: "Maria S.", role: "11th Grade Student" },
  { text: "Finally, a financial literacy tool that my students actually want to use. The engagement levels have been incredible since we started.", author: "Mr. Rodriguez", role: "Economics Teacher, Bishop Mora" },
  { text: "I use CentIQ outside of class too. I learned how to start saving and now I'm working towards my first investment. It feels real.", author: "James T.", role: "12th Grade Student" },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-inner text-center">
        <div className="inline-flex items-center gap-1.5 bg-orange-accent text-white text-[15px] font-bold px-3.5 py-1.5 rounded-pill mb-2">
          ★ 4.9
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">What students are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="bg-white border border-border rounded-card p-8 text-left hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex gap-0.5 text-orange-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-text-secondary italic mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="text-sm font-semibold">{t.author}</div>
              <div className="text-[13px] text-text-muted">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
