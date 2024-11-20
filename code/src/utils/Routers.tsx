import React from "react";
import { Box } from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Auth/SignIn";
import LogIn from "../pages/Auth/LogIn";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";
import DropSchema from "../pages/DropSchema/DropSchema";
import MiniViewer from "../pages/MiniViewer/MiniViewer";

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
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/dropSchema" element={<DropSchema/>}/>
                <Route path="/shopping-cart" element={<ShoppingCart/>}/>
                <Route path="/3dViewer" element={<MiniViewer/>}/>
            </Routes>
        </Router>
    </Box>
    );
}
