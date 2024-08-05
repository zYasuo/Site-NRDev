"use server";
import { ICliente } from "@/types/routes/clientes";

export async function fetchClientePorEmail(email: string): Promise<ICliente | null> {
  const clienteResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/clientes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: email, ACampo: "email" }),
  });

  if (!clienteResponse.ok) {
    throw new Error("Erro ao buscar cliente");
  }

  const clienteData = await clienteResponse.json();

  if (clienteData && clienteData.registros && clienteData.registros.length > 0) {
    const cliente: ICliente = clienteData.registros[0];
    return cliente;
  } else {
    return null;
  }
}

export async function fetchAddressByCep(cep: string): Promise<any> {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if (!response.ok) {
    throw new Error("Erro ao buscar endereço pelo CEP");
  }

  const data = await response.json();
  if (data.erro) {
    throw new Error("CEP não encontrado");
  }

  return data;
}


export async function fetchCidadeByIbge(ibge: string): Promise<any> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/cidades`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: ibge, ACampo: "cod_ibge" }),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar cidade pelo código IBGE");
  }

  const data = await response.json();
  if (!data || !data.registros || data.registros.length === 0) {
    throw new Error("Cidade não encontrada");
  }

  return data.registros[0];
}


export async function fetchFilialByCidade(idCidade: string): Promise<any> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/filial`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: idCidade, ACampo: "cidade" }),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar filial pela cidade");
  }

  const data = await response.json();
  if (data && data.registros && data.registros.length > 0) {
    return data.registros[0];
  } else {
    throw new Error("Filial não encontrada");
  }
}