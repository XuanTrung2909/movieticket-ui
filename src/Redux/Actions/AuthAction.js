import axios from "axios";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

import {
  ACCESSTOKEN,
  FETCH_LOGIN_SUCCESS,
  HIDE_LOADING,
  SHOW_LOADING,
  USER_LOGIN,
} from "../../Ulti/setting";

export const postLogin = (userLogin) => {
  return async (dispatch) => {
    dispatch({type: SHOW_LOADING})
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: userLogin,
      });

      dispatch({
        type: FETCH_LOGIN_SUCCESS,
        userName: result.data.taiKhoan,
      });

      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));

      localStorage.setItem(
        ACCESSTOKEN,
        JSON.stringify(result.data.accessToken)
      );
      dispatch({
        type: HIDE_LOADING
      })
    } catch (error) {
      dispatch({
        type: HIDE_LOADING
      })
      Swal.fire({
        icon: "error",
        title: "Oops!!!",
        text: `${error.response?.data}`,
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };
};

export const postSignUp = (userSignUp) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        icon: "info",
        title: "Waiting...!!!",
        text: "Đang xử lý...!!!",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
        method: "POST",
        data: userSignUp,
      });

      Swal.fire({
        icon: "success",
        title: "Yeah !!!",
        text: "Đăng Ký Thành Công",
        showConfirmButton: false,
      });
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!!!",
        text: `${error.response?.data}`,
        showConfirmButton: false,
      });
    }
  };
};
