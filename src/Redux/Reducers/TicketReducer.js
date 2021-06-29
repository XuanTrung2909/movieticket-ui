import { ADD_TICKET_BOOKING, DELETE_TICKET_BOOKING, FETCH_ROOM_TICKET_SUCCESS, POST_TICKET_SUCCESS, RESET_ARR_TICKET_BOOKING } from "../../Ulti/setting";

const stateDefault = {
  roomTicket: {},
  arrTicketBooking: [],
  isBookTicket: false,
}

export const TicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case FETCH_ROOM_TICKET_SUCCESS:{
      state.roomTicket = action.roomTicket;
      return {...state};
    }
    case ADD_TICKET_BOOKING: {
      const arr = [...state.arrTicketBooking];
      if(arr.length > 4){
        return {...state};
      }
      arr.push(action.seat);
      state.arrTicketBooking = arr;
      return {...state};
    }
    case DELETE_TICKET_BOOKING: {
      const arr = [...state.arrTicketBooking];
      const index = action.i;
      arr.splice(index, 1);
      state.arrTicketBooking = arr;
      return {...state};
    }
    case RESET_ARR_TICKET_BOOKING: {
      state.arrTicketBooking = [];
      state.isBookTicket = false;
      return {...state};
    }
    case POST_TICKET_SUCCESS: {
      state.isBookTicket= true;
      return {...state};
    }
  
    default: return {...state};
  }
}