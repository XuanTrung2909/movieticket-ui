import React from "react";
import {
  Grid,
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  InputLabel,
  Input,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";

import ContactMailIcon from "@material-ui/icons/ContactMail";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { Divider } from "@material-ui/core";
import DnsIcon from "@material-ui/icons/Dns";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  postInfoAccount,
  putInfoAccount,
} from "../../Redux/Actions/AccountAction";
import { ACCESSTOKEN, SHOW_LOADING, USER_LOGIN } from "../../Ulti/setting";
import { Container } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Email, Lock, PhoneIphone, Settings } from "@material-ui/icons";
import { useFormik } from "formik";

export default function Profile() {
  const account = JSON.parse(localStorage.getItem(USER_LOGIN));
  const user = {
    taiKhoan: account?.taiKhoan,
  };
  const { infoAccount } = useSelector((state) => state.AccountReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  if (!localStorage.getItem(ACCESSTOKEN)) {
    history.push("/dang-nhap");
  }

  useEffect(() => {
    dispatch({
      type: SHOW_LOADING,
    });
    dispatch(postInfoAccount(user));
  }, []);

  const renderTicketList = () => {
    return infoAccount.thongTinDatVe?.map((ticket, i) => {
      return (
        <TableRow key={i} className="table_row">
          <TableCell className="table_cell">{i + 1}</TableCell>
          <TableCell className="table_cell">{ticket.tenPhim}</TableCell>
          <Hidden xsDown>
            <TableCell className="table_cell">{ticket.maVe}</TableCell>
            <TableCell className="table_cell">{ticket.thoiLuongPhim}</TableCell>
            <TableCell className="table_cell">{ticket.ngayDat}</TableCell>
          </Hidden>
          <TableCell className="table_cell">
            {ticket.danhSachGhe[0].tenHeThongRap}
          </TableCell>
          <TableCell className="table_cell">
            {ticket.danhSachGhe?.map((seat, j) => {
              return <p key={j}>{seat.tenGhe}</p>;
            })}
          </TableCell>
          <TableCell className="table_cell">{ticket.giaVe}</TableCell>
        </TableRow>
      );
    });
  };

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      hoTen: '',
      soDt: '',
      maNhom: 'GP01',
      maLoaiNguoiDung: 'KhachHang'
    },
    onSubmit: (values) => {
      console.log(values.taiKhoan);
    },
  });

  return (
    <div className="profile">
      <div className="content">
        <Tabs className="tabs">
          <Grid container>
            <Grid item sm={2} xs={8} className="left">
              <div className="account">
                <Avatar
                  src="https://i.pravatar.cc/150?u=trung.nx"
                  className="avatar"
                />
                <h3>{infoAccount.taiKhoan}</h3>
                <p>Khách hàng</p>
              </div>
              <TabList className="tablist">
                <h2>
                  <DnsIcon /> Thông Tin Chung
                </h2>
                <Divider />
                <Tab className="tab" selectedClassName="active">
                  <Button fullWidth>
                    <ContactMailIcon /> Thông Tin Cá Nhân
                  </Button>
                </Tab>

                <Tab className="tab" selectedClassName="active">
                  <Button fullWidth>
                    <ShoppingCartIcon /> Danh Sách Vé Đã Đặt
                  </Button>
                </Tab>
                <Tab className="tab" selectedClassName="active">
                  <Button fullWidth>
                    <Settings /> Chỉnh Sửa Thông Tin
                  </Button>
                </Tab>
              </TabList>
            </Grid>
            <Grid item sm={10} xs={12} className="right">
              <Container maxWidth="md">
                <TabPanel className="tabpanel_info">
                  <h1>Thông tin tài khoản</h1>
                  <Divider />
                  <Grid container alignItems="center">
                    <Grid item xs={2}>
                      <AccountBoxIcon />
                    </Grid>
                    <Grid item xs={10}>
                      <h3>Họ Tên: {infoAccount.hoTen}</h3>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container alignItems="center">
                    <Grid item xs={2}>
                      <AccountCircleIcon />
                    </Grid>
                    <Grid item xs={10}>
                      <h3>Tài Khoản: {infoAccount.taiKhoan}</h3>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container alignItems="center">
                    <Grid item xs={2}>
                      <Lock />
                    </Grid>
                    <Grid item xs={10}>
                      <h3>Mật Khẩu: .......</h3>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container alignItems="center">
                    <Grid item xs={2}>
                      <PhoneIphone />
                    </Grid>
                    <Grid item xs={10}>
                      <h3>Điện Thoại: {infoAccount.soDT}</h3>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container alignItems="center">
                    <Grid item xs={2}>
                      <Email />
                    </Grid>
                    <Grid item xs={10}>
                      <h3>Email: {infoAccount.email}</h3>
                    </Grid>
                  </Grid>
                  <Divider />
                </TabPanel>
              </Container>

              <TabPanel className="tabpanel_ticket">
                <Container maxWidth="lg">
                  <Table className="table">
                    <TableHead className="table_head">
                      <TableRow className="table_row">
                        <TableCell className="table_cell">STT</TableCell>
                        <TableCell className="table_cell">Tên Phim</TableCell>
                        <Hidden xsDown>
                          <TableCell className="table_cell">Mã Vé</TableCell>
                          <TableCell className="table_cell">
                            Thời Lượng
                          </TableCell>
                          <TableCell className="table_cell">Ngày đặt</TableCell>
                        </Hidden>
                        <TableCell className="table_cell">Rạp</TableCell>
                        <TableCell className="table_cell">Số Ghế</TableCell>
                        <TableCell className="table_cell">Giá Vé</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="table_body">
                      {renderTicketList()}
                    </TableBody>
                  </Table>
                </Container>
              </TabPanel>
              <Container maxWidth="md">
                <TabPanel className="tabpanel_modify">
                  <h1>Chỉnh sửa Thông Tin</h1>
                  <Divider />
                  <form className="form" onSubmit={formik.handleSubmit}>
                    <FormControl className="form_control" fullWidth disabled>
                      <InputLabel className="input_label">
                        {infoAccount.taiKhoan}
                      </InputLabel>
                      <Input className="input" />
                    </FormControl>
                    <FormControl className="form_control" fullWidth>
                      <InputLabel className="input_label">Mật Khẩu</InputLabel>
                      <Input
                        className="input"
                        type="password"
                        name="matKhau"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.matKhau}
                      />
                    </FormControl>
                    <FormControl className="form_control" fullWidth>
                      <InputLabel className="input_label">
                        Email
                      </InputLabel>
                      <Input
                        className="input"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        
                      />
                    </FormControl>
                    <FormControl className="form_control" fullWidth>
                      <InputLabel className="input_label">
                        Họ Tên
                      </InputLabel>
                      <Input
                        className="input"
                        name="hoTen"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hoTen}
                      />
                    </FormControl>
                    <FormControl className="form_control" fullWidth>
                      <InputLabel className="input_label">
                        Số Điện Thoại
                      </InputLabel>
                      <Input
                        className="input"
                        name="soDT"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.soDT}
                      />
                    </FormControl>
                    <FormControl fullWidth className='form_control'>
                      <Button type='submit'>Thay đổi</Button>
                    </FormControl>
                  </form>
                </TabPanel>
              </Container>
            </Grid>
          </Grid>
        </Tabs>
      </div>
    </div>
  );
}
