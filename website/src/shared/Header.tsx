import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

// website/src/shared/Header.tsx
import { BRANDING_CONFIG } from '../config/branding';

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isOnUploadPage = location.pathname.includes('upload');
  const base = process.env.PUBLIC_URL || '';
  const home = base + '/#/';
  const upload = base + '/#/upload';

  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Link href={home} color="inherit" underline="none">
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            {BRANDING_CONFIG.name}
            <Box
              sx={{
                verticalAlign: 'middle',
                paddingLeft: '5px',
                width: BRANDING_CONFIG.logoWidth,
                height: BRANDING_CONFIG.logoHeight,
              }}
              component="img"
              height={BRANDING_CONFIG.logoHeight}
              alt={BRANDING_CONFIG.logoAlt}
              src={BRANDING_CONFIG.logoSrc}
            />
          </Typography>
        </Link>
        <Box
          sx={{
            marginLeft: 'auto',
          }}
        >
          <Button
            component={Link}
            href={isOnUploadPage ? home : upload}
            variant="contained"
            color="primary"
          >
            {isOnUploadPage ? t('header.buttonHome') : t('header.buttonUpload')}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
