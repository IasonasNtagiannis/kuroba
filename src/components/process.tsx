import { ProcessSteps } from "./process-steps";

// Sticky split: the heading pins on the left while the stages scroll past on the right.
export function Process() {
  return (
    <section
      id="process"
      className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-8"
    >
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <h2 className="max-w-[14ch] text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-5xl">
            How a project runs.
          </h2>
          <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-muted">
            The same five stages for an MVP or a scale-up engagement. Only the
            size of the team changes.
          </p>
        </div>
      </div>

      <div className="lg:col-span-7">
        <ProcessSteps />
      </div>
    </section>
  );
}
