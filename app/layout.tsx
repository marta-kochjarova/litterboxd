"use client";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import classes from "./MobileNavbar.module.css";
import { useDisclosure } from "@mantine/hooks";
import {
  createTheme,
  MantineProvider,
  Avatar,
  AppShell,
  Burger,
  Group,
  UnstyledButton,
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
      "#947cce", //primary
      "#8b70cd", //darker purple
      "#7c5fc4",
      "#563c98",
      "#422982", //9
    ],
  },
  primaryColor: "custom",
});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  const [opened, { toggle }] = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);

  const dummyUsername = "Jane Doe";

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad); //cleanup
    }
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
          {isLoading && <Preloader />}
          <AppShell
            header={{ height: 100 }}
            navbar={{ width: 300, breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
            className="blur-bg"
          >
            <AppShell.Header withBorder={false}>
              <Group  h="100%" px="md" justify="space-between">
              <Logo type={"light"}/>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Group ml="xl" gap={0} visibleFrom="sm">
                    <UnstyledButton className={classes.control}>
                      Films
                    </UnstyledButton>
                    <UnstyledButton className={classes.control}>
                      Lists
                    </UnstyledButton>
                </Group>
                <Avatar key={dummyUsername} name={dummyUsername} color="initials" allowedInitialsColors={['custom']}/>
              </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
              <UnstyledButton className={classes.control}>Films</UnstyledButton>
              <UnstyledButton className={classes.control}>Lists</UnstyledButton>
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>

          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
