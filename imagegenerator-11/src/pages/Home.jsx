// import React, { useState } from 'react';
// import CategorySelector from '../components/CategorySelector';
// import ImagePreview from '../components/ImagePreview';
// import DownloadButton from '../components/DownloadButton';
// import { generateImage } from '../utils/api';

// export default function Home({ onAddToGallery }) {
//   const [category, setCategory] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);

//   // NEW: State for uploaded image
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const handleGenerate = async () => {
//     if (!category) return;
//     setLoading(true);
//     const url = await generateImage(category);
//     setImageUrl(url);
//     setLoading(false);
//     onAddToGallery(url);
//   };

//   // NEW: Handle file change
//   const handleImageUpload = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setUploadedImage(URL.createObjectURL(e.target.files[0]));
//       // You can also upload the file to your server here if needed
//     }
//   };

//   return (
//     <div className="home-page">

//       {/* Upload Product Image */}
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//       />
//       {uploadedImage && (
//         <img
//           src={uploadedImage}
//           alt="Uploaded Product"
//           style={{ maxWidth: 200, margin: 8, borderRadius: 8 }}
//         />
//       )}
      
//       <CategorySelector selected={category} onSelect={setCategory} />

//       <button
//         onClick={handleGenerate}
//         disabled={!category || loading}
//       >
//         {loading ? 'Generating...' : 'Generate Image'}
//       </button>

//       <ImagePreview imageUrl={imageUrl} />

//       <DownloadButton imageUrl={imageUrl} />
//     </div>
//   );
// }


import React, { useState } from 'react';
import CategorySelector from '../components/CategorySelector';
import ImagePreview from '../components/ImagePreview';
import DownloadButton from '../components/DownloadButton';
import { generateImage } from '../utils/api';

export default function Home({ onAddToGallery }) {
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  // Upload product image state
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleGenerate = async () => {
    if (!category) return;
    setLoading(true);
    const url = await generateImage(category);
    setImageUrl(url);
    setLoading(false);
    onAddToGallery(url);
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // NEW: Handler to delete selected image
  const handleDeleteImage = () => {
    setUploadedImage(null);
  };

  return (
    <div className="home-page">

      {/* Upload Product Image */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {uploadedImage && (
        <div>
          <img
            src={uploadedImage}
            alt="Uploaded Product"
            style={{ maxWidth: 200, margin: 8, borderRadius: 8 }}
          />
          {/* Delete button */}
          <button onClick={handleDeleteImage} style={{ marginLeft: 8 }}>
            Delete Selected Image
          </button>
        </div>
      )}
      
      <CategorySelector selected={category} onSelect={setCategory} />

      <button
        onClick={handleGenerate}
        disabled={!category || loading}
      >
        {loading ? 'Generating...' : 'Generate Image'}
      </button>

      <ImagePreview imageUrl={imageUrl} />

      <DownloadButton imageUrl={imageUrl} />
    </div>
  );
}
