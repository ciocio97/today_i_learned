import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import {
  BrowserRouter as Router,  // BrowserRouter를 Router라는 이름으로 가져오기 (as)
  Switch,
  Route,
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';
import { Modal } from './components/Modal'

function App() {

  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);
  const [clicked, setClicked] = useState(false);

  const handleClick = (bln) => {
    setClicked(bln);
  }

  const handleCartItem = (cartItem) => {
    setCartItems(cartItem);
  }

  return (
    <Router>
      <Nav cartItems={cartItems}/>
      <Switch>
        <Route exact={true} path="/">
          {clicked ? <Modal clicked={clicked} handleClick={handleClick}/> : null}
          <ItemListContainer cartItems={cartItems} items={items} handleCartItem={handleCartItem} handleClick={handleClick} clicked={clicked}/>
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart cartItems={cartItems} items={items} handleCartItem={handleCartItem}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
