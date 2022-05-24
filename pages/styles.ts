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
    display: inline-block;
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
