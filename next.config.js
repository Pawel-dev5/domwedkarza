const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		domains: ['restauracja-nadzalewem.pl', 'db.restauracja-nadzalewem.pl', 'assets.vercel.com', 'secure.gravatar.com'],
		// loader: "imgix",
		// path: "",
	},
	async headers() {
		return [
			{
				source: '/:all*(svg|jpg|png)',
				locale: false,
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, must-revalidate',
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
