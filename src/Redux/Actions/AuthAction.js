import axios from "axios"

import { ACCESSTOKEN, FETCH_LOGIN_ERROR, FETCH_LOGIN_SUCCESS, FETCH_SIGN_UP_SUCCESS, HIDE_LOADING, SHOW_LOADING, USER_LOGIN } from "../../Ulti/setting"

export const postLogin = (userLogin) => {
  return async (dispatch) => {
    dispatch({
      type: SHOW_LOADING
    })
    try {
      const result = await axios({
          url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
          method: 'POST',
          data: userLogin
      });
  
      dispatch({
          type: FETCH_LOGIN_SUCCESS,
          userName: result.data.taiKhoan
      });

      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));

      localStorage.setItem(ACCESSTOKEN, JSON.stringify(result.data.accessToken))

      // setTimeout(localStorage.removeItem(USER_LOGIN), 1800000);
      // setTimeout(localStorage.removeItem(ACCESSTOKEN), 1800000);

      dispatch({type: HIDE_LOADING})
     

  } catch (error) {
      
      dispatch({
        type: FETCH_LOGIN_ERROR,
        errorLoadData: error.response.data
      })
      dispatch({type: HIDE_LOADING})
  }
}
}


export const postSignUp = (userSignUp) => {
  return async(dispatch) => {
    dispatch({
      type: SHOW_LOADING
    })
    try {
      await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
        method: 'POST',
        data: userSignUp
      });
      
      dispatch({type: HIDE_LOADING});
      dispatch({type: FETCH_SIGN_UP_SUCCESS});
    } catch (error) {
      dispatch({
        type: FETCH_LOGIN_ERROR,
        errorLoadData: error.response.data
      });
      dispatch({type: HIDE_LOADING})
    }
  }
}