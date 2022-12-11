import { Box } from "@mantine/core";
import Head from "next/head";
import React, { type ReactNode } from "react";
import ThemeMode from "./ThemeMode";

type Props = {
  children: ReactNode;
  title: string;
};
export default function Layout({ children, title }: Props) {
  return (
    <div>
      <Head>
        <title>{`${title} - Shahredza`}</title>
      </Head>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "0px",
        }}
      >
        <Box>
          <ThemeMode />
          {children}
        </Box>
      </div>
    </div>
  );
}
