import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/cardContext";

Modal.setAppElement("#root"); // For accessibility

const ShoppingCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const openCheckout = () => {
    setIsCartOpen(false);
    navigate("/shopping-cart");
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
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - €{item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <Button variant="contained" color="primary" onClick={openCheckout} style={{ marginRight: "10px" }}>
          Check Out
        </Button>
        <Button variant="outlined" onClick={closeCart}>
          Close
        </Button>
      </Modal>
    </div>
  );
};

export default ShoppingCart;
