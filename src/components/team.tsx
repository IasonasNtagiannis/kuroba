import { Reveal } from "./reveal";
import { TeamStrips } from "./team-strips";

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal onView>
        <h2 className="max-w-[18ch] text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-5xl">
          The people you will work with.
        </h2>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">
          Five engineers at the core, with experience across startups, scale-ups,
          research and big tech. We bring in specialists as the work requires.
        </p>
      </Reveal>

      <Reveal onView delay={0.1} className="mt-12">
        <TeamStrips />
      </Reveal>
    </section>
  );
}
