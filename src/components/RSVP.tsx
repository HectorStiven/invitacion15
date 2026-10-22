import { MessageCircle } from 'lucide-react';
import { eventData } from '../data/config';

const RSVP = () => {
  const whatsappUrl = `https://wa.me/${eventData.whatsapp.number}?text=${encodeURIComponent(eventData.whatsapp.message)}`;
  
  return (
    <section className="section">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button whatsapp-btn">
        <MessageCircle size={18} /> Confirmar asistencia
      </a>
    </section>
  );
};

export default RSVP;
