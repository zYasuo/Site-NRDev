export interface IPlanos {
  page: string;
  total: string;
  registros: IRegistro[];
}

export interface IRegistro {
  id: string;
  nome: string;
  valor_contrato: string;
  Ativo: "S";
  id_filial: string;
  fidelidade: string;
  id_carteira_cobranca: string;
  id_tipo_documento: string;
  id_modelo: string;
  id_tipo_doc_opcional: string;
  tipo_doc_opc: string;
}