"use server";

import { ContratoData } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/upgrade-de-plano/actions/update/contrato/types";
import { IContratos } from "@/types/routes/contratos";
import { cleanContractData } from "@/app/contrate-online/utils";

export async function storeNovoContratoData(
  formData: ContratoData,
  contratoAtual: IContratos
) {
  const data = JSON.parse(JSON.stringify(formData));

  const contratoData: IContratos = {
    ...cleanContractData(contratoAtual),
    id_vd_contrato: data.id_vd_contrato,
    contrato: data.nomeOriginal,
    id_tipo_documento: data.id_tipo_documento,
    id_modelo: data.id_modelo,
    id_carteira_cobranca: data.id_carteira_cobranca,
    tipo_doc_opc: data.tipo_doc_opc,
    tipo_doc_opc2: data.tipo_doc_opc2,
    motivo_inclusao: "U",
    fidelidade: data.fidelidade,
  };

  return contratoData;
}

export async function UpdateContrato(
  contratoId: string,
  data: Partial<IContratos>
) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/ixc/upgrade-de-plano/fisico/update/contratos/${contratoId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao atualizar contrato");
  }

  return await response.json();
}


export async function UpdateStatusContrato(contratoId: string) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/ixc/upgrade-de-plano/fisico/update/contratos/status/${contratoId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: contratoId }),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao atualizar status do contrato");
  }

  return await response.json();
}