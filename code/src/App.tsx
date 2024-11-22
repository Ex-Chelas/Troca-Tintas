import React from 'react';
import './App.css';
import { CartProvider } from './provider/CartProvider';

function App() {
  return (
    <CartProvider>
      <div>Troca Tintas</div>
    </CartProvider>
  );
}

export default App;
