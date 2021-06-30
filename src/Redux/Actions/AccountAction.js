import axios from "axios";
import {
  ACCESSTOKEN,
  FETCH_INFO_ACCOUNT,
  HIDE_LOADING,
  SHOW_LOADING,
} from "../../Ulti/setting";

export const postInfoAccount = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        method: "POST",
        data: user,
      });
      dispatch({
        type: FETCH_INFO_ACCOUNT,
        infoAccount: result.data,
      });
      dispatch({ type: HIDE_LOADING });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const putInfoAccount = (user) => {
  return async (dispatch) => {
    dispatch({
      type: SHOW_LOADING
    })
    try {
      await axios({
        url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        method: "PUT",
        data: user,
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
        },
      });
      dispatch({type: HIDE_LOADING})
    } catch (error) {
      console.log(error.response);
    }
  };
};
