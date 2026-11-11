import type { Config } from 'tailwindcss';
import { sharedTheme } from '../../packages/ui/src/tailwind-theme';
export default { content: ['./app/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'], theme: { extend: sharedTheme }, plugins: [] } satisfies Config;
