import React, { useContext } from "react";
import { CartContext } from "../../contexts/cardContext";
import { Button, Box } from "@mui/material";

const ShoppingCartPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);

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

  const handleCheckout = () => {
    exportCart();
    clearCart();
    alert("Thank you for your purchase!");
  };

  return (
    <Box sx={{ padding: 4 }}>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.title} - €{item.price.toFixed(2)} - {item.brand || "N/A"}
                </li>
              ))}
            </ul>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleCheckout}>
              Export and Checkout
            </Button>
          </Box>
        </Box>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Box>
  );
};

export default ShoppingCartPage;
