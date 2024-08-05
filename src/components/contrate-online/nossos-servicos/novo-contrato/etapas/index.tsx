"use client";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";
import { useNovoContratoForm } from "@/hooks/contrate-online/cliente-nr/nossos-servicos/novo-contrato/useNovoContrato";
import { StepTabs } from "@/components/contrate-online/nossos-servicos/novo-contrato/etapas/tabs";
import { stepSubtitles, stepTitles } from "@/components/contrate-online/novo-cliente/etapas/constants";


export const Etapas = () => {
  const { currentStep } = useNovoContratoForm();

  return (
    <div className="space-y-4">
      <ScrollReveal>
        <div>
          <TextAnimate
            text={stepTitles[currentStep]}
            className="text-xl md:text-3xl lg:text-4xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em]"
            type="popIn"
          />
        </div>
        <div>
          <TextAnimate
            text={stepSubtitles[currentStep]}
            className="text-muted-foreground text-sm md:text-lg lg:text-xl"
            type="popIn"
          />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <StepTabs />
      </ScrollReveal>
    </div>
  );
};
