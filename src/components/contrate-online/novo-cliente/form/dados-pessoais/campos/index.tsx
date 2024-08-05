import { formatTelefone } from "@/app/contrate-online/utils";
import { z } from "zod";
import { DadosPessoaisSchema } from "@/components/contrate-online/novo-cliente/form/schema";

export const fields: {
  name: keyof z.infer<typeof DadosPessoaisSchema>;
  label: string;
  disabled?: boolean;
  type?: string;
  format?: (value: string) => string;
  onBlur?: boolean;
}[] = [
  { name: "cpfCnpj", label: "CPF ou CNPJ", disabled: true },
  { name: "nomeCompleto", label: "Nome Completo" },
  { name: "telefone", label: "Telefone/Celular", format: formatTelefone },
  { name: "email", label: "Email", onBlur: true },
  { name: "rg", label: "RG" },
  { name: "dataNascimento", label: "Data de Nascimento", type: "date" },
];
