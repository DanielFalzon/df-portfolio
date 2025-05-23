import type { Metadata } from "next";
import './global.css';
import {promises as fs } from 'fs';
import { MenuItem } from "@/types/Types";
import theme from "@/theme";
import HeaderMenu from "@/components/header-menu/HeaderMenu";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const response = await fs.readFile(process.cwd() + '/app/data/menuItems.json', 'utf8');
  const menuItems: MenuItem[] = JSON.parse(response).data;

  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
        <body>
          <header>
            <HeaderMenu menuItems={menuItems} />
          </header>
            {children}
          <Footer />
        </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
      
    </html>
  );
}
