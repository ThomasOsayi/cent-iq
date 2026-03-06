import { CheckCircle } from "lucide-react";

const cards = [
  {
    icon: "📹",
    title: "Short-form video lessons",
    desc: "Bite-sized video content in vertical format. Students learn through the same swipe-based experience they use every day.",
    checks: ["400+ curriculum-aligned videos", "Mobile-first format"],
  },
  {
    icon: "📊",
    title: "Real-time analytics",
    desc: "See exactly where students are, who needs help, and how your classes are performing — all updated in real time.",
    checks: ["Student-level insights", "Exportable reports"],
  },
  {
    icon: "🎮",
    title: "Gamified learning",
    desc: "Streaks, leaderboards, badges, and live challenges keep students motivated and coming back for more.",
    checks: ["Class & school rankings", "Achievement badges"],
  },
];

export default function EverythingYouNeed() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-inner text-center">
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
          Everything you need, all in one platform
        </h2>
        <p className="text-[17px] leading-relaxed text-text-secondary max-w-[600px] mx-auto">
          Standards-aligned curriculum, real-time analytics, and gamified content that actually engages students — delivered in a format they already love.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-border rounded-card p-9 hover:border-green hover:shadow-[0_8px_30px_rgba(11,138,94,0.08)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-[32px] mb-4">{card.icon}</div>
              <h3 className="font-serif text-xl mb-2.5 tracking-tight">{card.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-secondary mb-4">{card.desc}</p>
              <ul className="flex flex-col gap-2.5">
                {card.checks.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <CheckCircle size={18} className="text-green shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
