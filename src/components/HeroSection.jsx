import React from "react";
import CoverVideo from "@assets/cover.mp4";
import { Center, Container, Text, Title } from "@mantine/core";

export const HeroSection = () => (
    <div className="hero-container">
        <video autoPlay muted loop id="coverVideo" src={CoverVideo} />

        <Center>
            <Title size="h1" color="white">Malleable, Valiant, Noble</Title>
        </Center>
        <Center>
            <Text>A global sourcing company.</Text>
        </Center>

    </div>
);

HeroSection.propTypes = {};
