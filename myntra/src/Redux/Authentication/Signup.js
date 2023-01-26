export const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  CartPageRoom: [],
  CartPageProduct: [],
};

export const signupReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case "firstName": {
      return {
        ...state,
        firstName: payload,
      };
    }
    case "lastName": {
      return {
        ...state,
        lastName: payload,
      };
    }
    case "email": {
      return {
        ...state,
        email: payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: payload,
      };
    }
    case "phoneNumber": {
      return {
        ...state,
        phoneNumber: payload,
      };
    }
    case "initialState": {
      return {
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        CartPageRoom: [],
        CartPageProduct: [],
      };
    }

    default: {
      return state;
    }
  }
};
