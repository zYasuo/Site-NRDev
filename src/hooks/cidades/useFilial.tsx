import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IRegistro } from '@/types/routes/filial';
import { encrypt, decrypt } from '@/lib/crypto'; 

interface FilialState {
  filiais: { id: string; cidade: string; fantasia: string }[];
  selectedCidade: string;
  selectedEstado: string;
  setFiliais: (filiais: IRegistro[]) => void;
  setSelectedCidade: (cidade: string) => void;
  setSelectedEstado: (estado: string) => void;
}

const encryptedStorage = {
  getItem: (name: string) => {
    const value = localStorage.getItem(name);
    if (value) {
      const decryptedValue = JSON.parse(decrypt(value));
      const { data, expiresAt } = decryptedValue;

      if (expiresAt && new Date().getTime() > expiresAt) {
        localStorage.removeItem(name);
        return null;
      }

      return data;
    }
    return null;
  },
  setItem: (name: string, value: any) => {
    const expiresAt = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
    const encryptedValue = encrypt(JSON.stringify({ data: value, expiresAt }));
    localStorage.setItem(name, encryptedValue);
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
  },
};


export const useFilialStore = create<FilialState>()(
  persist(
    (set) => ({
      filiais: [],
      selectedCidade: '',
      selectedEstado: '',
      setFiliais: (filiais) => {
        const filteredFiliais = filiais.map(({ id, cidade, fantasia }) => ({ id, cidade, fantasia }));
        set({ filiais: filteredFiliais });
      },
      setSelectedCidade: (cidade) => set({ selectedCidade: cidade }),
      setSelectedEstado: (estado) => set({ selectedEstado: estado }),
    }),
    {
      name: 'filial-storage',
      storage: encryptedStorage,
    }
  )
);