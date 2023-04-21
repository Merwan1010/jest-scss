import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import SideMenu from '@/components/sideMenu/sideMenu';
import 'typeface-inter';
import Header from '@/components/header/header';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className={"menu-container"}>
        <SideMenu />
        <Component {...pageProps} />
      </div>
    </>
  );
}


export default MyApp;
