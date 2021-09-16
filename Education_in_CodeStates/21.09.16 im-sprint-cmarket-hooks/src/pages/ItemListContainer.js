import { useState } from 'react';
import React from 'react';
import Item from '../components/Item';
import { Modal } from '../components/Modal'

function ItemListContainer({ items, cartItems, handleCartItem, handleClick, clicked}) {
  // const [clicked, setClicked] = useState(false);

  // const handleClick = (bln) => {
  //   setClicked(bln);
  // }

  const handleButton = (event, id) => {

    let copyCart = cartItems.slice();
    let cartItemId = copyCart.map((el) => el.itemId);

    if(cartItemId.indexOf(id) > -1){

      copyCart = copyCart.map((el) => {
        if(el.itemId === id){
          return {itemId: id, quantity: el.quantity + 1};
        }
        else{
          return el;
        }
      })

    }
    else{
      copyCart = copyCart.concat({itemId: id, quantity: 1});
    }

    handleCartItem(copyCart);
    // console.log(clicked);
  }


  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
          {/* {clicked ? <Modal clicked={clicked} handleClick={handleClick}/> : null} */}
          {items.map((item, idx) => <Item item={item} key={idx} handleButton={handleButton} handleClick={handleClick}/>)}
      </div>
    </div>
  );
}

export default ItemListContainer;
