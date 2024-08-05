import { decrypt } from "@/lib/crypto";
import { IParamsID } from "@/types/params/params.id.types";
import { Metadata } from "next";
import { fetchInformationContract } from "@/app/contrate-online/assinatura-digital/actions";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "NR Conexões - Internet de qualidade para você e sua família!",
  description:
    "Conheça os planos de internet da NR Conexões. Internet de qualidade para você e sua família!",
};

export default async function Page(AID: IParamsID) {
  try {
    const id = decrypt(AID.params.id);
    const contrato = await fetchInformationContract(id);
    if (contrato.status_internet !== "AA") {
      notFound();
      return null;
    }

    return (
      <div>
        <h1>Detalhes do Contrato</h1>
        <p>Informações detalhadas do contrato serão exibidas aqui.</p>
      </div>
    );
  } catch (error) {
    console.error("Erro ao buscar informações do contrato:", error);
    notFound();
    return null;
  }
}
