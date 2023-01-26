const initialState = {
  number: "",
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "number": {
      return {
        ...state,
        number: payload,
      };
    }
    case "initialValue": {
      return {
        ...state,
        number: "",
      };
    }

    default: {
      return state;
    }
  }
};

export default loginReducer;
