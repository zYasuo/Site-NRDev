import { useEffect } from 'react';
import { create } from 'zustand';

interface HeaderState {
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  isScrolled: false,
  setIsScrolled: (isScrolled) => set({ isScrolled }),
}));

export function useScrollHandler() {
  const setIsScrolled = useHeaderStore((state) => state.setIsScrolled);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const options = { passive: true };

    window.addEventListener('scroll', handleScroll, options);
    window.addEventListener('touchstart', handleScroll, options);
    window.addEventListener('touchmove', handleScroll, options);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [setIsScrolled]);
}
