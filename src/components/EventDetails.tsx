import { MapPin, Clock, Shirt } from 'lucide-react';
import { eventData } from '../data/config';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';

const EventDetails = () => {
  const eventDate = new Date(eventData.date);
  const formattedTime = eventDate.toLocaleTimeString('es-ES', {
    hour: '2-digit', minute: '2-digit'
  });

  return (
    <section className="section">
      <h3>Detalles del Evento</h3>
      
      {/* Calendario del mes resaltando la fecha con animación */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Calendar 
          value={eventDate} 
          view="month"
          activeStartDate={new Date(eventDate.getFullYear(), eventDate.getMonth(), 1)}
          showNavigation={false}
          tileDisabled={() => true}
        />
      </motion.div>

      <div className="details-grid" style={{ marginTop: '30px' }}>
        <p className="detail-item"><Clock size={20} color="var(--champagne-gold)" /> {formattedTime}</p>
        <p className="detail-item"><MapPin size={20} color="var(--champagne-gold)" /> {eventData.location.name}</p>
        <p className="detail-item"><Shirt size={20} color="var(--champagne-gold)" /> Dress Code: {eventData.dressCode}</p>
      </div>
    </section>
  );
};

export default EventDetails;
