export const designTokens = {
  colors: { primary: '#0f766e', primaryStrong: '#115e59', secondary: '#334155', surface: '#ffffff', canvas: '#f8fafc', ink: '#0f172a', muted: '#64748b', border: '#e2e8f0', success: '#15803d', warning: '#b45309', error: '#b91c1c', info: '#0369a1' },
  typography: { fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', sizes: { xs: '0.75rem', sm: '0.875rem', md: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem' }, weights: { regular: 400, medium: 500, semibold: 600, bold: 700 } },
  spacing: { 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem', 16: '4rem' },
  radius: { sm: '0.375rem', md: '0.5rem', lg: '0.75rem', xl: '1rem', full: '9999px' },
  shadows: { sm: '0 1px 2px rgb(15 23 42 / 0.05)', md: '0 4px 12px rgb(15 23 42 / 0.08)', lg: '0 12px 32px rgb(15 23 42 / 0.12)' },
  layout: { maxContent: '1280px', maxReading: '720px' },
  breakpoints: { mobile: '640px', tablet: '768px', desktop: '1024px', wide: '1280px' },
  zIndex: { base: 0, dropdown: 20, sticky: 30, modal: 40, toast: 50 }
} as const;
