import { SectionCard } from "@/components/planos/velocidade";
import { SectionCardCanaisAtendimento } from "@/components/home/cards/assine-ja";
import { OndeEstamosSection } from "@/components/home/onde-estamos";
import { AutoAtendimentoSection } from "@/components/home/cards/auto-atendimento";
import { CarouselArts } from "@/components/home/carousel";
import { SectionCardFaleConosco } from "@/components/home/cards/fale-conosco/content";
import { Metadata } from "next";
import { SociaisMidias } from "@/components/global/sociais-midia";
import SectionVantagens from "@/components/home/cards/vantagens";
import { getFilialId } from "@/util/nookies/server";
import { FaleConoscoSection } from "@/components/home/cards/fale-conosco";
import CDASection from "@/components/home/cda";
import { Hero1 } from "@/components/home/hero";
import { HeroSectionPlanos } from "@/components/planos";

export const metadata: Metadata = {
  title: "NR Conexões - Internet de qualidade para você e sua família!",
  description:
    "Conheça os planos de internet da NR Conexões. Internet de qualidade para você e sua família!",
};

export default function Page() {
  const id = getFilialId();

  return (
    <>
      <HeroSectionPlanos/>
      <SectionCard AID={id} />
      <SectionVantagens />
      <SectionCardCanaisAtendimento />
      <OndeEstamosSection AID={id} />
      <CDASection />
      <AutoAtendimentoSection />
      <SectionCardFaleConosco AID={id} />
      <FaleConoscoSection />
      <SociaisMidias />
    </>
  );
}
