import React, { useEffect, useState, useRef } from "react";
import ItemCard from "../../components/ItemCard";
import { Box } from "@mui/material";
import { products } from "../../service/dbDump";
import { CARD_WIDTH, CARD_GAP } from "../../service/constants";

export default function Home() {
    const [padding, setPadding] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculatePadding = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;

                // Calculate how many cards fit per row
                const totalCardWidth = CARD_WIDTH + CARD_GAP; // Card width plus gap
                const cardsPerRow = Math.floor(containerWidth / totalCardWidth);

                // Calculate remaining space to determine side padding
                const totalSpace = containerWidth - cardsPerRow * totalCardWidth + CARD_GAP;
                setPadding(totalSpace / 2);
            }
        };

        calculatePadding(); // Initial calculation
        window.addEventListener("resize", calculatePadding); // Recalculate on resize

        return () => window.removeEventListener("resize", calculatePadding); // Cleanup
    }, []);

    return (
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
                        onAddToCart={() => console.log(`Product ${product.id} added to cart`)}
                    />
                </Box>
            ))}
        </Box>
    );
}
