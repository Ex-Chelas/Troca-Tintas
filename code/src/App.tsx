import React from 'react';
import './App.css';
import { CartProvider } from './provider/CartProvider';

function App() {
  return (
    <CartProvider>
      <div>Test App</div>
    </CartProvider>
  );
}

export default App;
