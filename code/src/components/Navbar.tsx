import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

interface NavLink {
    label: string;
    path: string;
}

interface NavbarProps {
    title: string;
    links: NavLink[]; // Links specific to Navbar
    menu?: React.ReactNode; // Optional menu component (HamburgerMenu)
}

export default function Navbar({ title, links, menu }: NavbarProps) {
    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#FF5500",
                }}
            >
                {/* Render the injected Hamburger Menu */}
                {menu && <Box sx={{ mr: 2 }}>{menu}</Box>}

                {/* Centered Title */}
                <Typography variant="h6" component="div" sx={{ textAlign: "center", flexGrow: 1 }}>
                    {title}
                </Typography>

                {/* Right Navigation Links */}
                <Box
                    component="nav"
                    sx={{
                        display: "flex",
                        gap: "10px",
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