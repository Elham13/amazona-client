import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILURE,
} from "./proudctTypes";

const initialState = {
  allProductsLoading: false,
  allProductsData: [],
  allProductsError: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        allProductsLoading: true,
      };
    case PRODUCT_FETCH_SUCCESS:
      return {
        allProductsLoading: false,
        allProductsData: action.payload,
        allProductsError: "",
      };
    case PRODUCT_FETCH_FAILURE:
      return {
        allProductsLoading: false,
        allProductsData: [],
        allProductsError: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
