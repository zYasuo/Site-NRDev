export interface ContratoData {
  id?: string;
  id_tipo_documento?: string;
  id_modelo?: string;
  contrato?: string;
  id_carteira_cobranca?: string;
  tipo_doc_opc?: string;
  tipo_doc_opc2?: string;
  fidelidade?: string;
  nomeOriginal?: string;
  valor_contrato?: string;
  dataVencimento: "5" | "20";
}
