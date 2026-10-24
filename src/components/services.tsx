import { Reveal } from "./reveal";
import { SegmentDisplay } from "./segment-display";

const services = [
  {
    title: "Product design",
    body: "Research, flows and interfaces people understand on first use. We hand over a design system, not a pile of screens.",
    tags: ["UX research", "UI design", "Design systems"],
  },
  {
    title: "Frontend",
    body: "Fast, accessible React and Next.js apps that stay maintainable as the product and the team grow.",
    tags: ["React", "Next.js", "Accessibility"],
  },
  {
    title: "Backend and APIs",
    body: "Data models, APIs and integrations written so the next engineer can read and change them.",
    tags: ["Node.js", "Python", "Go", "Postgres"],
  },
  {
    title: "Cloud and infrastructure",
    body: "Infrastructure as code, CI/CD and monitoring, so releases are routine and outages are rare.",
    tags: ["AWS", "Terraform", "Kubernetes"],
  },
  {
    title: "AI adoption",
    body: "Find practical use cases, connect AI to the systems and data your teams rely on, and evaluate it before it reaches production.",
    tags: ["Use-case discovery", "AI integration", "Evaluation"],
  },
];

export function Services() {
  return (
    <section id="services" className="services-section mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal onView>
        <h2>From AI pilots to lasting digital change.</h2>
      </Reveal>
      <div className="service-list">
        {services.map((service, index) => (
          <Reveal key={service.title} onView>
            <div className="service-list__row">
              <SegmentDisplay
                value={String(index + 1).padStart(2, "0")}
                tone={index === 0 ? "red" : index === 1 ? "amber" : "ghost"}
                label={`Service ${String(index + 1).padStart(2, "0")}: ${service.title}`}
                size="small"
              />
              <div className="service-list__content">
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
              <ul className="service-list__tags" aria-label={`${service.title} capabilities`}>
                {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
