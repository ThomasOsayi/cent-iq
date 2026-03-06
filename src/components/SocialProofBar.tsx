const PRESS_NAMES = ["Forbes", "EdSurge", "TechCrunch", "Education Week", "Fast Company"];

export function SocialProofBar() {
  return (
    <div className="border-b border-border py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-16 flex-wrap">
        {PRESS_NAMES.map((name) => (
          <span key={name} className="font-serif text-xl text-text-muted opacity-50 whitespace-nowrap">{name}</span>
        ))}
      </div>
    </div>
  );
}
