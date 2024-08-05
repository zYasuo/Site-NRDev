/* eslint-disable */

"use client";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";

export const SobreANRSection: React.FC = () => {
  return (
    <div className=" h-full dark:bg-primary/15 bg-muted">

    <div className="w-full pt-10 lg:pt-16">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="flex justify-center py-10 lg:pb-16">
            <TextAnimate
              text="Nossa História"
              className="text-3xl md:text-4xl lg:text-7xl max-w-lg tracking-tighter text-left font-regular font-semibold font-sans"
              type="popIn"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal className="mt-16">
          <div >
            <TextAnimate
              text="Sobre a NR Conexões"
              className="text-2xl md:text-4xl lg:text-7xl max-w-lg tracking-tighter text-left font-regular font-regular font-semibold font-sans"
              type="fadeInUp"
            />
          </div>
          <p className="text-muted-foreground text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-semibold font-sans">
            Desde a nossa fundação em 08 de agosto de 2008, a NR Conexões que
            Fortalecem tem sido um marco na prestação de serviços de internet,
            destacando-se pela qualidade inigualável e pelo compromisso com a
            excelência no atendimento. Localizada em Rio Claro-SP, nossa matriz
            e as mais de 12 filiais espalhadas pelos estados de São Paulo e
            Minas Gerais são o coração pulsante de nossa operação, garantindo a
            conexão de qualidade que nossos clientes merecem.
          </p>
        </ScrollReveal>
        
      </div>
    </div>
    </div>
  );
};
