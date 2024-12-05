import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
    onChange: (rgb: string) => void; // Callback to send selected RGB
}

export default function ColorPicker({ onChange }: ColorPickerProps) {
    const [color, setColor] = useState("#000000"); // Default HEX color

    // Convert HEX to RGB
    const hexToRgb = (hex: string) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    };

    const handleChange = (newColor: string) => {
        setColor(newColor);
        onChange(hexToRgb(newColor)); // Notify parent component
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "350px",
                height: "500px",
                padding: 2,
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#2b2b2b",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
        >
            {/* Title */}
            <Typography
                variant="h6"
                sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: 3,
                }}
            >
                Color Picker
            </Typography>

            {/* Color Picker */}
            <Box
                sx={{
                    width: "100%",
                    height: "50%",
                    marginBottom: 3,
                }}
            >
                <HexColorPicker
                    color={color}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Box>

            {/* Selected Color Preview */}
            <Box
                sx={{
                    width: "100%",
                    height: "50px",
                    backgroundColor: "color",
                    borderRadius: "4px",
                    marginBottom: 3,
                    border: "1px solid #fff",
                }}
            />

            {/* Color Output */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    color: "#fff",
                }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2">HEX</Typography>
                    <Typography>{color}</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2">RGB</Typography>
                    <Typography>{hexToRgb(color)}</Typography>
                </Box>
            </Box>
        </Box>
    );
}
