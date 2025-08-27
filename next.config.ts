import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // config options here
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb'
    }
  },
  images: {
    remotePatterns: [
      {
        // local supabase
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '54321',
        pathname: '/storage/v1/object/sign/make-it-job/**'
      },
      {
        // github avatars
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        // google avatars
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      }
    ]
  }
};

export default nextConfig;
