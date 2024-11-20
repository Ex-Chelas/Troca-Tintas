import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional styling
import AppRouter from './utils/Routers';
import CartProvider from './provider/CartProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>  
      <AppRouter /> 
    </CartProvider>
  </React.StrictMode>
);
