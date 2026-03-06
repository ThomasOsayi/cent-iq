import { BottomCTA } from "@/components/BottomCTA";

export const metadata = {
  title: "For Institutions | Cent-IQ",
  description: "Cent-IQ for institutions and organizations.",
};

export default function ForInstitutionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          For Institutions
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Scale assessment and insights for your institution.
        </p>
      </section>
      <BottomCTA />
    </main>
  );
}
