"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const people = [
  { name: "Jason", focus: "Web engineering" },
  { name: "Manos", focus: "Web engineering" },
  { name: "Stelios", focus: "Research, simulations and scientific computing" },
  { name: "Vassili", focus: "Infrastructure and algorithmic optimization, ex big tech" },
  { name: "George", focus: "Web and infrastructure" },
];

export function TeamStrips() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="team-list" role="list">
      {people.map((person, index) => {
        const selected = index === active;
        return (
          <div className={`team-list__row${selected ? " is-active" : ""}`} key={person.name} role="listitem">
            <button
              type="button"
              aria-expanded={selected}
              aria-controls={`person-${person.name.toLowerCase()}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span className="team-list__index">{String(index + 1).padStart(2, "0")}</span>
              <span className="team-list__name">{person.name}</span>
              <span className="team-list__indicator" aria-hidden="true">{selected ? "−" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {selected && (
                <motion.p
                  id={`person-${person.name.toLowerCase()}`}
                  initial={reduce ? false : { opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="team-list__focus"
                >
                  {person.focus}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
