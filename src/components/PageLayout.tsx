import { Center, Container, Stack } from "@mantine/core";
import React, { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <Container>
      <Center
        style={{
          width: "100%",
          // height: '100vh',
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Stack style={{ margin: "0 2rem", width: "100%" }}>{children}</Stack>
      </Center>
    </Container>
  );
}
