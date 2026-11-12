import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep dev and production Webpack manifests isolated. Running `next build`
  // while `next dev` is active must not replace the chunks the dev server uses.
  distDir: process.env.NODE_ENV === 'production' ? '.next-prod' : '.next-dev',
  transpilePackages: ['@hyperlocal/ui', '@hyperlocal/shared-types', '@hyperlocal/api-client']
};
export default nextConfig;
