import { create } from "zustand";
import { z } from "zod";
import {
  DadosPessoaisSchema,
  DocumentosSchema,
  EnderecoSchema,
  FinalizacaoSchema,
  PlanoSchema,
} from "@/components/contrate-online/novo-cliente/form/schema";

const NovoClienteSchema = DadosPessoaisSchema.merge(EnderecoSchema)
  .merge(PlanoSchema)
  .merge(DocumentosSchema)
  .merge(FinalizacaoSchema);

interface NovoClienteFormState {
  formValues: z.infer<typeof NovoClienteSchema>;
  setFormValues: (values: Partial<z.infer<typeof NovoClienteSchema>>) => void;
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  setStep: (step: number) => void;
}

export const useNovoClienteForm = create<NovoClienteFormState>((set, get) => ({
  formValues: {
    cpfCnpj: "",
    nomeCompleto: "",
    telefone: "",
    email: "",
    rg: "",
    dataNascimento: "",
    endereco: "",
    complemento: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    plano: {
      id: "",
      id_tipo_documento: "",
      id_modelo: "",
      id_carteira_cobranca: "",
      tipo_doc_opc: "",
      tipo_doc_opc2: "",
      fidelidade: "",
      nome: "",
      valor_contrato: "",
      dataVencimento: "5" as "5" | "20",
    },
    fotoCpfCnh: null,
    rgFrente: null,
    rgVerso: null,
    selfie: null,
    termosCondicoes: false,
    pagamentoOpcao: 'boleto',
    id_filial: "",
    id_cidade: "",
  },
  setFormValues: (values) =>
    set((state) => ({
      formValues: { ...state.formValues, ...values },
    })),
  currentStep: 0,
  nextStep: () => {
    set((state) => {
      if (state.currentStep < 4) {
        return { currentStep: state.currentStep + 1 };
      }
      return state;
    });
  },
  previousStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  setStep: (step: number) => set({ currentStep: step }),
}));
