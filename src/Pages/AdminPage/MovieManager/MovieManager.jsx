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
import { Pagination } from "@material-ui/lab";
import { Cancel, Delete, Edit, Search } from "@material-ui/icons";
import { useFormik } from "formik";
import { deleteMovie, getMovieListByPage } from "../../../Redux/Actions/MovieAction";

export default function MovieManager() {

  const {movieListByPage} = useSelector(state => state.MovieReducer);

  const [openDialogCreate, setOpenDialogCreate] = useState(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMovieListByPage(page))
  },[page, movieListByPage])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleCloseDialogCreate = () => {
    setOpenDialogCreate(false);
  };
  const handleCloseDialogUpdate = () => {
    setOpenDialogUpdate(false);
  };

  const renderMovieList = () => {
      return movieListByPage.items?.map((movie, i) => {
        return (
          <TableRow key={i} className="table_body_row">
            <TableCell className="table_body_cell" align="left">
              {(page - 1) * 10 + i + 1}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {movie.tenPhim}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              <img src={movie.hinhAnh} alt= {movie.tenPhim} />
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {movie.moTa}
            </TableCell>
            <TableCell className="table_body_cell" align="left">
              {movie.ngayKhoiChieu?.slice(0,10)}
            </TableCell>
            <TableCell className="table_body_cell" align="center">
              <IconButton
                onClick={() => {
                  
                  setOpenDialogUpdate(true);
                }}
              >
                <Edit className="btn_edit" />
              </IconButton>
              <IconButton
                onClick={() => {
                  console.log(movie.maPhim);
                  dispatch(deleteMovie(movie.maPhim))
                }}
              >
                <Delete className="btn_delete" />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      });
    }

  const formikCreate = useFormik({
    initialValues: {
      
    },
    onSubmit: (values) => {
      
    },
  });
  const formikUpdate = useFormik({
    initialValues: {
      
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      
    },
  });
  

  return (
    <div className="movie_manager">
      <Container maxWidth="lg">
        <div className="top">
          <h1>Quản Lý Phim</h1>
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
                  Tên Phim
                </TableCell>
                <TableCell className="table_head_cell" align="left">
                  Hình Ảnh
                </TableCell>
                <TableCell className="table_head_cell" align="left">
                  Mô tả
                </TableCell>
                <TableCell className="table_head_cell" align="left">
                  Ngày Khởi Chiếu
                </TableCell>
                <TableCell className="table_head_cell" align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table_body">{renderMovieList()}</TableBody>
            
          </Table>
          <Pagination
              count={movieListByPage.totalPages}
              defaultPage={1}
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
      {/* <Dialog
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
      </Dialog> */}
    </div>
  )
}
