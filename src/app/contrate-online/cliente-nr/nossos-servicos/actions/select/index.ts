"use server"
import { formatCurrency, simplifyPlanName } from "@/app/(ui)/planos/utils";
import { IArquivos } from "@/types/routes/arquivos";
import { ICliente } from "@/types/routes/clientes";
import { IContratos } from "@/types/routes/contratos";
import { IRegistro } from "@/types/routes/planos";
import { differenceInMonths, parseISO } from "date-fns";

export async function fetchClientePorId(id: string): Promise<ICliente | null> {

  const clienteResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/clientes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: id, ACampo: "id" }),
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


export async function fetchArquivosCliente(idCliente: string): Promise<IArquivos[]> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/arquivos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: idCliente, ACampo: "id_cliente" }),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar arquivos do cliente");
  }

  const data = await response.json();
  return data.registros || [];
}

export async function validateDocuments(idCliente: string): Promise<boolean> {
  try {
    const arquivosCliente: IArquivos[] = await fetchArquivosCliente(idCliente);

    const documentosNecessarios = arquivosCliente.length < 4;

    const seisMesesAtras = new Date();
    seisMesesAtras.setMonth(seisMesesAtras.getMonth() - 6);

    const documentosAntigos = arquivosCliente.some((arquivo) => {
      const dataEnvio = parseISO(arquivo.data_envio);
      return differenceInMonths(new Date(), dataEnvio) > 6;
    });

    return documentosNecessarios || documentosAntigos;
  } catch (error) {
    console.error("Erro ao validar documentos do cliente:", error);
    return false;
  }
}


export async function fetchContratos(idCliente: string): Promise<IContratos[]> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/contratos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: idCliente, ACampo: "id_cliente" }),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar contratos do cliente");
  }

  const data = await response.json();
  return data.registros || [];
}

export async function validateContracts(idCliente: string): Promise<boolean> {
  try {
    const contratosCliente: IContratos[] = await fetchContratos(idCliente);
    
    const contratoInternetAA = contratosCliente.some(contrato => contrato.status_internet === "AA");

    if (contratoInternetAA) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Erro ao validar contratos do cliente:", error);
    return false;
  }
}


export async function fetchPlanosContrato(query: string, campo: string): Promise<IRegistro[]> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/buscas/planos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ AQuery: query, ACampo: campo }),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar planos do contrato");
  }

  const data = await response.json();

  return data.registros.map((plano: any) => ({
    ...plano,
    valor_contrato: formatCurrency(plano.valor_contrato),
    nomeOriginal: plano.nome,
    nome: simplifyPlanName(plano.nome),
  })) || [];
}


