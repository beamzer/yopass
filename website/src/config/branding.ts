// website/src/config/branding.ts

export interface BrandingConfig {
  name: string;
  logoSrc: string;
  logoAlt?: string;
  logoWidth?: string;
  logoHeight?: string;
}

export const defaultBranding: BrandingConfig = {
  name: 'Yopass',
  logoSrc: 'yopass.svg',
  logoAlt: 'Yopass Logo',
  logoWidth: '40px',
  logoHeight: '40px',
};

export const BRANDING_CONFIG: BrandingConfig = {
  ...defaultBranding,
  ...(process.env.REACT_APP_BRANDING ? JSON.parse(process.env.REACT_APP_BRANDING) : {}),
};
