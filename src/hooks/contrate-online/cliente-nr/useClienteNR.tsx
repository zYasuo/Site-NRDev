import { create } from "zustand";
import { ICliente } from "@/types/routes/clientes";

interface ClienteState {
  cliente: ICliente | null;
  setCliente: (cliente: ICliente) => void;
  clearCliente: () => void;
}

export const useClienteStore = create<ClienteState>((set) => ({
  cliente: null,
  setCliente: (cliente) => set({ cliente }),
  clearCliente: () => set({ cliente: null }),
}));
