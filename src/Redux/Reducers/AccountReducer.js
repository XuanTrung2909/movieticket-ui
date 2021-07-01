import { FETCH_INFO_ACCOUNT, PUT_ACCOUNT_SUCCESS, RESET_ALERT_ACCOUNT } from "../../Ulti/setting";

const stateDefault = {
  infoAccount: {},
  isAlertSuccess: false,
}

export const AccountReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case FETCH_INFO_ACCOUNT: {
      state.infoAccount = action.infoAccount;
      return {...state};
    }
    case RESET_ALERT_ACCOUNT: {
      state.isAlertSuccess = false;
      return {...state};
    }
    case PUT_ACCOUNT_SUCCESS: {
      state.isAlertSuccess = true;
      return {...state};
    }
  
    default: return {...state};
      
  }
}