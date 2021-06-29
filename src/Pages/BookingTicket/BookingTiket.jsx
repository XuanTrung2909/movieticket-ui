import { Grid, Divider, Avatar, Hidden, Chip } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getRoomTicket,
  postBookingTicket,
} from "../../Redux/Actions/TicketAction";
import {
  ACCESSTOKEN,
  ADD_TICKET_BOOKING,
  DELETE_TICKET_BOOKING,
  RESET_ARR_TICKET_BOOKING,
  SHOW_LOADING,
  USER_LOGIN,
} from "./../../Ulti/setting";
import WeekendIcon from "@material-ui/icons/Weekend";
import {
  Container,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Button,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import { useAlert } from "react-alert";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import LoadingPage from "./../../Components/LoadingPage/LoadingPage";
import { Link } from "react-router-dom";
import axios from "axios";
import { Dialog } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function BookingTiket(props) {
  const alert = useAlert();
  const history = useHistory();
  const { roomTicket, arrTicketBooking, isBookTicket } = useSelector(
    (state) => state.TicketReducer
  );
  const { isLoading } = useSelector((state) => state.LoadReducer);
  const dispatch = useDispatch();
  const userName = JSON.parse(localStorage.getItem(USER_LOGIN));

  const { maLichChieu } = props.match.params;
  useEffect(() => {
    dispatch({
      type: SHOW_LOADING,
    });
    dispatch(getRoomTicket(maLichChieu));
  }, []);

  const tickets = {
    maLichChieu: maLichChieu,
    danhSaChVe: arrTicketBooking,
    taiKhoanNguoiDung: userName.taiKhoan,
  };

  useEffect(() => {
    dispatch(getRoomTicket(maLichChieu));
  }, [arrTicketBooking, isBookTicket]);

  if (!localStorage.getItem(ACCESSTOKEN)) {
    history.push("/");
  }

  const renderSeat = () => {
    let classSeat = "";
    return roomTicket.danhSachGhe?.map((seat, i) => {
      let index = arrTicketBooking?.findIndex((s) => s.maGhe === seat.maGhe);
      if (seat.daDat) {
        classSeat = "booked";
      } else if (seat.loaiGhe === "Thuong") {
        classSeat = "normal";
      } else {
        classSeat = "vip";
      }

      return (
        <Grid key={i} item xs={1}>
          {index !== -1 ? (
            <IconButton
              onClick={() => {
                handleChooseSeat(seat);
              }}
            >
              <WeekendIcon className="booking" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                handleChooseSeat(seat);
              }}
            >
              <WeekendIcon className={classSeat} />
            </IconButton>
          )}
        </Grid>
      );
    });
  };

  const handleChooseSeat = (seat) => {
    const index = arrTicketBooking?.findIndex((s) => s.maGhe === seat.maGhe);
    if (index >= 0) {
      dispatch({
        type: DELETE_TICKET_BOOKING,
        i: index,
      });
    } else if (seat.daDat) {
      alert.show(`Ghế số ${seat.tenGhe} này đã có được đặt`);
    } else if (arrTicketBooking?.length >= 5) {
      alert.show("Chỉ được đặt tối đa 5 vé xem phim");
    } else {
      dispatch({
        type: ADD_TICKET_BOOKING,
        seat: seat,
      });
    }
  };
  const renderTableTicket = () => {
    return arrTicketBooking?.map((seat, i) => {
      return (
        <TableRow key={i}>
          <TableCell className="table_cell">Ghế: {seat.tenGhe}</TableCell>
          <TableCell className="table_cell" align="center">
            {seat.giaVe?.toLocaleString()}
          </TableCell>
          <TableCell align="right">
            <IconButton
              onClick={() => {
                handleChooseSeat(seat);
              }}
            >
              <ClearIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      );
    });
  };

  const handleClose = () => {
    dispatch({type: RESET_ARR_TICKET_BOOKING});
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="booking">
      <Grid container>
        <Grid item sm={8} xs={12} className="left">
          <Grid container className="header" justify="space-around">
            <Grid item>
              <Link to="/">
                <img
                  src="https://tix.vn/app/assets/img/icons/web-logo.png"
                  alt="logo"
                />
              </Link>
            </Grid>
            <Hidden xsDown>
              <p>Cụm Rạp: {roomTicket.thongTinPhim?.tenCumRap}</p>
              <span>Rạp: {roomTicket.thongTinPhim?.tenRap}</span>
            </Hidden>
          </Grid>
          <div className="room">
            <Container maxWidth="md" className="screen">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </Container>
            <div className="seat">
              <Container maxWidth="sm">
                <Grid container justify="center">
                  {renderSeat()}
                </Grid>
              </Container>
            </div>
            <Divider />
            <Container maxWidth="sm" className="note">
              <Grid container>
                <Grid item sm={3} xs={6}>
                  <WeekendIcon className="normal" />
                  <p>Thường</p>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <WeekendIcon className="vip" />
                  <p>VIP</p>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <WeekendIcon className="booked" />
                  <p>Đã đặt</p>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <WeekendIcon className="booking" />
                  <p>Đang đặt</p>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Grid>
        <Grid item sm={4} xs={12} className="right">
          <Hidden xsDown>
            <div className="signed">
              <Link
                className="link"
                to={`/thong-tin-tai-khoan/${userName.taiKhoan}`}
                className="chip"
              >
                <Chip
                  label={userName.taiKhoan}
                  avatar={
                    <Avatar src="https://i.pravatar.cc/150?u=trung.nx"></Avatar>
                  }
                ></Chip>
              </Link>
            </div>
          </Hidden>
          <Divider />
          <div className="info">
            <h2>{roomTicket.thongTinPhim?.tenPhim}</h2>
            <p>{roomTicket.thongTinPhim?.tenCumRap}</p>
            <p>
              {roomTicket.thongTinPhim?.ngayChieu} -{" "}
              {roomTicket.thongTinPhim?.gioChieu} -{" "}
              {roomTicket.thongTinPhim?.tenRap}
            </p>
          </div>
          <Divider />
          <div className="table_booking">
            <Table>
              <TableBody>{renderTableTicket()}</TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell className="table_cell">Tổng Tiền</TableCell>
                  <TableCell align="center" className="table_cell">
                    {arrTicketBooking
                      ?.reduce((sum, ticketBooking, i) => {
                        sum = sum + ticketBooking.giaVe;
                        return sum;
                      }, 0)
                      .toLocaleString()}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
          <div className="table_footer">
            <p>
              {" "}
              <ErrorOutlineIcon /> Vé đã mua không thể đổi hoặc hoàn tiền
            </p>
            <p>
              Mã vé sẽ được gửi qua tin nhắn ZMS(tin nhắn Zalo) và email đã nhập
            </p>
            <Button
              onClick={() => {
                dispatch(postBookingTicket(tickets));
              }}
            >
              Đặt Vé
            </Button>
          </div>
        </Grid>
      </Grid>
      <Dialog open={isBookTicket} onClose={handleClose} className='dialog_ticket'>
        <DialogTitle>
          <CheckCircleOutlineIcon />
        </DialogTitle>
        <DialogContent>
          <p>Đã đăng ký thành công</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
