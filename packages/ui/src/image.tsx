'use client';

import { useState, type ImgHTMLAttributes } from 'react';
import { designTokens, palette } from './tokens';

// A neutral, non-product illustration used only when the original image cannot load.
const unavailableImage = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420"><rect width="640" height="420" fill="${palette.neutral[100]}"/><g fill="none" stroke="${palette.neutral[400]}" stroke-width="${designTokens.iconography.stroke}" stroke-linecap="round" stroke-linejoin="round"><rect x="296" y="166" width="48" height="40" rx="6"/><circle cx="330" cy="178" r="4"/><path d="m298 198 12-12 12 12 8-8 12 12"/></g><text x="320" y="234" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" fill="${designTokens.colors.textMuted}">Image unavailable</text></svg>`)}`;

export function Image({ src, alt, onError, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failedSource, setFailedSource] = useState<ImgHTMLAttributes<HTMLImageElement>['src'] | null>(null);
  const unavailable = !src || failedSource === src;
  return <img {...props} src={unavailable ? unavailableImage : src} alt={unavailable ? (alt || 'Image unavailable') : alt} onError={(event) => { if (src && !unavailable) setFailedSource(src); onError?.(event); }} />;
}
