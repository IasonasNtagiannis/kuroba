"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Brain,
  Cloud,
  Code,
  Compass,
  Database,
  PenNib,
  ShieldCheck,
  type Icon,
} from "@phosphor-icons/react";

type Role = { id: string; label: string; icon: Icon };

const roles = {
  lead: { id: "lead", label: "Tech lead", icon: Compass },
  fullstack: { id: "fullstack", label: "Full-stack engineer", icon: Code },
  fullstack2: { id: "fullstack2", label: "Second full-stack engineer", icon: Code },
  design: { id: "design", label: "Product designer", icon: PenNib },
  cloud: { id: "cloud", label: "Cloud and DevOps engineer", icon: Cloud },
  data: { id: "data", label: "Data engineer", icon: Database },
  ml: { id: "ml", label: "ML researcher", icon: Brain },
  security: { id: "security", label: "Security reviewer", icon: ShieldCheck },
} satisfies Record<string, Role>;

// Illustrative team shapes, not fixed packages.
const shapes: { id: string; label: string; summary: string; core: Role[]; circle: Role[] }[] = [
  {
    id: "mvp",
    label: "MVP",
    summary: "A first version in front of real users. The core team covers it, with no hand-offs.",
    core: [roles.lead, roles.design, roles.fullstack],
    circle: [],
  },
  {
    id: "product",
    label: "Product build",
    summary: "A production app with payments, integrations and the infrastructure to run it.",
    core: [roles.lead, roles.design, roles.fullstack],
    circle: [roles.fullstack2, roles.cloud],
  },
  {
    id: "ai",
    label: "AI feature",
    summary: "Search, recommendations or an LLM workflow, built by people who have published in the field.",
    core: [roles.lead, roles.fullstack],
    circle: [roles.ml, roles.data],
  },
  {
    id: "scale",
    label: "Scale-up",
    summary: "Joining your existing team to ship a large piece of work or fix what slows you down.",
    core: [roles.lead, roles.fullstack],
    circle: [roles.cloud, roles.data, roles.security],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function RoleChip({ role, tone }: { role: Role; tone: "core" | "circle" }) {
  const reduce = useReducedMotion();
  const Glyph = role.icon;
  return (
    <motion.li
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, ease }}
      className={`inline-flex h-11 items-center gap-2.5 rounded-full pr-4 pl-3 text-sm font-medium ${
        tone === "core"
          ? "bg-ink text-on-ink"
          : "border border-dashed border-accent bg-bg text-ink"
      }`}
    >
      <Glyph size={18} weight="regular" className={tone === "circle" ? "text-accent-ink" : ""} />
      {role.label}
    </motion.li>
  );
}

export function TeamModel() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const shape = shapes[active];

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern).
  function onKeyDown(e: KeyboardEvent) {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (active + delta + shapes.length) % shapes.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="rounded-2xl border border-line bg-surface p-4 md:p-8">
      <div
        role="tablist"
        aria-label="Example project shapes"
        onKeyDown={onKeyDown}
        className="grid grid-cols-2 gap-1 rounded-3xl bg-surface-2 p-1 md:inline-flex md:rounded-full"
      >
        {shapes.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`shape-tab-${s.id}`}
            aria-selected={i === active}
            aria-controls="shape-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative h-10 rounded-full px-5 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              i === active ? "text-ink" : "text-muted hover:text-ink"
            }`}
          >
            {i === active && (
              <motion.span
                layoutId="shape-tab-pill"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
                className="absolute inset-0 rounded-full bg-surface shadow-[0_1px_2px_hsl(var(--shadow)/0.12)]"
              />
            )}
            <span className="relative">{s.label}</span>
          </button>
        ))}
      </div>

      <div
        id="shape-panel"
        role="tabpanel"
        aria-labelledby={`shape-tab-${shape.id}`}
        className="mt-8"
      >
        <p aria-live="polite" className="max-w-[60ch] text-lg leading-relaxed text-ink">
          {shape.summary}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
          <div>
            <h3 className="text-sm font-medium text-muted">Core team</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              <AnimatePresence mode="popLayout" initial={false}>
                {shape.core.map((r) => (
                  <RoleChip key={r.id} role={r} tone="core" />
                ))}
              </AnimatePresence>
            </ul>
          </div>

          <div className="md:border-l md:border-line md:pl-6">
            <h3 className="text-sm font-medium text-muted">From our network</h3>
            <ul className="mt-4 flex min-h-11 flex-wrap gap-2">
              <AnimatePresence mode="popLayout" initial={false}>
                {shape.circle.map((r) => (
                  <RoleChip key={r.id} role={r} tone="circle" />
                ))}
                {shape.circle.length === 0 && (
                  <motion.li
                    key="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-11 items-center text-sm text-muted"
                  >
                    Nobody extra. Small scope stays with the core team.
                  </motion.li>
                )}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
