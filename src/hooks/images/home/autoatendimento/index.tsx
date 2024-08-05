"use client"
import { useEffect } from 'react';
import { create } from 'zustand';

interface ImageSizeState {
  imageSize: string;
  updateImageSize: (size: string) => void;
}

export const useImageSizeStoreForAutoAtendimento = create<ImageSizeState>((set) => ({
  imageSize: '322x560',
  updateImageSize: (size) => set({ imageSize: size }),
}));

export const useResponsiveImageSizeForAutoAtendimento = () => {
  const updateImageSize = useImageSizeStoreForAutoAtendimento((state) => state.updateImageSize);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        updateImageSize('desktop');
      } else {
        updateImageSize('322x560');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [updateImageSize]);
};
