import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
import theme from "../theme/themeDefault";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-multi-carousel/lib/styles.css";

config.autoAddCss = false;

const GlobalStyle = createGlobalStyle`
    .asideMenu {  
      overflow: hidden;
      }

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
  const [asideMenu, setAsideMenu] = useState(false);
  const data = { ...pageProps, asideMenu, setAsideMenu };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle asideMenu={asideMenu} />
        <Component {...data} />
      </ThemeProvider>
    </>
  );
};

export default App;
