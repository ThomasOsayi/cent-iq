const integrations = ["Google Classroom", "Canvas", "Clever SSO", "ClassLink", "Schoology"];
const icons = ["🎓", "📚", "🔗", "☁️", "🏫"];

export default function Integrations() {
  return (
    <section className="section-padding bg-green text-white text-center relative overflow-hidden">
      <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] rounded-full" />
      <div className="section-inner relative z-10">
        <div className="text-[13px] font-bold tracking-[2px] uppercase text-white/60 mb-4">Integrations</div>
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
          Best-in-class LMS connectivity
        </h2>
        <p className="text-[17px] leading-relaxed text-white/75 max-w-[600px] mx-auto">
          CentIQ integrates with the tools your school already uses. Single sign-on, automatic grade sync, and rostering make setup effortless.
        </p>
        <div className="flex gap-7 items-center justify-center mt-10 flex-wrap">
          {icons.map((icon, i) => (
            <div key={i} className="w-12 h-12 bg-cream rounded-[12px] flex items-center justify-center text-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              {icon}
            </div>
          ))}
        </div>
        <div className="mt-5 flex gap-5 justify-center flex-wrap text-sm text-white/70">
          {integrations.map((name, i) => (
            <span key={name}>
              {name}{i < integrations.length - 1 && <span className="ml-5">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
