import axios from "axios"
import { ACCESSTOKEN, FETCH_ROOM_TICKET_SUCCESS, HIDE_LOADING, POST_TICKET_SUCCESS, RESET_ARR_TICKET_BOOKING, SHOW_LOADING } from "../../Ulti/setting"


export const getRoomTicket = (maLichChieu) => {
  return async(dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: 'GET'
      })
      dispatch({
        type: FETCH_ROOM_TICKET_SUCCESS,
        roomTicket: result.data
      })
      dispatch({
        type: HIDE_LOADING
      })
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export const postBookingTicket = (tickets) => {
  
  return async(dispatch) => {
    dispatch({
      type: SHOW_LOADING
    })
    try {
      await axios({
        url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
        method: 'POST',
        data: tickets,
        headers: {
          Authorization: `Bearer ` + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
      }
      })
      dispatch({
        type: POST_TICKET_SUCCESS
      })
      dispatch({type: HIDE_LOADING})
    } catch (error) {
      console.log(error.response);
    }
  }
}

