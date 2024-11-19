import React from "react";
import {Avatar, Box, Typography} from "@mui/material";

interface CommentCardProps {
    username: string;
    profilePic: string;
    comment: string;
}

export default function CommentCard({username, profilePic, comment}: CommentCardProps) {
    return (
        <Box
            sx={{
                border: "1px solid #ccc",
                borderRadius: 2,
                padding: 2,
                marginTop: 2,
                backgroundColor: "#f9f9f9",
                display: "flex",
                flexDirection: "column",
                maxWidth: "600px", // Adjust as needed
            }}
        >
            {/* Top section with username and profile pic */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 1,
                }}
            >
                <Avatar
                    src={profilePic}
                    alt={username}
                    sx={{width: 40, height: 40, marginRight: 1.5}}
                />
                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                    {username}
                </Typography>
            </Box>

            {/* Comment content */}
            <Typography variant="body1" sx={{marginTop: 1, color: "#555"}}>
                {comment}
            </Typography>
        </Box>
    );
}
