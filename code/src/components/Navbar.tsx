import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Modal from 'react-modal';

interface NavLink {
    label: string;
    path: string;
}

interface NavbarProps {
    title: string;
    links: NavLink[];
    menu?: React.ReactNode;
}

const Navbar = ({ title, links, menu }: NavbarProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const openModal = (signupMode: boolean) => {
        setIsSignup(signupMode);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#FF5500",
                    }}
                >
                    {menu && <Box sx={{ mr: 2 }}>{menu}</Box>}

                    <Typography variant="h6" component="div" sx={{ textAlign: "center", flexGrow: 1 }}>
                        {title}
                    </Typography>

                    <Box component="nav" sx={{ display: "flex", gap: "10px" }}>
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
                        <Button color="inherit" onClick={() => openModal(false)}>Login</Button>
                        <Button color="inherit" onClick={() => openModal(true)}>Sign Up</Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel={isSignup ? "Sign Up" : "Login"}
                style={{
                    content: {
                        maxWidth: "400px",
                        margin: "auto",
                        padding: "20px",
                        borderRadius: "10px",
                    },
                }}
            >
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                <form>
                    <div>
                        <label>Email:</label>
                        <input type="email" required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" required />
                    </div>
                    {isSignup && (
                        <div>
                            <label>Confirm Password:</label>
                            <input type="password" required />
                        </div>
                    )}
                    <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
                </form>
                <button type="button" onClick={closeModal} style={{ marginTop: '10px' }}>
                    Close
                </button>
            </Modal>
        </>
    );
};

export default Navbar;
