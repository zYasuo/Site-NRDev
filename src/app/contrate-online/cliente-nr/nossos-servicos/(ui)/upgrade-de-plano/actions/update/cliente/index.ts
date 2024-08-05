"use server";

import { ClienteData } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/novo-contrato/actions/update/cliente/types";
import { ICliente } from "@/types/routes/clientes";

export async function storeNovoClienteData(formData: ClienteData) {
  const data = JSON.parse(JSON.stringify(formData));

  const clienteData = {
    telefone: data.telefone,
    email: data.email,
  };

  return clienteData;
}


export async function UpdateCliente(cliente: ICliente, data: Partial<ClienteData>) {
  const clienteAtualizado = {
    ...cliente,
    ...data,
  };


  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/ixc/upgrade-de-plano/fisico/update/clientes/${cliente.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clienteAtualizado),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao atualizar cliente");
  }

  return await response.json();
}
