import { CidadeSection } from "@/components/cidades";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NR Conexões - Cidades",
  description: "Veja nossa aréa de cobertura",
};

export default function Page() {
  return <CidadeSection />;
}
