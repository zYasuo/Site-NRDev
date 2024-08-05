import { Etapas } from "@/components/contrate-online/nossos-servicos/novo-contrato/etapas";
import { getClienteId } from "@/util/nookies/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";


export const metadata: Metadata = {
  title: "NR Conexôes - Contrate Online - Novo Contrato",
  description: "Contrate um novo plano de internet e aproveite a melhor conexão.",
};


export default function Page() {
  const id = getClienteId();

  if (!id) {
    notFound();
  }

  return (
      <>
        <Etapas />
      </>
  );
}
