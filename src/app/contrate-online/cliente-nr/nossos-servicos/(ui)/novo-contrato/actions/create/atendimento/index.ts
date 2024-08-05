"use server";

import { AtendimentoData } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/novo-contrato/actions/create/atendimento/types";
import { formatEnderecoCompleto } from "@/app/contrate-online/utils";

export async function storeAtendimentoData(formData: AtendimentoData) {
  const data = JSON.parse(JSON.stringify(formData));

  const atendimentoData = {
    idCliente: data.idCliente,
    idContrato: data.idContrato,
    idFilial: data.idFilial,
    enderecoCompleto: formatEnderecoCompleto({
      endereco: data.endereco,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
      complemento: data.complemento,
      cep: data.cep,
    }),
  };

  return atendimentoData;
}

export async function ChamaRotaAtendimento(data: AtendimentoData) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/ixc/novo-cliente/fisico/create/atendimento`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar atendimento");
  }

  const atendimentoData = await response.json();
  return atendimentoData;
}
