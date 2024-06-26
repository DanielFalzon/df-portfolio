'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h2: {
      margin: '4rem 0rem',
      textAlign: 'left'
    },
    h3: {
      margin: '1rem 0rem'
    },
    h4: {
      fontSize: '1.2rem'
    },
    body1: {
      marginBottom: '1rem',
      fontSize: '1.2rem'
    }
  },
  palette: {
    primary: {
      main: '#202124'
    },
    secondary: {
      main: '#ffff'
    }
  }
});

export default theme;