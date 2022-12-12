import {
  Box,
  Center,
  Container,
  Grid,
  Kbd,
  Space,
  Stack,
  Text,
  Title,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { openSpotlight } from "@mantine/spotlight";
import Image from "next/image";
import React from "react";
import { Search } from "tabler-icons-react";
// import Avatar from "./Avatar";
import Peep from "../assets/peeps/peep-8.svg";

export default function HomePage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Container>
      <Center
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Stack>
          <Box style={{ maxWidth: "750px" }}>
            <Grid>
              <Grid.Col span="auto">
                <Box>
                  <Title order={1}>Shahredza</Title>
                  <Space h="md" />
                  <UnstyledButton component="a">📌 About Me</UnstyledButton>
                  <Space h="md" />
                  <Text>
                    Hi there, my name is Shahredza. I&apos;m a full-stack web
                    developer from Malaysia. I got my bachelor&apos;s degree in
                    Computer Science and been focusing on building web
                    application.
                  </Text>
                </Box>
              </Grid.Col>
              <Grid.Col span="content">
                <Image src={Peep} width={200} alt="Peep" />
              </Grid.Col>
            </Grid>
          </Box>
          {/* <Divider
            my="lg"
            variant="solid"
            labelPosition="left"
            label={''}
          /> */}
          <UnstyledButton
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
          <UnstyledButton
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => openSpotlight()}
          >
            <Search size={24} />
            <Box ml={5} mr={10}>
              Search
            </Box>
            <Kbd>⌘</Kbd>
            <span style={{ margin: "0 5px" }}>+</span>
            <Kbd>K</Kbd>
            <span style={{ margin: "0 10px" }}>/</span>
            <Kbd>Ctrl</Kbd>
            <span style={{ margin: "0 5px" }}>+</span>
            <Kbd>K</Kbd>
          </UnstyledButton>
        </Stack>
      </Center>
    </Container>
  );
}
