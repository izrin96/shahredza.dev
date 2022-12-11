import {
  Box,
  Center,
  Container,
  Divider,
  Kbd,
  Space,
  Stack,
  Text,
  Title,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import Avatar from "./Avatar";

export default function HomePage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Container>
      <Center
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Stack style={{ margin: "0 auto", width: "450px" }}>
          <Box>
            {/* <Avatar /> */}
          </Box>

          <Box>
            <Title order={1}>Shahredza</Title>
            <Space h="md" />
            <UnstyledButton component="a">📌 About Me</UnstyledButton>
            <Space h="md" />
            <Text>
              Hi there, my name is Shahredza. I&apos;m a full-stack web
              developer from Malaysia. I got my bachelor&apos;s degree in
              Computer Science and been focusing on building web application.
            </Text>
          </Box>

          <Space h="lg" />

          <Divider
            my="lg"
            variant="solid"
            labelPosition="left"
            label={
              <UnstyledButton
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // fontWeight: '500'
                }}
                onClick={() => toggleColorScheme()}
              >
                <span style={{ fontSize: "20px" }}>
                  {colorScheme === "dark" ? "🌙" : "🌤️"}
                </span>
                <Box ml={5} mr={10}>
                  Switch Mode
                </Box>
                <Kbd>⌘</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>D</Kbd>
                <span style={{ margin: "0 10px" }}>/</span>
                <Kbd>Ctrl</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>D</Kbd>
              </UnstyledButton>
            }
          />
        </Stack>
      </Center>
    </Container>
  );
}
