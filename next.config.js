/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example-apis.vercel.app", "http://www.w3.org/2000/svg"],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
