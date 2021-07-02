import {  FETCH_MOVIE_DETAIL_SUCCESS, GET_MOVIE_BY_GROUP } from "../../Ulti/setting";

const stateDefault = {
  movieList: [],
  movieDetail: {},
}

export const MovieReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_GROUP: {
      state.movieList = action.movieList;
      return {...state};
    }
    case FETCH_MOVIE_DETAIL_SUCCESS: {
      state.movieDetail = action.movieDetail
      return {...state};
    }
    default:
      return {...state};
  }
}