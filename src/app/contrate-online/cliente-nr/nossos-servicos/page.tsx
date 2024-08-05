import { getClienteId } from "@/util/nookies/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SectionServicos } from "@/components/contrate-online/nossos-servicos";

export const metadata: Metadata = {
  title: "NR Conexôes - Contrate Online - Nossos Serviços",
  description:
    "Conheça os serviços que a NR Conexões oferece para você. Contrate online de forma rápida e segura.",
};

export default function Page() {
  const id = getClienteId();

  if (!id) {
    notFound();
  }

  return (
    <>
      <SectionServicos />
    </>
  );
}
