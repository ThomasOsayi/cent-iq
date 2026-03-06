import Link from "next/link";

interface PromoBannerProps {
  title?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function PromoBanner({
  title = "Get started with Cent-IQ",
  ctaText = "Request a demo",
  ctaHref = "#demo",
}: PromoBannerProps) {
  return (
    <div className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row">
        <p className="text-center text-sm font-medium sm:text-left">{title}</p>
        <Link
          href={ctaHref}
          className="shrink-0 rounded-full border border-background/30 bg-background/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-background/20"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
