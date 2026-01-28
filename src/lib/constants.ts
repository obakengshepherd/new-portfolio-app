export const SITE_NAME = "Portfolio";
export const SITE_DESCRIPTION = "Professional developer portfolio";
export const SITE_URL = "https://portfolio.example.com";
export const AUTHOR_NAME = "Your Name";

export const ANIMATION_TIMING = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  hero: 0.8,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const THEME_CONFIG = {
  defaultTheme: "light",
  enableSystem: true,
  enableDarkMode: true,
} as const;
