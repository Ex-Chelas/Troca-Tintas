import React, { useState } from "react";
import { Box, Button, Typography, IconButton, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDropzone } from "react-dropzone";

export default function DropSchema() {
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        // Add new files to the existing file list
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleUpload = () => {
        // Logic to upload files (e.g., send them to a server)
        console.log("Uploading files:", files);
        alert("Files uploaded successfully!");
        window.location.href = "/3dViewer"
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                textAlign: "center",
                padding: 4,
            }}
        >
            {/* Dropzone */}
            <div {...getRootProps()}>
                <Box
                    sx={{
                        border: "2px dashed",
                        borderRadius: 2,
                        padding: 3,
                        cursor: "pointer",
                        width: "300px",
                        backgroundColor: isDragActive ? "rgba(0, 0, 0, 0.1)" : "transparent",
                        marginBottom: 3,
                    }}
                >
                    <input {...getInputProps()} />
                    <Typography variant="body1">
                        {isDragActive ? "Drop the files here..." : "Drag and drop files here, or click to select files"}
                    </Typography>
                </Box>
            </div>

            {/* File List */}
            {files.length > 0 && (
                <Box sx={{ width: "300px", marginBottom: 3 }}>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>
                        Files:
                    </Typography>
                    <List>
                        {files.map((file, index) => (
                            <ListItem
                                key={index}
                                secondaryAction={
                                    <IconButton edge="end" onClick={() => handleRemoveFile(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary={file.name}
                                    secondary={`${(file.size / 1024).toFixed(2)} KB`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}

            {/* Upload Button */}
            {files.length > 0 && (
                <Button variant="contained" color="primary" onClick={handleUpload}>
                    Upload Files
                </Button>
            )}
        </Box>
    );
}
