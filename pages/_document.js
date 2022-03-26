import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
const FACEBOOK_ID = process.env.FACEBOOK_ID;
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Poppins:wght@300;400;600;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `             
              window.fbAsyncInit = function() {
                FB.init({
                  appId      : ${FACEBOOK_ID},
                  cookie     : true,
                  xfbml      : true,
                  version    : 'v13.0'
                });
                  
                FB.AppEvents.logPageView();   
                  
              };
            
              (function(d, s, id){
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "https://connect.facebook.net/en_US/sdk.js";
                 fjs.parentNode.insertBefore(js, fjs);
               }(document, 'script', 'facebook-jssdk'));
        `,
            }}
          ></script>
          {/* <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js"
          ></script> */}

          <div
            className="fb-like"
            data-share="true"
            data-width="450"
            data-show-faces="true"
          ></div>
          <span>elo</span>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
