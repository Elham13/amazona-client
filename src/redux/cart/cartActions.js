import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./cartTypes";
import axios from "axios";

const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/products/${id}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        qty,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};

const removeFromCart = (productId) => {
  return (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};

export { addToCart, removeFromCart };
