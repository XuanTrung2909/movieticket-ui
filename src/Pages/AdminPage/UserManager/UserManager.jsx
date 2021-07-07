import React from "react";
import {
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {
  addAccount,
  deleteAccount,
  editAccount,
  getAccountListByPage,
  searchAccount,
} from "../../../Redux/Actions/AccountAction";
import { Pagination } from "@material-ui/lab";
import { Cancel, Delete, Edit, Search } from "@material-ui/icons";
import { useFormik } from "formik";
import { RESET_ACCOUNT_SEARCH } from "../../../Ulti/setting";

export default function UserManager() {
  const { accountListByPage, accountSearch } = useSelector(
    (state) => state.AccountReducer
  );
  const [openDialogCreate, setOpenDialogCreate] = useState(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [userEdit, setUserEdit] = useState({});

  useEffect(() => {
    dispatch(getAccountListByPage(page));
  }, [accountListByPage, page, accountSearch]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleCloseDialogCreate = () => {
    setOpenDialogCreate(false);
  };
  const handleCloseDialogUpdate = () => {
    setOpenDialogUpdate(false);
  };

  const renderAccountList = () => {
    if (accountSearch.items?.length > 0) {
      return accountSearch.items?.map((account, i) => {
        return (
          <TableRow key={i} className="table_body_row">
            <TableCell className="table_body_cell" align="left">
              {(page - 1) * 10 + i + 1}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {account.taiKhoan}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {account.hoTen}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {account.email}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {account.soDt}
            </TableCell>
            <TableCell className="table_body_cell" align="center">
              <IconButton
                onClick={() => {
                  setUserEdit(account);
                  setOpenDialogUpdate(true);
                }}
              >
                <Edit className="btn_edit" />
              </IconButton>
              <IconButton
                onClick={() => {
                  dispatch(deleteAccount(account.taiKhoan));
                }}
              >
                <Delete className="btn_delete" />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      });
    } else {
      return accountListByPage.items?.map((account, i) => {
        return (
          <TableRow key={i} className="table_body_row">
            <TableCell className="table_body_cell" align="left">
              {(page - 1) * 10 + i + 1}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {account.taiKhoan}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {account.hoTen}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {account.email}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {account.soDt}
            </TableCell>
            <TableCell className="table_body_cell" align="center">
              <IconButton
                onClick={() => {
                  setUserEdit(account);
                  setOpenDialogUpdate(true);
                }}
              >
                <Edit className="btn_edit" />
              </IconButton>
              <IconButton
                onClick={() => {
                  dispatch(deleteAccount(account.taiKhoan));
                }}
              >
                <Delete className="btn_delete" />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      });
    }
  };

  const formikCreate = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      dispatch(addAccount(values));
    },
  });
  const formikUpdate = useFormik({
    initialValues: {
      taiKhoan: userEdit.taiKhoan,
      matKhau: userEdit.matKhau,
      email: userEdit.email,
      soDt: userEdit.soDt,
      maNhom: "GP01",
      maLoaiNguoiDung: userEdit.maLoaiNguoiDung,
      hoTen: userEdit.hoTen,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(editAccount(values));
    },
  });
  const formikSearch = useFormik({
    initialValues: {
      tuKhoa: "",
    },
    onSubmit: (values) => {
      dispatch(searchAccount(values.tuKhoa, page));
    },
  });

  return (
    <div className="user_manager">
      <Container maxWidth="lg">
        <div className="top">
          <h1>Quản lý tài khoản</h1>
          <Divider />
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={() => {
                  setOpenDialogCreate(true);
                }}
              >
                Tạo Tài Khoản
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <form className="form" onSubmit={formikSearch.handleSubmit}>
                <FormControl fullWidth className='form_control'>
                  <InputLabel className='input_label'>Search</InputLabel>
                  <Input
                    placeholder="Nhập tài khoản"
                    onChange={formikSearch.handleChange}
                    onBlur={formikSearch.handleBlur}
                    value={formikSearch.tuKhoa}
                    name="tuKhoa"
                    className='input'
                  />
                </FormControl>
                {accountSearch.items?.length > 0 ? <IconButton type='reset' onClick={() => {
                  dispatch({
                    type: RESET_ACCOUNT_SEARCH
                  })
                }}>
                  <Cancel />
                </IconButton> : null}
                <IconButton type='submit' className='icon_search'>
                  <Search />
                </IconButton>
              </form>
            </Grid>
          </Grid>
        </div>
        <div className="content">
          <Table className="table">
            <TableHead className="table_head">
              <TableRow className="table_head_row">
                <TableCell className="table_head_cell" align="left">
                  STT
                </TableCell>
                <TableCell className="table_head_cell" align="left">
                  Tài Khoản
                </TableCell>
                <TableCell className="table_head_cell" align="left">
                  Họ Tên
                </TableCell>
                <TableCell className="table_head_cell" align="left">
                  Email
                </TableCell>
                <TableCell className="table_head_cell" align="left">
                  Số điện thoại
                </TableCell>
                <TableCell className="table_head_cell" align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table_body">{renderAccountList()}</TableBody>
            
          </Table>
          <Pagination
              count={accountSearch.items?.length > 0 ? accountSearch?.totalPages : accountListByPage?.totalPages }
              // defaultPage={page}
              page={page}
              onChange={handleChangePage}
              className="pagination"
            />
          
        </div>
      </Container>
      <Dialog
        open={openDialogCreate}
        onClose={handleCloseDialogCreate}
        className="dialog"
      >
        <DialogTitle className="dialog_title">Tạo Mới Tài Khoản</DialogTitle>
        <Divider />
        <DialogContent className="dialog_content">
          <form className="form" onSubmit={formikCreate.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Tài Khoản</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreate.handleChange}
                    onBlur={formikCreate.handleBlur}
                    value={formikCreate.taiKhoan}
                    name="taiKhoan"
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth className="form_control">
                  <InputLabel className="input_label">Họ Tên</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreate.handleChange}
                    onBlur={formikCreate.handleBlur}
                    value={formikCreate.hoTen}
                    name="hoTen"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Mật Khẩu</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreate.handleChange}
                    onBlur={formikCreate.handleBlur}
                    value={formikCreate.matKhau}
                    type="password"
                    name="matKhau"
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth className="form_control">
                  <InputLabel className="input_label">Số Điện Thoại</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreate.handleChange}
                    onBlur={formikCreate.handleBlur}
                    value={formikCreate.soDt}
                    name="soDt"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Email</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreate.handleChange}
                    onBlur={formikCreate.handleBlur}
                    value={formikCreate.email}
                    type="email"
                    name="email"
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth className="form_control" required>
                  <InputLabel className="input_label">
                    Mã Loại Người Dùng
                  </InputLabel>
                  <Select
                    name="maLoaiNguoiDung"
                    onChange={formikCreate.handleChange}
                    onBlur={formikCreate.handleBlur}
                    value={formikCreate.maLoaiNguoiDung}
                    defaultValue=""
                    className="input_select"
                  >
                    <MenuItem value="KhachHang">Khách Hàng</MenuItem>
                    <MenuItem value="QuanTri">Quản Trị</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth className="form_control">
              <Button type="submit" onClick={handleCloseDialogCreate}>
                Tạo Tài Khoản
              </Button>
            </FormControl>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openDialogUpdate}
        onClose={handleCloseDialogUpdate}
        className="dialog"
      >
        <DialogTitle className="dialog_title">Chỉnh Sửa Thông Tin</DialogTitle>
        <Divider />
        <DialogContent className="dialog_content">
          <form className="form" onSubmit={formikUpdate.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl
                  fullWidth
                  required
                  className="form_control"
                  disabled
                >
                  <InputLabel className="input_label">Tài Khoản</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdate.handleChange}
                    onBlur={formikUpdate.handleBlur}
                    value={formikUpdate.taiKhoan}
                    name="taiKhoan"
                    defaultValue={userEdit.taiKhoan}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth className="form_control">
                  <InputLabel className="input_label">Họ Tên</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdate.handleChange}
                    onBlur={formikUpdate.handleBlur}
                    value={formikUpdate.hoTen}
                    name="hoTen"
                    defaultValue={userEdit.hoTen}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Mật Khẩu</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdate.handleChange}
                    onBlur={formikUpdate.handleBlur}
                    value={formikUpdate.matKhau}
                    type="password"
                    name="matKhau"
                    defaultValue={userEdit.matKhau}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth className="form_control">
                  <InputLabel className="input_label">Số Điện Thoại</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdate.handleChange}
                    onBlur={formikUpdate.handleBlur}
                    value={formikUpdate.soDt}
                    name="soDt"
                    defaultValue={userEdit.soDt}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Email</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdate.handleChange}
                    onBlur={formikUpdate.handleBlur}
                    value={formikUpdate.email}
                    type="email"
                    name="email"
                    defaultValue={userEdit.email}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth className="form_control" required>
                  <InputLabel className="input_label">
                    Mã Loại Người Dùng
                  </InputLabel>
                  <Select
                    name="maLoaiNguoiDung"
                    onChange={formikUpdate.handleChange}
                    onBlur={formikUpdate.handleBlur}
                    value={formikUpdate.maLoaiNguoiDung}
                    defaultValue={userEdit.maLoaiNguoiDung}
                    className="input_select"
                  >
                    <MenuItem value="KhachHang">Khách Hàng</MenuItem>
                    <MenuItem value="QuanTri">Quản Trị</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth className="form_control">
              <Button type="submit" onClick={handleCloseDialogUpdate}>
                Thay Đổi Thông Tin
              </Button>
            </FormControl>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
