
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: number;
    brand: string;
}

const inks: Product[] = [
    {
        id: 1,
        title: "Black Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.5,
        brand: "Citadel",
    },
    {
        id: 2,
        title: "Blue Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.7,
        brand: "Citadel",
    },
    {
        id: 3,
        title: "Red Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.2,
        brand: "Citadel",
    },
    {
        id: 4,
        title: "Green Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.6,
        brand: "Citadel",
    },
    {
        id: 5,
        title: "Purple Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.0,
        brand: "Citadel",
    },
    {
        id: 6,
        title: "Orange Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.3,
        brand: "Vallejo",
    },
    {
        id: 7,
        title: "Yellow Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.8,
        brand: "Vallejo",
    },
    {
        id: 8,
        title: "Pink Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.4,
        brand: "Vallejo",
    },
];

const minis: Product[] = [
    {
        id: 11,
        title: "Black Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.5,
        brand: "Games Workshop",
    },
    {
        id: 12,
        title: "Blue Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.7,
        brand: "Games Workshop",
    },
    {
        id: 13,
        title: "Red Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.2,
        brand: "Games Workshop",
    },
    {
        id: 14,
        title: "Green Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.6,
        brand: "Games Workshop",
    },
    {
        id: 15,
        title: "Purple Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.0,
        brand: "Games Workshop",
    },
    {
        id: 16,
        title: "Orange Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.3,
        brand: "Games Workshop",
    },
    {
        id: 17,
        title: "Yellow Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.8,
        brand: "Games Workshop",
    },
    {
        id: 18,
        title: "Pink Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.4,
        brand: "Malifaux",
    },
];

// Combine the arrays
export const products: Product[] = [...inks, ...minis]; // Use spread operator
