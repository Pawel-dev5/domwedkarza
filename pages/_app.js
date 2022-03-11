import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
import theme from "../theme/themeDefault";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-multi-carousel/lib/styles.css";

config.autoAddCss = false;

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;

    * {
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      margin: 0;
      padding: 0;
      box-sizing: border-box;    
      overflow-wrap: break-word;    
      overflow: hidden;
    }
    
  }
`;
const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
