import { FETCH_CINEMA } from "../../Ulti/setting";

const stateDefault = {
  cinemaList:[],
}

export const CinemaReducer = (state = stateDefault, action) => {
  switch (action.type) {
    
    case FETCH_CINEMA: {
      state.cinemaList = action.cinemaList;
      return {...state};
    }
  
    default: return {...state};
  }
}