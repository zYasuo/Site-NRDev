export interface IArquivosResponse {
  page: string;
  total: string;
  registros: IArquivos[];
}

export interface IArquivos {
  local_arquivo: string;
  id_contrato: string;
  id: string;
  descricao: string;
  nome_arquivo: string;
  data_envio: string;
  id_cliente: string;
}