import React from 'react';

export default function ImagePreview({ imageUrl }) {
  if (!imageUrl) return null;
  return (
    <div className="image-preview">
      <img src={imageUrl} alt="Generated Product" style={{ maxWidth: '100%', borderRadius: 8 }} />
    </div>
  );
}
