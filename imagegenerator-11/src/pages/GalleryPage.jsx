import React from 'react';
import Gallery from '../components/Gallery';
import ImagePreview from '../components/ImagePreview';

export default function GalleryPage({ images, onSelect }) {
  return (
    <div className="gallery-page">
      <h2>Gallery</h2>
      <Gallery images={images} onSelect={onSelect} />
    </div>
  );
}
