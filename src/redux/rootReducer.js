import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import singleProductReducer from "./products/singleProductReducer";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
