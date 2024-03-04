import { useEffect, useState } from 'react';

function useWindowWidth() {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that this effect only runs once on mount

  return windowWidth;
}

export default useWindowWidth;
