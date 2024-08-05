"use client";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { TextAnimate } from "@/components/effects/textAnimate";
import { Badge } from "@/components/ui/badge";
import { Building2Icon, ThumbsUpIcon, Users2Icon } from "lucide-react";

export default function CompromissoSection() {
  return (
    <div className="md:h-screen lg:h-screen h-full">
      <div className="container py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-12">
            <div>
            <ScrollReveal className="space-y-4">
                <Badge>Em prol do meio ambiente</Badge>

                <div className="flex justify-start">
                  <TextAnimate
                    text="Compromisso"
                    className="text-3xl md:text-4xl lg:text-7xl max-w-lg tracking-tighter text-left font-regular font-regular font-semibold font-sans"
                    type="popIn"
                  />
                </div>
                <div className="flex justify-start ">
                  <TextAnimate
                    text="Ambiental e Social"
                    delay={2}
                    className="text-3xl md:text-4xl lg:text-7xl -mt-4 max-w-lg tracking-tighter text-left font-regular font-regular font-semibold font-sans"
                    type="popIn"
                  />
                </div>
              </ScrollReveal>
              <p className="text-muted-foreground text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-semibold font-sans">
                Nosso compromisso vai além da conexão de internet. Trabalhamos
                com processos internos voltados para a sustentabilidade, como a
                captação de águas pluviais e o uso de energia limpa, refletindo
                nossa preocupação com o meio ambiente e com o futuro do nosso
                planeta.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              <div className="flex">
                <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg ont-regular font-regular font-semibold font-sans">
                    Ambientes sustentáveis
                  </h3>
                  <p className="mt-1 text-muted-foreground text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-semibold font-sans">
                    Nossas instalações são projetadas para minimizar o impacto
                    ambiental e garantir a eficiência energética.
                  </p>
                </div>
              </div>

              <div className="flex">
                <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold font-regular font-regular font-sans">
                    Juntos somos mais fortes
                  </h3>
                  <p className="mt-1 text-muted-foreground text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-semibold font-sans">
                    Nosso compromisso com a comunidade vai além da conexão de
                    internet. Realizamos ações sociais e projetos de
                    conscientização ambiental para promover a cidadania e a
                    sustentabilidade.
                  </p>
                </div>
              </div>
              <div className="flex">
                <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-regular font-regular font-semibold font-sans">
                    Experiência sem preocupações
                  </h3>
                  <p className="mt-1 text-muted-foreground text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-semibold font-sans">
                    Nossa equipe está sempre disponível para atender às suas
                    necessidades e garantir que você tenha a melhor experiência
                    de navegação, sem preocupações com a conexão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
