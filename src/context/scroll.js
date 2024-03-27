import React, { createContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext({
  type: ''
});

export function ScrollContextContextProvider({ children }) {
  const [ scrollTop, setScrollTop ] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const top = e.target.scrollTop;
      setScrollTop(top)
    };

    document.body.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollTop }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollContext;