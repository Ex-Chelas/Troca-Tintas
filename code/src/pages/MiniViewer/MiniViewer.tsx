import React from "react";
import CommentSection from "./CommentSection";
import ViewerBox from "../../components/3DViewerBox";
import { Box } from "@mui/material";

export default function MiniViewer() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "flex-start",
                padding: 4,
            }}
        >
            {/* ViewerBox on the Left */}
            <ViewerBox
                model="/path/to/your/3d/model.glb"
                colors={["#FF0000", "#00FF00", "#0000FF", "#FFFF00"]} // Example colors
            />

            {/* CommentSection on the Right */}
            <Box sx={{ flex: 1 }}>
                <CommentSection />
            </Box>
        </Box>
    );
}
