import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* 
        Nota: La reproducción automática de YouTube es técnicamente incompatible 
        con este componente por políticas de los navegadores.
        Para que funcione, coloca tu canción en formato .mp3 en la carpeta 'public/' 
        y descomenta la línea de abajo.
      */}
      {/*
      <audio ref={audioRef} loop>
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>
      */}
      <button className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
};

export default AudioPlayer;
