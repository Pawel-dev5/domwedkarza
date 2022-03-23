const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      "restauracja-nadzalewem.pl",
      "db.restauracja-nadzalewem.pl",
      "assets.vercel.com",
      "secure.gravatar.com",
    ],
    // loader: "imgix",
    // path: "",
  },
};

module.exports = nextConfig;
