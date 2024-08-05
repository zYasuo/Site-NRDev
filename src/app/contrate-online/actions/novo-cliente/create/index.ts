"use server";
import { ClienteData } from "@/app/contrate-online/actions/novo-cliente/create/cliente/types";
import { ContratoData } from "@/app/contrate-online/actions/novo-cliente/create/contrato/types";
import { AtendimentoData } from "@/app/contrate-online/actions/novo-cliente/create/atendimento/types";
import { storeNovoClienteData, ChamaRotaCliente } from "@/app/contrate-online/actions/novo-cliente/create/cliente";
import { storeNovoContratoData, ChamaRotaContrato } from "@/app/contrate-online/actions/novo-cliente/create/contrato";
import { storeAtendimentoData, ChamaRotaAtendimento } from "@/app/contrate-online/actions/novo-cliente/create/atendimento";

export async function Create(formData: ClienteData & ContratoData & AtendimentoData) {
  const clienteData = await storeNovoClienteData(formData);
  const clienteResponse = await ChamaRotaCliente(clienteData);

  const contratoData = await storeNovoContratoData(formData, clienteResponse.id);
  const contratoResponse = await ChamaRotaContrato(contratoData);

  const atendimentoData = await storeAtendimentoData({
    ...formData,
    idCliente: clienteResponse.id,
    idContrato: contratoResponse.id,
  });
  await ChamaRotaAtendimento(atendimentoData);

  return clienteResponse.id;
}
