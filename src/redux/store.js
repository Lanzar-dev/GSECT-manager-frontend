import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
});

const middleware = [thunk];

const INITIAL_STATE = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
