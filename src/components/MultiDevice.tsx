import { CheckCircle } from "lucide-react";

const checks = [
  "Web app for teachers and administrators",
  "Native iOS and Android apps for students",
  "Works offline, syncs when connected",
];

export default function MultiDevice() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-2">
            <div className="section-label">Multi-Platform</div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
              On every device, always in sync
            </h2>
            <p className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mb-6">
              Students learn on their phones. Teachers manage from their desktops. CentIQ works seamlessly across web, iOS, and Android — with everything synced in real time.
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

          {/* Phones visual */}
          <div className="order-1 lg:order-1 bg-linear-to-br from-green to-green-dark rounded-[24px] p-12 flex items-center justify-center min-h-[420px]">
            <div className="flex gap-4 items-start justify-center">
              {/* Phone 1 */}
              <div className="w-[130px] bg-white rounded-[24px] border-[5px] border-text-primary overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] -rotate-4">
                <div className="w-[50px] h-[12px] bg-text-primary rounded-b-input mx-auto" />
                <div className="p-2.5 bg-linear-to-br from-green-light via-white to-cream">
                  <div className="bg-green text-white rounded-lg p-2.5 text-[9px] mb-2">
                    <div className="opacity-70">Streak</div>
                    <div className="text-sm font-serif">🔥 7 Days</div>
                  </div>
                  <div className="bg-white rounded-lg p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] text-[10px]">
                    <div className="font-semibold">Budgeting 101</div>
                    <div className="text-text-muted text-[9px]">72% complete</div>
                  </div>
                </div>
              </div>

              {/* Phone 2 (center, larger) */}
              <div className="w-[150px] bg-white rounded-[28px] border-[6px] border-text-primary overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-10">
                <div className="w-[60px] h-[14px] bg-text-primary rounded-b-[12px] mx-auto" />
                <div className="p-3 bg-linear-to-br from-green-light via-white to-cream">
                  <div className="bg-white rounded-lg p-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)] text-center mb-2">
                    <div className="font-serif text-xs mb-0.5">My Classes</div>
                    <div className="text-[9px] text-text-muted">3 active courses</div>
                  </div>
                  <div className="bg-white rounded-lg p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] text-[10px] mb-2">
                    <div className="font-semibold">Quiz: Credit Scores</div>
                    <div className="text-green text-[9px] font-semibold">Score: 94%</div>
                  </div>
                  <div className="bg-green-light rounded-lg p-2.5 text-[10px]">
                    <div className="font-semibold text-green-dark">🏆 Rank #3</div>
                  </div>
                </div>
              </div>

              {/* Phone 3 */}
              <div className="w-[130px] bg-white rounded-[24px] border-[5px] border-text-primary overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] rotate-4">
                <div className="w-[50px] h-[12px] bg-text-primary rounded-b-input mx-auto" />
                <div className="p-2.5 bg-linear-to-br from-green-light via-white to-cream">
                  <div className="bg-white rounded-lg p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] text-[10px] mb-2">
                    <div className="font-semibold">Progress</div>
                    <div className="h-1 bg-green-light rounded-full mt-1.5"><div className="w-[85%] h-full bg-green rounded-full" /></div>
                  </div>
                  <div className="bg-white rounded-lg p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] text-[10px]">
                    <div className="font-semibold">Badges</div>
                    <div className="mt-1">🥇🎯📊</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
