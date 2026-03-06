export default function SocialProofBar() {
  return (
    <div className="border-b border-border py-7 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-10 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5 text-orange-accent">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-text-muted">
            <strong className="text-text-primary">95% of students</strong> found it easy to understand
          </span>
        </div>
        <div className="hidden md:block w-px h-7 bg-border" />
        <div className="hidden md:flex gap-10 items-center">
          {["Forbes", "EdSurge", "TechCrunch", "Education Week"].map((name) => (
            <span key={name} className="font-serif text-lg text-text-muted opacity-50 whitespace-nowrap">{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
