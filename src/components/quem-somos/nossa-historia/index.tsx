import { SobreANRSection } from "@/components/quem-somos/nossa-historia/sobre-a-nr";
import { SectionQuemSomos } from "@/components/quem-somos";
import OqueNosFortalece from "@/components/quem-somos/nossa-historia/quem-somos";
import { ServicosSection } from "@/components/quem-somos/nossa-historia/nossos-servicos";
import { SectionNRConexoes } from "./visao-missao-valores";
import { DiferenciaisSection } from "@/components/quem-somos/nossa-historia/diferenciais";
import { DragCards } from "@/components/quem-somos/nossa-historia/img-historias";

export const SobreNRConexoes: React.FC = () => {
  return (
    <>
      <OqueNosFortalece />
      <SectionQuemSomos />
      <SobreANRSection />
      <DragCards />
      <SectionNRConexoes />
      <DiferenciaisSection />
      <ServicosSection />
    </>
  );
};
