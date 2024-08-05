import { UpgradeSection } from "@/components/contrate-online/nossos-servicos/upgrade-de-plano";
import { getClienteId } from "@/util/nookies/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "NR Conexôes - Contrate Online - Upgrade de Plano",
  description:
    "Melhore seu plano atual para obter maior velocidade e benefícios adicionais.",
};

export default function Page() {
  const id = getClienteId();

  if (!id) {
    notFound();
  }

  return (
    <>
      <UpgradeSection />
    </>
  );
}
