export default function PhoneMockup() {
  return (
    <div className="relative">
      {/* Main Phone */}
      <div className="w-[300px] h-[600px] bg-white rounded-[40px] shadow-phone border-8 border-text-primary relative overflow-hidden flex flex-col">
        <div className="w-[120px] h-[28px] bg-text-primary rounded-b-[20px] mx-auto relative z-10" />
        <div className="flex-1 bg-linear-to-br from-green-light via-white to-cream p-5 flex flex-col gap-3.5">
          {/* Header */}
          <div className="text-center py-2.5">
            <div className="font-serif text-base">My Classes</div>
            <div className="text-[11px] text-text-muted">3 active courses</div>
          </div>

          {/* Current Lesson Card */}
          <div className="bg-white rounded-[14px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <div className="text-[10px] text-text-muted uppercase tracking-[1px] font-semibold mb-2">Current Lesson</div>
            <div className="font-serif text-[15px] mb-1.5">Saving &amp; Budgeting</div>
            <div className="text-[11px] text-text-secondary leading-relaxed">Learn how to create a budget that works for your lifestyle</div>
            <div className="h-1.5 bg-green-light rounded-full mt-2.5 overflow-hidden">
              <div className="h-full bg-green rounded-full w-[72%]" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-[14px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <div className="text-[10px] text-text-muted uppercase tracking-[1px] font-semibold mb-2">Quick Actions</div>
            <div className="flex gap-1.5 flex-wrap">
              {["📹 Videos", "📝 Quiz", "💬 Ask", "📊 Progress"].map((chip) => (
                <span key={chip} className="bg-green-light text-green-dark text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Streak Card */}
          <div className="bg-green rounded-[14px] p-4 text-white">
            <div className="text-[10px] uppercase tracking-[1px] font-semibold mb-1 opacity-70">Streak</div>
            <div className="flex items-center gap-2">
              <span className="text-[28px]">🔥</span>
              <span className="font-serif text-[22px]">7 Day Streak!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Phone (tilted) */}
      <div className="absolute -right-10 top-20 w-[220px] h-[440px] bg-white rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-6 border-text-primary overflow-hidden rotate-6 hidden md:block">
        <div className="h-full bg-linear-to-b from-cream to-white pt-10 px-3.5 pb-3.5 flex flex-col gap-2.5">
          {[
            { icon: "📊", title: "Class Rankings", sub: "View leaderboard", bg: "bg-green-light" },
            { icon: "🏆", title: "Achievements", sub: "12 badges earned", bg: "bg-[#FFF3E0]" },
            { icon: "📈", title: "Progress Report", sub: "89% completion", bg: "bg-[#E3F2FD]" },
            { icon: "❓", title: "Ask Questions", sub: "Get instant help", bg: "bg-[#FCE4EC]" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-input p-3 shadow-[0_1px_6px_rgba(0,0,0,0.04)] flex items-center gap-2.5">
              <div className={`w-8 h-8 ${item.bg} rounded-lg flex items-center justify-center text-sm`}>
                {item.icon}
              </div>
              <div>
                <div className="font-medium text-sm">{item.title}</div>
                <div className="text-text-muted text-xs">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}