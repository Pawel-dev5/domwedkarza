import Head from 'next/head';

// CONSTANS
import { COMPANY_NAME, HOME_OG_IMAGE_URL, BASIC_META_DESCRIPTION } from '../../lib/constants';

const Seo = ({ metatitle, metadescription, shareimage, article }) => (
	<Head>
		<title>{metatitle ?? COMPANY_NAME}</title>
		<meta property="og:title" content={metatitle ?? COMPANY_NAME} />
		<meta name="twitter:title" content={metatitle ?? COMPANY_NAME} />

		<meta name="description" content={metadescription ?? BASIC_META_DESCRIPTION} />
		<meta property="og:description" content={metadescription ?? BASIC_META_DESCRIPTION} />
		<meta name="twitter:description" content={metadescription ?? BASIC_META_DESCRIPTION} />

		<meta property="og:image" content={shareimage?.sourceUrl ?? HOME_OG_IMAGE_URL} />
		<meta name="twitter:image" content={shareimage?.sourceUrl ?? HOME_OG_IMAGE_URL} />
		<meta name="image" content={shareimage?.sourceUrl ?? HOME_OG_IMAGE_URL} />

		{article && <meta property="og:type" content={article} />}
		<meta name="twitter:card" content="summary_large_image" />

		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
		<link rel="icon" type="favicon" sizes="48x48" href="/favicon.ico" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		<link rel="manifest" href="/site.webmanifest" />
		<link rel="shortcut icon" href="/favicon.ico" />
	</Head>
);

export default Seo;
