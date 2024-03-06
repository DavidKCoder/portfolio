import React, { useEffect } from "react";

const Equalizer = ({ handleTogglePlayback }) => {
  const handleClick = () => {
    const equalizer = document.querySelector('.equalizer');
    equalizer.classList.toggle('paused');
  };

  useEffect(() => {
    let interval;

    const equalizerAnimation = (speed) => {
      const equalizer = document.querySelector('.equalizer');
      const spans = equalizer.querySelectorAll('span');

      const animate = () => {
        spans.forEach((span, index) => {
          span.style.height = randomBetween(5 + index * 2, 20 + index * 3) + 'px';
        });
      };

      interval = setInterval(animate, speed);

      equalizer.addEventListener('click', handleClick);
    };

    equalizerAnimation(180);

    return () => {
      clearInterval(interval);
      const equalizer = document.querySelector('.equalizer');
      equalizer?.removeEventListener('click', handleClick);
    };
  }, []);

  const randomBetween = (min, max) => {
    return min + Math.random() * ( max - min );
  };

  return (
    <div className="equalizer" onClick={handleTogglePlayback}>
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
    </div>
  );
};

export default Equalizer;
