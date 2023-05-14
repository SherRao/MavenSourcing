import React from "react";
import PropTypes from "prop-types";
import { Badge, Button, Card, Center, Container, Group, Image, Title, Text, SimpleGrid, Space } from "@mantine/core";

import FlexibleImage from "@assets/flexible.jpg";
import ValiantImage from "@assets/valiant.jpg";
import NobleImage from "@assets/noble.jpg";

export const AboutSection = () => (
    <Container fluid className="about-container">
        <SimpleGrid cols={3}>
            <Card shadow="lg" padding="xl" radius="md">
                <Card.Section>
                    <Center>
                        <Image src={FlexibleImage} height={500} alt="Bookshelf with Cat" />
                    </Center>
                </Card.Section>

                <Card.Section>
                    <Space h="md" />
                    <Center>
                        <Title>Malleable</Title>
                    </Center>
                    <Center>
                        <Text size="sm" color="dimmed" align="center">
                            We can provide and delivery services from anywhere, and of any type, around the world.
                        </Text>
                    </Center>
                </Card.Section>
            </Card>

            <Card shadow="lg" padding="xl" radius="md">
                <Card.Section>
                    <Center>
                        <Image src={ValiantImage} height={500} alt="Stacked Stones" />
                    </Center>
                </Card.Section>

                <Card.Section>
                    <Space h="md" />
                    <Center>
                        <Title>Valiant</Title>
                    </Center>
                    <Center>
                        <Text size="sm" color="dimmed" align="center">
                            We have provided successful services to an of array clients - we aren't afraid to take risks. We
                            deal with any sort of client coupled with any sort of sourcing requirement.
                        </Text>
                    </Center>
                </Card.Section>
            </Card>

            <Card shadow="lg" padding="xl" radius="md">
                <Card.Section>
                    <Center>
                        <Image src={NobleImage} height={500} alt="Owl" />
                    </Center>
                </Card.Section>

                <Card.Section>
                    <Space h="md" />
                    <Center>
                        <Title>Noble</Title>
                    </Center>
                    <Center>
                        <Text size="sm" color="dimmed" align="center">
                            We believe in integrity. and being a sly or slick company is the last thing on our agenda. Take a
                            look at who we are and what we do.
                        </Text>
                    </Center>
                    <Space h="md" />
                </Card.Section>
            </Card>

        </SimpleGrid>
    </Container>
);

AboutSection.propTypes = {};
