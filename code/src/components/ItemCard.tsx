import React from "react";
import { Box, Typography, Button, Rating, Card, CardContent, CardMedia } from "@mui/material";
import {CARD_WIDTH} from "../service/constants";

interface ItemCardProps {
    title: string;
    price: number;
    image: string;
    rating: number;
    onAddToCart: () => void;
}

export default function ItemCard({ title, price, image, rating, onAddToCart }: ItemCardProps) {
    return (
        <Card
            sx={{
                width: CARD_WIDTH,
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                ':hover': {
                    boxShadow: 6,
                },
            }}
        >
            {/* Product Image */}
            <Box
                sx={{
                    height: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "#f5f5f5",
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                    }}
                />
            </Box>

            <CardContent>
                {/* Product Title */}
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                    {title}
                </Typography>

                {/* Product Price */}
                <Typography variant="h5" sx={{ color: "green", fontWeight: "bold", marginBottom: 1 }}>
                    {price.toFixed(2)}€
                </Typography>

                {/* Product Rating */}
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                    <Rating value={rating} precision={0.5} readOnly />
                    <Typography variant="body2" sx={{ marginLeft: 1 }}>
                        {rating.toFixed(1)}
                    </Typography>
                </Box>

                {/* Add to Cart Button */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onAddToCart}
                    fullWidth
                    sx={{ backgroundColor: "orange", ":hover": { backgroundColor: "#cc7000" } }}
                >
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
}
