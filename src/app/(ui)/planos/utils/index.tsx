import { IRegistro } from "@/types/routes/planos";

export const formatCurrency = (value: string): string => {
  const valorNumerico = parseFloat(value.replace(",", "."));
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valorNumerico);
};

export const simplifyPlanName = (nome: string): string => {
  const regex = /\((\d+ [A-Z]+|1 GIGA)\)/i;
  const match = nome.match(regex);
  
  if (match) {
    return match[1];  
  }

  return nome;
};

export const sortByPrice = (a: any, b: any) => {
  const priceA = parseFloat(a.valor_contrato.replace('R$', '').replace('.', '').replace(',', '.').trim());
  const priceB = parseFloat(b.valor_contrato.replace('R$', '').replace('.', '').replace(',', '.').trim());
  return priceA - priceB;
};

export const filterAndSortPlanos = (planos: any[], tipo: string) => {
  return planos
    .filter(plano => plano.nome.includes(tipo))
    .sort(sortByPrice)
    .map(plano => ({
      ...plano,
      nomeOriginal: plano.nome,
      nome: simplifyPlanName(plano.nome),
    }));
};


export const filterAndSortHomePlanos = (planos: any[]) => {
  return planos
    .filter(plano => !plano.nome.includes('GAMER') && !plano.nome.includes('ACCESS'))
    .sort(sortByPrice)
    .map(plano => ({
      ...plano,
      nomeOriginal: plano.nome,
      nome: simplifyPlanName(plano.nome),
    }));
};

export const filterHigherValuePlans = (planos: IRegistro[], valorAtual: string): IRegistro[] => {
  const valorNumericoAtual = parseFloat(valorAtual.replace('R$', '').replace(' ', '').replace('.', '').replace(',', '.'));
  return planos.filter(plano => parseFloat(plano.valor_contrato.replace('R$', '').replace(' ', '').replace('.', '').replace(',', '.')) > valorNumericoAtual);
};