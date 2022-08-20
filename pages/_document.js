import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* <!-- Google Tag Manager --> */}
					<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-MNP6WP4');</script>
					{/* <!-- End Google Tag Manager --> */}


					{/* FONTS */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Poppins:wght@300;400;600;700&family=Roboto:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
				</Head>

				<body>
					{/* <!-- Google Tag Manager (noscript) --> */}
					<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MNP6WP4"
					height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
					{/* <!-- End Google Tag Manager (noscript) --> */}

					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

	// STYLED COMPONENTS CONFIG
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
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
