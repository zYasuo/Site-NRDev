"use client";
import { useState } from "react";
import { ServiceCard } from "@/components/contrate-online/nossos-servicos/card";
import { ServiceCards } from "@/components/contrate-online/nossos-servicos/card/constants";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SectionServicos = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSelectService = (title: string) => {
    setSelectedService(title);
  };

  return (
    <div className="space-y-4">
      <ScrollReveal>
        <div className="flex justify-start items-center">
          <TextAnimate
            text="Nossos Serviços"
            className="text-md md:text-lxl lg:text-5xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em]"
            type="popIn"
          />
        </div>
        <div className="flex justify-start items-center">
          <TextAnimate
            text="Escolha um dos serviços abaixo para continuar"
            delay={2}
            className="text-muted-foreground text-sm md:text-md lg:text-xl"
            type="fadeInUp"
          />
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {ServiceCards.map((service, index) => (
          <ScrollReveal key={index} className="space-y-4">
            <ServiceCard service={service} onSelect={handleSelectService} />
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
              Precisa de ajuda? Fale com a gente!
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  );
};
