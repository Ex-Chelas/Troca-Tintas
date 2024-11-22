import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './contexts/ThemeContext'; // Adjust the path as necessary
import CartProvider from './provider/CartProvider';
import AppRouter from './utils/Routers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <CartProvider>
                <AppRouter />
            </CartProvider>
        </ThemeContextProvider>
    </React.StrictMode>
);







