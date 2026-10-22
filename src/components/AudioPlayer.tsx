import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
// @ts-ignore
import ReactPlayer from 'react-player';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=xPejhqnHfa8"
        playing={isPlaying}
        width="0"
        height="0"
        loop={true}
      />
      <button className="music-toggle" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
};

export default AudioPlayer;
