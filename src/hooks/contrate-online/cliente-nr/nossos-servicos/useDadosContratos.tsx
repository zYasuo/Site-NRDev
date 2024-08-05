import { create } from 'zustand';
import { IContratos } from '@/types/routes/contratos';

interface ContratosState {
  contratos: IContratos[];
  setContratos: (data: IContratos[]) => void;
}

export const useDadosContratos = create<ContratosState>((set) => ({
  contratos: [],
  setContratos: (data) => set({ contratos: data }),
}));
