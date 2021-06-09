import { GET_MOVIE_BY_GROUP } from "../../Ulti/setting";

const stateDefault = {
  movieList: [],

}

export const MovieReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_GROUP: {
      state.movieList = action.movieList;
      return {...state};
    }
  
    default:
      return {...state};
  }
}