import { CLOSE_MODAL_PLAY_VIDEO, GET_MOVIE_BY_GROUP, OPEN_MODAL_PLAY_VIDEO } from "../../Ulti/setting";

const stateDefault = {
  movieList: [],
  isModalPlayVideo: false,
  linkTrailer: '',

}

export const MovieReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_GROUP: {
      state.movieList = action.movieList;
      return {...state};
    }
    case CLOSE_MODAL_PLAY_VIDEO: {
      state.isModalPlayVideo =false;
      return {...state};
    }
    case OPEN_MODAL_PLAY_VIDEO: {
      state.linkTrailer = action.linkTrailer;
      state.isModalPlayVideo = true;
      return {...state};
    }
  
    default:
      return {...state};
  }
}