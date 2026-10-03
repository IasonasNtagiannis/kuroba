import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-8"
    >
      <Reveal onView className="lg:col-span-5">
        <h2 className="max-w-[14ch] text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-5xl">
          Tell us what you are building.
        </h2>
        <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-muted">
          Every enquiry is read by one of the five of us. If we are not the right
          fit, we will say so.
        </p>
      </Reveal>

      <Reveal onView delay={0.1} className="lg:col-span-7">
        <ContactForm />
      </Reveal>
    </section>
  );
}
