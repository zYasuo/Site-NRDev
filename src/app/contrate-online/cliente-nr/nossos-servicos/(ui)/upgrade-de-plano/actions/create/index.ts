"use server";
import { AtendimentoData } from "@/app/contrate-online/actions/novo-cliente/create/atendimento/types";
import { storeAtendimentoData, ChamaRotaAtendimento } from "@/app/contrate-online/actions/novo-cliente/create/atendimento";

export async function Create(formData: AtendimentoData) {
  const atendimentoData = await storeAtendimentoData(formData);
  return await ChamaRotaAtendimento(atendimentoData);
}
