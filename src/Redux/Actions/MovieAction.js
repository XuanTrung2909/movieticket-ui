import axios from "axios";
import { GET_MOVIE_BY_GROUP } from "../../Ulti/setting";

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
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
