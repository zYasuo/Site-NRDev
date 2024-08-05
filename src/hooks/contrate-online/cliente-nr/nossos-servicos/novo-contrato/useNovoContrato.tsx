import { create } from "zustand";
import { z } from "zod";
import {
  DadosPessoaisSchema,
  DocumentosSchema,
  EnderecoSchema,
  FinalizacaoSchema,
  PlanoSchema,
} from "@/components/contrate-online/nossos-servicos/novo-contrato/form/schema";

const NovoContratoSchema = DadosPessoaisSchema.merge(EnderecoSchema)
  .merge(PlanoSchema)
  .merge(DocumentosSchema)
  .merge(FinalizacaoSchema);

interface NovoContratoFormState {
  formValues: z.infer<typeof NovoContratoSchema>;
  setFormValues: (values: Partial<z.infer<typeof NovoContratoSchema>>) => void;
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  setStep: (step: number) => void;
  documentosNecessarios: boolean;
  setDocumentosNecessarios: (necessarios: boolean) => void;
}

export const useNovoContratoForm = create<NovoContratoFormState>((set) => ({
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
      const { currentStep, documentosNecessarios } = state;
      let nextStep = currentStep + 1;

      if (!documentosNecessarios && nextStep === 3) {
        nextStep = 4;
      }

      return { currentStep: nextStep };
    });
  },
  previousStep: () => set((state) => {
    const { currentStep, documentosNecessarios } = state;
    let previousStep = currentStep - 1;

    if (!documentosNecessarios && currentStep === 4) {
      previousStep = 2;
    }

    return { currentStep: previousStep };
  }),
  setStep: (step: number) => set({ currentStep: step }),
  documentosNecessarios: false,
  setDocumentosNecessarios: (necessarios: boolean) => set({ documentosNecessarios: necessarios }),
}));
