"use client";
import { ScrollReveal } from "@/components/effects/scrollReveal";
import { StarRating } from "@/components/ui/star";

export const ServicosSection: React.FC = () => {
  return (
    <div className="w-full py-16 lg:py-32">
      <ScrollReveal>
      <div className="container mx-auto">
        <div className="flex flex-col text-center dark:bg-primary/15 bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <StarRating
              value={5}
              iconProps={{ className: "fill-yellow-500 stroke-yellow-500" }}
            />
          </div>
          <div className="flex flex-col gap-2 space-y-4">
            <h3 className="text-3xl md:text-4xl lg:text-6xl tracking-tighter max-w-lxl font-regular font-regular font-semibold font-sans">
              Serviços de Qualidade
            </h3>
            <p className="text-muted-foreground text-xs md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-semibold font-sans">
              Especializados em manutenção de rede de fibra ótica externa e
              interna, oferecemos aos nossos assinantes a tecnologia mais
              avançada do mercado, com 100% de fibra óptica. Nosso foco está em
              garantir a melhor experiência de navegação, com velocidade e
              confiabilidade.
            </p>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </div>
  );
};
