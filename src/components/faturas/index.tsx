"use client";

import { SVGFaturas } from "@/components/faturas/svgs";
import { FormFaturas } from "@/components/faturas/form";
import { TabelaFaturas } from "@/components/faturas/tabela-faturas";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";
import { useFaturasStore } from "@/hooks/faturas/useStoreFatura";

export default function FaturasSection() {
  const faturas = useFaturasStore((state) => state.faturas);
  const cliente = useFaturasStore((state) => state.cliente);

  return (
    <div className="dark:bg-primary/15 bg-muted/40 md:h-screen lg:h-screen h-full">
      <div className="py-16 lg:py-32 container relative flex flex-col h-full itens-center">
        <ScrollReveal className="space-y-4">
          <div className="mt-14">
            <div className="flex justify-center">
              <TextAnimate
                text="Retire suas faturas"
                className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em]"
                type="fadeIn"
              />
            </div>
            <div className="flex justify-center">
              <TextAnimate
                text="Agora ficou mais fácil pagar suas contas"
                delay={1}
                className="text-muted-foreground text-sm md:text-md lg:text-3xl"
                type="fadeInUp"
              />
            </div>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              <FormFaturas />
              <SVGFaturas />
            </div>
          </div>
        </ScrollReveal>
        {faturas.length > 0 && (
          <ScrollReveal>
            <div className="mt-10">
              <TabelaFaturas data={faturas} cliente={cliente} />
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
