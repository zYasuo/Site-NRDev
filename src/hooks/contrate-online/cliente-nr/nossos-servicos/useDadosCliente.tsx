import { create } from 'zustand';
import { ICliente } from '@/types/routes/clientes';

interface ClienteState {
  cliente: ICliente | null;
  documentosPresentes: boolean;
  setCliente: (data: ICliente) => void;
  setDocumentosPresentes: (presentes: boolean) => void;
}

export const useClienteStore = create<ClienteState>((set) => ({
  cliente: null,
  documentosPresentes: false,
  setCliente: (data) => set({ cliente: data }),
  setDocumentosPresentes: (presentes) => set({ documentosPresentes: presentes }),
}));
