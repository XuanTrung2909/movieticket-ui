import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import { AuthReducer } from "./Reducers/AuthReducer";
import { MovieReducer } from "./Reducers/MovieReducer";

const rootReducer = combineReducers({
  AuthReducer: AuthReducer,
  MovieReducer: MovieReducer,
  
  
});

export const store= createStore(rootReducer, applyMiddleware(reduxThunk))