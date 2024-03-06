import React from 'react';
import '@/styles/globals.css';
import '../styles/container.less';
import '../styles/animated-btn.less';
import '../styles/mouse.less';
import '../styles/loader.css';
import '../styles/game.less';
import '../styles/equalizer.less';
import 'rsuite/dist/rsuite-no-reset.min.css';
import "../tabHack";
import { ThemeProvider } from 'next-themes';
import Layout from "../components/Layout";
import { ToasterContextProvider } from "../context/toaster-context";

export default function App({ Component, pageProps }) {
  return (
    <ToasterContextProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ToasterContextProvider>
  );
}