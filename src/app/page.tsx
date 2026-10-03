import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ModelSection } from "@/components/model-section";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { StackMarquee } from "@/components/stack-marquee";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <StackMarquee />
        <ModelSection />
        <Services />
        <Process />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
