import { FETCH_LOGIN_SUCCESS, RESET_IS_SIGNUP, USER_LOGIN } from "../../Ulti/setting";

let localUserName='';
if(localStorage.getItem(USER_LOGIN)){
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  localUserName = userLogin.taiKhoan;
}

const stateDefault = {
  userName: localUserName,
  isSignUp: false,
}

export const AuthReducer = (state = stateDefault, action) => {
  switch (action.type) {
    
    case FETCH_LOGIN_SUCCESS:{
      state.userName = action.userName;
      
      return {...state};
    }
    case RESET_IS_SIGNUP: {
      state.isSignUp = false;
      return {...state};
    }
  
    default: return {...state};
  }
}