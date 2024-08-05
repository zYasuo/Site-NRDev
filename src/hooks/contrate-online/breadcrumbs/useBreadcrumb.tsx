// stores/useBreadcrumbStore.ts
import { create } from 'zustand';

interface BreadcrumbStore {
  path: string;
  setPath: (path: string) => void;
}

const useBreadcrumbStore = create<BreadcrumbStore>((set) => ({
  path: '',
  setPath: (path: string) => set({ path }),
}));

export default useBreadcrumbStore;
