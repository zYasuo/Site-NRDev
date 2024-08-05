"use client";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";

export const SectionQuemSomos = () => {
  return (
    <div className="bg-gradient-to-b from-background via-background to-muted dark:from-background dark:via-background dark:to-primary/15 md:h-screen lg:h-screen h-full">
      <div className="container mx-auto pb-16 lg:pb-32">
        <div className="grid grid-cols-1 gap-8 items-center justify-center lg:grid-cols-2">
          <ScrollReveal className="flex gap-4 flex-col">
            <div>
              <Badge >Quem somos</Badge>
            </div>
            <div className="flex flex-col">
              <div>
                <TextAnimate
                  text="NR Conexões"
                  className="text-3xl md:text-4xl lg:text-7xl max-w-lg tracking-tighter text-left font-regular font-semibold font-sans"
                  type="popIn"
                />
              </div>
              <div>
                <TextAnimate
                  text="que Fortalecem"
                  className="text-3xl md:text-4xl lg:text-7xl max-w-lg tracking-tighter text-left font-regular font-semibold font-sans"
                  type="popIn"
                  delay={1}
                />
              </div>
              <div></div>
              <p className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-semibold font-sans">
                <span className="font-bold text-primary">
                  A velocidade da fibra. A força da conexão.
                </span>{" "}
                Este é o lema que nos guia em nosso 16º ano. Na NR Conexões que
                Fortalecem, acreditamos que as boas conexões têm o poder de
                fortalecer indivíduos e comunidades, encurtando distâncias e
                criando oportunidades.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className=" rounded-md aspect-square overflow-hidden">
              <picture>
                <source
                  srcSet="https://lh3.googleusercontent.com/p/AF1QipMW4Jkmhk_Bn4fh0IVwUgGx2NdswfrBStv6jcne=s680-w680-h510"
                  media="(min-width: 1024px)"
                />
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipMW4Jkmhk_Bn4fh0IVwUgGx2NdswfrBStv6jcne=s330-w330-h330"
                  alt="Imagem representativa"
                  className="w-full h-full object-contain rouded-lg"
                />
              </picture>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
