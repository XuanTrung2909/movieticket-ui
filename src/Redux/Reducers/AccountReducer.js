import { FETCH_INFO_ACCOUNT, GET_ACCOUNT_LIST_BY_PAGE, RESET_ACCOUNT_SEARCH, SEARCH_ACCOUNT } from "../../Ulti/setting";

const stateDefault = {
  infoAccount: {},
  accountListByPage: {},
  accountSearch: {},
}

export const AccountReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case FETCH_INFO_ACCOUNT: {
      state.infoAccount = action.infoAccount;
      return {...state};
    }
    case GET_ACCOUNT_LIST_BY_PAGE: {
      state.accountListByPage = action.accountListByPage
      return {...state};
    }
    case SEARCH_ACCOUNT: {
      state.accountSearch = action.accountSearch;
      return {...state};
    }
    case RESET_ACCOUNT_SEARCH: {
      state.accountSearch = {};
      return {...state};
    }
  
    default: return {...state};
      
  }
}