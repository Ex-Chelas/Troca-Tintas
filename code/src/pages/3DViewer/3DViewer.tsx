import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./D3Viewer.css";
import ModelViewer from "../../components/ModelViewer/ModelViewer";
import { Product, Colour, products } from "../../service/dbDump"; // Import types and data
import { CartContext } from "../../contexts/cardContext";

// Type guard to check if the item is a Colour
function isColour(item: Product | Colour): item is Colour {
  return (item as Colour).rgb !== undefined;
}

export default function D3ViewerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Get the colorScheme from the query parameters
  const searchParams = new URLSearchParams(location.search);
  const colorScheme = searchParams.get("color");

  // Find a product or color by title
  const findProductByTitle = (title: string): Product | Colour | null => {
    return (
      products.find((item) =>
        isColour(item)
          ? item.product.title.toLowerCase() === title.toLowerCase()
          : item.title.toLowerCase() === title.toLowerCase()
      ) || null
    );
  };

  // Default colors
  const blackLegion = findProductByTitle("Black Legion") as Colour | null;
  const sunYellow = findProductByTitle("Sun Yellow") as Colour | null;
  const givenColor = colorScheme
    ? findProductByTitle(colorScheme.replaceAll("-", " "))
    : null;
  const baalRed = findProductByTitle("Baal Red") as Colour | null;

  // Validate the given color or fallback to defaults
  const modelColors: (Product | Colour)[] = [
    blackLegion || { product: { id: 1, title: "Black Legion", price: 6.3, image: "", rating: 4.5, brand: "Citadel" }, rgb: "rgb(0,0,0)" },
    sunYellow || { product: { id: 2, title: "Sun Yellow", price: 2.75, image: "", rating: 4.8, brand: "Vallejo" }, rgb: "rgb(255,255,0)" },
    givenColor || baalRed || { product: { id: 3, title: "Baal Red", price: 6.3, image: "", rating: 4.2, brand: "Citadel" }, rgb: "rgb(255,0,0)" },
  ];

  // Handle navigation for color changes
  const handleColorClick = (color: string) => {
    if(color === "black-legion") return;
    if(color === "sun-yellow") return;
    navigate(`/3dViewer?color=${color}`);
  };

  // Handle add to cart
  const handleAddToCart = (item: Product | Colour) => {
    addToCart(isColour(item) ? item.product : item);
  };

  return (
    <div className="d3-viewer-page">
      <h1 className="page-title">3D Model Viewer</h1>
      <p className="page-description">
        Explore and interact with the 3D model, with a customizable color scheme.
      </p>
      <ModelViewer colorScheme={colorScheme || "baal-red"} />

      {/* Color List */}
      <div className="color-list">
        <h3>Colors in this Model</h3>
        <ul>
          {modelColors.map((item, index) => (
            <li key={index} className="color-list-item">
              <div
                className="color-box"
                style={{
                  backgroundImage: isColour(item)
                    ? `url(${item.product.image})`
                    : `url(${item.image})`,
                }}
                onClick={() =>
                  handleColorClick(
                    isColour(item)
                      ? item.product.title.toLowerCase().replaceAll(" ", "-")
                      : item.title.toLowerCase().replaceAll(" ", "-")
                  )
                }
              ></div>
              <div className="color-info">
                <span className="color-name">
                  {isColour(item) ? item.product.title : item.title}
                </span>
                <span className="color-brand">
                  {isColour(item) ? item.product.brand : item.brand}
                </span>
                <span className="color-price">
                  $
                  {isColour(item)
                    ? item.product.price.toFixed(2)
                    : item.price.toFixed(2)}
                </span>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
