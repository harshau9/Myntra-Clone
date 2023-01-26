import { signupLoading, signupSuccess, signupError } from "./actionType";

const initialState = {
  signuploading: false,
  signupSuccess: false,
  signupError: false,
};

const authReducer = (state = initialState, { type }) => {
  switch (type) {
    case signupLoading: {
      return {
        ...state,
        signuploading: true,
        signupSuccess: false,
        signupError: false,
      };
    }
    case signupSuccess: {
      return {
        ...state,
        signuploading: false,
        signupSuccess: true,
        signupError: false,
      };
    }
    case signupError: {
      return {
        ...state,
        signuploading: false,
        signupSuccess: false,
        signupError: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
