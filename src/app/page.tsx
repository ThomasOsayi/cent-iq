import { PromoBanner } from "@/components/PromoBanner";
import { BottomCTA } from "@/components/BottomCTA";
import { FAQ } from "@/components/FAQ";
import { DemoForm } from "@/components/DemoForm";
import { PhoneMockup } from "@/components/PhoneMockup";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PromoBanner />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Cent-IQ
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Assessment and insights for schools and institutions.
            </p>
          </div>
          <div className="flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </section>
      <section id="demo" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Request a demo</h2>
        <div className="mt-6 max-w-md">
          <DemoForm />
        </div>
      </section>
      <FAQ />
      <BottomCTA />
    </main>
  );
}
