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
		],

		additionalSitemaps: [
			'https://www.restauracja-nadzalewem.pl/server-sitemap-index.xml', // <==== Add here
		],
	},
};

module.exports = config;
