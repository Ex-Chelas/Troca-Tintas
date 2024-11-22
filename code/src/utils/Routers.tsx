import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Auth/SignIn";
import LogIn from "../pages/Auth/LogIn";
import D3Viewer from "../pages/3DViewer/3DViewer";
import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";
import DropSchema from "../pages/DropSchema/DropSchema";
import ShoppingCartPage from "../pages/ShoppingCart/ShoppingCart";

export default function AppRouter() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#494a4b",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Router>
        <Navbar
          title="Troca Tintas"
          links={[]}
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
          <Route path="/dropSchema" element={<DropSchema />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="/3dViewer" element={<D3Viewer />} />
        </Routes>
      </Router>
    </Box>
  );
}
