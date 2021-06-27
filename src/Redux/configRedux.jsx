import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import { AuthReducer } from "./Reducers/AuthReducer";
import { CinemaReducer } from "./Reducers/CinemaReducer";
import { LoadReducer } from "./Reducers/LoadReducer";
import { MovieReducer } from "./Reducers/MovieReducer";
import { TicketReducer } from "./Reducers/TicketReducer";

const rootReducer = combineReducers({
  AuthReducer: AuthReducer,
  MovieReducer: MovieReducer,
  LoadReducer: LoadReducer,
  CinemaReducer: CinemaReducer,
  TicketReducer: TicketReducer,
});

export const store= createStore(rootReducer, applyMiddleware(reduxThunk))