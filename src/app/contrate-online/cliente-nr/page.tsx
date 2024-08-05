import { CPFCNPJSection } from "@/components/contrate-online/cpf-cnpj";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "NR Conexôes - Contrate Online - Cliente NR",
  description: "Acesso exclusivo para clientes NR Conexões. Contrate nossos serviços de forma rápida e segura.",
};


export default function Page() {
  return (
      <>
       <CPFCNPJSection />
      </>
  );
}
