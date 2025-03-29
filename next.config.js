/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://aaaa.vercel.app'],
  },
  async headers() {
    return [
      {
        source: '/img/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
