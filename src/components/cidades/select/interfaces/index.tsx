import { IRegistro } from "@/types/routes/filial";

export interface ISelectCidadeProps {
  cidades: { id: string; cidade: string; fantasia: string }[];
  desabilitaInput: boolean;
  onCidadeSelecionada: (id: string) => void;
}

export interface ISelectEstadoProps {
  onFilialSelecionada: (filiais: IRegistro[]) => void;
}
