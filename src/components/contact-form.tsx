"use client";

import { useActionState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, CaretDown, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { submitContact } from "@/app/actions/contact";
import { projectTypes, type ContactField, type ContactState } from "@/lib/contact";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border border-ink/20 bg-bg px-4 text-base text-ink placeholder:text-muted transition-colors duration-200 hover:border-ink/35 focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent aria-[invalid=true]:border-accent";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: ContactField;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-accent-ink">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const reduce = useReducedMotion();
  const errors = state.fieldErrors ?? {};
  const values = state.values ?? {};

  const describe = (id: ContactField) => (errors[id] ? `${id}-error` : undefined);

  return (
    <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {state.status === "success" ? (
          <motion.div
            key="success"
            role="status"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-[26rem] flex-col justify-center"
          >
            <CheckCircle size={36} className="text-accent-ink" />
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              Thanks{values.name ? `, ${values.name}` : ""}. We have your message.
            </h3>
            <p className="mt-3 max-w-[44ch] leading-relaxed text-muted">
              One of us will read it and reply by email, usually within two working days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            // Remount on each submission so fields show the values the server returned.
            key={state.submittedAt ?? "initial"}
            action={formAction}
            noValidate
            initial={false}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            className="flex flex-col gap-5"
          >
            {state.status === "error" && state.message && (
              <div
                role="alert"
                className="flex gap-3 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm text-ink"
              >
                <WarningCircle size={20} className="mt-px shrink-0 text-accent-ink" />
                {state.message}
              </div>
            )}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  defaultValue={values.name}
                  aria-invalid={!!errors.name}
                  aria-describedby={describe("name")}
                  className={`${inputClass} h-12`}
                />
              </Field>
              <Field id="email" label="Work email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={values.email}
                  aria-invalid={!!errors.email}
                  aria-describedby={describe("email")}
                  className={`${inputClass} h-12`}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field id="company" label="Company" optional error={errors.company}>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  defaultValue={values.company}
                  className={`${inputClass} h-12`}
                />
              </Field>
              <Field id="projectType" label="Project type" optional error={errors.projectType}>
                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue={values.projectType ?? ""}
                    aria-invalid={!!errors.projectType}
                    aria-describedby={describe("projectType")}
                    className={`${inputClass} h-12 appearance-none pr-10`}
                  >
                    <option value="">Choose one</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <CaretDown
                    size={16}
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted"
                  />
                </div>
              </Field>
            </div>

            <Field id="message" label="What would you like to change?" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={5}
                defaultValue={values.message}
                aria-invalid={!!errors.message}
                aria-describedby={describe("message") ?? "message-help"}
                className={`${inputClass} resize-y py-3 leading-relaxed`}
              />
              {!errors.message && (
                <p id="message-help" className="text-sm text-muted">
                  Tell us about the AI opportunity, product or process, where it stands today and roughly when you need it.
                </p>
              )}
            </Field>

            {/* Honeypot for bots: hidden from people and assistive tech. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="group mt-2 inline-flex h-12 items-center justify-center gap-2 self-start rounded-full bg-ink pr-5 pl-6 text-base font-medium whitespace-nowrap text-on-ink transition-[transform,opacity] duration-200 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
            >
              {pending ? "Sending..." : "Send message"}
              {!pending && (
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                />
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
