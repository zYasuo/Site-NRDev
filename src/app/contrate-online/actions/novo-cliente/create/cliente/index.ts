"use server";

import { ClienteData } from "@/app/contrate-online/actions/novo-cliente/create/cliente/types";

export async function storeNovoClienteData(formData: ClienteData) {
  const data = JSON.parse(JSON.stringify(formData));

  const clienteData = {
    cpfCnpj: data.cpfCnpj,
    nomeCompleto: data.nomeCompleto,
    telefone: data.telefone,
    email: data.email,
    rg: data.rg,
    dataNascimento: data.dataNascimento,
    bairro: data.bairro,
    cep: data.cep,
    idCidade: data.id_cidade,
    idFilial: data.id_filial,
    complemento: data.complemento,
    logradouro: data.endereco,
    numero: data.numero,
  };

  return clienteData;
}

export async function ChamaRotaCliente(data: ClienteData) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/ixc/novo-cliente/fisico/create/clientes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar cliente");
  }

  const clienteData = await response.json();
  return clienteData;
}