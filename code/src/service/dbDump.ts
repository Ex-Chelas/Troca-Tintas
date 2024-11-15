
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: number;
}

const inks: Product[] = [
    {
        id: 1,
        title: "Black Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.5,
    },
    {
        id: 2,
        title: "Blue Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.7,
    },
    {
        id: 3,
        title: "Red Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.2,
    },
    {
        id: 4,
        title: "Green Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.6,
    },
    {
        id: 5,
        title: "Purple Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.0,
    },
    {
        id: 6,
        title: "Orange Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.3,
    },
    {
        id: 7,
        title: "Yellow Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.8,
    },
    {
        id: 8,
        title: "Pink Ink",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.4,
    },
];

const minis: Product[] = [
    {
        id: 1,
        title: "Black Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.5,
    },
    {
        id: 2,
        title: "Blue Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.7,
    },
    {
        id: 3,
        title: "Red Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.2,
    },
    {
        id: 4,
        title: "Green Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.6,
    },
    {
        id: 5,
        title: "Purple Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.0,
    },
    {
        id: 6,
        title: "Orange Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.3,
    },
    {
        id: 7,
        title: "Yellow Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.8,
    },
    {
        id: 8,
        title: "Pink Mini",
        price: 9.99,
        image: "https://via.placeholder.com/150",
        rating: 4.4,
    },
];

// Combine the arrays
export const products: Product[] = [...inks, ...minis]; // Use spread operator
