import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../../components/ItemCard";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { inks, minis, Product, Colour } from "../../service/dbDump";
import { CARD_GAP, CARD_WIDTH } from "../../service/constants";
import { CartContext, CartContextProps } from "../../contexts/cardContext";

// Type guard to differentiate between Colour and Product
function isColour(item: Product | Colour): item is Colour {
    return (item as Colour).rgb !== undefined;
}

// Combine inks and minis into a single array
const allItems: (Product | Colour)[] = [...inks, ...minis];

export default function Home() {
    const [padding, setPadding] = useState<number>(0);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { addToCart, cartItems } = useContext<CartContextProps>(CartContext);
    const navigate = useNavigate(); // Initialize navigation hook

    // Log current cart items whenever they change
    useEffect(() => {
        console.log("Current cart items:", cartItems);
    }, [cartItems]);

    // Calculate padding dynamically based on container size
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

    // Filter items based on search query
    const filteredItems: (Product | Colour)[] = allItems.filter((item) =>
        isColour(item)
            ? item.product.title.toLowerCase().includes(searchQuery.toLowerCase())
            : item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box sx={{ marginTop: 4, padding: 2,
            color:"white" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 4
                    
                }}
            >
                {/* Search bar */}
                <TextField
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    variant="outlined"
                    sx={{
                        width: `calc(${CARD_WIDTH}px * ${Math.floor((containerRef.current?.offsetWidth ?? 0) / (CARD_WIDTH + CARD_GAP)) || 1})`,
                        maxWidth: "100%",
                        backgroundColor: "white", // Ensure the background stays white
                        "& .MuiInputBase-input": {
                            color: "black", // Ensure text inside the input is black
                        },
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "white", // Ensure the input box background stays white
                            "& fieldset": {
                                borderColor: "gray", // Default border color
                            },
                            "&:hover fieldset": {
                                borderColor: "blue", // Border color on hover
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "blue", // Border color when focused
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

            </Box>
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
                {filteredItems.map((item) => {
                  const handleItemClick = () => {
                    if (!isColour(item) && item.title === "Master of Executions") {
                        navigate(`/3dviewer`);
                    }
                };
                    if (isColour(item)) {
                        // Render Colour item
                        return (
                            <Box
                                key={item.product.id}
                                sx={{
                                    flex: `1 1 ${CARD_WIDTH}px`,
                                    maxWidth: `${CARD_WIDTH}px`,
                                }}
                            >
                                <ItemCard
                                    title={item.product.title}
                                    price={item.product.price}
                                    image={item.product.image}
                                    rating={item.product.rating}
                                    brand={item.product.brand}
                                    color={item.rgb}
                                    onAddToCart={() => {
                                        addToCart(item.product);
                                        console.log(`Product ${item.product.id} added to cart`);
                                    }}
                                />
                            </Box>
                        );
                    } else {
                        // Render Product item
                        return (
                            <Box
                                key={item.id}
                                sx={{
                                    flex: `1 1 ${CARD_WIDTH}px`,
                                    maxWidth: `${CARD_WIDTH}px`,
                                }}
                            >
                                <div onClick={handleItemClick}>
                                    <ItemCard
                                        title={item.title}
                                        price={item.price}
                                        image={item.image}
                                        rating={item.rating}
                                        brand={item.brand}
                                        onAddToCart={() => {
                                            addToCart(item);
                                            console.log(`Product ${item.id} added to cart`);
                                        }}
                                    />
                                </div>
                            </Box>
                        );
                    }
                })}
            </Box>
        </Box>
    );
}
