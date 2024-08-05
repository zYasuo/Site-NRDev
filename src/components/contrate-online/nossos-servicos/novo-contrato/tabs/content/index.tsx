import CardPlanos from "@/components/contrate-online/nossos-servicos/novo-contrato/cards/velocidade";
import { ScrollReveal } from "@/components/effects/scrollReveal";

interface PlanosTabContentProps {
  planos: any[];
  categoria: string;
  handleSelectPlano: (plano: any) => void;
  selectedPlano: any;
}

export const PlanosTabContent: React.FC<PlanosTabContentProps> = ({
  planos,
  categoria,
  handleSelectPlano,
  selectedPlano,
}) => {
  const popularIndex = Math.floor(planos.length / 2);
  return (
    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:items-center">
      {planos.map((plano, index) => (
        <ScrollReveal key={index}>
          <CardPlanos
            key={plano.id}
            plano={plano}
            isSelected={selectedPlano?.id === plano.id}
            onSelect={handleSelectPlano}
            isPopular={index === popularIndex}
            categoria={categoria}
          />
        </ScrollReveal>
      ))}
    </div>
  );
};
