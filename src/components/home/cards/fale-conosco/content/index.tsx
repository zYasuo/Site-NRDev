// Componente para exibir os cards de contato
"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { FaleConosco } from "@/components/home/cards/fale-conosco/constants";
import { TextAnimate } from "@/components/effects/textAnimate";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchFilialTelefone } from "@/app/(ui)/actions";
import { useState, useEffect } from "react";

interface IFaleConoscoProps {
  AID: string;
}

export const SectionCardFaleConosco = ({ AID }: IFaleConoscoProps) => {
  const [telefones, setTelefones] = useState<{
    telefone: string;
    telefone_sac: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchFilialTelefone(AID);
        setTelefones(result);
      } catch (error) {
        setError("Erro ao buscar telefones");
      }
    }

    fetchData();
  }, [AID]);

  return (
    <div className="dark:bg-primary/15 bg-muted md:h-screen lg:h-screen h-full">
      <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-8 flex-1">
            {FaleConosco().map((item, index) => (
              <ScrollReveal key={index} className="space-y-4">
                <Card className="p-6 space-y-4 cursor-pointer hover:border-primary/50 border-dashed">
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    className="w-12 h-12 flex items-center justify-center border-primary/15"
                  >
                    <item.icon className="text-primary w-8 h-8" />
                  </Button>
                  <div>
                    <h4 className="text-sm font-medium">{item.title}</h4>
                    <p className="text-md text-muted-foreground">
                      {item.description}
                    </p>
                    {item.title === "Via WhatsApp" && (
                      <Link href={item.link || ""} target="_blank">
                        <Button variant={"link"} className="p-0">
                          Chamar no WhatsApp
                        </Button>
                      </Link>
                    )}
                    {item.title === "Email" && (
                      <p className="text-md text-muted-foreground">
                        {item.link}
                      </p>
                    )}
                    {item.title === "Telefone" && telefones && (
                      <div className="text-md text-muted-foreground">
                        <span>Telefone: {telefones.telefone}</span>
                      </div>
                    )}
                    {item.title === "Nosso 0800" && telefones && (
                      <div className="text-md text-muted-foreground">
                        <span> {telefones.telefone_sac}</span>
                      </div>
                    )}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="space-y-4 flex-1 flex flex-col items-start">
            <Badge className="text-white">
              <TextAnimate text="Fale Conosco" type="popIn" />
            </Badge>
            <div>
              <TextAnimate
                text="Precisa de ajuda?"
                className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-primary dark:text-foreground tracking-[-0.04em]"
                type="popIn"
              />
            </div>
            <div>
              <TextAnimate
                text="Fale com a gente através dos nossos canais."
                delay={5}
                className="text-muted-foreground text-xs md:text-md lg:text-lg"
                type="fadeInUp"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
