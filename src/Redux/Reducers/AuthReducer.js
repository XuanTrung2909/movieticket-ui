import { FETCH_LOGIN_ERROR, FETCH_LOGIN_SUCCESS, FETCH_SIGN_UP_SUCCESS, RESET_ERROR, USER_LOGIN } from "../../Ulti/setting";

let localUserName='';
if(localStorage.getItem(USER_LOGIN)){
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  localUserName = userLogin.taiKhoan;
}

const stateDefault = {
  userName: localUserName,
  errorLoadData: null,
  isSignUp: false
}

export const AuthReducer = (state = stateDefault, action) => {
  switch (action.type) {
    
    case FETCH_LOGIN_SUCCESS:{
      
      state.userName = action.userName;
      return {...state};
    }
    case FETCH_LOGIN_ERROR: {
      state.errorLoadData = action.errorLoadData;
      return {...state};
    }
    case RESET_ERROR: {
      state.errorLoadData = null;
      state.isSignUp = false;
      return {...state};
    }
    case FETCH_SIGN_UP_SUCCESS: {
      state.isSignUp = true;
      console.log(456);
      return {...state};
    }
  
    default: return {...state};
  }
}