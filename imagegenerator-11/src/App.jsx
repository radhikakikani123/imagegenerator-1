import './styles/global.css';
import styles from './styles/App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GalleryProvider, useGalleryContext } from './context/GalleryContext';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <GalleryProvider>
      <Router>
        <nav style={{ padding: '1em', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <Link to="/" style={{ marginRight: 16 }}>Home</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomeWithGallery />} />
          <Route path="/gallery" element={<GalleryWithContext />} />
        </Routes>
      </Router>
    </GalleryProvider>
  );
}

function HomeWithGallery() {
  const { addImage } = useGalleryContext();
  return <Home onAddToGallery={addImage} />;
}

function GalleryWithContext() {
  const { images } = useGalleryContext();
  return <GalleryPage images={images} onSelect={() => {}} />;
}

export default App;