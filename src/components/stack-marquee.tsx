// The one marquee on the page: shows the breadth of the stack without asking for attention.
// Logos come from Simple Icons (AWS from devicon, since Simple Icons dropped it). They are
// applied as CSS masks so every mark takes the theme's muted colour in light and dark mode.
const simple = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
const AWS =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg";

// `wide`: the AWS wordmark sits in a square viewBox with padding, so it needs a larger box.
const stack: { slug: string; name: string; src?: string; wide?: boolean }[] = [
  { slug: "figma", name: "Figma" },
  { slug: "react", name: "React" },
  { slug: "nextdotjs", name: "Next.js" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "tailwindcss", name: "Tailwind CSS" },
  { slug: "nodedotjs", name: "Node.js" },
  { slug: "python", name: "Python" },
  { slug: "go", name: "Go" },
  { slug: "graphql", name: "GraphQL" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "redis", name: "Redis" },
  { slug: "pytorch", name: "PyTorch" },
  { slug: "docker", name: "Docker" },
  { slug: "kubernetes", name: "Kubernetes" },
  { slug: "terraform", name: "Terraform" },
  { slug: "aws", name: "AWS", src: AWS, wide: true },
  { slug: "googlecloud", name: "Google Cloud" },
  { slug: "cloudflare", name: "Cloudflare" },
  { slug: "vercel", name: "Vercel" },
  { slug: "githubactions", name: "GitHub Actions" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14" aria-hidden={hidden || undefined}>
      {stack.map((s) => (
        <li key={s.slug} className="shrink-0">
          <span
            role={hidden ? undefined : "img"}
            aria-label={hidden ? undefined : s.name}
            title={s.name}
            style={{
              maskImage: `url(${s.src ?? simple(s.slug)})`,
              WebkitMaskImage: `url(${s.src ?? simple(s.slug)})`,
            }}
            className={`block bg-muted [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] transition-colors duration-200 hover:bg-ink ${
              s.wide ? "-my-2 size-11" : "size-7"
            }`}
          />
        </li>
      ))}
    </ul>
  );
}

export function StackMarquee() {
  return (
    <section aria-label="Technologies we work with" className="border-y border-line py-10">
      <p className="mx-auto mb-8 max-w-7xl px-4 text-sm text-muted md:px-8">
        The stack we work in, from first sketch to production.
      </p>
      <div className="marquee group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex group-hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
