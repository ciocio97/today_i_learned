import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { initialState } from './assets/state';

function App() {

  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  const updateCartItems = (item) => {
    let ids = cartItems.map(el => el.itemId);
    let idx = ids.indexOf(item.itemId);
    if(idx > -1){
      cartItems[idx].quantity += 1;
      return setCartItems([...cartItems]);
    }
    else{
      item.quantity = 1;
      return setCartItems([...cartItems, item]);
    }
  }

  return (
    <Router>
      <Nav cartItems={cartItems}/>
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items} updateCartItems={updateCartItems}/>
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart cartItems={cartItems} items={items} setCartItems={setCartItems}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
