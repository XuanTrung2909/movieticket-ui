import axios from "axios"

import { FETCH_LOGIN_ERROR, FETCH_LOGIN_SUCCESS, REQUEST_LOADING, USER_LOGIN } from "../../Ulti/setting"

export const postLogin = (userLogin) => {
  return async (dispatch) => {
    dispatch({
      type: REQUEST_LOADING
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

      setTimeout(localStorage.setItem(USER_LOGIN, JSON.stringify(result.data)),30000);


     

  } catch (error) {
      
      dispatch({
        type: FETCH_LOGIN_ERROR,
        errorLoadData: error.response.data
      })
  }
}
}


export const postSignUp = (userSignUp) => {
  return async() => {
    
    try {
      await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
        method: 'POST',
        data: userSignUp
      })
    } catch (error) {
      console.log(error.response.data);
    }
  }
}