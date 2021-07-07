import axios from "axios";
import Swal from "sweetalert2";
import {
  ACCESSTOKEN,
  FETCH_INFO_ACCOUNT,
  GET_ACCOUNT_LIST_BY_PAGE,
  HIDE_LOADING,
  SEARCH_ACCOUNT,
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

export const getAccountListByPage = (page) => {
  
  return async(dispatch) => {
    dispatch({
      type: SHOW_LOADING
    })
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=10`,
        method: 'GET'
      })
      dispatch({
        type: GET_ACCOUNT_LIST_BY_PAGE,
        accountListByPage: result.data
      })
      dispatch({
        type: HIDE_LOADING
      })
    } catch (error) {
      dispatch({
        type: HIDE_LOADING
      })
      Swal.fire({
        icon: 'error',
        title: 'Oops!!!',
        text: `${error.response?.data}`,
        timer: 3000,
        showConfirmButton: false
      })
    }
  }
}

export const deleteAccount = (taiKhoan) => {
  return async(dispatch) => {
    try {
      Swal.fire({
        icon: 'info',
        title: 'Waiting...!!!',
        text: 'Đang xử lý...!!!',
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 3000
      })
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: 'DELETE',
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN))
        }
      })
      Swal.fire({
        icon: 'success',
        title: 'Yeah !!!',
        text: `${result.data}`,
        showConfirmButton: false,
        timer: 3000
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops !!!',
        text: `${error.response?.data}`,
        showConfirmButton: false,
        timer: 3000
      })
    }
  }
}

export const addAccount = (user) => {
  return async(dispatch) => {
    try {
      Swal.fire({
        icon: 'info',
        title: 'Waiting...!!!',
        text: 'Đang xử lý...!!!',
        showConfirmButton: false,
        timer: 3000,
        allowOutsideClick: false
      })
      await axios({
        url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
        method: 'POST',
        data: user,
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN))
        }
      })
      Swal.fire({
        icon: 'success',
        title: 'Yeah !!!',
        text: 'Thêm người dùng thành công',
        timer: 3000,
        showConfirmButton: false
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops !!!',
        text: `${error.response?.data}`,
        timer: 3000,
        showConfirmButton: false
      })
    }
  }
}


export const editAccount = (user) => {
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

export const searchAccount = (tuKhoa, page) => {
  return async(dispatch) => {
    try {
      const result = await axios ({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&soTrang=${page}&soPhanTuTrenTrang=10`,
        method: "GET",
      })
      
      dispatch({
        type: SEARCH_ACCOUNT,
        accountSearch: result.data
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops !!!',
        text: `${error.response?.data}`,
        timer: 3000,
        showConfirmButton: false
      })
    }
  }
}
