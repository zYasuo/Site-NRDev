"use client";
import { useEffect } from "react";
import { usePlanosStore } from "@/hooks/planos/usePlanos";
import { TabsPlanos } from "@/components/planos/tabs";
import { TextAnimate } from "@/components/effects/textAnimate";
import { ScrollReveal } from "@/components/effects/scrollReveal";

interface ISectionCard {
  AID?: string;
}

export const SectionCard: React.FC<ISectionCard> = ({ AID }) => {
  const { home, gamer, access, loading, error, getPlanos } = usePlanosStore();

  useEffect(() => {
    if (AID) {
      getPlanos(AID);
    }
  }, [AID, getPlanos]);

  return (
    <div className="md:h-screen lg:h-screen h-full bg-gradient-to-t from-background via-background to-muted dark:from-background dark:via-background dark:to-primary/15 z-20">
      <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
        <ScrollReveal className="space-y-4 mb-4">
          <div className="flex justify-center relative">
            <TextAnimate
              text="Ofertas Imperdíveis"
              className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em] z-20"
              type="fadeIn"
            />
          </div>
          <div className="flex justify-center">
            <TextAnimate
              text="Encontre o plano perfeito para você"
              delay={3}
              className="text-muted-foreground text-sm md:text-md lg:text-3xl"
              type="calmInUp"
            />
          </div>
        </ScrollReveal>

        {loading ? (
          <div>Carregando planos...</div>
        ) : error ? (
          <div>Erro: {error}</div>
        ) : (
          <TabsPlanos home={home} gamer={gamer} access={access} />
        )}
      </div>
    </div>
  );
};
