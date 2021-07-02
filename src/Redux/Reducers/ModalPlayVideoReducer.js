import { CLOSE_MODAL_PLAY_VIDEO, OPEN_MODAL_PLAY_VIDEO } from "../../Ulti/setting";


const stateDefault = {
  isModalPlayVideo: false,
  linkTrailer: '',
}

export const ModalPlayVideoReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case CLOSE_MODAL_PLAY_VIDEO: {
      state.isModalPlayVideo =false;
      return {...state};
    }
    case OPEN_MODAL_PLAY_VIDEO: {
      state.linkTrailer = action.linkTrailer;
      state.isModalPlayVideo = true;
      return {...state};
    }
  
    default: return {...state};
  }
}