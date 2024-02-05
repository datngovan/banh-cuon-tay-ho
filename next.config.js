/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
  images: {
    loader: 'custom',
    loaderFile: './lib/my-loader.js',
    // unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
