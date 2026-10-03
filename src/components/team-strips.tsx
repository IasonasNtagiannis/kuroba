"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// TODO: replace picsum placeholders with real portraits, 800x1000.
const people = [
  { name: "Jason", focus: "Web engineering", seed: "kuroba-jason" },
  { name: "Manos", focus: "Web engineering", seed: "kuroba-manos" },
  { name: "Stelios", focus: "Research, simulations and scientific computing", seed: "kuroba-stelios" },
  { name: "Vassili", focus: "Infrastructure and algorithmic optimization, ex big tech", seed: "kuroba-vassili" },
  { name: "George", focus: "Web and infrastructure", seed: "kuroba-george" },
];

const photo = (seed: string) => `https://picsum.photos/seed/${seed}/800/1000?grayscale`;

// Accordion strips (lg+): hovering, focusing or tapping a strip widens it to reveal the person's focus.
// Below lg: a horizontal scroll-snap row with the details under each photo.
export function TeamStrips() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <>
      <ul className="hidden h-[32rem] gap-3 lg:flex">
        {people.map((p, i) => {
          const isActive = i === active;
          return (
            <li
              key={p.name}
              style={{ flexGrow: isActive ? 4 : 1 }}
              className="relative basis-0 overflow-hidden rounded-2xl bg-surface-2 motion-safe:transition-[flex-grow] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className="absolute inset-0 z-10 text-left"
              >
                <span className="sr-only">
                  {p.name}, {p.focus}
                </span>
              </button>
              <Image
                src={photo(p.seed)}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 1px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0e0f11]/85 via-[#0e0f11]/10 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                <p className="text-xl font-semibold tracking-tight text-[#f5f6f7]">{p.name}</p>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.p
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: reduce ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-1 max-w-[32ch] text-[#d9dbde]"
                    >
                      {p.focus}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ul>

      <ul className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 lg:hidden">
        {people.map((p) => (
          <li key={p.name} className="w-[72%] shrink-0 snap-start sm:w-[44%]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2">
              <Image src={photo(p.seed)} alt="" fill sizes="(min-width: 640px) 44vw, 72vw" className="object-cover" />
            </div>
            <p className="mt-3 text-lg font-semibold tracking-tight">{p.name}</p>
            <p className="text-muted">{p.focus}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
