/** @type {import('next').NextConfig} */
const nextConfig = {
  // Frontend-only: the whole site compiles to static HTML/CSS/JS in /out.
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};
export default nextConfig;
