'use client';
import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Raleway } from "next/font/google";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const raleway = Raleway({
  weight: ["200", "400"],
  style: ["normal"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: raleway.style.fontFamily,
    h2: {
      margin: '4rem 0rem',
      textAlign: 'left',
      fontFamily: roboto.style.fontFamily
    },
    h3: {
      margin: '1rem 0rem'

    },
    body1: {
      marginBottom: '1rem',
      fontSize: '1.2rem'
    },
    body2: {
      marginBottom: '1rem',
      fontSize: '1rem'
    }
  },
  palette: {
    primary: {
      main: '#32406e'
    },
    secondary: {
      main: '#ffff'
    }
  },
  components: {
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          '&.Mui-selected': {
            color: '#32406e'
          }
        }
      }
    }
  }
});

export default responsiveFontSizes(theme);