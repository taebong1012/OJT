import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset}

  @font-face {
     font-family: 'S-CoreDream-6Bold';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

@font-face {
     font-family: 'S-CoreDream-5Medium';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-5Medium.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

@font-face {
     font-family: 'S-CoreDream-4Regular';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

@font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'S-CoreDream-4Regular', "Helvetica", "Arial", sans-serif;
    line-height: 1.2;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
  }

  #root {
    width: 1200px;
    min-width: 1200px;
    /* margin: 0 20px; */
  }

  #overlay {
    position: fixed;
    z-index: 20;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.icons}
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  button:active {
    background-color: ${({ theme }) => theme.colors.clicked};
  }

  canvas {
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.25));
  }

`;

export default GlobalStyle;
