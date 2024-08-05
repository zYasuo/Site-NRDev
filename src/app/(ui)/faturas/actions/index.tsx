"use server";
import { ICliente } from "@/types/routes/clientes";
import { IFaturas } from "@/types/routes/faturas";
import { IPixResponse } from "@/types/routes/faturas/pix";

interface ClienteFaturas {
  cliente: ICliente | null;
  faturas: IFaturas[];
}

export async function fetchFaturasPorCpfCnpj(cpfCnpj: string): Promise<ClienteFaturas> {
  const clienteResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/clientes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: cpfCnpj, ACampo: "cnpj_cpf" }),
  });

  if (!clienteResponse.ok) {
    throw new Error("Erro ao buscar cliente");
  }

  const clienteData = await clienteResponse.json();

  if (clienteData.total === 0) {
    return { cliente: null, faturas: [] };
  }

  const cliente: ICliente = clienteData.registros[0];

  const faturasResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/faturas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: cliente.id, ACampo: "id_cliente" }),
  });

  if (!faturasResponse.ok) {
    throw new Error("Erro ao buscar faturas");
  }

  const faturasData = await faturasResponse.json();
  const faturas: IFaturas[] = faturasData.registros;

  return {
    cliente,
    faturas,
  };
}


export async function fetchBoletoPDF(idBoletos: string[]): Promise<Blob> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/faturas/boletos/pdf`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ACampo: idBoletos }),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar Boleto");
  }

  return await response.blob();
}



export async function fetchPix(idBoleto: string): Promise<IPixResponse> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/faturas/pix`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ACampo: idBoleto }),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar PIX");
  }

  const data: IPixResponse = await response.json();
  return data;
}