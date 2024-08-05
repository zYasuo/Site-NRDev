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
