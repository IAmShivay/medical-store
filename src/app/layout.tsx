
"use client"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "../theme/index";
import { ThemeProvider } from "@mui/material/styles";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useMemo } from 'react';

import { palette } from '../theme/palette';
import { shadows } from '../theme/shadows';
import { overrides } from '../theme/overrides';
import { typography } from '../theme/typography';
import { customShadows } from '../theme/custom-shadows';
import { createTheme} from '@mui/material/styles';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const memoizedValue:any = useMemo(
    () => ({
      palette: palette(),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    [])
    const theme:any = createTheme(memoizedValue);

    theme.components = overrides(theme);
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
