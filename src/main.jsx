import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// 1. Importações do Emotion
import { Global, css } from '@emotion/react';

// 2. Definição dos estilos globais
const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* Define 1rem = 10px (padrão do navegador é 16px. 16 * 62.5% = 10px) */
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

// 3. Renderização do App com os estilos globais aplicados
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <App />
  </StrictMode>
);
