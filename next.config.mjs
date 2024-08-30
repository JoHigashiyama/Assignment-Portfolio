/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname: 'kxbcbtrmnvzpcopwdush.supabase.co'
      }
    ]
  }
};

export default nextConfig;
