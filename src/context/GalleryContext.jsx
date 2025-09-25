import React, { createContext, useContext } from 'react';
import useGallery from '../hooks/useGallery';

const GalleryContext = createContext();

export function GalleryProvider({ children }) {
  const gallery = useGallery();
  return (
    <GalleryContext.Provider value={gallery}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGalleryContext() {
  return useContext(GalleryContext);
}
