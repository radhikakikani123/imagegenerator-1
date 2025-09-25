import React from 'react';

export default function DownloadButton({ imageUrl }) {
  if (!imageUrl) return null;
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'generated-product.png';
    link.click();
  };
  return (
    <button onClick={handleDownload} className="download-btn">Download Image</button>
  );
}
