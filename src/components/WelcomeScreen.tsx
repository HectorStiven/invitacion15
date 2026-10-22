import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/config';

interface WelcomeScreenProps {
  onOpen: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onOpen }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        background: 'radial-gradient(circle at center, #fffaf6 0%, #f7f3f0 100%)',
        padding: '20px',
        textAlign: 'center'
      }}>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ 
          border: '1px solid #e0dcd9', 
          padding: '50px 30px', 
          borderRadius: '20px', 
          background: 'rgba(255,255,255,0.7)',
          boxShadow: 'var(--soft-shadow)'
        }}>
        <h1>Mis XV Años</h1>
        <h2 style={{ fontSize: '3rem', margin: '15px 0' }}>{eventData.quinceanera}</h2>
        <p style={{ fontStyle: 'italic', margin: '20px 0', color: '#5a4a4a' }}>{eventData.phrase}</p>
        <button className="button" onClick={onOpen} style={{ fontSize: '1.2rem', padding: '15px 40px' }}>
          Abrir invitación
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
