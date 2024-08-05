import { z } from "zod";
import { EnderecoSchema } from "@/components/contrate-online/novo-cliente/form/schema";
import { formatCep } from "@/app/contrate-online/utils";

export const fields: {
  name: keyof z.infer<typeof EnderecoSchema>;
  label: string;
  type?: string;
  disabled?: boolean;
  format?: (value: string) => string;
}[] = [
  { name: "cep", label: "CEP", format: formatCep },
  { name: "endereco", label: "Endereço" },
  { name: "numero", label: "Número" },
  { name: "complemento", label: "Complemento" },
  { name: "bairro", label: "Bairro" },
  { name: "cidade", label: "Cidade", disabled: true },
  { name: "estado", label: "Estado", disabled: true },
];
