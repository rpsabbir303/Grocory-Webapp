import type { HTMLAttributes, SVGProps } from 'react';
import { designTokens } from './tokens';

/** Configurable visual identity; no business, navigation, or application state. */
export const brandConfig = {
  name: 'LocalMarket',
  wordmark: { local: 'Local', market: 'Market' },
  symbol: {
    viewBox: '0 0 32 32',
    canopy: 'M4 12L9 4H23L28 12H4Z',
    shop: 'M6 15H11V24H15V18H20V28H6V15Z',
    neighbor: { cx: 25, cy: 24, r: 3 }
  },
  minimumSymbolSize: 24,
  minimumWordmarkWidth: 128,
  clearSpaceRatio: 0.25
} as const;

type BrandTone = 'default' | 'inverse' | 'monochrome';
const variantClasses = { wordmark: 'lm-brand--wordmark', compact: 'lm-brand--compact', symbol: 'lm-brand--symbol' };
const toneClasses: Record<BrandTone, string> = { default: 'lm-brand--default', inverse: 'lm-brand--inverse', monochrome: 'lm-brand--monochrome' };

export function BrandSymbol({ title, tone = 'default', ...props }: SVGProps<SVGSVGElement> & { title?: string; tone?: BrandTone }) {
  const primary = tone === 'inverse' ? designTokens.colors.onPrimary : tone === 'monochrome' ? 'currentColor' : designTokens.colors.primary;
  const accent = tone === 'default' ? designTokens.colors.accent : primary;
  return <svg width="32" height="32" viewBox={brandConfig.symbol.viewBox} fill="none" role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true} focusable="false" {...props}>
    {title && <title>{title}</title>}
    <path d={brandConfig.symbol.canopy} fill={primary} />
    <path d={brandConfig.symbol.shop} fill={primary} />
    <circle {...brandConfig.symbol.neighbor} fill={accent} />
  </svg>;
}

export function BrandLogo({ variant = 'wordmark', tone = 'default', name = brandConfig.name, className = '', ...props }: HTMLAttributes<HTMLSpanElement> & { variant?: 'wordmark' | 'compact' | 'symbol'; tone?: BrandTone; name?: string }) {
  const standardName = name === brandConfig.name;
  return <span role="img" aria-label={name} className={`lm-brand ${variantClasses[variant]} ${toneClasses[tone]} ${className}`} {...props}>
    <BrandSymbol tone={tone} />
    {variant !== 'symbol' && <span className="lm-brand__name" aria-hidden="true">{standardName ? <>{brandConfig.wordmark.local}<span>{brandConfig.wordmark.market}</span></> : name}</span>}
  </span>;
}
