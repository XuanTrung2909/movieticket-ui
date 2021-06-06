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

      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));


      // alert('Đăng nhập thành công !');
      // history.push('/home')

  } catch (errors) {
      
      console.log('errors:',errors.response.data);
      //?: optional chaining
  }
}
}