"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

// Fade-up entrance. `onView` reveals on scroll instead of on mount.
export function Reveal({
  children,
  delay = 0,
  onView = false,
  className,
}: {
  children: ReactNode;
  delay?: number;
  onView?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const target = { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={onView ? undefined : target}
      whileInView={onView ? target : undefined}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Image entrance: a clip-path wipe from the bottom, so the photo lands after the headline.
export function RevealImage({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: "inset(100% 0 0 0)", scale: 1.04 }}
      animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
