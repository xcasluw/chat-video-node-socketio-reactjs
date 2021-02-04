import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }
  
  @media (max-width: 75em) {
    html {
      font-size: 56.25%; 
    } 
  }

  @media (max-width: 56.25em) {
    html {
      font-size: 56.25%;
    } 
  }

  @media (min-width: 112.5em) {
    html {
      font-size: 75%;
    }
  }

  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
