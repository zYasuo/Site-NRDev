export interface IFaturasResponse {
  page: string;
  total: string;
  registros: IFaturas[];
}

export interface IFaturas {
  data_inicial: string;
  data_final: string;
  id: string;
  liberado: "S";
  filial_id: string;
  status: "A" | "R";
  data_emissao: string;
  data_vencimento: string;
  valor: string;
  linha_digitavel: string;
  chave_pix: string;
  pix_twid: string;
  recebido_via_pix: string;
  pagamento_data: string;
  pagamento_valor: string;
}
