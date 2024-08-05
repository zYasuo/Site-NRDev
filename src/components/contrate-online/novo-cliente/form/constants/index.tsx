export const planoDetails = [
  { label: "Velocidade", value: (formValues: any) => formValues.plano.nome },
  { label: "Valor", value: (formValues: any) => formValues.plano.valor_contrato },
  { label: "Fidelidade", value: (formValues: any) => `${formValues.plano.fidelidade} meses` },
  { label: "Vencimento", value: (formValues: any) => `${formValues.plano.dataVencimento}º dia do mês` },
];

export const clientDetails = [
  { label: "CPF", value: (formValues: any) => formValues.cpfCnpj },
  { label: "Nome", value: (formValues: any) => formValues.nomeCompleto },
  { label: "Email", value: (formValues: any) => formValues.email },
  { label: "Telefone", value: (formValues: any) => formValues.telefone },
];

export const enderecoDetails = [
  { label: "Instalação", value: (formValues: any) => formValues.endereco },
  { label: "Número", value: (formValues: any) => formValues.numero },
  { label: "Bairro", value: (formValues: any) => formValues.bairro },
  { label: "Cidade", value: (formValues: any) => formValues.cidade },
  { label: "Estado", value: (formValues: any) => formValues.estado },
  { label: "CEP", value: (formValues: any) => formValues.cep },
];