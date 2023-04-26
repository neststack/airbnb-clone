/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    modern: true,
    modularize: true,
    appDir: true,
    dynamicImports: true,
    css: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
