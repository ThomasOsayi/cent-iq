import Link from "next/link";

export function BottomCTA() {
  return (
    <section className="bg-green text-white text-center py-[100px] px-10 relative overflow-hidden">
      <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] rounded-full" />
      <div className="max-w-[640px] mx-auto relative z-10">
        <h2 className="font-serif text-[clamp(32px,4vw,46px)] leading-[1.15] tracking-tight mb-5">Ready to bring financial literacy to your community?</h2>
        <p className="text-[17px] leading-relaxed opacity-85 mb-9">Join schools and institutions across the country in empowering the next generation with essential money skills.</p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link href="#demo" className="inline-flex items-center gap-2 bg-white text-green-dark px-8 py-3.5 rounded-pill text-base font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-300">
            Book a Demo
          </Link>
          <Link href="#" className="inline-flex items-center gap-2 border-[1.5px] border-white/40 text-white px-8 py-3.5 rounded-pill text-base font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
