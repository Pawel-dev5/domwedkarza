const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      "finlux.com.pl",
      "db.finlux.com.pl",
      "assets.vercel.com",
      "secure.gravatar.com",
    ],
    // loader: "imgix",
    // path: "",
  },
};

module.exports = nextConfig;
