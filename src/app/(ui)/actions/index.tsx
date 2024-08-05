"use server";
import { IRegistro } from "@/types/routes/filial";

export async function fetchFilialEndereco(id: string): Promise<string> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/filial`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: id, ACampo: "id" }),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar filial");
  }

  const data = await response.json();
  const filial: IRegistro = data.registros[0];

  const viaCepResponse = await fetch(`https://viacep.com.br/ws/${filial.cep}/json/`);
  if (!viaCepResponse.ok) {
    throw new Error("Erro ao buscar endereço pelo CEP");
  }

  const viaCepData = await viaCepResponse.json();
  const enderecoCompleto = `${viaCepData.logradouro}, ${filial.numero}, ${filial.bairro}, ${viaCepData.localidade} - ${viaCepData.uf}`;
  
  return enderecoCompleto;
}

export async function fetchFilialTelefone(id: string): Promise<{ telefone: string; telefone_sac: string }> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/filial`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: id, ACampo: "id" }),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar filial");
  }

  const data = await response.json();
  const filial: IRegistro = data.registros[0];

  return { telefone: filial.telefone, telefone_sac: filial.telefone1 };
}

