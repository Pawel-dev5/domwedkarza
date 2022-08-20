import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pl">
				<Head>
					{/* <!-- Google Tag Manager --> */}
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-93GN096F3Y" />
					<script
						dangerouslySetInnerHTML={{
							__html: `window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
						  
							gtag('config', 'G-93GN096F3Y');`,
						}}
					/>
					{/* <!-- End Google Tag Manager --> */}

					{/* FONTS */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
				</Head>

				<body>
					{/* <!-- Google Tag Manager (noscript) --> */}
					<noscript
						dangerouslySetInnerHTML={{
							__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MNP6WP4" height="0" width="0" style="display:none;visibility:hidden" />`,
						}}
					/>
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
