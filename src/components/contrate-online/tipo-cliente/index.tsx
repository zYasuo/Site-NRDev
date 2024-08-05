"use client";
import { CardEscolha } from "@/components/contrate-online/tipo-cliente/cards";
import { CardLink } from "@/components/contrate-online/tipo-cliente/cards/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";

export const SectionTipoCliente = () => {
  return (
    <div className="space-y-4">
      <ScrollReveal>
        <div className="flex justify-start items-center">
          <TextAnimate
            text="Selecione uma Opção"
            className="text-md md:text-3xl lg:text-5xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em]"
            type="popIn"
          />
        </div>
        <div className="flex justify-start items-center">
          <TextAnimate
            text="Escolha uma das opções abaixo para continuar"
            delay={2}
            className="text-muted-foreground text-sm md:text-md lg:text-xl"
            type="fadeInUp"
          />
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {CardLink.map((card, index) => (
          <ScrollReveal key={index} className="space-y-4">
            <CardEscolha
              title={card.title}
              link={card.link}
              category={card.category}
              icon={card.icon}
              novoCliente={card.novoCliente}
            />
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <div className="mt-2">
          <Button
            variant={"link"}
            className="w-full text-end flex items-center justify-end"
          >
            <Link href="https://api.whatsapp.com/send?phone=558002001273&text=Preciso%20de%20ajuda%20para%20Contratar%20Online">
              Precisa de ajuda? <span className="border-b border-primary">Fale com a gente!</span>
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  );
};
