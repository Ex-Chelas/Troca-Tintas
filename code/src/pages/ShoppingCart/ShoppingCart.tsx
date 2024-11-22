import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/cardContext";
import { Button, Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const ShoppingCartPage = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const [thankYouMessage, setThankYouMessage] = useState(false);

    const exportCart = () => {
        const content = cartItems
            .map(
                (item) =>
                    `Name: ${item.title}, Price: €${item.price.toFixed(
                        2
                    )}, Brand: ${item.brand || "N/A"}`
            )
            .join("\n");
        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "cart_items.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownload = () => {
        exportCart();
        clearCart();
        setThankYouMessage(true);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <Box
            sx={{
                padding: 4,
                margin: "0 auto", // Center the container horizontally
                maxWidth: "1200px", // Limit the width of the content
                backgroundColor: "#f9f9f9",
                minHeight: "100vh",
            }}
        >
            <Typography variant="h4" gutterBottom textAlign="center">
                Shopping Cart
            </Typography>
            {Array.isArray(cartItems) && cartItems.length > 0 ? (
                <>
                    <Grid container spacing={3}>
                        {cartItems.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        height: "100%",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.image}
                                        alt={item.title}
                                        sx={{ objectFit: "cover" }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Price: €{item.price.toFixed(2)}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Brand: {item.brand || "N/A"}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Total Price and Actions */}
                    <Box
                        sx={{
                            marginTop: 4,
                            textAlign: "center",
                            borderTop: "1px solid #ddd",
                            paddingTop: 2,
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Total: €{calculateTotal()}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleDownload}
                            sx={{ marginRight: 2 }}
                        >
                            Download Shopping List
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => {
                                clearCart();
                                setThankYouMessage(false);
                            }}
                        >
                            Clear Cart
                        </Button>
                        {thankYouMessage && (
                            <Typography
                                variant="body1"
                                color="success.main"
                                sx={{ marginTop: 2 }}
                            >
                                Thank you for your purchase! Your shopping list has been downloaded.
                            </Typography>
                        )}
                    </Box>
                </>
            ) : (
                <Typography variant="body1" textAlign="center">
                    Your cart is empty.
                </Typography>
            )}
        </Box>
    );
};

export default ShoppingCartPage;
