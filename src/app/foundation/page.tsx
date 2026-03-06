import { BottomCTA } from "@/components/BottomCTA";

export const metadata = {
  title: "Foundation | Cent-IQ",
  description: "Cent-IQ Foundation — research and impact.",
};

export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Foundation
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Our foundation and mission.
        </p>
      </section>
      <BottomCTA />
    </main>
  );
}
