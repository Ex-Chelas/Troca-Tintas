import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import RotateSelector from "../../components/RotateSelector";
import ColorCarousel from "../../components/ColorCarousel";
import ColorPicker from "../../components/ColorPicker";
import { inks, Colour } from "../../service/dbDump";

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

export default function ColorComparatorPage() {
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
                Color Comparator
            </Typography>

            {/* Layout for RotateSelector and ColorCarousel */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                {/* Color Carousel */}
                <ColorCarousel colors={filteredColors} height={selectorHeight} width={carouselWidth} />

                {/* Rotate Selector */}
                <RotateSelector
                    brands={["All Brands", ...brands]}
                    onBrandSelect={(brand) =>
                        setSelectedBrand(brand === "All Brands" ? null : brand)
                    }
                    componentHeight={selectorHeight}
                />
            </Box>

            {/* Color Picker Below */}
            <Box sx={{ width: "400px", marginTop: 4 }}>
                <ColorPicker onChange={(newRgb) => setSelectedRgb(newRgb)} />
            </Box>
        </Box>
    );
}
