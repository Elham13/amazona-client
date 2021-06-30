import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_SIGNOUT,
} from "./userTypes";

const initialState = {
  userLoading: false,
  userInfo: {},
  userError: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        userLoading: true,
      };
    case USER_SIGNIN_SUCCESS:
      return {
        userLoading: false,
        userInfo: action.payload,
        userError: "",
      };
    case USER_SIGNIN_FAILURE:
      return {
        userLoading: false,
        userInfo: {},
        userError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
