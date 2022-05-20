import { createGlobalStyle, ThemeProvider } from 'styled-components'
import BackGround from '../src/components/sections/Background'
// import Background from "../src/components/sections/Background"


const GlobalStyle = createGlobalStyle`


  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height */

letter-spacing: 1px;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

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
