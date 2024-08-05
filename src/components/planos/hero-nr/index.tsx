import { ScrollReveal } from "@/components/effects/scrollReveal";
import { FlipLink } from "@/components/effects/textReveal";

export const HeroNRFrase = () => {
  return (
    <div className="dark:bg-primary/15 bg-muted md:h-screen lg:h-screen h-full">
    <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
        <ScrollReveal>
          <section className="grid place-content-center gap-2  ">
            <FlipLink href="#">A</FlipLink>
            <FlipLink href="#">MELHOR</FlipLink>
            <FlipLink href="#">INTERNET</FlipLink>
            <FlipLink href="#">PARA VOCE</FlipLink>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
};
