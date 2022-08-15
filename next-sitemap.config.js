/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: 'https://www.restauracja-nadzalewem.pl/',
	generateRobotsTxt: true,
	sitemapSize: 7000,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
			{
				userAgent: 'test-bot',
				allow: ['/path', '/path-2'],
			},
			{
				userAgent: 'black-listed-bot',
				disallow: ['/sub-path-1', '/path-2'],
			},
		],
		additionalSitemaps: [
			'https://www.restauracja-nadzalewem.pl/server-sitemap-index.xml', // <==== Add here
		],
	},
};
