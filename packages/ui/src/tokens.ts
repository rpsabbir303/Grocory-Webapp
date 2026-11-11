// LocalMarket's canonical light-theme values. CSS and Tailwind consume this file.
export const palette = {
  neutral: { 50: '#f7f8f5', 100: '#eff1ed', 200: '#dfe4dc', 300: '#c2cbc0', 400: '#788575', 500: '#5e6c5c', 600: '#485646', 700: '#354332', 800: '#273424', 900: '#1b281e', 950: '#111c15' },
  primary: { 50: '#f0f6f1', 100: '#dfede2', 200: '#bfdac7', 300: '#94bda1', 400: '#659572', 500: '#487d59', 600: '#326a4c', 700: '#245c42', 800: '#1d4936', 900: '#183c2e', 950: '#0c2219' },
  secondary: { 50: '#f2f6f7', 100: '#e4ecef', 200: '#c9d9df', 300: '#a3bbc5', 400: '#7998a7', 500: '#5c7d8d', 600: '#486675', 700: '#3c5562', 800: '#344854', 900: '#2e3e47', 950: '#1d282f' },
  accent: { 50: '#fbf5ef', 100: '#f5e7d7', 200: '#eacbad', 300: '#dba87d', 400: '#c88251', 500: '#b86938', 600: '#9a542f', 700: '#7d4329', 800: '#663928', 900: '#543023', 950: '#2e1810' },
  success: { 50: '#f0f8f1', 100: '#dceee0', 200: '#b7dcbc', 300: '#8ac293', 400: '#5ba36b', 500: '#3e8550', 600: '#2d6b3d', 700: '#255733', 800: '#21462c', 900: '#1c3a26', 950: '#0d2114' },
  warning: { 50: '#fff9ed', 100: '#fceeca', 200: '#f7da92', 300: '#edbd54', 400: '#d69b2e', 500: '#b67b20', 600: '#93601c', 700: '#784b1b', 800: '#633e1d', 900: '#52341c', 950: '#2f1b0a' },
  error: { 50: '#fdf3f1', 100: '#fae3df', 200: '#f3c7bf', 300: '#e8a194', 400: '#d77363', 500: '#c15343', 600: '#a33e32', 700: '#883329', 800: '#712e27', 900: '#5e2a24', 950: '#33120e' },
  info: { 50: '#f0f6fb', 100: '#dfeaf4', 200: '#bfd6e9', 300: '#98bad8', 400: '#6c9ac2', 500: '#4d7fa9', 600: '#3b668d', 700: '#335474', 800: '#2e475f', 900: '#293c50', 950: '#182633' }
} as const;

const colors = {
  primary: palette.primary[700], primaryStrong: palette.primary[800], primaryHover: palette.primary[800],
  secondary: palette.secondary[700], secondaryHover: palette.secondary[800],
  accent: palette.accent[600], accentSubtle: palette.accent[50],
  surface: '#ffffff', elevated: '#ffffff', canvas: palette.neutral[50],
  ink: palette.neutral[950], textPrimary: palette.neutral[950], textSecondary: palette.neutral[600],
  muted: palette.neutral[500], textMuted: palette.neutral[500], border: palette.neutral[200],
  borderStrong: palette.neutral[300], focus: palette.primary[700], onPrimary: '#ffffff',
  success: palette.success[700], warning: palette.warning[700], error: palette.error[700], info: palette.info[700]
} as const;

export const designTokens = {
  colors,
  typography: {
    fontFamily: '"Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    numericFontFamily: 'ui-monospace, SFMono-Regular, Consolas, monospace',
    sizes: { xs: '0.75rem', sm: '0.875rem', md: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem' },
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    roles: {
      display: { fontSize: 'clamp(2rem, 1.25rem + 2.6vw, 3.25rem)', lineHeight: '1.08', fontWeight: 700, letterSpacing: '-0.045em' },
      page: { fontSize: 'clamp(1.75rem, 1.375rem + 1.2vw, 2.25rem)', lineHeight: '1.2', fontWeight: 700, letterSpacing: '-0.035em' },
      section: { fontSize: 'clamp(1.375rem, 1.125rem + 0.8vw, 1.75rem)', lineHeight: '1.3', fontWeight: 600, letterSpacing: '-0.025em' },
      card: { fontSize: '1.0625rem', lineHeight: '1.4', fontWeight: 600, letterSpacing: '-0.015em' },
      body: { fontSize: '1rem', lineHeight: '1.65', fontWeight: 400, letterSpacing: '0' },
      secondary: { fontSize: '0.875rem', lineHeight: '1.6', fontWeight: 400, letterSpacing: '0' },
      caption: { fontSize: '0.75rem', lineHeight: '1.5', fontWeight: 400, letterSpacing: '0.01em' },
      label: { fontSize: '0.8125rem', lineHeight: '1.5', fontWeight: 600, letterSpacing: '0.005em' },
      button: { fontSize: '0.875rem', lineHeight: '1.25', fontWeight: 600, letterSpacing: '0' }
    }
  },
  spacing: { 0: '0', 0.5: '0.125rem', 1: '0.25rem', 1.5: '0.375rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem', 16: '4rem', 20: '5rem', 24: '6rem' },
  radius: { sm: '0.25rem', md: '0.375rem', lg: '0.5rem', xl: '0.75rem', '2xl': '1rem', full: '9999px' },
  shadows: { sm: '0 1px 2px rgb(27 40 30 / 0.035)', md: '0 6px 24px -8px rgb(27 40 30 / 0.12)', lg: '0 24px 64px -16px rgb(27 40 30 / 0.22)' },
  controls: { sm: '2.5rem', md: '2.75rem', lg: '3rem' },
  layout: {
    maxContent: '1280px', maxReading: '720px', maxForm: '640px', maxDashboard: '1440px',
    sectionCompact: '2.5rem', section: 'clamp(3rem, 5vw, 5rem)',
    pageMargin: 'clamp(1rem, 3vw, 2rem)', mobileMargin: '1rem',
    gridGap: '1.5rem', compactGap: '1rem', header: '4.5rem', sidebar: '16rem',
    public: { content: '1280px', reading: '720px', section: 'clamp(3rem, 5vw, 5rem)' },
    account: { content: '1280px', sidebar: '220px', gap: '2rem' },
    merchant: { content: '1280px', sidebar: '256px', header: '72px', gap: '1.5rem' },
    admin: { content: '1440px', sidebar: '256px', header: '64px', gap: '1.25rem' }
  },
  components: {
    button: { radius: '0.5rem', gap: '0.5rem', paddingInline: '1rem' },
    input: { radius: '0.5rem', paddingInline: '0.75rem', border: colors.borderStrong },
    card: { radius: '0.75rem', padding: '1.5rem', mobilePadding: '1.25rem', border: colors.border },
    productCard: { imageRatio: '1 / 1', imageFit: 'contain' },
    storeCard: { imageRatio: '3 / 2', imageFit: 'cover' },
    modal: { width: '32rem', radius: '1rem', padding: '1.5rem' },
    table: { rowHeight: '3.5rem', compactRowHeight: '3rem' },
    badge: { radius: '9999px', paddingInline: '0.625rem' }
  },
  iconography: { small: 16, default: 20, large: 24, feature: 32, stroke: 1.75, container: 40 },
  imagery: { product: '1 / 1', store: '3 / 2', promotional: '4 / 3', avatar: '1 / 1' },
  motion: { fast: '120ms', normal: '180ms', slow: '240ms' },
  breakpoints: { mobile: '640px', tablet: '768px', desktop: '1024px', wide: '1280px' },
  zIndex: { base: 0, dropdown: 20, sticky: 30, modal: 40, toast: 50 }
} as const;
