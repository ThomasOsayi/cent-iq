"use client";

import { useState } from "react";

const tabs = [
  { icon: "📊", label: "Dashboard" },
  { icon: "📚", label: "Lessons" },
  { icon: "👩‍🎓", label: "Students" },
  { icon: "📈", label: "Analytics" },
  { icon: "🏆", label: "Rankings" },
  { icon: "⚙️", label: "Settings" },
];

const dashCards = [
  { label: "Active Students", val: "247", sub: "↑ 12% this month", fill: 78 },
  { label: "Lessons Completed", val: "1,832", sub: "Across 6 classes", fill: 65 },
  { label: "Avg. Score", val: "89%", sub: "↑ 5% from last week", fill: 89 },
];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding text-center">
      <div className="section-inner">
        <div className="section-label">One platform for everything</div>
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">
          Your home base for financial literacy
        </h2>
        <p className="text-[17px] leading-relaxed text-text-secondary max-w-[600px] mx-auto">
          Manage your classes, track student progress, assign lessons, view analytics, and more — all from one beautiful dashboard built for educators.
        </p>

        <div className="mt-14 bg-white rounded-[20px] border border-border overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
          {/* Tabs */}
          <div className="flex border-b border-border overflow-x-auto scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-7 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                  activeTab === i
                    ? "text-green border-green"
                    : "text-text-muted border-transparent hover:text-text-primary"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-5 min-h-[260px]">
            {dashCards.map((card) => (
              <div key={card.label} className="bg-cream rounded-[14px] p-6 text-left">
                <div className="text-[11px] font-bold uppercase tracking-[1px] text-text-muted mb-3">
                  {card.label}
                </div>
                <div className="font-serif text-4xl mb-1">{card.val}</div>
                <div className="text-[13px] text-text-muted">{card.sub}</div>
                <div className="h-1.5 bg-green-light rounded-full mt-4 overflow-hidden">
                  <div
                    className="h-full bg-green rounded-full transition-all duration-1000"
                    style={{ width: `${card.fill}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
