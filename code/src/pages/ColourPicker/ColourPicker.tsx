import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import RotateSelector from "../../components/RotateSelector";
import ColorCarousel from "../../components/ColorCarousel";
import ColorPicker from "../../components/ColorPicker";
import { inks, Colour } from "../../service/dbDump";
import CommentSection from "../../utils/CommentSection";



// Helper to calculate the closest RGB match
const calculateClosestRGB = (selectedRgb: string, colors: Colour[]) => {
    const rgbToArray = (rgb: string) => rgb.match(/\d+/g)?.map(Number) || [0, 0, 0];

    const [selectedR, selectedG, selectedB] = rgbToArray(selectedRgb);

    let closestColor: Colour | null = null;
    let smallestDistance = Infinity;

    colors.forEach((color) => {
        const [r, g, b] = rgbToArray(color.rgb);
        const distance = Math.sqrt(
            Math.pow(selectedR - r, 2) +
            Math.pow(selectedG - g, 2) +
            Math.pow(selectedB - b, 2)
        );

        if (distance < smallestDistance) {
            closestColor = color;
            smallestDistance = distance;
        }
    });

    return closestColor;
};

export default function ColorPickerPage() {
    const brands = Array.from(new Set(inks.map((ink) => ink.product.brand))); // Unique brands
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null); // Selected brand
    const [selectedRgb, setSelectedRgb] = useState("rgb(0, 0, 0)"); // Default RGB color
    const [filteredColors, setFilteredColors] = useState<Colour[]>(inks); // Filtered colors for the carousel

    // Update filtered colors when brand or RGB changes
    useEffect(() => {
        let filtered = inks;

        // Filter by brand if selected
        if (selectedBrand) {
            filtered = inks.filter((ink) => ink.product.brand === selectedBrand);
        }

        // Find the closest color and highlight it in the carousel
        const closestColor = calculateClosestRGB(selectedRgb, filtered);

        // Place the closest color first in the list for better user visibility
        if (closestColor) {
            filtered = [
                closestColor,
                ...filtered.filter((ink) => ink !== closestColor),
            ];
        }

        setFilteredColors(filtered);
    }, [selectedBrand, selectedRgb]);

    const selectorHeight = 300;
    const carouselWidth = 600;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 4,
                gap: 4,
                backgroundColor: "#2b2b2b",
                minHeight: "100vh",
            }}
        >
            {/* Title */}
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff" }}>
                Color Picker
            </Typography>

            {/* Layout for RotateSelector and ColorCarousel */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                {/* Color Carousel */}
                <a href="/3dViewer?color=dark-angels-green">
                <Box
                        key={1}
                        sx={{
                            width: `${(1200 - 120) / 3}px`,
                            height: `${400 - 50}px`, // Keeps squares proportional to height
                            backgroundColor: "rgb(0,82,33)",
                            borderRadius: "4px",
                            border: "2px solid #ffffff",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "8px",
                        }}
                    >
                        {/* Ink Details */}
                        <Typography
                            variant="body1"
                            sx={{ color: "#fff", fontSize: "14px", fontWeight: "bold" }}
                        >
                            {'Dark Angels Green'}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#ddd", fontSize: "12px" }}
                        >
                            {'Citadel'}
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{ color: "#bbb", fontSize: "10px" }}
                        >
                            {"rgb(0,82,33)"}
                        </Typography>
                    </Box>
                </a>

                {/* Rotate Selector */}
                <Box sx={{ flex: 1, color:"white" }}>
                    <CommentSection />
                </Box>
            </Box>
        </Box>
    );
}
