import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box, Typography } from "@mui/material";
import { OrbitControls } from "@react-three/drei";

interface ViewerBoxProps {
    model: string; // Path to the 3D file
    colors: string[]; // List of colors used in the 3D model
}

export default function ViewerBox({ model, colors }: ViewerBoxProps) {
    const loadModel = () => {
        // Replace this placeholder logic with an actual loader for your 3D model
        return (
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="lightgray" />
            </mesh>
        );
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: 2,
                border: "1px solid #ccc",
                borderRadius: 4,
                backgroundColor: "#f9f9f9",
                maxWidth: "800px",
                margin: "0 auto",
            }}
        >
            {/* 3D Viewer */}
            <Box
                sx={{
                    height: "400px",
                    backgroundColor: "#e0e0e0",
                }}
            >
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    {loadModel()}
                    <OrbitControls />
                </Canvas>
            </Box>

            {/* Colors Information */}
            <Box>
                <Typography variant="h6">Colors Used:</Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        marginTop: 1,
                    }}
                >
                    {colors.map((color, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: color,
                                borderRadius: "50%",
                                border: "1px solid #000",
                            }}
                        ></Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
