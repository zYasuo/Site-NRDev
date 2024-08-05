"use client";
import { SimpleCard_V2 } from "@/components/ui/card-v2";
import { cardContent } from "@/components/quem-somos/nossa-historia/visao-missao-valores/constants";
import { TextAnimate } from "@/components/effects/textAnimate";
import { ScrollReveal } from "@/components/effects/scrollReveal";

export const SectionNRConexoes: React.FC = () => {
  return (
    <div className="md:h-screen lg:h-screen h-full dark:bg-primary/15 bg-muted">
      <div className="w-full pb-16 lg:pb-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="flex justify-center md:justify-start pt-10 lg:pt-32">
              <TextAnimate
                text="Temos um objetivo claro"
                className="text-2xl md:text-3xl lg:text-6xl max-w-lg tracking-tighter text-left font-regular font-regular font-semibold font-sans"
                type="popIn"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8">
              <SimpleCard_V2
                title={cardContent[0].title}
                description={cardContent[0].description}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              <SimpleCard_V2
                title={cardContent[1].title}
                description={cardContent[1].description}
              />
              <SimpleCard_V2
                title={cardContent[2].title}
                description={cardContent[2].description}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
