import Link from "next/link";

export default function PromoBanner() {
  return (
    <div className="bg-green text-white text-center py-3 px-6 text-[15px] font-medium">
      ✨ Now available: 400+ standards-aligned financial literacy lessons.{" "}
      <Link href="/for-schools" className="underline hover:opacity-90 transition-opacity">
        Learn more
      </Link>
    </div>
  );
}