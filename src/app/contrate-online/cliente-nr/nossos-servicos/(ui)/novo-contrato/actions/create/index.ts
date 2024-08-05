"use server";
import { ContratoData } from "@/app/contrate-online/actions/novo-cliente/create/contrato/types";
import { AtendimentoData } from "@/app/contrate-online/actions/novo-cliente/create/atendimento/types";
import { storeNovoContratoData, ChamaRotaContrato } from "@/app/contrate-online/actions/novo-cliente/create/contrato";
import { storeAtendimentoData, ChamaRotaAtendimento } from "@/app/contrate-online/actions/novo-cliente/create/atendimento";

export async function Create(formData: ContratoData & AtendimentoData, clienteId: string) {
  const contratoData = await storeNovoContratoData(formData, clienteId);
  const contratoResponse = await ChamaRotaContrato(contratoData);

  const atendimentoData = await storeAtendimentoData({
    ...formData,
    idCliente: clienteId,
    idContrato: contratoResponse.id,
  });
  await ChamaRotaAtendimento(atendimentoData);

  return contratoResponse.id;
}
