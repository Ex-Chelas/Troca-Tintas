import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Auth/SignIn";
import LogIn from "../pages/Auth/LogIn";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";
import { Box } from "@mui/material";

export default function AppRouter() {
    return (
        <Box
            sx={{
                minHeight: "100vh", // Ensure full height
                backgroundColor: "#494a4b", // Set background color to light gray
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Router>
                <Navbar
                    title="Troca Tintas"
                    links={[
                        { label: "Shopping Cart", path: "/shopping-cart" },
                        { label: "Log In", path: "/login" },
                        { label: "Sign In", path: "/signin" },
                    ]}
                    menu={
                        <HamburgerMenu
                            links={[
                                { label: "Home", path: "/" },
                                { label: "Color Picker", path: "/colourPicker" },
                                { label: "3D Viewer", path: "/3dViewer" },
                                { label: "Colour Comparator", path: "/colorComparator" },
                                { label: "Drop Schema", path: "/dropSchema" },
                            ]}
                        />
                    }
                />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                </Routes>
            </Router>
        </Box>
    );
}
