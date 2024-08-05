export interface IFilial {
  page: string;
  total: string;
  registros: IRegistro[];
}

export interface IRegistro {
  id: string;
  id_empresa: string;
  razao: string;
  fantasia: string;
  cidade: string;
  cnpj: string;
  endereco: string;
  numero: string;
  cep: string;
  telefone: string;
  telefone1: string
  email: string;
  bairro: string;
}
