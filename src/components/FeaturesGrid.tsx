import { Layers, BarChart3, BookOpen, Users, Code, Video } from "lucide-react";

const FEATURES = [
  { icon: Layers, title: "Teacher Dashboard", desc: "Monitor student progress in real-time, assign specific lessons, and identify students who need extra support." },
  { icon: BarChart3, title: "Class Rankings", desc: "Motivate students with class and school-wide leaderboards that celebrate progress and consistency." },
  { icon: BookOpen, title: "Curriculum Aligned", desc: "Content aligned with state standards and JumpStart financial literacy requirements for seamless integration." },
  { icon: Users, title: "Group Activities", desc: "Facilitate class discussions with live game modes and collaborative challenges that make learning social." },
  { icon: Code, title: "Easy Integration", desc: "Works with Google Classroom, Canvas, and other LMS platforms. Single sign-on available for easy access." },
  { icon: Video, title: "Short-Form Videos", desc: "Bite-sized video lessons in a vertical format students already use and love — keeping engagement high." },
];

export function FeaturesGrid() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-inner text-center">
        <div className="section-label">Features</div>
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">Everything you need to teach financial literacy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white border border-border rounded-card p-9 text-left hover:border-green hover:shadow-[0_8px_30px_rgba(11,138,94,0.08)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-green-light text-green flex items-center justify-center mb-5">
                <f.icon size={24} />
              </div>
              <h3 className="font-serif text-xl mb-2.5 tracking-tight">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-secondary">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
