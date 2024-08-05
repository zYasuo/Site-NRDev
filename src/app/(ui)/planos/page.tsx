import { SociaisMidias } from "@/components/global/sociais-midia";
import { SectionCardCanaisAtendimento } from "@/components/home/cards/assine-ja";
import { Hero1 } from "@/components/home/hero";
import { HeroBannerPlanos } from "@/components/planos/hero-banner";
import { HeroNRFrase } from "@/components/planos/hero-nr";
import { SectionCard } from "@/components/planos/velocidade";
import { getFilialId } from "@/util/nookies/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos NR Conexões",
  description:
    "Conheça os planos de internet da NR Conexões. Internet de qualidade para você e sua família!",
};

export default function Page() {
  const id = getFilialId();


  return (
    <>
      <Hero1 />
      <SectionCard AID={id} />
      <SectionCardCanaisAtendimento />
      <HeroNRFrase />
      <SociaisMidias />
    </>
  );
}
