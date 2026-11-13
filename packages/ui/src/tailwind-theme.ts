import { designTokens as t, palette } from './tokens';

// Extend the existing utility names so all screens share the same visual palette.
export const sharedTheme = {
  typeRole: t.typography.roles,
  layoutToken: t.layout,
  componentToken: t.components,
  iconToken: t.iconography,
  colors: {
    // Compatibility aliases keep every existing utility on the central theme.
    slate: palette.neutral, teal: palette.primary, green: palette.success,
    amber: palette.warning, red: palette.error, sky: palette.info,
    brand: { ...palette.primary, primary: t.colors.primary, hover: t.colors.primaryHover, secondary: t.colors.secondary, accent: t.colors.accent },
    secondary: palette.secondary, accent: palette.accent,
    canvas: t.colors.canvas, surface: t.colors.surface, elevated: t.colors.elevated, ink: t.colors.ink,
    content: { DEFAULT: t.colors.textPrimary, secondary: t.colors.textSecondary, muted: t.colors.textMuted },
    line: { DEFAULT: t.colors.border, strong: t.colors.borderStrong },
    status: { success: t.colors.success, warning: t.colors.warning, error: t.colors.error, info: t.colors.info }
  },
  fontFamily: { sans: [t.typography.fontFamily] },
  fontSize: { ...t.typography.sizes, base: t.typography.sizes.md },
  fontWeight: Object.fromEntries(Object.entries(t.typography.weights).map(([key, value]) => [key, String(value)])),
  spacing: t.spacing,
  borderRadius: t.radius,
  boxShadow: t.shadows,
  maxWidth: { '7xl': t.layout.maxContent, reading: t.layout.maxReading, form: t.layout.maxForm, dashboard: t.layout.maxDashboard },
  width: { sidebar: t.layout.sidebar },
  height: { header: t.layout.header },
  minHeight: { 'control-sm': t.controls.sm, control: t.controls.md, 'control-lg': t.controls.lg },
  screens: { sm: t.breakpoints.mobile, md: t.breakpoints.tablet, lg: t.breakpoints.desktop, xl: t.breakpoints.wide },
  zIndex: Object.fromEntries(Object.entries(t.zIndex).map(([key, value]) => [key, String(value)])),
  transitionDuration: { fast: t.motion.fast, normal: t.motion.normal, slow: t.motion.slow }
};
