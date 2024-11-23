import React from "react";
import { Box, Typography, Button, Rating, Card, CardContent, CardMedia } from "@mui/material";
import { CARD_WIDTH } from "../service/constants";

interface ItemCardProps {
    title: string;
    price: number;
    image: string;
    rating: number;
    brand: string;
    color?: string; // Optional color prop for inks
    onAddToCart: () => void;
}

export default function ItemCard({ title, price, image, rating, brand, color, onAddToCart }: ItemCardProps) {
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
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
                sx={{
                    objectFit: "contain",
                    padding: 2,
                }}
            />

            <CardContent>
                {/* Product Title */}
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                    {title}
                </Typography>

                {/* Product Price */}
                <Typography variant="h5" sx={{ color: "green", fontWeight: "bold", marginBottom: 1 }}>
                    {price.toFixed(2)}€
                </Typography>

                {/* Product Brand */}
                <Typography variant="body2" sx={{ marginBottom: 1, fontStyle: "italic" }}>
                    Brand: {brand}
                </Typography>

                {/* Product Color (Optional) */}
                {color && (
                    <Box
                        sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: color,
                            borderRadius: "50%",
                            marginBottom: 2,
                            border: "1px solid #000",
                            display: "inline-block",
                        }}
                    />
                )}

                {/* Product Rating */}
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                    <Rating value={rating} precision={0.5} readOnly />
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
