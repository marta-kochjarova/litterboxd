"use client";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { useDisclosure } from "@mantine/hooks";
import {
  createTheme,
  MantineProvider,
  Skeleton,
  AppShell,
  Burger,
  Group,
} from "@mantine/core";
import { useEffect, useState } from "react";
import Preloader from "@/components/preloader/Preloader";
import Logo from "@/components/logo/Logo";

const theme = createTheme({
  colors: {
    custom: [
      "#f2eff8",
      "#e7e1f5",
      "#d5ccec",
      "#c9bce7", //light
      "#AA96DA", //primary-light
      "#9e88d3", 
      "#947cce",//primary
      "#8b70cd", //darker purple
      "#7c5fc4", 
      "#563c98",
      "#422982", //9
    ],
  },
  primaryColor: "custom",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [opened, { toggle }] = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to check if the page has finished loading
    const checkPageLoad = () => {
      if (document.readyState === 'complete') {
        setIsLoading(false);
      }
    };

    // Initial check if the page is already loaded
    checkPageLoad();

    // Add an event listener for when the page fully loads
    window.addEventListener('load', checkPageLoad);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener('load', checkPageLoad);
    };
  }, []);
  
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Litterboxd</title>
      </head>
      <body>
        <MantineProvider theme={theme}>
        {isLoading && (
         <Preloader />
        )}
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Logo type={'primary'} width={200} />
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              Navbar
              {Array(15)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} h={28} mt="sm" animate={false} />
                ))}
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
