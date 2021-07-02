import axios from "axios"
import Swal from "sweetalert2"
import { FETCH_CINEMA, HIDE_LOADING } from "../../Ulti/setting"

export const getCinema = (idCinemaSystem) => {
  return async(dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
        method: "GET"
      })
      dispatch({
        type: FETCH_CINEMA,
        cinemaList: result.data
      })
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