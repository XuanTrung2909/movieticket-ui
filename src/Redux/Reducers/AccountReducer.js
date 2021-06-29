import { FETCH_INFO_ACCOUNT } from "../../Ulti/setting";

const stateDefault = {
  infoAccount: {}
}

export const AccountReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case FETCH_INFO_ACCOUNT: {
      state.infoAccount = action.infoAccount;
      return {...state}
    }
  
    default:
      return {...state};
  }
}