import React, { useState, useEffect } from 'react';

interface CountdownProps {
  date: string;
}

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(date).getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="countdown-container">
      <div className="countdown-box">{timeLeft.days}<span>Días</span></div>
      <div className="countdown-box">{timeLeft.hours}<span>Horas</span></div>
      <div className="countdown-box">{timeLeft.minutes}<span>Min</span></div>
      <div className="countdown-box">{timeLeft.seconds}<span>Seg</span></div>
    </div>
  );
};

export default Countdown;
