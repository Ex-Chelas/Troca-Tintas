import React, { useEffect, useRef, useState, useContext } from "react";
import ItemCard from "../../components/ItemCard";
import { Box } from "@mui/material";
import { products } from "../../service/dbDump";
import { CARD_GAP, CARD_WIDTH } from "../../service/constants";
import { CartContext } from "../../contexts/cardContext";

export default function Home() {
  const [padding, setPadding] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { addToCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    console.log('Current cart items:', cartItems);
  }, [cartItems]);

  useEffect(() => {
    const calculatePadding = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalCardWidth = CARD_WIDTH + CARD_GAP;
        const cardsPerRow = Math.floor(containerWidth / totalCardWidth);
        const totalSpace = containerWidth - cardsPerRow * totalCardWidth + CARD_GAP;
        setPadding(totalSpace / 2);
      }
    };

    calculatePadding();
    window.addEventListener("resize", calculatePadding);

    return () => window.removeEventListener("resize", calculatePadding);
  }, []);

  return (
    <Box sx={{ marginTop: 4, padding: 2 }}>
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: `${CARD_GAP}px`,
          justifyContent: "center",
          paddingX: `${padding}px`,
        }}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            sx={{
              flex: `1 1 ${CARD_WIDTH}px`,
              maxWidth: `${CARD_WIDTH}px`,
            }}
          >
            <ItemCard
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
              brand={product.brand}
              onAddToCart={() => {
                addToCart(product);
                console.log(`Product ${product.id}, added to cart`);
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
