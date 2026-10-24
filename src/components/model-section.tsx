import { Reveal } from "./reveal";
import { TeamModel } from "./team-model";

export function ModelSection() {
  return (
    <section id="model" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal onView>
        <h2 className="max-w-[20ch] text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-5xl">
          The right team to move change into production.
        </h2>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">
          Our network spans product design, ML research and cloud security.
          Each project gets the people it needs to connect a new idea to the
          systems and teams that will use it.
        </p>
      </Reveal>

      <Reveal onView delay={0.1} className="mt-12">
        <TeamModel />
      </Reveal>
    </section>
  );
}
