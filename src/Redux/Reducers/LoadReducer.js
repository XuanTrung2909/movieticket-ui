
import { HIDE_LOADING, SHOW_LOADING } from "../../Ulti/setting";

const stateDefault = {
  isLoading: false
}
export const LoadReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SHOW_LOADING:{
      state.isLoading = true;
      return {...state};
    }
    case HIDE_LOADING: {
      state.isLoading = false;
      return {...state};
    }
      
  
    default: return {...state};
  }
}