import * as z from 'zod';
import { cpfCnpjRegex, normalizeCpfCnpj, formatCpfCnpj } from '@/app/(ui)/faturas/utils';

export const FormSchema = z.object({
  cpfCnpj: z
    .string()
    .transform((value) => formatCpfCnpj(normalizeCpfCnpj(value)))
    .refine((value) => cpfCnpjRegex.test(value), {
      message: 'CPF ou CNPJ inválido. Use os formatos 000.000.000-00 ou 00.000.000/0000-00.',
    }),
});


