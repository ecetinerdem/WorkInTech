import { Route } from 'react-router-dom';
import { data } from './data';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {
  ProductContextProvider,
  ProductContext,
} from './contexts/ProductContext';
import { CartContextProvider, CartContext } from './contexts/CartContext';
import { useContext } from 'react';

function App() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <div className="App">
          <Navigation />
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </ProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
