import { Reveal } from "./reveal";
import { TeamModel } from "./team-model";

export function ModelSection() {
  return (
    <section id="model" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal onView>
        <h2 className="max-w-[20ch] text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-5xl">
          A senior core team with a deep network.
        </h2>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">
          Our network covers nearly every area of technology, from product
          design to ML research and cloud security. Each project gets exactly
          the people it needs.
        </p>
      </Reveal>

      <Reveal onView delay={0.1} className="mt-12">
        <TeamModel />
      </Reveal>
    </section>
  );
}
