"use client";
import { useState } from "react";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { FormContratosUpgrade } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form/contratos";
import { TextAnimate } from "@/components/effects/textAnimate";
import { Etapas } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/etapas";

export const UpgradeSection = () => {
  const [showEtapas, setShowEtapas] = useState(false);

  const handleCardClick = () => {
    setShowEtapas(true);
  };

  return (
    <div className="space-y-4">
      {showEtapas ? (
        <Etapas />
      ) : (
        <>
          <ScrollReveal>
            <div>
              <TextAnimate
                text="Escolha um Contrato"
                className="text-xl md:text-3xl lg:text-4xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em]"
                type="popIn"
              />
            </div>
            <div>
              <TextAnimate
                text="Escolha um dos contratos abaixo para continuar"
                className="text-muted-foreground text-sm md:text-lg lg:text-xl"
                type="popIn"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FormContratosUpgrade onCardClick={handleCardClick} />
          </ScrollReveal>
        </>
      )}
    </div>
  );
};
