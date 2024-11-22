import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import RotateSelector from "../../components/RotateSelector";
import ColorCarousel from "../../components/ColorCarousel";
import ColorPicker from "../../components/ColorPicker";
import { inks } from "../../service/dbDump"; // Import the inks array

export default function ColorComparatorPage() {
    // Extract unique brands from the inks dataset
    const brands = Array.from(new Set(inks.map((ink) => ink.product.brand)));
    const [selectedBrand, setSelectedBrand] = useState(brands[0]);

    // Filter colors for the selected brand
    const filteredColors = inks
        .filter((ink) => ink.product.brand === selectedBrand)
        .map((ink) => ink.rgb);

    const [selectedColor, setSelectedColor] = useState(filteredColors[0]);

    const selectorHeight = 300; // Match the height of RotateSelector and ColorCarousel
    const componentWidth = 200; // Set consistent width for RotateSelector and ColorCarousel

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 4,
                gap: 4,
                minHeight: "80vh",
            }}
        >
            {/* Page Title */}
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                Color Comparator
            </Typography>

            {/* RotateSelector and ColorCarousel Row */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: "1200px",
                }}
            >
                {/* Color Carousel on the Right */}
                <Box sx={{ width: `${componentWidth}px` }}>
                    <ColorCarousel colors={filteredColors} height={selectorHeight} />
                </Box>

                {/* Rotate Selector on the Left */}
                <Box sx={{ width: `${componentWidth}px` }}>
                    <RotateSelector
                brands={brands}
                onBrandSelect={(brand) => {
                            setSelectedBrand(brand);
                            const newColors = inks
                                .filter((ink) => ink.product.brand === brand)
                                .map((ink) => ink.rgb);
                            setSelectedColor(newColors[0]);
                        }}
                // height={selectorHeight} // Pass height for consistency
                />
                </Box>

            </Box>

            {/* Color Picker Below */}
            <Box sx={{ width: "400px", marginTop: 4 }}>
                <ColorPicker />
            </Box>
        </Box>
    );
}
