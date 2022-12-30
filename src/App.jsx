/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { AppShell, Header, Container, MantineProvider, SimpleGrid, Center, Title, Text } from "@mantine/core";
import { Logo } from "@assets";
import { Header } from "@components";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MantineProvider withNormalizeCSS>
            <Header />
            {/* <AppShell
                padding="md"
                fixed={false} //controls stickiness of header
                header={
                    <Header p="xl" color="red">
                        <SimpleGrid cols={2} align="center" justify="center">
                            <Center><img src={Logo} width="25%"/></Center>
                            <li>
                                <ul><a>Maven</a></ul>
                                <ul><a>Mission Statement</a></ul>
                                <ul><a>Services</a></ul>
                                <ul><a>Contact</a></ul>
                            </li>
                        </SimpleGrid>
                    </Header>
                }
            >
                <Container fluid>
                    <Center>
                        <Title order={1}>Malleable, Valiant, Noble</Title>
                    </Center>

                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                    <Text>A global sourcing company</Text>
                </Container>

            </AppShell> */}
        </MantineProvider>
    </React.StrictMode>
);
