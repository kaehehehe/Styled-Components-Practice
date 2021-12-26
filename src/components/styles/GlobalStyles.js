import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100% 9%);
    font-size: 1.15em;
  }

  li {
    list-style: none;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }
`