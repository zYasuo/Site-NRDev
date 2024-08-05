"use server";
import { ICliente } from "@/types/routes/clientes";

export async function fetchClientePorCpfCnpj(cpfCnpj: string): Promise<ICliente | null> {
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

  if (clienteData && clienteData.registros && clienteData.registros.length > 0) {
    const cliente: ICliente = clienteData.registros[0];
    return cliente;
  } else {
    return null;
  }
}
