import axios from "axios"
import { FETCH_CINEMA } from "../../Ulti/setting"

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
    } catch (error) {
      console.log(error.response.data);
    }
  }
}