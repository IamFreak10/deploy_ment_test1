/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // allow this domain
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // ✅ Cloudinary
      },
    ],
  },
  experimental: {
    turbo: { enabled: false }, 
  },
};

export default nextConfig;
