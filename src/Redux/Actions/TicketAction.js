import axios from "axios"
import { ACCESSTOKEN, FETCH_ROOM_TICKET_SUCCESS, HIDE_LOADING, POST_TICKET_SUCCESS, SHOW_LOADING } from "../../Ulti/setting"


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
  const accessToken = localStorage.getItem(ACCESSTOKEN)
  console.log(accessToken);
  return async(dispatch) => {
    console.log(accessToken);
    // try {
    //   await axios({
    //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
    //     method: 'POST',
    //     data: tickets,
    //     headers: {
    //       Authorization: `Bearer ` + accessToken
    //     }
    //   });
    //   alert('đặt vé thành công')
    //   // dispatch({type: HIDE_LOADING})
    // } catch (error) {
    //   console.log(error.response.data);
    // }
  }
}