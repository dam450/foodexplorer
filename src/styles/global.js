import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  html {
    font-size: 1.6rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5{
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  body {
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;
