const stack = [
  "Figma", "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
  "Python", "Go", "GraphQL", "PostgreSQL", "Redis", "PyTorch", "Docker",
  "Kubernetes", "Terraform", "AWS", "Google Cloud", "Cloudflare", "Vercel",
  "GitHub Actions",
];

export function StackMarquee() {
  return (
    <section aria-label="Technologies we work with" className="stack-section">
      <div className="stack-intro">
        <h2>The tools behind useful AI and resilient digital products.</h2>
      </div>
      <ul className="stack-list">
        {stack.map((name, index) => (
          <li key={name}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
