import type { SVGProps } from 'react';
import { designTokens } from './tokens';

// Small visual vocabulary for the design system, without another icon dependency.
const paths = {
  search: 'M21 21l-4.5-4.5M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z',
  location: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  store: 'M3 10l2-6h14l2 6M4 13v8h16v-8M9 21v-7h6v7M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0',
  bag: 'M5 7h14l1 14H4L5 7ZM8 8V6a4 4 0 0 1 8 0v2',
  check: 'M5 12l4 4L19 6',
  close: 'M6 6l12 12M18 6 6 18',
  arrow: 'M4 12h16M14 6l6 6-6 6',
  chevron: 'M6 9l6 6 6-6',
  info: 'M12 11v6M12 7h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',
  image: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM3 17l6-6 5 5 3-3 4 4M16 7h.01'
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 'default', title, ...props }: Omit<SVGProps<SVGSVGElement>, 'name'> & { name: IconName; size?: 'small' | 'default' | 'large' | 'feature'; title?: string }) {
  return <svg width={designTokens.iconography[size]} height={designTokens.iconography[size]} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={designTokens.iconography.stroke} strokeLinecap="round" strokeLinejoin="round" role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true} focusable="false" {...props}>
    {title && <title>{title}</title>}
    <path d={paths[name]} />
  </svg>;
}
