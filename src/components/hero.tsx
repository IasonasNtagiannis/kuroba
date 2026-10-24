import Image from "next/image";
import { CONTACT_LABEL } from "@/lib/copy";
import { SegmentDisplay } from "./segment-display";

const services = [
  { number: "01", label: "AI adoption", tone: "red" },
  { number: "02", label: "Digital products", tone: "amber" },
  { number: "03", label: "Cloud transformation", tone: "ghost" },
];

export function Hero() {
  return (
    <section id="top" className="hero-shell">
      <div className="hero-main">
        <div className="hero-copy">
          <h1>Adopt AI.<br />Transform how<br />you work.</h1>
          <p>
            We help teams move from AI experiments to everyday use, and modernize
            the systems around them. One senior team, from first use case to
            production.
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
