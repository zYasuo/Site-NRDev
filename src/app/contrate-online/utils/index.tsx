import { ArquivoData } from "@/app/contrate-online/actions/novo-cliente/update/arquivos/types";
import { IContratos } from "@/types/routes/contratos";
import { format } from "date-fns";

export const cpfCnpjRegex = /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{3}\d{3}\d{3}\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{2}\d{3}\d{3}\d{4}\d{2})$/;

export const normalizeCpfCnpj = (value: string): string => {
  return value.replace(/\D/g, '');
};


export const formatCpfCnpj = (value: string): string => {
  value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  if (value.length <= 11) {
    // Formatar como CPF
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else {
    // Formatar como CNPJ
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
};

export const isCnpj = (value: string): boolean => {
  const normalizedValue = normalizeCpfCnpj(value);
  return normalizedValue.length === 14;
};



export const formatTelefone = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  let formatted = '';

  if (cleaned.length > 0) {
    formatted += '(' + cleaned.substring(0, 2);
  }
  if (cleaned.length >= 3) {
    formatted += ')' + cleaned.substring(2, 7);
  }
  if (cleaned.length >= 8) {
    formatted += '-' + cleaned.substring(7, 11);
  }

  return formatted;
};



export const formatCep = (value: string): string => {
  value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  if (value.length > 5) {
    return value.replace(/(\d{5})(\d{3})/, '$1-$2');
  }
  return value;
};


export const separateFiles = (data: any) => {
  const arquivos = {
    fotoCpfCnh: data.fotoCpfCnh,
    rgFrente: data.rgFrente,
    rgVerso: data.rgVerso,
    selfie: data.selfie,
  };

  const plainData = { ...data };
  delete plainData.fotoCpfCnh;
  delete plainData.rgFrente;
  delete plainData.rgVerso;
  delete plainData.selfie;

  return { arquivos, plainData };
}



export const prepareArquivosData = (clienteId: string, arquivos: Record<string, File>): ArquivoData[] => {
  return Object.keys(arquivos).map((key) => ({
    id_cliente: clienteId,
    descricao: key,
    arquivo: arquivos[key],
  }));
};


export function calculateDiscount(value: string, discountPercentage: number) {
  const numericValue = parseFloat(value.replace("R$", "").replace(",", "."));
  const discount = numericValue * (discountPercentage / 100);
  const discountedValue = numericValue - discount;

  return {
    discountedValue: discountedValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
    discount: discount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
  };
}


export const formatEnderecoCompleto = (enderecoData: {
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  complemento?: string;
  cep: string;
}): string => {
  const { endereco, numero, bairro, cidade, estado, complemento, cep } = enderecoData;
  return `${endereco}, ${numero}${complemento ? `, ${complemento}` : ''}, ${bairro}, ${cidade} - ${estado}, CEP: ${cep}`;
};

export function cleanContractData(data: IContratos): IContratos {
  const cleanedData: IContratos = { ...data };

  (Object.keys(cleanedData) as (keyof IContratos)[]).forEach((key) => {
    if (cleanedData[key] === '0') {
      cleanedData[key] = '';
    }
    if (cleanedData[key] === '0000-00-00') {
      cleanedData[key] = '';
    }
    if (typeof cleanedData[key] === 'string' && cleanedData[key].match(/^\d{4}-\d{2}-\d{2}$/)) {
      const date = new Date(cleanedData[key] as string);
      if (!isNaN(date.getTime())) {
        cleanedData[key] = format(date, 'dd/MM/yyyy') as any;
      }
    }
  });

  return cleanedData;
}