import { BottomCTA } from "@/components/BottomCTA";

export const metadata = {
  title: "For Schools | Cent-IQ",
  description: "Cent-IQ for schools and educators.",
};

export default function ForSchoolsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          For Schools
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Empower your school with Cent-IQ.
        </p>
      </section>
      <BottomCTA />
    </main>
  );
}
