import { CPFCNPJSection } from "@/components/contrate-online/cpf-cnpj";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "NR Conexôes - Contrate Online - Sou Novo",
  description: "Agora a NR possui um novo canal de atendimento, contrate nossos serviços de forma rápida e segura.",
};


export default function Page() {
  return (
      <>
       <CPFCNPJSection />
      </>
  );
}
