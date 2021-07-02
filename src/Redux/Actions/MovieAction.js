import axios from "axios";
import Swal from "sweetalert2";
import { FETCH_MOVIE_DETAIL_SUCCESS, GET_MOVIE_BY_GROUP, HIDE_LOADING } from "../../Ulti/setting";

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
