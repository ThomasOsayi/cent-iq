import Link from "next/link";

export default function PromoBanner() {
  return (
    <div className="sticky top-0 z-[200] bg-green text-white text-center py-2.5 px-6 text-sm font-medium tracking-wide shadow-[0_2px_12px_rgba(11,138,94,0.3)]">
      ✨ Now available: 400+ standards-aligned financial literacy lessons.{" "}
      <Link href="/for-schools" className="underline font-bold hover:opacity-85 transition-opacity">
        Learn more
      </Link>
    </div>
  );
}