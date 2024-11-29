import localFont from "next/font/local";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import AppLayout from "./AppLayout";

const theme = createTheme({
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>My awesome app</title>

        
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider theme={theme}>
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
