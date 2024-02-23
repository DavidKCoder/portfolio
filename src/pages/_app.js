import React from 'react';
import '@/styles/globals.css';
import '../styles/container.less';
import '../styles/mouse.less';
import '../styles/loader.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { ToasterContextProvider } from "../context/toaster-context";

export default function App({ Component, pageProps }) {
  return (
    <ToasterContextProvider>
      <Component {...pageProps} />
    </ToasterContextProvider>
  );
}