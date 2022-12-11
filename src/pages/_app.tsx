import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import {
  type ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import Head from "next/head";
import { useState } from "react";
import { NotificationsProvider } from "@mantine/notifications";
import { useHotkeys } from "@mantine/hooks";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod + D", () => toggleColorScheme()]]);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Shahredza</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            fontFamily: "JetBrains Mono",
            headings: {
              fontFamily: "JetBrains Mono",
              fontWeight: "500",
            },
            primaryColor: "cyan",
          }}
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
