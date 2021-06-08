import axios from "axios"

import { FETCH_LOGIN, USER_LOGIN } from "../../Ulti/setting"

export const postLogin = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await axios({
          url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
          method: 'POST',
          data: userLogin
      });
  
      dispatch({
          type: FETCH_LOGIN,
          userName: result.data.taiKhoan
      });

      setTimeout(localStorage.setItem(USER_LOGIN, JSON.stringify(result.data)),30000);


      // alert('Đăng nhập thành công !');
      // history.push('/home')

  } catch (errors) {
      
      console.log('errors:',errors.response.data);
      //?: optional chaining
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