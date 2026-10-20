"use client";

import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    title: "Scope",
    body: "We map your users, the risks and the smallest version worth shipping, then agree a plan and an estimate with you.",
  },
  {
    title: "Design",
    body: "Flows and interfaces in Figma, tested with real users before anyone writes production code.",
  },
  {
    title: "Build",
    body: "Short cycles with a working build to click through at every check-in. You see progress, not status reports.",
  },
  {
    title: "Launch",
    body: "Infrastructure as code, CI/CD, monitoring and a launch checklist, so going live is a non-event.",
  },
  {
    title: "Support",
    body: "We stay on to fix, measure and extend, or hand over cleanly to your own team with docs and walkthroughs.",
  },
];

// The step crossing the middle of the viewport is fully lit; the rest dim.
// Tells the reader where they are in the sequence. Static under reduced motion.
export function ProcessSteps() {
  const reduce = useReducedMotion();

  return (
    <ol className="flex flex-col gap-4 md:gap-6">
      {steps.map((s) => (
        <motion.li
          key={s.title}
          initial={reduce ? false : { opacity: 0.72 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-40% 0px -40% 0px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-line pt-6 md:pt-8"
        >
          <h3 className="text-3xl font-semibold tracking-tighter md:text-4xl">{s.title}</h3>
          <p className="mt-3 max-w-[52ch] text-lg leading-relaxed text-muted">{s.body}</p>
        </motion.li>
      ))}
    </ol>
  );
}
