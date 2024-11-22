import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext, CartItem } from "../contexts/cardContext";
import DeleteIcon from "@mui/icons-material/Delete";

Modal.setAppElement("#root"); // For accessibility

const ShoppingCart: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const openCheckout = () => {
        setIsCartOpen(false);
        navigate("/shopping-cart");
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div>
            {/* Shopping Cart Button */}
            <Button
                color="inherit"
                onClick={openCart}
                style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
            >
                Shopping Cart ({cartItems.length})
            </Button>

            {/* Cart Modal */}
            <Modal
                isOpen={isCartOpen}
                onRequestClose={closeCart}
                contentLabel="Shopping Cart"
                style={{
                    content: {
                        maxWidth: "600px",
                        margin: "auto",
                        borderRadius: "10px",
                        backgroundColor: "#f0f0f0",
                        padding: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        border: "2px solid #ff6600",
                    },
                }}
            >
                <h2>Shopping Cart</h2>
                {cartItems.length > 0 ? (
                    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {cartItems.map((item: CartItem) => (
                                <li
                                    key={item.id}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "10px",
                                        borderBottom: "1px solid #ddd",
                                        paddingBottom: "10px",
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            objectFit: "cover",
                                            borderRadius: "5px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <p style={{ margin: 0, fontWeight: "bold" }}>{item.title}</p>
                                        {item.brand && <p style={{ margin: 0 }}>{item.brand}</p>}
                                        <p style={{ margin: 0 }}>€{item.price.toFixed(2)}</p>
                                    </div>
                                    <IconButton
                                        onClick={() => removeFromCart(item.id)}
                                        color="error"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </li>
                            ))}
                        </ul>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontWeight: "bold",
                                marginTop: "20px",
                            }}
                        >
                            <span>Total:</span>
                            <span>€{calculateTotal()}</span>
                        </div>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={clearCart}
                            style={{ marginTop: "10px" }}
                        >
                            Clear Cart
                        </Button>
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                <div style={{ marginTop: "20px", textAlign: "right" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={openCheckout}
                        style={{ marginRight: "10px" }}
                        disabled={cartItems.length === 0}
                    >
                        Check Out
                    </Button>
                    <Button variant="outlined" onClick={closeCart}>
                        Close
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default ShoppingCart;
