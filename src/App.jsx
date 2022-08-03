import React from "react";
import ReactDOM from "react-dom/client";
import { AppShell, Header, MantineProvider, SimpleGrid, Center, Title, Text } from "@mantine/core";
import { Logo } from "@assets";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MantineProvider withNormalizeCSS>
            <AppShell
                padding="md"
                fixed={false} //controls stickiness of header
                header={
                    <Header p="xl" color="red">
                        <SimpleGrid cols={2} align="center" justify="center">
                            <Center><img src={Logo} width="25%"/></Center>
                            <Center><img src={Logo} width="25%"/></Center>
                        </SimpleGrid>
                    </Header>
                }
            >
                <Title order={1}>Malleable, Valiant, Noble</Title>
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

            </AppShell>
        </MantineProvider>
    </React.StrictMode>
);
