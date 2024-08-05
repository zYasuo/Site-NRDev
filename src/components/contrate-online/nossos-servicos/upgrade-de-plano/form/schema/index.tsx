import { z } from 'zod';

export const DadosContratoSchema = z.object({
  id_contrato: z.string().min(1, 'ID do contrato é obrigatório'),
  id_filial: z.string().min(1, 'ID da filial é obrigatório'),
});

export const DadosPessoaisSchema = z.object({
  cpfCnpj: z.string(),
  nomeCompleto: z.string().min(1, 'Nome completo é obrigatório'),
  telefone: z.string().regex(/^\(\d{2}\)\d{4,5}-\d{4}$/, 'Formato de telefone inválido'),
  email: z.string().email('Email inválido'),

});


export const PlanoSchema = z.object({
  plano: z.object({
    id: z.string().min(1,"Selecione um plano"),
    id_tipo_documento: z.string().optional(),
    id_modelo: z.string().optional(),
    id_carteira_cobranca: z.string().optional(),
    tipo_doc_opc: z.string().optional(),
    tipo_doc_opc2: z.string().optional(),
    fidelidade: z.string().optional(),
    nome: z.string().optional(),
    nomeOriginal: z.string().optional(),
    valor_contrato: z.string().optional(),
    dataVencimento: z.enum(["5", "20"]),
  })
});


export const DocumentosSchema = z.object({
  fotoCpfCnh: z.any().refine((file) => file instanceof File && file.type.startsWith('image/'), {
    message: 'Somente imagens são permitidas',
  }),
  rgFrente: z.any().refine((file) => file instanceof File && file.type.startsWith('image/'), {
    message: 'Somente imagens são permitidas',
  }),
  rgVerso: z.any().refine((file) => file instanceof File && file.type.startsWith('image/'), {
    message: 'Somente imagens são permitidas',
  }),
  selfie: z.any().refine((file) => file instanceof File && file.type.startsWith('image/'), {
    message: 'Somente imagens são permitidas',
  }),
});


export const FinalizacaoSchema = z.object({
  termosCondicoes: z.boolean().refine(val => val, {
    message: "Você deve aceitar os termos e condições",
  }),
  pagamentoOpcao: z.enum(['boleto', 'desconto']).refine(val => val, {
    message: "Você deve selecionar uma opção de pagamento",
  }),
});