import React, { useState } from "react";
import { Box } from "@mui/material";
import CommentCard from "../../components/CommentCard";
import AddComment from "../../components/AddComment";

export default function CommentsSection() {
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
                username: "New User", // You can update this to dynamically use logged-in user data
                profilePic: "https://via.placeholder.com/40", // Placeholder for new user's profile pic
                comment: newComment,
            },
        ]);
    };

    return (
        <Box sx={{ padding: 2 }}>
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
