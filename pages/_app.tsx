import { ThemeProvider } from 'styled-components'
import BackGround from '../src/components/sections/Background'

import { GlobalStyle, theme } from "./styles"

// import "./styles.css";
import 'flickity/dist/flickity.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <BackGround>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </BackGround >
    </>
  )
}
