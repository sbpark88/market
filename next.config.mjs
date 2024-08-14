/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: `/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/**`,
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: `/**`,
      },
      {
        protocol: 'https',
        hostname: 'sbpark88.github.io',
        port: '',
        pathname: `/assets/images/**`,
      },
    ],
  }
};

export default nextConfig;

