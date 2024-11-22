import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface RotateSelectorProps {
    brands: string[]; // Array of brand names
    onBrandSelect: (selectedBrand: string) => void; // Callback to notify when a brand is selected
}

export default function RotateSelector({ brands, onBrandSelect }: RotateSelectorProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrevious = () => {
        const newIndex = (selectedIndex - 1 + brands.length) % brands.length;
        setSelectedIndex(newIndex);
        onBrandSelect(brands[newIndex]);
    };

    const handleNext = () => {
        const newIndex = (selectedIndex + 1) % brands.length;
        setSelectedIndex(newIndex);
        onBrandSelect(brands[newIndex]);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                width: "200px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: 2,
                backgroundColor: "#f9f9f9",
            }}
        >
            {/* Title */}
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                Brands
            </Typography>

            {/* Up Arrow Button */}
            <Button
                onClick={handlePrevious}
                sx={{
                    minWidth: "40px",
                    height: "40px",
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 1,
                }}
            >
                <ArrowDropUpIcon />
            </Button>

            {/* Top 3 Brands */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    width: "100%",
                }}
            >
                {/* Previous Brand */}
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "0.9rem",
                        padding: "4px",
                        width: "100%",
                        borderRadius: "4px",
                        backgroundColor: "#e0e0e0",
                        border: "1px solid #ccc",
                    }}
                >
                    {brands[(selectedIndex - 1 + brands.length) % brands.length]}
                </Typography>

                {/* Selected Brand */}
                <Typography
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        padding: "8px",
                        width: "100%",
                        borderRadius: "4px",
                        backgroundColor: "#d1eaff",
                        border: "2px solid #007BFF",
                    }}
                >
                    {brands[selectedIndex]}
                </Typography>

                {/* Next Brand */}
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "0.9rem",
                        padding: "4px",
                        width: "100%",
                        borderRadius: "4px",
                        backgroundColor: "#e0e0e0",
                        border: "1px solid #ccc",
                    }}
                >
                    {brands[(selectedIndex + 1) % brands.length]}
                </Typography>
            </Box>

            {/* Down Arrow Button */}
            <Button
                onClick={handleNext}
                sx={{
                    minWidth: "40px",
                    height: "40px",
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 1,
                }}
            >
                <ArrowDropDownIcon />
            </Button>
        </Box>
    );
}
