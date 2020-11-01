import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core'

import MuiTheme from '../styles/MuiTheme';
import CreateGlobalStyle from '../styles/GlobalStyle';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={MuiTheme}>
        <CreateGlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
