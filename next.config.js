/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.prismic.io",
    //     port: "",
    //     pathname: "/novocms/**",
    //   },
    // ],
    domains: ["images.prismic.io"],
  },
  publicRuntimeConfig: {
    fontsDir: "./public/fonts",
  },
};

module.exports = nextConfig;
