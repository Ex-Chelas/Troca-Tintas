import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ColorCarouselProps {
    colors: string[]; // Array of color hex codes
    height: number; // Height of the component to match RotateSelector
}

export default function ColorCarousel({ colors, height }: ColorCarouselProps) {
    const [startIndex, setStartIndex] = useState(0);

    // Calculate indices for visible colors
    const visibleColors = [
        colors[startIndex % colors.length],
        colors[(startIndex + 1) % colors.length],
        colors[(startIndex + 2) % colors.length],
    ];

    // Handlers for navigation
    const handlePrev = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? colors.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: `${height}px`, // Match RotateSelector height
                width: "150px", // Fixed width for alignment
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                border: "1px solid #ccc",
                padding: 2,
            }}
        >
            {/* Previous Button */}
            <Button
                onClick={handlePrev}
                sx={{
                    minWidth: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    ":hover": {
                        backgroundColor: "#f0f0f0",
                    },
                }}
            >
                <ArrowBackIosIcon fontSize="small" />
            </Button>

            {/* Visible Colors */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    flex: 1,
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                {visibleColors.map((color, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: "100%",
                            height: `${height / 4}px`, // Dynamically adjust square height
                            backgroundColor: color,
                            borderRadius: "4px",
                            border: "2px solid #fff",
                        }}
                    />
                ))}
            </Box>

            {/* Next Button */}
            <Button
                onClick={handleNext}
                sx={{
                    minWidth: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    ":hover": {
                        backgroundColor: "#f0f0f0",
                    },
                }}
            >
                <ArrowForwardIosIcon fontSize="small" />
            </Button>
        </Box>
    );
}
