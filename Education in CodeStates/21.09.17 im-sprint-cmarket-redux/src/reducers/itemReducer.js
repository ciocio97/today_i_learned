import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      let copyState1 = Object.assign({}, state);
      copyState1.cartItems = state.cartItems.concat(action.payload);
      return copyState1;
      // const addCartItem = {
      //   "items" : state.items,
      //   "cartItems" : state.cartItems.concat(action.payload),
      //   "notifications" : []
      // };
      // return addCartItem;
    case REMOVE_FROM_CART:
      //TODO
      let copyState2 = Object.assign({}, state);
      copyState2.cartItems = state.cartItems.filter((el) => el.itemId !== action.payload.itemId);
      return copyState2;
      // const removeCartItem = {
      //   "items" : state.items,
      //   "cartItems" : state.cartItems.filter((el) => el.itemId !== action.payload.itemId),
      //   "notifications" : []
      // }
      // return removeCartItem;
    case SET_QUANTITY:
      let copyState3 = Object.assign({}, state);
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      //TODO
      copyState3.cartItems[idx] = action.payload;
      return copyState3;
    default:
      return state;
  }
}

export default itemReducer;