import { createContext, useState, useMemo } from 'react';
import { createTheme, Theme } from '@mui/material/styles';

type Mode = 'dark' | 'light';

// color design tokens
export const tokens = (mode: Mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#F4F4F4',
          200: '#aeafb1',
          300: '#86868a',
          400: '#5d5e63',
          500: '#35363c',
          600: '#2a2b30',
          700: '#202024',
          800: '#151618',
          900: '#0b0b0c',
        },
        primary: {
          100: '#cfd6fa',
          200: '#9eadf4',
          300: '#0064FB',
          400: '#3d5ce9',
          500: '#0d33e4',
          600: '#0a29b6',
          700: '#081f89',
          800: '#05145b',
          900: '#030a2e',
        },
        greenAccent: {
          100: '#f8fcde',
          200: '#f1f8bd',
          300: '#e9f59c',
          400: '#e2f17b',
          500: '#dbee5a',
          600: '#afbe48',
          700: '#838f36',
          800: '#585f24',
          900: '#2c3012',
        },
        redAccent: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f',
        },
        blueAccent: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632',
        },
      }
    : {
        grey: {
          100: '#0b0b0c',
          200: '#151618',
          300: '#202024',
          400: '#2a2b30',
          500: '#35363c',
          600: '#5d5e63',
          700: '#86868a',
          800: '#aeafb1',
          900: '#F4F4F4',
        },
        primary: {
          100: '#030a2e',
          200: '#05145b',
          300: '#081f89',
          400: '#0a29b6',
          500: '#0d33e4',
          600: '#3d5ce9',
          700: '#6e85ef',
          800: '#9eadf4',
          900: '#cfd6fa',
        },
        greenAccent: {
          100: '#2c3012',
          200: '#585f24',
          300: '#838f36',
          400: '#afbe48',
          500: '#dbee5a',
          600: '#e2f17b',
          700: '#e9f59c',
          800: '#f1f8bd',
          900: '#f8fcde',
        },
        redAccent: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb',
        },
        blueAccent: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe',
        },
      }),
});

// mui theme settings
const fontFamily = ['Wix Madefor Display', 'sans-serif'].join(',');

export const themeSettings = (mode: Mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.primary[400],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.grey[800],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
            },
          }),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 2100,
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          fontFamily,
        },
      },
    },
  };
};

type ColorModeContextType = {
  toggleColorMode: () => void;
};
// context for color mode
export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, ColorModeContextType] => {
  const [mode, setMode] = useState<Mode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev: Mode) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
