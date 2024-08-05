export interface ICidadesResponse {
  page: string;
  total: string;
  registros: ICidade[];
}
export interface ICidade {
  id: string;
  nome: string;
  uf: string;
  cod_ibge: string;
  regiao: string;
  cod_siafi: string;
  cod_cidade_nfse_forquilhinha_sc: string;
  origem: string;
}
