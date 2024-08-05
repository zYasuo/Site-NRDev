"use server";

import { ICliente } from "@/types/routes/clientes";
import { Create } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/upgrade-de-plano/actions/create";
import { UpdateCliente } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/upgrade-de-plano/actions/update/cliente";
import { ContratoData } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/upgrade-de-plano/actions/update/contrato/types";
import { storeNovoContratoData, UpdateContrato, UpdateStatusContrato } from "@/app/contrate-online/cliente-nr/nossos-servicos/(ui)/upgrade-de-plano/actions/update/contrato";
import { IContratos } from "@/types/routes/contratos";

export async function createAtendimento(plainData: any) {
  return await Create(plainData);
}

export async function updateClienteIfNeeded(cliente: ICliente, email: string, telefone: string) {
  if (email !== cliente.email || telefone !== cliente.telefone_celular) {
    await UpdateCliente(cliente, { email, telefone });
  }
}

export async function updateContrato(contratoId: string, plano: ContratoData, contratoAtual: IContratos) {
  const contratoData = await storeNovoContratoData(plano, contratoAtual);
  await UpdateContrato(contratoId, contratoData);
}


export async function updateStatusContrato(contratoId: string) {
  await UpdateStatusContrato(contratoId);
}


