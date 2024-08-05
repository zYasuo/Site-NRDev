import { Metadata } from "next";
import { OuvidoriaSection } from "@/components/fale-conosco/ouvidoria";
import { SectionCardFaleConosco } from "@/components/home/cards/fale-conosco/content";
import { getFilialId } from "@/util/nookies/server";

export const metadata: Metadata = {
  title: "NR Conexões | Fale Conosco - Ouvidoria",
  description: "Fale Conosco - Ouvidoria - NR Conexões",
};

export default function Page() {
  const id = getFilialId();

  return (
    <>
     <OuvidoriaSection />
     <SectionCardFaleConosco AID={id} />
    </>
  );
}
