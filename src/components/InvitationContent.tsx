import EventDetails from './EventDetails';
import Countdown from './Countdown';
import LocationSection from './LocationSection';
import RSVP from './RSVP';
import Footer from './Footer';
import AudioPlayer from './AudioPlayer';
import { eventData } from '../data/config';
import { motion } from 'framer-motion';

const PhotoPlaceholder = () => (
  <div className="photo-container">
    <div className="photo-placeholder" style={{ backgroundColor: '#e9e9e9' }}>
      <span style={{ color: '#aaa' }}>Foto aquí</span>
    </div>
  </div>
);

const InvitationContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="invitation-wrapper"
    >
      <div className="invitation-card">
        <AudioPlayer />
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1>Mis XV Años</h1>
          <h2>{eventData.quinceanera}</h2>
          <p>Una noche mágica, un sueño hecho realidad</p>
        </header>
        
        <PhotoPlaceholder />
        
        <Countdown date={eventData.date} />
        <EventDetails />
        <LocationSection />
        <RSVP />
        <Footer />
      </div>
    </motion.div>
  );
};

export default InvitationContent;
