/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better deployment compatibility
  output: 'standalone',
  
  // Handle trailing slashes
  trailingSlash: false,
  
  // Optimize for production
  compress: true,
  
  // Handle image optimization
  images: {
    unoptimized: true
  },
  
  // Ensure proper routing
  // experimental: {
  //   appDir: true
  // }
};

export default nextConfig;
