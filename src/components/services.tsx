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
    title: "Data and AI",
    body: "Pipelines, search and LLM features built by people with research backgrounds, and measured before they ship.",
    tags: ["Data pipelines", "RAG", "Evaluation"],
  },
];

export function Services() {
  return (
    <section id="services" className="services-section mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal onView>
        <h2>Everything a web app needs, under one roof.</h2>
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
