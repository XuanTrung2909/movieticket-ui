import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import { AuthReducer } from "./Reducers/AuthReducer";

const rootReducer = combineReducers({
  AuthReducer: AuthReducer,
  
});

export const store= createStore(rootReducer, applyMiddleware(reduxThunk))