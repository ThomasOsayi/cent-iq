import Link from "next/link";

const COLUMNS = [
  { title: "Product", links: ["For Schools", "For Institutions", "Foundation", "Curriculum"] },
  { title: "Resources", links: ["Help Center", "Student Login", "Blog", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Accessibility"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border pt-20 pb-10 px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div>
            <Link href="/" className="font-serif text-2xl text-green mb-4 block">CentIQ</Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-[280px]">Financial literacy for the next generation. Empowering students, schools, and communities.</p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-[1px] mb-5">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}><Link href="#" className="text-sm text-text-muted hover:text-green transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-6 flex items-center justify-between flex-wrap gap-4">
          <span className="text-[13px] text-text-muted">&copy; 2026 CentIQ. All rights reserved.</span>
          <span className="text-[13px] text-text-muted">josh@centiqapp.com</span>
        </div>
      </div>
    </footer>
  );
}
