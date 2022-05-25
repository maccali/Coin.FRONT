import { ThemeProvider } from 'styled-components'
import BackGround from '../components/sections/Background'

import Head from 'next/head'


import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Poppins', sans-serif;
  }

  .carousel {
    width: 100%;
    height: 100%;
  }

  .dropdown {
    position: relative;
    display: flex;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    /* min-width: 160px; */
    height: 0;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    /* padding: 12px 16px; */
    z-index: 1;
  }

  .dropdown-content > * {
    display: none;
    transition: all .3s;
  }

  .dropdown:hover .dropdown-content {
    display: block;
    background: #ffffff;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: all .3s;
  }

  .dropdown:hover .dropdown-content > *{
    display: flex;
  }

  `;

export const theme = {
  colors: {
    primary: "#0070f3",
  },
};


// import "./styles.css";
import 'flickity/dist/flickity.min.css';
import 'react-tabs/style/react-tabs.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <BackGround>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </BackGround >
    </>
  )
}
