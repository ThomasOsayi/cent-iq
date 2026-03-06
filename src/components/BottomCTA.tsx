import Link from "next/link";

interface BottomCTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function BottomCTA({
  title = "Ready to get started?",
  description = "Request a demo or get in touch with our team.",
  ctaText = "Request a demo",
  ctaHref = "#demo",
}: BottomCTAProps) {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
        <Link
          href={ctaHref}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
