import { FETCH_CINEMA, FETCH_CINEMA_SYSTEM } from "../../Ulti/setting";

const stateDefault = {

  cinemaSystemList: [],
  cinemaList:[],

}

export const CinemaReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case FETCH_CINEMA_SYSTEM: {
      state.cinemaSystemList = action.cinemaSystemList;
      return {...state};
    }
    case FETCH_CINEMA: {
      state.cinemaList = action.cinemaList;
      return {...state};
    }
  
    default: return {...state};
  }
}