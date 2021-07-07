import {  FETCH_MOVIE_DETAIL_SUCCESS, GET_MOVIE_BY_GROUP, GET_MOVIE_LIST_BY_PAGE } from "../../Ulti/setting";

const stateDefault = {
  movieList: [],
  movieDetail: {},
  movieListByPage: {},

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
    case GET_MOVIE_LIST_BY_PAGE: {
      state.movieListByPage = action.movieListByPage;
      return {...state};
    }
    default:
      return {...state};
  }
}