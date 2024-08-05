"use client";
import { TextAnimate } from "@/components/effects/textAnimate";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { PlanosCardHero } from "./banner/planos.section.hero.cards";
import { BreadCrumb } from "@/components/global/breadcrumb";


export const HeroSectionPlanos = () => {
  return (
   <div className="dark:bg-primary/15 bg-muted md:h-screen lg:h-screen h-full">
    <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
          {/* <div className="mt-8">
            <BreadCrumb />
          </div> */}
        <section id="hero" className="flex md:h-[600px] h-[300px] rounded-lg ">
          <ScrollReveal className="space-y-4 flex-1 h-full flex flex-col justify-center">
            <div>
              <TextAnimate
                className="text-4xl md:text-5xl lg:text-7xl font-regular font-semibold font-sans -mt-6 text-primary dark:text-foreground tracking-[-0.04em]"
                text="Descubra o "
                type="popIn"
              />
            </div>
            <div>
              <TextAnimate
                className="text-4xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans -mt-6 text-primary dark:text-foreground tracking-[-0.04em]"
                text="Melhor Plano"
                type="popIn"
                delay={3}
              />
            </div>
            <div>
              <TextAnimate
                className="text-4xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans -mt-6 text-primary dark:text-foreground tracking-[-0.04em]"
                text="para você"
                type="popIn"
                delay={5}
              />
            </div>
            <p className="text-muted-foreground text-sm md:text-md lg:text-2xl col-start-1 row-start-3 md:mt-4 max-w-xl ">
              Uma conexão de internet rápida e confiável é essencial para o seu{" "}
              <span className="text-primary text-bold">dia a dia</span> e{" "}
              <span className="text-primary text-bold">trabalho</span>. Conheça
              nossos planos e escolha o ideal para você.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex-1  h-full flex flex-col justify-center">
              <div className="w-full h-[400px] border border-transparent no-container">
                <PlanosCardHero />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
};
