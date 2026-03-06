import Link from "next/link";

export default function PromoBanner() {
  return (
    <div className="bg-green text-white text-center py-2.5 px-5 text-sm font-medium tracking-wide">
      ✨ Now available: 400+ standards-aligned financial literacy lessons.{" "}
      <Link href="#" className="underline font-semibold hover:opacity-80 transition-opacity">
        Learn more
      </Link>
    </div>
  );
}