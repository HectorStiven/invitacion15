import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = Array(5).fill("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800");

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section gallery-section">
      <h3>Sesión de Fotos</h3>
      
      {/* Imagen Principal */}
      <div style={{ padding: '0 12px' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={photos[activeIndex]}
            alt={`Foto ${activeIndex + 1}`}
            style={{ width: '100%', height: '370px', objectFit: 'cover', borderRadius: '14px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        
        {/* Thumbnails */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {photos.map((photo, index) => (
            <div 
              key={index} 
              onClick={() => setActiveIndex(index)}
              style={{ 
                width: '65px', 
                height: '65px', 
                borderRadius: '8px', 
                cursor: 'pointer',
                overflow: 'hidden',
                border: index === activeIndex ? '2px solid #C5A059' : '2px solid transparent'
              }}
            >
              <img 
                src={photo} 
                alt={`Thumb ${index + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
