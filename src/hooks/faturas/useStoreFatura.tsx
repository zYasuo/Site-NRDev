import {create} from 'zustand';
import { ICliente } from '@/types/routes/clientes';
import { IFaturas } from '@/types/routes/faturas';

interface FaturasState {
  cliente: ICliente | null;
  faturas: IFaturas[];
  setCliente: (cliente: ICliente | null) => void;
  setFaturas: (faturas: IFaturas[]) => void;
}

export const useFaturasStore = create<FaturasState>((set) => ({
  cliente: null,
  faturas: [],
  setCliente: (cliente) => set({ cliente }),
  setFaturas: (faturas) => set({ faturas }),
}));