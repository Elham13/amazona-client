import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILURE,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAILURE,
} from "./proudctTypes";
import axios from "axios";

const getAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_FETCH_REQUEST });

    try {
      const { data } = await axios.get("/products");
      dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_FETCH_FAILURE, payload: error.message });
    }
  };
};

const getSingleProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: SINGLE_PRODUCT_REQUEST });

    try {
      const { data } = await axios.get(`/products/${id}`);
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SINGLE_PRODUCT_FAILURE, payload: error.message });
    }
  };
};

export { getAllProducts, getSingleProduct };
