/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    // loader: 'custom',
    // loaderFile: './loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hostgator.com.br'
      }
    ]
   } 
};

export default nextConfig;
