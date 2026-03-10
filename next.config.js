/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portfolio",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Portfolio",
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
  },
}

module.exports = nextConfig
