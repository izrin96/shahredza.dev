import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import {
  type ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  type MantineThemeOverride,
} from "@mantine/core";
import Head from "next/head";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { SpotlightProvider } from "@mantine/spotlight";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { useRouter } from "next/router";
import { Moon, Sun, Home } from "tabler-icons-react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const isDark = colorScheme === "dark";

  useHotkeys([["mod + D", () => toggleColorScheme()]]);

  const globalTheme: MantineThemeOverride = {
    colorScheme,
    fontFamily: "JetBrains Mono",
    headings: {
      fontFamily: "JetBrains Mono",
      fontWeight: "500",
    },
    primaryColor: "cyan",
    globalStyles: (theme) => ({
      body: {
        ...theme.fn.fontStyles(),
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        color:
          theme.colorScheme === "dark" ? theme.colors.gray[4] : theme.black,
        lineHeight: theme.lineHeight,
      },
    }),
  };

  const router = useRouter();

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
        <MantineProvider withGlobalStyles withNormalizeCSS theme={globalTheme}>
          <NotificationsProvider>
            <ModalsProvider>
              <SpotlightProvider
                actions={() => [
                  {
                    title: "Home",
                    description: "Get to home page",
                    group: "Navigate",
                    onTrigger: () => router.push("/"),
                    icon: <Home />,
                    keywords: ["home", "main"],
                  },
                  {
                    title: "Switch theme",
                    description: `Switch to ${isDark ? "light" : "dark"} mode`,
                    group: "Actions",
                    onTrigger: () => toggleColorScheme(),
                    icon: isDark ? <Sun /> : <Moon />,
                    keywords: ["theme", "mode", "dark", "light", "toggle"],
                  },
                ]}
                searchPlaceholder="🪶 Search..."
                shortcut="mod + k"
                nothingFoundMessage="🤔 Nothing found..."
              >
                <Component {...pageProps} />
              </SpotlightProvider>
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
