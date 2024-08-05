import { formatTelefone } from "@/app/contrate-online/utils";
import { z } from "zod";
import { DadosPessoaisSchema } from "@/components/contrate-online/nossos-servicos/novo-contrato/form/schema";

export const fields: {
  name: keyof z.infer<typeof DadosPessoaisSchema>;
  label: string;
  disabled?: boolean;
  type?: string;
  format?: (value: string) => string;
  onBlur?: boolean;
}[] = [
  { name: "cpfCnpj", label: "CPF ou CNPJ", disabled: true },
  { name: "nomeCompleto", label: "Nome Completo", disabled: true },
  { name: "telefone", label: "Telefone/Celular", format: formatTelefone },
  { name: "email", label: "Email", onBlur: true }
  
];
