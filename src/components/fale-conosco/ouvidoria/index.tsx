"use client"
import { ScrollReveal } from "@/components/effects/scrollReveal"
import { TextAnimate } from "@/components/effects/textAnimate"
import { Badge } from "@/components/ui/badge"
import { OuvidoriaForm } from "@/components/fale-conosco/ouvidoria/form"

export const OuvidoriaSection = () => {
  return (
    <div className="dark:bg-primary/15 bg-muted md:h-screen lg:h-screen h-full">
      <div className="py-16 lg:py-32 container relative flex flex-col h-full justify-center">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-8 flex-1">
          <ScrollReveal className=" flex-1 flex flex-col items-start justify-center">
            <Badge className="text-white">
              <TextAnimate text="Fale Conosco" type="popIn" />
            </Badge>
            <div>
              <TextAnimate
                text="Fale Conosco"
                className="text-3xl md:text-4xl lg:text-7xl font-regular font-semibold font-sans text-primary dark:text-foreground tracking-[-0.04em]"
                type="popIn"
              />
            </div>
            <div>
              <TextAnimate
                text="Nosso horário de atendimento é de segunda a sexta-feira"
                delay={2}
                className="text-muted-foreground text-xs md:text-md lg:text-lg"
                type="fadeInUp"
              />
            </div>
            <div>
              <TextAnimate
                text="das 08:00 às 18:00 e aos sábados das 08:00 às 16:00."
                delay={2}
                className="text-muted-foreground text-xs md:text-md lg:text-lg"
                type="fadeInUp"
              />
            </div>
          </ScrollReveal>
          <OuvidoriaForm />
          </div>
        </div>
      </div>
    </div>
  )
}