import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { Reducer } from "./homeHotel/reducer";
import thunk from "redux-thunk";
import authReducer from "./Authentication/reducer";
import { signupReducer } from "./Authentication/Signup";
import dataReducer from "./UserData/reducer";
import loginReducer from "./Authentication/login";
const rootReducer = combineReducers({
  Reducer,
  authReducer,
  signupReducer,
  dataReducer,
  loginReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
