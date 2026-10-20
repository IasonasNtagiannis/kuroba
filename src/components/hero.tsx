import Image from "next/image";
import { CONTACT_LABEL } from "@/lib/copy";
import { SegmentDisplay } from "./segment-display";

const services = [
  { number: "01", label: "Product design", tone: "red" },
  { number: "02", label: "Full-stack engineering", tone: "amber" },
  { number: "03", label: "Cloud infrastructure", tone: "ghost" },
];

export function Hero() {
  return (
    <section id="top" className="hero-shell">
      <div className="hero-main">
        <div className="hero-copy">
          <h1>Web apps,<br />designed and<br />built end to end.</h1>
          <p>
            A Greek core team of startup, scale-up and big-tech engineers.
            Design, full-stack and cloud, staffed from people we trust.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button-primary">{CONTACT_LABEL}</a>
            <a href="#model" className="button button-outline">How we work</a>
          </div>
        </div>
        <div className="hero-mark">
          <Image
            src="/assets/plates/feather-mark.png"
            alt="A feather assembled from segmented black forms"
            width={720}
            height={720}
            priority
            sizes="(min-width: 1024px) 42vw, 76vw"
          />
        </div>
      </div>
      <ul className="service-rail" aria-label="Kuroba services">
        {services.map((service) => (
          <li className={`service-rail__item service-rail__item--${service.tone}`} key={service.number}>
            <SegmentDisplay value={service.number} tone={service.tone as "red" | "amber" | "ghost"} label={`${service.number} ${service.label}`} />
            <span className="service-rail__label">{service.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
