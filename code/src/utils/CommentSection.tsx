import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CommentCard from "../components/CommentCard";
import AddComment from "../components/AddComment";

export default function CommentSection() {
    const [comments, setComments] = useState([
        {
            username: "John Doe",
            profilePic: "https://via.placeholder.com/40",
            comment: "This is an example comment. Great post!",
        },
        {
            username: "Jane Smith",
            profilePic: "https://via.placeholder.com/40",
            comment: "I totally agree with you! Looking forward to more content like this.",
        },
    ]);

    const handleAddComment = (newComment: string) => {
        setComments([
            ...comments,
            {
                username: "New User",
                profilePic: "https://via.placeholder.com/40",
                comment: newComment,
            },
        ]);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                Comments
            </Typography>
            {comments.map((comment, index) => (
                <CommentCard
                    key={index}
                    username={comment.username}
                    profilePic={comment.profilePic}
                    comment={comment.comment}
                />
            ))}
            <AddComment onAddComment={handleAddComment} />
        </Box>
    );
}
