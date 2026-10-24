import { Logo } from "./logo";

const links = [
  { href: "#model", label: "How we work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#team", label: "Team" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted">AI adoption and digital transformation, built by a team in Greece.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted transition-colors duration-200 hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Kuroba</p>
      </div>
    </footer>
  );
}
