import {
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAILURE,
} from "./proudctTypes";

const initialState = {
  singleProductsLoading: false,
  singleProductsData: {},
  singleProductsError: "",
};

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        singleProductsLoading: true,
      };
    case SINGLE_PRODUCT_SUCCESS:
      return {
        singleProductsLoading: false,
        singleProductsData: action.payload,
        singleProductsError: "",
      };
    case SINGLE_PRODUCT_FAILURE:
      return {
        singleProductsLoading: false,
        singleProductsData: {},
        singleProductsError: action.payload,
      };
    default:
      return state;
  }
};

export default singleProductReducer;
