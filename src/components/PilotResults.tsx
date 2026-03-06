const STATS = [
  { number: "95%", label: "Found it easy to understand" },
  { number: "89%", label: "Said it helped with class content" },
  { number: "73%", label: "Rated it fun or engaging" },
  { number: "53%", label: "Used it outside of class" },
];

export function PilotResults() {
  return (
    <section className="section-padding bg-green text-white text-center relative overflow-hidden">
      <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] rounded-full" />
      <div className="section-inner relative z-10">
        <div className="text-[13px] font-bold tracking-[2px] uppercase text-white/70 mb-4">Pilot Results</div>
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">Real results from Bishop Mora Salesian</h2>
        <p className="text-[17px] leading-relaxed opacity-80 max-w-[500px] mx-auto">
          Results from our pilot demonstrate the real-world impact of engaging financial education.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {STATS.map((s) => (
            <div key={s.number}>
              <div className="font-serif text-[56px] leading-none tracking-tight mb-2.5">{s.number}</div>
              <div className="text-[15px] text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
