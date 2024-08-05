import { SociaisMidias } from "@/components/global/sociais-midia";
import CompromissoSection from "@/components/quem-somos/compromisso-ambiental";
import { SobreNRConexoes } from "@/components/quem-somos/nossa-historia";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Quem Somos - NR Conexões",
  description: "Conheça a NR Conexões, uma empresa de internet com compromisso ambiental e social.",
};

export default function Page() {
  return (
    <>
      <SobreNRConexoes />
      <CompromissoSection />
      <SociaisMidias />
    </>
  );
}
