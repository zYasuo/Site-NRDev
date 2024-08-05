import { z } from "zod";
import { OuvidoriaFormSchema } from "@/components/fale-conosco/ouvidoria/form/schema";
import { formatTelefone } from "@/app/contrate-online/utils";

export const formFields: {
  name: keyof z.infer<typeof OuvidoriaFormSchema>;
  label: string;
  disabled?: boolean;
  type?: string;
  format?: (value: string) => string;
  onBlur?: boolean;
}[] = [
  { name: "nome", label: "Nome Completo" },
  { name: "email", label: "Email", onBlur: true },
  { name: "telefone", label: "Telefone/Celular", format: formatTelefone },
  { name: "assunto", label: "Assunto" },
  { name: "mensagem", label: "Mensagem", type: "textarea" },
];
