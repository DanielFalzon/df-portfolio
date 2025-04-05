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
    h1: {
      margin: '45px 0px',
      fontWeight: 'normal'
    },
    h2: {
      margin: '2rem 0rem',
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
      main: '#4961b0'
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
      }, 
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginBottom: 0
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontStyle: 'italic',
          fontSize: '1rem',
        },
        subheader: {
          fontStyle: 'italic',
          fontSize: '1rem',
        },
      },
    },
  }
});

export default responsiveFontSizes(theme);