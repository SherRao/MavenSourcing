import React from "react";
import { Header as MantineHeader, Menu, Group, Center, Burger, Container } from "@mantine/core";
export const Header = () => {
    return (
        <div className="navbar">
            <ul>
                <li><a href="#maven">Maven</a></li>
                <li><a href="#mission">Mission Statement</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};
