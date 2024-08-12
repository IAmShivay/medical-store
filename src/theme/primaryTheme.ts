'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Define colors
const primaryColor = '#10847E';
const secondaryColor = '#E6F3F2';
const accentColor = '#14A098';
const cardBackgroundColor = '#F0F8F7';

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: '#FFFFFF',
      paper: cardBackgroundColor,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: accentColor,
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#0B5D5A',
          },
        },
        outlinedPrimary: {
          color: primaryColor,
          borderColor: primaryColor,
          '&:hover': {
            backgroundColor: 'rgba(16, 132, 126, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: '0.3s',
          backgroundColor: cardBackgroundColor,
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: secondaryColor,
          borderRadius: '4px',
          padding: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontWeight: 'bold',
          color: primaryColor,
        },
        h6: {
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;

