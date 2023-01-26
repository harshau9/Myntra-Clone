import { dataLoading, dataSuccess, dataError } from "./actionType";

const initialState = {
  loading: false,
  userData: [],
  error: false,

  number: "",
  user: false,
  admin: false,
  needToSignup: false,
  isAuth: false,
  currentUserData: [],
  isAdminAuthenticated: false,
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case dataLoading: {
      return {
        ...state,
        loading: true,
      };
    }

    case dataSuccess: {
      return {
        ...state,
        loading: false,
        userData: payload,
        error: false,
      };
    }

    case dataError: {
      return {
        ...state,
        loading: false,
        userData: [],
        error: true,
      };
    }

    case "whoisHe": {
      let Admin = false;
      let User = false;
      let needToSignup = false;

      if (payload === "9572365331") {
        Admin = true;
      } else {
        const VerifyUser = state.userData.filter(
          (el) => el.PhoneNumber === payload
        );
        if (VerifyUser.length > 0) {
          User = true;
        } else {
          needToSignup = true;
          User = false;
        }
      }
      return {
        ...state,
        user: User,
        admin: Admin,
        needToSignup: needToSignup,
      };
    }

    case "Back": {
      return {
        ...state,
        user: false,
        admin: false,
        needToSignup: false,
      };
    }

    case "VerifedUser": {
      return {
        ...state,
        isAuth: true,
        currentUserData: payload,
      };
    }
    case "Verified Admin": {
      return {
        ...state,
        isAdminAuthenticated: true,
      };
    }
    case "logout": {
      return {
        ...state,
        loading: false,
        userData: [],
        error: false,
        user: false,
        admin: false,
        needToSignup: false,
        isAuth: false,
        currentUserData: [],
        isAdminAuthenticated: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default dataReducer;
