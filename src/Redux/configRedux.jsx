import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import { AccountReducer } from "./Reducers/AccountReducer";
import { AuthReducer } from "./Reducers/AuthReducer";
import { CinemaReducer } from "./Reducers/CinemaReducer";
import { LoadReducer } from "./Reducers/LoadReducer";
import { ModalPlayVideoReducer } from "./Reducers/ModalPlayVideoReducer";
import { MovieReducer } from "./Reducers/MovieReducer";
import { TicketReducer } from "./Reducers/TicketReducer";

const rootReducer = combineReducers({
  AuthReducer: AuthReducer,
  MovieReducer: MovieReducer,
  LoadReducer: LoadReducer,
  CinemaReducer: CinemaReducer,
  TicketReducer: TicketReducer,
  AccountReducer: AccountReducer,
  ModalPlayVideoReducer: ModalPlayVideoReducer,
  
});

export const store= createStore(rootReducer, applyMiddleware(reduxThunk))