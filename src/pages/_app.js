import React from 'react';
import '@/styles/globals.css';
import '../styles/container.less';
import '../styles/animated-btn.less';
import '../styles/mouse.less';
import '../styles/loader.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { ThemeProvider } from 'next-themes';
import { ToasterContextProvider } from "../context/toaster-context";

export default function App({ Component, pageProps }) {
  return (
    <ToasterContextProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ToasterContextProvider>
  );
}