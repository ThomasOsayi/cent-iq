const resources = [
  { label: "Getting Started", title: "Implementation Guide", desc: "Everything you need to get CentIQ running in your classroom — from setup to your first lesson.", link: "Read guide →" },
  { label: "Curriculum", title: "Standards Alignment Map", desc: "See how CentIQ's 400+ lessons map to your state's financial literacy requirements.", link: "View standards →" },
  { label: "For Partners", title: "Institution Partnership Guide", desc: "Learn how financial institutions partner with CentIQ to meet CRA goals while making real community impact.", link: "Learn more →" },
];

export default function Resources() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-inner">
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
          Resources for educators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {resources.map((r) => (
            <div key={r.title} className="bg-white border border-border rounded-card p-8 hover:border-green hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,138,94,0.08)] transition-all duration-300">
              <div className="text-xs font-bold uppercase tracking-[1px] text-green mb-3">{r.label}</div>
              <h3 className="font-serif text-xl mb-2 tracking-tight">{r.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary mb-5">{r.desc}</p>
              <span className="text-sm font-semibold text-green">{r.link}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
