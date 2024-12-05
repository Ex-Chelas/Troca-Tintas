import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface AddCommentProps {
    onAddComment: (comment: string) => void;
}

export default function AddComment({ onAddComment }: AddCommentProps) {
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        if (comment.trim()) {
            onAddComment(comment);
            setComment(""); // Clear input field after submitting
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: 4,
                maxWidth: "600px",
                width: "100%",
            }}
        >
            <TextField
                label="Add a Comment"
                variant="outlined"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                multiline
                rows={3}
                fullWidth
                sx={{
                    backgroundColor: "white", // Ensure the background is always white
                    "& .MuiInputBase-root": {
                        color: "black", // Ensure text inside is black
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "gray", // Default border color
                        },
                        "&:hover fieldset": {
                            borderColor: "blue", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "blue", // Border color when focused
                        },
                    },
                }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Submit Comment
            </Button>
        </Box>
    );
}
