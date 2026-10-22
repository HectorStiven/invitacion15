import { Map } from 'lucide-react';
import { eventData } from '../data/config';

const LocationSection = () => {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <h3>Ubicación</h3>
      <p style={{ marginBottom: '20px' }}>{eventData.location.address}</p>
      
      <a href={eventData.location.mapsLink} target="_blank" rel="noopener noreferrer" className="button">
        <Map size={18} /> Cómo llegar
      </a>
    </section>
  );
};

export default LocationSection;
