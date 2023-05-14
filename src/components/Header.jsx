import React from "react";
import PropTypes from "prop-types";
import Logo from "@assets/logo.svg";

import { Header as MantineHeader, Image, Grid, SimpleGrid, Text, MediaQuery, Menu, Container } from "@mantine/core";

export const Header = ({opened, setOpened}) => {
    return (
        <MantineHeader height="5em" mb={120}>
            {/* <SimpleGrid cols={9} spacing="xl">
                <Image src={Logo} />
            </SimpleGrid> */}

            <Container fluid>
                <Grid columns={9} spacing="xl">
                    <Grid.Col span={2}>
                        <Image src={Logo}/>
                    </Grid.Col>
                    <Grid.Col span={3} offset={4}>
                        <Menu >
                            <Menu.Item>About</Menu.Item>
                            <Menu.Item>About</Menu.Item>
                            <Menu.Item>About</Menu.Item>
                            <Menu.Item>About</Menu.Item>
                            <Menu.Item>About</Menu.Item>
                        </Menu>
                    </Grid.Col>
                </Grid>
            </Container>

            {/* <div style={{ display: "flex", alignItems: "center", height: "100%" }}> */}
                {/* <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <Text>Application header</Text> */}
            {/* </div> */}
        </MantineHeader>
    );
};

Header.propTypes = {
    opened: PropTypes.bool,
    setOpened: PropTypes.any
};
