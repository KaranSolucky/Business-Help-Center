export const SET_LOGIN_INFO = "SET_LOGIN_INFO";

const initialState = {
  loginInfo: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_INFO:
      return {
        ...state,
        loginInfo: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
