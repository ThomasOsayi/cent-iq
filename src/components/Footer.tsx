import Link from "next/link";

const footerLinks = [
  { href: "/for-schools", label: "For Schools" },
  { href: "/for-institutions", label: "For Institutions" },
  { href: "/foundation", label: "Foundation" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="text-lg font-semibold text-foreground">
            Cent-IQ
          </Link>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Cent-IQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
