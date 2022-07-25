import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --yellow: #DBAC2C;
    --yellow-dark:#C47F17;
    --yellow-light:#F1E9C9;

    --purple: #8047F8;
    --purple-dark: #4B2995;
    --purple-light: #EBE5F9;

    --base-title:#272221;
    --base-subtitle: #403937;
    --base-text: #574F4D;
    --base-label: #8D8686;

    --base-hover: #D7D5D5;
    --base-button: #E6E5E5;
    --base-input: #EDEDED;
    --base-card: #F3F2F2;

    --background: #FAFAFA;
    --white: #FFFFFF;
  }

  body {
    background: var(--background);
    color: var(--base-text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
