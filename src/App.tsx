import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import NailArt from './components/NailArt';
import ResinArt from './components/ResinArt';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <NailArt onImageClick={setSelectedImage} />
      <ResinArt onImageClick={setSelectedImage} />
      <About />
      <Contact />
      <Footer />
      
      {selectedImage && (
        <ImageModal 
          imageUrl={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
      
      <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
    </div>
  );
}

export default App;