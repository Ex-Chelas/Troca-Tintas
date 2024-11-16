import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDropzone } from "react-dropzone";

export default function DropSchema() {
    const [file, setFile] = useState<File | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        setFile(acceptedFiles[0]); // Replace the file with the first one in accepted files
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <Box
            sx={{
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
                padding: 4,
            }}
        >
            <Box
                {...getRootProps()}
                sx={{
                    border: "2px dashed #ccc",
                    borderRadius: 4,
                    padding: 4,
                    width: "50%",
                    textAlign: "center",
                    backgroundColor: isDragActive ? "#e0e0e0" : "#fafafa",
                    cursor: "pointer",
                }}
            >
                <input {...getInputProps()} />
                <Typography variant="h6">
                    {isDragActive ? "Drop the file here..." : "Drag and drop a file here, or click to select a file"}
                </Typography>
            </Box>

            {file && (
                <Box sx={{ marginTop: 4, textAlign: "center", width: "100%" }}>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>
                        Uploaded File
                    </Typography>
                    <Box
                        sx={{
                            border: "1px solid #ccc",
                            borderRadius: 2,
                            padding: 2,
                            backgroundColor: "#fff",
                            display: "inline-block",
                        }}
                    >
                        <Typography variant="body1" noWrap>
                            {file.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {(file.size / 1024).toFixed(2)} KB
                        </Typography>
                    </Box>
                </Box>
            )}

            {file && (
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                    // redirect to 3d viewer page
                    onClick={() => { window.location.href = "/3dViewer" }}
                >
                    Upload File
                </Button>
            )}
        </Box>
    );
}
