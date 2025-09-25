import React from 'react';

export default function Gallery({ images, onSelect }) {
  if (!images.length) return <div>No images yet.</div>;
  return (
    <div className="gallery">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Generated ${idx}`}
          style={{ width: 100, height: 100, objectFit: 'cover', margin: 8, cursor: 'pointer', borderRadius: 8 }}
          onClick={() => onSelect(img)}
        />
      ))}
    </div>
  );
}
