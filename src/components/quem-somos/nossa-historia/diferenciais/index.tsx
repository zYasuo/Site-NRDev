"use client";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { Badge } from "@/components/ui/badge";

export const DiferenciaisSection = () => {
  return (
    <div className=" h-full bg-gradient-to-t from-background via-background to-muted dark:from-background dark:via-background dark:to-primary/15">
      <div className="w-full pb-16 lg:pb-32">
      <div className="container mx-auto">
          <div className="">
            <ScrollReveal className="space-y-4">
              <Badge>
                Fortalecendo Conexões
              </Badge>
              <div className="flex gap-4 flex-col">
                <div className="flex gap-4 flex-col">
                  <h1 className="text-3xl md:text-4xl lg:text-7xl  tracking-tighter text-left font-regular font-regular font-semibold font-sans">
                    Nossos Diferenciais
                  </h1>
                  <p className="text-muted-foreground text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-semibold font-sans">
                    Com 16 anos de história, a NR Conexões que Fortalecem se
                    orgulha de seu crescimento e da capacidade de manter
                    conexões fortes e duradouras. Nosso diferencial está no
                    atendimento personalizado, na busca constante por soluções
                    inovadoras e na capacidade de entender e atender às
                    necessidades de nossos clientes. Investimos continuamente em
                    infraestrutura e tecnologia, mantendo-nos sempre à frente
                    das evoluções do mercado.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            {/* <ScrollReveal>
              <div className="bg-muted rounded-md aspect-square overflow-hidden">
                <picture>
                  <source
                    srcSet="https://placehold.co/652x652"
                    media="(min-width: 1024px)"
                  />
                  <source
                    srcSet="https://placehold.co/434x434"
                    media="(min-width: 768px)"
                  />
                  <img
                    src="https://placehold.co/334x334"
                    alt="Imagem representativa"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </ScrollReveal> */}
          </div>
        </div>
      </div>
    </div>
  );
};
