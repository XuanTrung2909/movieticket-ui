import { FETCH_LOGIN, USER_LOGIN } from "../../Ulti/setting";

let localUserName='';
if(localStorage.getItem(USER_LOGIN)){
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  localUserName = userLogin.taiKhoan;
}

const stateDefault = {
  userName: localUserName,
}

export const AuthReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case FETCH_LOGIN:{
      
      state.userName = action.userName;
      return {...state};
    }
  
    default: return {...state}
  }
}