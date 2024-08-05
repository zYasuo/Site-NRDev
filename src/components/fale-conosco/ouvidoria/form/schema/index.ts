import { z } from "zod";

export const OuvidoriaFormSchema = z.object({
  nome: z.string().min(1, "O campo nome é obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z.string().regex(/^\(\d{2}\)\d{4,5}-\d{4}$/, 'Formato de telefone inválido'),
  assunto: z.string().min(1, "O campo assunto é obrigatório"),
  mensagem: z.string().max(500, "A mensagem deve ter no máximo 500 caracteres"),
});

export type OuvidoriaFormSchemaType = z.infer<typeof OuvidoriaFormSchema>;
