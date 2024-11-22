import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Colour } from "../../service/dbDump";

interface ColorCarouselProps {
    colors: Colour[]; // Array of Colour objects
    height: number; // Height of the component
    width: number; // Width of the carousel
}

export default function ColorCarousel({ colors, height, width }: ColorCarouselProps) {
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
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: `${height}px`,
                width: `${width}px`,
                backgroundColor: "#2b2b2b",
                borderRadius: "8px",
                padding: "8px",
                gap: 2,
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
                    flex: 1,
                    justifyContent: "space-around",
                }}
            >
                {visibleColors.map((colorObj, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: `${(width - 120) / 3}px`,
                            height: `${height - 50}px`, // Keeps squares proportional to height
                            backgroundColor: colorObj.rgb,
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
                            {colorObj.product.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#ddd", fontSize: "12px" }}
                        >
                            {colorObj.product.brand}
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{ color: "#bbb", fontSize: "10px" }}
                        >
                            {colorObj.rgb}
                        </Typography>
                    </Box>
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
