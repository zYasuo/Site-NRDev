import { SectionTipoCliente } from "@/components/contrate-online/tipo-cliente";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "NR Conexôes - Contrate Online",
  description: "Agora a NR possui um novo canal de atendimento, contrate nossos serviços de forma rápida e segura.",
};


export default function Page() {
  return (
      <>
        <SectionTipoCliente />
      </>
  );
}
