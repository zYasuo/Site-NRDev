"use client";
import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";
import { accordionItems } from "@/components/home/faq/constants";

export const Faq = () => (
  <div>
    <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <ScrollReveal className="space-y-4">
            <Badge>FAQ</Badge>
            <div className="flex justify-center items-center">
              <TextAnimate
                text="Perguntas Frequentes"
                className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-zinc-800 dark:text-foreground tracking-[-0.04em]"
                type="popIn"
              />
            </div>
            <div className="flex justify-center items-center">
              <TextAnimate
                text="Encontre respostas para suas dúvidas"
                delay={2}
                className="text-muted-foreground text-xs md:text-md lg:text-lg"
                type="fadeInUp"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <Button className="gap-4" variant="outline">
                Precisando de Ajuda? Fale Conosco{" "}
                <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="index-0"
          >
            {accordionItems.map((item, index) => (
              <ScrollReveal key={index} className="space-y-4">
                <AccordionItem value={"index-" + index}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
