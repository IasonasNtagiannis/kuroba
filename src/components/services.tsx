import Image from "next/image";
import {
  Brain,
  Cloud,
  Code,
  Database,
  PenNib,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "./reveal";

function Tags({ items, onImage = false }: { items: string[]; onImage?: boolean }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            onImage ? "bg-white/15 text-[#f5f6f7]" : "bg-ink/[0.06] text-ink"
          }`}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Heading({ icon: Glyph, title, body, onImage = false }: {
  icon: Icon;
  title: string;
  body: string;
  onImage?: boolean;
}) {
  return (
    <>
      <Glyph size={26} weight="regular" className={onImage ? "text-[#f5f6f7]" : "text-accent-ink"} />
      <h3 className={`mt-5 text-2xl font-semibold tracking-tight ${onImage ? "text-[#f5f6f7]" : "text-ink"}`}>
        {title}
      </h3>
      <p className={`mt-3 max-w-[44ch] leading-relaxed ${onImage ? "text-[#d9dbde]" : "text-muted"}`}>
        {body}
      </p>
    </>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal onView>
        <h2 className="max-w-[18ch] text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-5xl">
          Everything a web app needs, under one roof.
        </h2>
      </Reveal>

      {/* Bento: 5 services, 5 cells. lg: 7 + 5 / 4 + 4 + 4. md: 6 / 3 + 3 / 3 + 3. Mobile: single column. */}
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
        {/* Product design: text + photo */}
        <Reveal
          onView
          className="group grid overflow-hidden rounded-2xl border border-line bg-surface md:col-span-6 lg:col-span-7 lg:grid-cols-2"
        >
          <div className="p-6 md:p-8">
            <Heading
              icon={PenNib}
              title="Product design"
              body="Research, flows and interfaces people understand on first use. We hand over a design system, not a pile of screens."
            />
            <Tags items={["UX research", "UI design", "Design systems"]} />
          </div>
          <div className="relative min-h-64 overflow-hidden bg-surface-2">
            {/* TODO: replace with real design work (wireframes, Figma boards), 900x900 */}
            <Image
              src="https://picsum.photos/seed/kuroba-design-sketches/900/900?grayscale"
              alt="Interface sketches on a desk"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        {/* Frontend: tinted surface */}
        <Reveal
          onView
          delay={0.06}
          className="rounded-2xl bg-surface-2 p-6 md:col-span-6 md:p-8 lg:col-span-5"
        >
          <Heading
            icon={Code}
            title="Frontend"
            body="Fast, accessible React and Next.js apps that stay maintainable as the product and the team grow."
          />
          <Tags items={["React", "Next.js", "Accessibility"]} />
        </Reveal>

        {/* Backend: plain surface */}
        <Reveal
          onView
          delay={0.04}
          className="rounded-2xl border border-line bg-surface p-6 md:col-span-3 md:p-8 lg:col-span-4"
        >
          <Heading
            icon={Database}
            title="Backend and APIs"
            body="Data models, APIs and integrations written so the next engineer can read and change them."
          />
          <Tags items={["Node.js", "Python", "Go", "Postgres"]} />
        </Reveal>

        {/* Cloud: full-bleed photo with scrim */}
        <Reveal
          onView
          delay={0.08}
          className="group relative isolate overflow-hidden rounded-2xl bg-[#16171a] p-6 md:col-span-3 md:p-8 lg:col-span-4"
        >
          {/* TODO: replace with a real infra / server-room photo, 900x900 */}
          <Image
            src="https://picsum.photos/seed/kuroba-cloud-infra/900/900?grayscale"
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
            className="-z-20 object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#0e0f11]/95 via-[#0e0f11]/75 to-[#0e0f11]/40" />
          <Heading
            onImage
            icon={Cloud}
            title="Cloud and infrastructure"
            body="Infrastructure as code, CI/CD and monitoring, so releases are routine and outages are rare."
          />
          <Tags onImage items={["AWS", "Terraform", "Kubernetes"]} />
        </Reveal>

        {/* Data and AI: accent-tinted gradient */}
        <Reveal
          onView
          delay={0.12}
          className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 md:col-span-6 md:p-8 lg:col-span-4"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative">
            <Heading
              icon={Brain}
              title="Data and AI"
              body="Pipelines, search and LLM features built by people with research backgrounds, and measured before they ship."
            />
            <Tags items={["Data pipelines", "RAG", "Evaluation"]} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
