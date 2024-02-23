import React, { createContext } from "react";
import { useToaster } from "rsuite";

const ToasterContext = createContext({
  type: ''
});

export function ToasterContextProvider({ children }) {
  const toaster = useToaster();

  return (
    <ToasterContext.Provider value={{ toaster }}>
      {children}
    </ToasterContext.Provider>
  )
}

export default ToasterContext;