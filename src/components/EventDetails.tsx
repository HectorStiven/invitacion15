import { MapPin, Calendar, Clock, Shirt } from 'lucide-react';
import { eventData } from '../data/config';

const EventDetails = () => {
  const formattedDate = new Date(eventData.date).toLocaleDateString('es-ES', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  const formattedTime = new Date(eventData.date).toLocaleTimeString('es-ES', {
    hour: '2-digit', minute: '2-digit'
  });

  return (
    <section className="section">
      <h3>Detalles del Evento</h3>
      <div className="details-grid">
        <p className="detail-item"><Calendar size={20} color="var(--champagne-gold)" /> {formattedDate}</p>
        <p className="detail-item"><Clock size={20} color="var(--champagne-gold)" /> {formattedTime}</p>
        <p className="detail-item"><MapPin size={20} color="var(--champagne-gold)" /> {eventData.location.name}</p>
        <p className="detail-item"><Shirt size={20} color="var(--champagne-gold)" /> Dress Code: {eventData.dressCode}</p>
      </div>
    </section>
  );
};

export default EventDetails;
