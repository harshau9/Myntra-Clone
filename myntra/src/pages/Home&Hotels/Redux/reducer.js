import { FILTER_ROOMS, GET_ROOMS, SORT_ROOMS, ADD_PRODUCT, UPDATE_PRODUCT, PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR, REMOVE_PRODUCT } from "./actions";

const initState = {
  rooms: [],
  error: false,
  loading: false
};

export const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        loading: false,
        rooms: [...state.rooms, payload]
      }
    }
    case PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload || true
      }
    }
    case PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        rooms: payload
      }
    }
    case UPDATE_PRODUCT: {
      const updatedRooms = state.rooms.map((ele) => {
        if (ele.id === payload.id) {
          return {
            ...ele,
            ...payload
          }
        }
        return ele;
      })
      return {
        ...state,
        loading: false,
        rooms: updatedRooms
      }
    }

    case GET_ROOMS: {
      return {
        ...state,
        rooms: payload
      }
    }

    case REMOVE_PRODUCT: {
      let filteredRooms = state.rooms.filter(
        (ele) => ele.id !== payload
      )
      console.log(filteredRooms)
      return {
        ...state,
        loading: false,
        rooms: filteredRooms
      }
    }

    case FILTER_ROOMS: {
      return {
        ...state,
        rooms: payload
      }
    }

    case SORT_ROOMS: {
      return {
        ...state,
        rooms: payload
      }
    }
    default: {
      return state;
    }
  }
};
