import { useState, useEffect } from 'react';

export default function useGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('gallery');
    if (stored) setImages(JSON.parse(stored));
  }, []);

  const addImage = (url) => {
    const updated = [url, ...images];
    setImages(updated);
    localStorage.setItem('gallery', JSON.stringify(updated));
  };

  return { images, addImage };
}
