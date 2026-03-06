const CARDS = [
  { title: "Short-form\nVideos", gradient: "from-green to-green-dark" },
  { title: "Interactive\nLessons", gradient: "from-orange-accent to-[#C56A30]" },
  { title: "Ask\nQuestions", gradient: "from-[#3B82F6] to-[#2563EB]" },
  { title: "Test Your\nKnowledge", gradient: "from-[#8B5CF6] to-[#7C3AED]" },
  { title: "Financial\nFitness", gradient: "from-[#EC4899] to-[#DB2777]" },
];

export function Carousel() {
  return (
    <section className="pb-20">
      <div className="flex gap-5 overflow-x-auto px-10 snap-x snap-mandatory scrollbar-hide">
        {CARDS.map((card) => (
          <div key={card.title} className="shrink-0 w-[260px] bg-white rounded-[20px] overflow-hidden shadow-card snap-start hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
            <div className={`w-full h-[340px] bg-linear-to-br ${card.gradient} flex items-center justify-center relative`}>
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              <span className="relative z-10 text-white font-serif text-xl text-center whitespace-pre-line drop-shadow-lg px-5">{card.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
