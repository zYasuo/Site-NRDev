"use server";

import { ContratoData } from "@/app/contrate-online/actions/novo-cliente/create/contrato/types";

export async function storeNovoContratoData(formData: ContratoData, id_cliente: string) {
  const data = JSON.parse(JSON.stringify(formData));

  const dataExpiracao = new Date();
  dataExpiracao.setDate(dataExpiracao.getDate() + 365);
  const dia = dataExpiracao.getDate().toString().padStart(2, '0');
  const mes = (dataExpiracao.getMonth() + 1).toString().padStart(2, '0');
  const ano = dataExpiracao.getFullYear().toString();
  const dataExpiracaoFormatada = `${dia}/${mes}/${ano}`;

  const contratoData = {
    id_cliente: id_cliente,
    id_vd_contrato: data.plano.id,
    dia_vencimento: data.plano.dataVencimento,
    id_carteira_cobranca: data.plano.id_carteira_cobranca,
    id_descricao_plano: data.plano.nomeOriginal,
    id_tipo_doc: data.plano.id_tipo_documento,
    tipo_doc_opc: data.plano.tipo_doc_opc,
    id_modelo: data.plano.id_modelo,
    bairro: data.bairro,
    cep: data.cep,
    idCidade: data.id_cidade,
    idFilial: data.id_filial,
    complemento: data.complemento,
    logradouro: data.endereco,
    numero: data.numero,
  };

  return contratoData;
}


export async function ChamaRotaContrato(data: ContratoData) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/ixc/novo-contrato/fisico/create/contratos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar contrato");
  }

  const contratoResponse = await response.json();
  return {
    ...contratoResponse,
    id: contratoResponse.id, 
  };
}