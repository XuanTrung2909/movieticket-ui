import axios from "axios";
import Swal from "sweetalert2";
import {
  ACCESSTOKEN,
  FETCH_INFO_ACCOUNT,
  HIDE_LOADING,
  SHOW_LOADING,
} from "../../Ulti/setting";

export const postInfoAccount = (user) => {
  return async (dispatch) => {
    dispatch({
      type: SHOW_LOADING,
    });
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
      dispatch({
        type: HIDE_LOADING
      })
      
    } catch (error) {
      dispatch({
        type: HIDE_LOADING
      })
      Swal.fire({
        icon: 'error',
        title: 'Oosp!!!',
        text: `${error.response?.data}`,
        showConfirmButton: false,
        timer: 3000
      })
    }
  };
};

export const putInfoAccount = (user) => {
  return async (dispatch) => {
    
    try {
      Swal.fire({
        icon: 'info',
        title: 'Waiting...!!!',
        text: 'Đang xử lý...!!!',
        showConfirmButton: false,
        allowOutsideClick: false
      })
      await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        method: "PUT",
        data: user,
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Yeah!!!',
        text: 'Thông tin đã được chỉnh sửa',
        showConfirmButton: false,
        timer: 3000
      })
      window.location.reload();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oosp!!!',
        text: `${error.response?.data}`,
        showConfirmButton: false,
        timer: 3000
      })
    }
  };
};
