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
  `;

export const theme = {
  colors: {
    primary: "#0070f3",
  },
};
