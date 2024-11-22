import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/cardContext";
import {
    Button,
    Box,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    Divider,
    IconButton,
    Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCartPage = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [thankYouMessage, setThankYouMessage] = useState(false);

    const initializeCartItems = () =>
        cartItems.map((item) => ({
            ...item,
            quantity: item.quantity || 1,
        }));

    const [cart, setCart] = useState(initializeCartItems());

    const updateContext = (updatedCart) => {
        setCart(updatedCart);
        setCartItems(updatedCart);
    };

    const exportCart = () => {
        const content = cart
            .map(
                (item) =>
                    `Name: ${item.title}, Price: €${item.price.toFixed(2)}, Brand: ${
                        item.brand || "N/A"
                    }, Quantity: ${item.quantity}`
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
        setThankYouMessage(true);
    };

    const incrementQuantity = (itemId) => {
        const updatedCart = cart.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateContext(updatedCart);
    };

    const decrementQuantity = (itemId) => {
        const updatedCart = cart.map((item) =>
            item.id === itemId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        updateContext(updatedCart);
    };

    const deleteItem = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        updateContext(updatedCart);
    };

    const clearCart = () => {
        updateContext([]);
    };

    const calculateTotal = () => {
        return cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };

    return (
        <Box
            sx={{
                padding: 4,
                margin: "0 auto",
                maxWidth: "90%",
                backgroundColor: "#fff",
                minHeight: "100vh",
                overflowX: "hidden",
            }}
        >
            <Typography variant="h4" gutterBottom textAlign="left" sx={{ fontWeight: "bold" }}>
                Shopping Cart
            </Typography>

            {Array.isArray(cart) && cart.length > 0 ? (
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                backgroundColor: "#f9f9f9",
                                borderRadius: "8px",
                                padding: 3,
                                boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                            }}
                        >
                            <List>
                                {cart.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <ListItem
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: "16px 0",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flex: 1,
                                                }}
                                            >
                                                <ListItemAvatar>
                                                    <Avatar
                                                        variant="square"
                                                        src={item.image}
                                                        alt={item.title}
                                                        sx={{ width: 80, height: 80 }}
                                                    />
                                                </ListItemAvatar>
                                                <Box sx={{ marginLeft: 2 }}>
                                                    <Typography variant="body1" fontWeight="bold">
                                                        {item.title}
                                                    </Typography>
                                                   
                                                </Box>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 2,
                                                }}
                                            >
                                                {/* Minus Button Styled Red */}
                                                <IconButton
                                                    sx={{
                                                        color: "red",
                                                        "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.1)" },
                                                    }}
                                                    onClick={() => decrementQuantity(item.id)}
                                                >
                                                    <RemoveIcon />
                                                </IconButton>

                                                <Typography variant="body1">
                                                    {item.quantity}
                                                </Typography>

                                                {/* Plus Button Styled Green */}
                                                <IconButton
                                                    sx={{
                                                        color: "green",
                                                        "&:hover": { backgroundColor: "rgba(0, 255, 0, 0.1)" },
                                                    }}
                                                    onClick={() => incrementQuantity(item.id)}
                                                >
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>

                                            {/* Price Styled in Button's Blue Color */}
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                sx={{ color: "primary.main" }}
                                            >
                                                €{(item.price * item.quantity).toFixed(2)}
                                            </Typography>

                                            {/* Delete Button with Black Color */}
                                            <IconButton
                                                onClick={() => deleteItem(item.id)}
                                                sx={{
                                                    color: "black",
                                                    "&:hover": {
                                                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                                                    },
                                                }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItem>
                                        <Divider />
                                    </React.Fragment>
                                ))}
                            </List>
                            <Button
                                variant="outlined"
                                color="error"
                                fullWidth
                                onClick={clearCart}
                                sx={{ marginTop: 3 }}
                            >
                                Clear Cart
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                backgroundColor: "#f9f9f9",
                                borderRadius: "8px",
                                padding: 3,
                                boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Summary
                            </Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            <Typography variant="h5" sx={{ marginTop: 2, color: "primary.main" }}>
                                TOTAL: €{calculateTotal()}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#FF5500",
                                    color: "#fff",
                                    "&:hover": { backgroundColor: "#e04e00" },
                                    marginTop: 3,
                                }}
                                fullWidth
                                onClick={handleDownload}
                            >
                                Download Shopping List
                            </Button>
                            {thankYouMessage && (
                                <Typography
                                    variant="body1"
                                    color="success.main"
                                    sx={{ marginTop: 2, textAlign: "center" }}
                                >
                                    Thank you for your purchase! The shopping list has been downloaded.
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            ) : (
                <Typography variant="body1" textAlign="center">
                    Your cart is empty.
                </Typography>
            )}
        </Box>
    );
};

export default ShoppingCartPage;
