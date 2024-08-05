import { create } from "zustand";
import { z } from "zod";
import {
  DadosPessoaisSchema,
  DocumentosSchema,
  FinalizacaoSchema,
  PlanoSchema,
  DadosContratoSchema,
} from "@/components/contrate-online/nossos-servicos/upgrade-de-plano/form/schema";

const UpgradeSchema = DadosPessoaisSchema.merge(PlanoSchema)
  .merge(DocumentosSchema)
  .merge(FinalizacaoSchema)
  .merge(DadosContratoSchema);

interface UpgradeFormState {
  formValues: z.infer<typeof UpgradeSchema>;
  setFormValues: (values: Partial<z.infer<typeof UpgradeSchema>>) => void;
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  setStep: (step: number) => void;
  documentosNecessariosUpgrade: boolean;
  setDocumentosNecessariosUpgrade: (necessarios: boolean) => void;
}
export const useUpgrade = create<UpgradeFormState>((set) => ({
  formValues: {
    cpfCnpj: "",
    nomeCompleto: "",
    telefone: "",
    email: "",
    rg: "",
    dataNascimento: "",
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
    id_contrato: "", 
  },
  setFormValues: (values) =>
    set((state) => ({
      formValues: { ...state.formValues, ...values },
    })),
  currentStep: 0,
  nextStep: () => {
    set((state) => {
      const { currentStep, documentosNecessariosUpgrade } = state;
      let nextStep = currentStep + 1;

      if (!documentosNecessariosUpgrade && nextStep === 2) {
        nextStep = 3;
      }

      return { currentStep: nextStep };
    });
  },
  previousStep: () => set((state) => {
    const { currentStep, documentosNecessariosUpgrade } = state;
    let previousStep = currentStep - 1;

    if (!documentosNecessariosUpgrade && currentStep === 3) {
      previousStep = 1;
    }

    return { currentStep: previousStep };
  }),
  setStep: (step: number) => set({ currentStep: step }),
  documentosNecessariosUpgrade: false,
  setDocumentosNecessariosUpgrade: (necessarios: boolean) => set({ documentosNecessariosUpgrade: necessarios }),
}));
