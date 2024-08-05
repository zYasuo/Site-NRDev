"use client"
import { useEffect } from 'react';
import {create} from 'zustand';

interface ImageSizeState {
  imageSize: string;
  updateImageSize: (size: string) => void;
}

export const useImageSizeStore = create<ImageSizeState>((set) => ({
  imageSize: '600x400',
  updateImageSize: (size) => set({ imageSize: size }),
}));

export const useResponsiveImageSize = () => {
  const updateImageSize = useImageSizeStore((state) => state.updateImageSize);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1920) {
        updateImageSize('2000x1000');
      } else if (window.innerWidth >= 1024) {
        updateImageSize('1280x720');
      } else {
        updateImageSize('360x640');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [updateImageSize]);
};
