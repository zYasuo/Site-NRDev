import { create } from 'zustand';
import { ICliente } from '@/types/routes/clientes';

interface ClienteState {
  cliente: ICliente | null;
  cpfCnpj: string | null;
  setCliente: (cliente: ICliente | null) => void;
  setCpfCnpj: (cpfCnpj: string | null) => void;
}

export const useClienteCPFCNPJ = create<ClienteState>((set) => ({
  cliente: null,
  cpfCnpj: null,
  setCliente: (cliente) => set({ cliente }),
  setCpfCnpj: (cpfCnpj) => set({ cpfCnpj }),
}));
