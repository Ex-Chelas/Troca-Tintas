import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import HamburgerMenu from "./HamburgerMenu";

interface NavLink {
    label: string;
    path: string;
}

interface NavbarProps {
    title: string;
    links: NavLink[];
}

export default function Navbar({ title, links }: NavbarProps) {
    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Hamburger Menu on the left */}
                <HamburgerMenu links={links} />

                {/* Centered Title */}
                <Typography variant="h6" component="div" sx={{ textAlign: "center", flexGrow: 1 }}>
                    {title}
                </Typography>

                {/* Right Navigation Links */}
                <Box
                    component="nav"
                    sx={{
                        display: "none",
                        gap: "10px",
                        "@media (min-width: 600px)": {
                            display: "flex",
                        },
                    }}
                >
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            style={{
                                color: "white",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
