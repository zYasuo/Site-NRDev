import CardPlanos from '@/components/planos/velocidade/card';
import { ScrollReveal } from "@/components/effects/scrollReveal";

interface PlanosTabContentProps {
  planos: any[];
  categoria: string;
}

export const PlanosTabContent: React.FC<PlanosTabContentProps> = ({ planos, categoria }) => {
  const popularIndex = Math.floor(planos.length / 2); 

  return (
    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:items-center z-20">
      {planos.length > 0 ? (
        planos.map((plano, index) => (
          <ScrollReveal key={index} >
          <CardPlanos
            key={plano.id}
            id={plano.id}
            nome={plano.nome}
            valor={plano.valor_contrato}
            fidelidade={plano.fidelidade}
            isPopular={index === popularIndex} 
            categoria={categoria} 
          />
          </ScrollReveal>
        ))
      ) : (
        <div>Nenhum plano encontrado</div>
      )}
    </div>
  );
};