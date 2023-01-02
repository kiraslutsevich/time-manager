import 'styled-components';
import type { ThemeOptions, PaletteColor } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import readableColor from 'polished/lib/color/readableColor';

export const createColor = (params: Partial<PaletteColor> & Pick<PaletteColor, 'main'>): PaletteColor => ({
  light: params.light || lighten(0.05, params.main),
  main: params.main,
  dark: params.dark || darken(0.2, params.main),
  contrastText: params.contrastText || readableColor(params.main),
});

export const MAIN_FONT_SIZE = 18;
export const MAIN_LINE_HEIGHT = 26;

export const lightThemeObject = {
  colors: {
    default: createColor({ main: '#000000' }),
  },
  screen: {
    xs: 0,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1440,
  } as const,
  font: {
    family: {
      main: "'Lato', sans-serif",
    },
    weight: {
      sm: 300,
      md: 400,
      lg: 700,
    },
    size: {
      xs: '0.6rem',
      sm: '0.8rem',
      md: '18px',
      lg: '1.4rem',
      xlg: '2rem',
    },
  },
  transition: {
    0: '0ms',
    1: '100ms',
    2: '300ms',
    3: '500ms',
    4: '1000ms',
  },
};

export interface IOverridedThemeOptions extends ThemeOptions {
  palette: Omit<ThemeOptions['palette'], 'primary'> & {
    common: {
      black: string;
      white: string;
    };
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
    };
    text: {
      disabled: string;
      icon: string;
      primary: string;
      secondary: string;
    };
    background: {
      default: string,
      paper: string,
    },
  };
}

export type ThemeType = typeof lightThemeObject & IOverridedThemeOptions;

export const lightMaterialTheme: ThemeOptions = {
  breakpoints: {
    values: lightThemeObject.screen,
  },
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: '#fff',
      default: '#fff',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  typography: {
    htmlFontSize: MAIN_FONT_SIZE,
    fontFamily: 'inherit',
    fontSize: MAIN_FONT_SIZE,
    fontWeightLight: lightThemeObject.font.weight.sm,
    fontWeightRegular: lightThemeObject.font.weight.sm,
    fontWeightMedium: lightThemeObject.font.weight.md,
    fontWeightBold: lightThemeObject.font.weight.lg,
    button: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.md,
      fontSize: MAIN_FONT_SIZE,
      lineHeight: 'normal',
      letterSpacing: 'normal',
      textTransform: 'none',
    },
    h1: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.lg,
      fontSize: lightThemeObject.font.size.xlg,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h2: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.lg,
      fontSize: lightThemeObject.font.size.lg,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h3: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.md,
      fontSize: '1.2rem',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h4: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.sm,
      fontSize: '1.1rem',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h5: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.sm,
      fontSize: MAIN_FONT_SIZE,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h6: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.sm,
      fontSize: MAIN_FONT_SIZE,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    subtitle1: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.md,
      fontSize: MAIN_FONT_SIZE,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    subtitle2: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.md,
      fontSize: MAIN_FONT_SIZE,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    body1: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.md,
      fontSize: MAIN_FONT_SIZE,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    body2: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.md,
      fontSize: MAIN_FONT_SIZE,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    caption: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.md,
      fontSize: MAIN_FONT_SIZE,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    overline: {
      fontFamily: 'inherit',
      fontWeight: lightThemeObject.font.weight.md,
      fontSize: MAIN_FONT_SIZE,
      lineHeight: 'normal',
      letterSpacing: 'normal',
      textTransform: 'uppercase',
    },
  },
  zIndex: {
    mobileStepper: 1,
    appBar: 1,
    drawer: 10,
    modal: 50,
    snackbar: 1,
    tooltip: 50,
    speedDial: 20,
  },
};

export default createTheme(lightMaterialTheme, lightThemeObject);