import { SectionPoliticaDePrivacidade } from "@/components/politicas-de-privacidade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NR Conexões | Política de Privacidade",
  description: "Política de Privacidade - NR Conexões",
};

export default function Page() {
  return (
    <>
      <SectionPoliticaDePrivacidade />
    </>
  );
}
