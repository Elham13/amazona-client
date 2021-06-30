import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_SIGNOUT,
} from "./userTypes";

import axios from "axios";

const signin = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });

    try {
      const { data } = await axios.post("/signin", { email, password });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAILURE, payload: error });
    }
  };
};

const signout = () => {
  return (dispatch) => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    dispatch({ type: USER_SIGNOUT });
  };
};

export { signin, signout };
