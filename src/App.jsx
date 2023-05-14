import React from "react";
import ReactDOM from "react-dom/client";
import { AppShell, Center, MantineProvider, Space } from "@mantine/core";
import { Header, AboutSection, HeroSection } from "@components";
import "./styles.css";

const App = () => {
    const [opened, setOpened] = React.useState(false);
    return (
        // <AppShell padding={0} fixed={false} header={<Header opened={opened} setOpened={setOpened}/>} >
            // {/* <Center> */}
            <div className="app-container">
                <HeroSection />
                <Space h="5rem" />
                <AboutSection />
                <Space h="5rem" />

            </div>
            // {/* </Center> */}
        // </AppShell>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MantineProvider theme={{ colorScheme: 'dark' }} withNormalizeCSS>
            <App />
        </MantineProvider>
    </React.StrictMode>
);
