import type { NextConfig } from 'next';
const nextConfig: NextConfig = { transpilePackages: ['@hyperlocal/ui', '@hyperlocal/shared-types', '@hyperlocal/api-client'] };
export default nextConfig;
