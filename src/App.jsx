import React from "react";
import ReactDOM from "react-dom/client";
import { AppContainer, PageContainer, Navbar, Hero } from "@components";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppContainer>
            <Navbar />
            <PageContainer>
                <Hero />
            </PageContainer>
        </AppContainer>
    </React.StrictMode>
);
