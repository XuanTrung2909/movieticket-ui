import axios from "axios"
import { FETCH_CINEMA, FETCH_CINEMA_SYSTEM } from "../../Ulti/setting"

export const getCinemaSystem = () => {
  return async(dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET"
      })
      dispatch({
        type: FETCH_CINEMA_SYSTEM,
        cinemaSystemList: result.data
      })
    } catch (error) {
      console.log(error.response.data);
    }
  }
}
export const getCinemaByIdCinemaSystem = (idCinemaSystem) => {
  return async(dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${idCinemaSystem}`,
        method: "GET"
      })
      dispatch({
        type: FETCH_CINEMA,
        cinemaList: result.data
      })
    } catch (error) {
      console.log(error.response.data);
    }
  }
}