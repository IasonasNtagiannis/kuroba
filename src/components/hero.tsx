import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_LABEL } from "@/lib/copy";
import { Reveal, RevealImage } from "./reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-12 pb-16 md:px-8 lg:grid-cols-12 lg:gap-8 lg:pt-16"
    >
      <div className="lg:col-span-7">
        <Reveal>
          <h1 className="text-[2.75rem] leading-[1.02] font-semibold tracking-tighter text-balance md:text-6xl lg:text-5xl xl:text-[4rem]">
            Web apps, designed
            <span className="block text-muted">and built end to end.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted">
            A Greek core team of startup, scale-up and big-tech engineers.
            Design, full-stack and cloud, staffed from people we trust.
          </p>
        </Reveal>

        <Reveal delay={0.16} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink pr-5 pl-6 text-base font-medium whitespace-nowrap text-on-ink transition-transform duration-200 active:scale-[0.98]"
          >
            {CONTACT_LABEL}
            <ArrowRight
              size={18}
              className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            />
          </a>
          <a
            href="#model"
            className="inline-flex h-12 items-center rounded-full border border-ink/20 px-6 text-base font-medium whitespace-nowrap text-ink transition-colors duration-200 hover:bg-surface-2 active:scale-[0.98]"
          >
            How we work
          </a>
        </Reveal>
      </div>

      <RevealImage
        delay={0.2}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-2 lg:col-span-5 lg:max-h-[calc(100dvh-9rem)]"
      >
        {/* TODO: replace with a real team / workspace photo, 1200x1500 */}
        <Image
          src="https://picsum.photos/seed/kuroba-team-workspace/1200/1500?grayscale"
          alt="The Kuroba team at work"
          fill
          preload
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      </RevealImage>
    </section>
  );
}
