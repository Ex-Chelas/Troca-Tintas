// src/utils/Routers.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar";

export default function AppRouter() {
    return (
        <Router>
            <Navbar
                title="My App"
                links={[
                    { label: "Home", path: "/" },
                    { label: "About", path: "/about" },
                ]}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}
