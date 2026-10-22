import { Map } from 'lucide-react';
import { eventData } from '../data/config';

const LocationSection = () => {
  return (
    <section className="section">
      <h3>Ubicación</h3>
      <p>{eventData.location.address}</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31835.945826920557!2d-73.65599059567954!3d4.148118237937743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68222955f05359%3A0xc343801f9c8d5040!2sVillavicencio%2C%20Meta!5e0!3m2!1ses-419!2sco!4v1729562772559!5m2!1ses-419!2sco"
        width="100%"
        height="250"
        style={{ border: '0', borderRadius: '15px', marginTop: '20px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <a href={eventData.location.mapsLink} target="_blank" rel="noopener noreferrer" className="button" style={{ marginTop: '20px' }}>
        <Map size={18} /> Cómo llegar
      </a>
    </section>
  );
};

export default LocationSection;
