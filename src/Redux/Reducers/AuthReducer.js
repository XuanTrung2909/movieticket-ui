import { FETCH_LOGIN_ERROR, FETCH_LOGIN_SUCCESS, REQUEST_LOADING, RESET_ERROR, USER_LOGIN } from "../../Ulti/setting";

let localUserName='';
if(localStorage.getItem(USER_LOGIN)){
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  localUserName = userLogin.taiKhoan;
}

const stateDefault = {
  userName: localUserName,
  isLoadingPage: false,
  errorLoadData: null,
}

export const AuthReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case REQUEST_LOADING:{
      return {...state, isLoadingPage: true}
    }
    case FETCH_LOGIN_SUCCESS:{
      
      state.userName = action.userName;
      state.isLoadingPage = false;
      return {...state};
    }
    case FETCH_LOGIN_ERROR: {
      state.errorLoadData = action.errorLoadData;
      state.isLoadingPage = false;
      return {...state};
    }
    case RESET_ERROR: {
      state.errorLoadData = null;
      return {...state};
    }
  
    default: return {...state};
  }
}