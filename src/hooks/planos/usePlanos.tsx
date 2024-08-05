import { create } from 'zustand';
import { IRegistro } from '@/types/routes/planos';
import { fetchPlanos } from '@/app/(ui)/planos/actions';

interface PlanosState {
  home: IRegistro[];
  gamer: IRegistro[];
  access: IRegistro[];
  loading: boolean;
  error: string | null;
  getPlanos: (AID: string) => Promise<void>;
}

export const usePlanosStore = create<PlanosState>((set) => ({
  home: [],
  gamer: [],
  access: [],
  loading: false,
  error: null,
  getPlanos: async (AID: string) => {
    set({ loading: true, error: null });
    try {
      const { home, gamer, access } = await fetchPlanos(AID);
      set({ home, gamer, access, loading: false });
    } catch (error) {
      console.error('Erro ao buscar planos:', error); 
      set({ error: "Ocorreu um erro ao buscar os planos", loading: false });
    }
  },
}));
