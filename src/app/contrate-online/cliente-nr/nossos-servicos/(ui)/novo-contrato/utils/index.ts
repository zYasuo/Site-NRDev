"use server"

import { ICliente } from "@/types/routes/clientes";
import { Create } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/novo-contrato/actions/create";
import { UpdateCliente } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/novo-contrato/actions/update/cliente";


export async function createContrato(plainData: any, clienteId: string) {
  return await Create(plainData, clienteId);
}

export async function updateClienteIfNeeded(cliente: ICliente, email: string, telefone: string) {
  if (email !== cliente.email || telefone !== cliente.telefone_celular) {
    await UpdateCliente(cliente, { email, telefone });
  }
}

