import axios from "axios"
import Swal from "sweetalert2"

import { ACCESSTOKEN, FETCH_ROOM_TICKET_SUCCESS, HIDE_LOADING, RESET_ARR_TICKET_BOOKING } from "../../Ulti/setting"


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
      dispatch({
        type: HIDE_LOADING
      })
      Swal.fire({
        icon: 'error',
        title:'Oops!!!',
        text: `${error.response?.data}`,
        showConfirmButton: false
      })
    }
  }
}

export const postBookingTicket = (tickets) => {
  
  return async(dispatch) => {
   
    try {
      Swal.fire({
        icon:'info',
        title: 'Waiting... !!!',
        text: 'Đang xử lý...!!!',
        showConfirmButton:false
      })
      await axios({
        url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
        method: 'POST',
        data: tickets,
        headers: {
          Authorization: `Bearer ` + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
      }
      })
      
      Swal.fire({
        icon:'success',
        title: 'Đặt vé Thành Công',
        showConfirmButton: false,
        timer: 3000
      })
      dispatch({type: RESET_ARR_TICKET_BOOKING})
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!!!',
        text: `${error.response?.data}`,
        timer: 3000
      })
      
    }
  }
}

