import axios from "axios";
import Swal from "sweetalert2";
import { ACCESSTOKEN, FETCH_MOVIE_DETAIL_SUCCESS, GET_MOVIE_BY_GROUP, GET_MOVIE_LIST_BY_PAGE, HIDE_LOADING, SHOW_LOADING } from "../../Ulti/setting";

export const getMovieByGroup = (idGroup) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${idGroup}`,
        method: "GET",
      });
      dispatch({
        type: GET_MOVIE_BY_GROUP,
        movieList: result.data
      })
      dispatch({type: HIDE_LOADING})
    } catch (error) {
      dispatch({type: HIDE_LOADING})
      Swal.fire({
        icon: "error",
        title: 'Oosp!!!',
        text: `${error.response?.data}`,
        showConfirmButton: false,
        timer: 3000
      })
    }
  };
};
export const getMovieDetail = (maPhim) => {
  return async(dispatch) => {
    
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method:'GET'
      })
      dispatch({
        type: FETCH_MOVIE_DETAIL_SUCCESS,
        movieDetail: result.data
      });
      dispatch({
        type: HIDE_LOADING
      })
    } catch (error) {
      dispatch({
        type: HIDE_LOADING
      })
      Swal.fire({
        icon: "error",
        title: 'Oosp!!!',
        text: `${error.response?.data}`,
        showConfirmButton: false,
        timer: 3000
      })
    }
  }
}

export const getMovieListByPage = (page) => {
  return async(dispatch) => {
    dispatch({
      type: SHOW_LOADING
    })
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=10`,
        method: 'GET'
      })
      dispatch({
        type: GET_MOVIE_LIST_BY_PAGE,
        movieListByPage: result.data
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
        showConfirmButton: false,
        timer: 3000
      })
    }
  }
}

export const deleteMovie = (maPhim) => {
  return async(dispatch) => {
    try {
      Swal.fire({
        icon: 'info',
        title: 'Waiting...!!!',
        text: 'Đang xử lý ...!!!',
        showConfirmButton: false,
        timer: 3000,
        allowOutsideClick: false
      })
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
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
        title: 'Oops!!!',
        text: `${error.response?.data}`,
        showConfirmButton: false,
        timer: 3000
      })
    }
  }
}

export const addMovie = (formData) => {
  return async(dispatch) => {
    try {
      Swal.fire({
        icon: 'info',
        title: 'Waiting...!!!',
        text: 'Đang xử lý ...!!!',
        showConfirmButton: false,
        timer: 3000,
        allowOutsideClick: false
      })
      await axios({
        url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh`,
        method: 'POST',
        data: formData,
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN))
        }
      })
      Swal.fire({
        icon: 'success',
        title: 'Yeah !!!',
        text: `Thêm Phim Mới thành công`,
        showConfirmButton: false,
        timer: 3000
      })
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!!!',
        text: `${error.response?.data}`,
        showConfirmButton: false,
        timer: 3000
      })
    }
  }
}
export const editMovie = (formData) => {
  return async(dispatch) => {
    try {
      Swal.fire({
        icon: 'info',
        title: 'Waiting...!!!',
        text: 'Đang xử lý ...!!!',
        showConfirmButton: false,
        timer: 3000,
        allowOutsideClick: false
      })
      await axios({
        url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload`,
        method: 'POST',
        data: formData,
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN))
        }
      })
      Swal.fire({
        icon: 'success',
        title: 'Yeah !!!',
        text: `Chỉnh sửa thông tin thành công`,
        showConfirmButton: false,
        timer: 3000
      })
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!!!',
        text: `${error.response?.data}`,
        showConfirmButton: false,
        timer: 3000
      })
    }
  }
}