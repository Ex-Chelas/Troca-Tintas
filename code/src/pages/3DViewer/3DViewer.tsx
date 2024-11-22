import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./D3Viewer.css";
import ModelViewer from "../../components/ModelViewer/ModelViewer";
import { Product, products } from "../../service/dbDump"; // Import dbDump for product data
import { CartContext } from "../../contexts/cardContext";

export default function D3ViewerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Use CartContext to add items to the cart

  // Get the colorScheme from the query parameters
  const searchParams = new URLSearchParams(location.search);
  const colorScheme = searchParams.get("color");

  // Function to search for a product by title in the dbDump
  const findProductByTitle = (title: string): Product | null => {
    return (
      products.find((product) => product.title.toLowerCase() === title.toLowerCase()) || null
    );
  };
  // Default products
  const blackLegion = findProductByTitle("Black Legion");
  const sunYellow = findProductByTitle("Sun Yellow");
  const givenColor = colorScheme
    ? findProductByTitle(colorScheme.replaceAll("-", " "))
    : null;
  const baalRed = findProductByTitle("Baal Red");

  // Ensure all required colors are found; fallback to Baal Red if givenColor is not found
  const modelColors: Product[] = [
    blackLegion || { id: 1, title: "Black Legion", price: 6.3, image: "", rating: 4.5, brand: "Citadel" },
    sunYellow || { id: 2, title: "Sun Yellow", price: 2.75, image: "", rating: 4.8, brand: "Vallejo" },
    givenColor || baalRed || { id: 3, title: "Baal Red", price: 6.3, image: "", rating: 4.2, brand: "Citadel" },
  ];

  // Validate the current color scheme
  const validatedColorScheme =
    modelColors.some((color) =>
      color.title.toLowerCase().replaceAll(" ", "-") === colorScheme
    )
      ? colorScheme
      : modelColors[2].title.toLowerCase().replaceAll(" ", "-"); // Default to Baal Red or the third color

  // Handle color click (navigate to swap the color)
  const handleColorClick = (color: string) => {
    navigate(`/d3viewer?color=${color}`);
  };

  // Handle add to cart
  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="d3-viewer-page">
      <h1 className="page-title">3D Model Viewer</h1>
      <p className="page-description">
        Explore and interact with the 3D model, with a customizable color scheme.
      </p>
      <ModelViewer colorScheme={validatedColorScheme} />

      {/* Color List */}
      <div className="color-list">
        <h3>Colors in this Model</h3>
        <ul>
          {modelColors.map((color, index) => (
            <li key={index} className="color-list-item">
              <div
                className="color-box"
                style={{ backgroundImage: `url(${color.image})` }}
                onClick={() =>
                  handleColorClick(color.title.toLowerCase().replace(" ", "-"))
                }
              ></div>
              <div className="color-info">
                <span className="color-name">{color.title}</span>
                <span className="color-brand">{color.brand}</span>
                <span className="color-price">${color.price.toFixed(2)}</span>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(color)}
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
