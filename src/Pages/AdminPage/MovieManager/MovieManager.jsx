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
  
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "@material-ui/lab";
import { Delete, Edit} from "@material-ui/icons";
import { useFormik } from "formik";
import {
  addMovie,
  deleteMovie,
  editMovie,
  getMovieListByPage,
} from "../../../Redux/Actions/MovieAction";
import moment from 'moment'

export default function MovieManager() {
  const { movieListByPage } = useSelector((state) => state.MovieReducer);
  const [openDialogCreate, setOpenDialogCreate] = useState(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
  let [movieEdit, setMovieEdit] = useState({});

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMovieListByPage(page));
  }, [page, movieListByPage]);
  useEffect(() => {
    document.title = 'Quản lý phim'
  },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleCloseDialogCreate = () => {
    setOpenDialogCreate(false);
  };
  const handleCloseDialogUpdate = () => {
    setOpenDialogUpdate(false);
  };
  const handleChangePoster = (event) => {
    formikCreateMovie.setFieldValue("hinhAnh", event.target.files[0]);
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
            <img src={movie.hinhAnh} alt={movie.tenPhim} />
          </TableCell>
          <TableCell className="table_body_cell" align="left">
            {movie.moTa}
          </TableCell>
          <TableCell className="table_body_cell" align="left">
            {moment(movie.ngayKhoiChieu?.slice(0, 10)).format("DD/MM/YYYY")}
          </TableCell>
          <TableCell className="table_body_cell" align="center">
            <IconButton
              onClick={() => {
                setMovieEdit(movie);
                setOpenDialogUpdate(true);
              }}
            >
              <Edit className="btn_edit" />
            </IconButton>
            <IconButton
              onClick={() => {
                console.log(movie.maPhim);
                dispatch(deleteMovie(movie.maPhim));
              }}
            >
              <Delete className="btn_delete" />
            </IconButton>
          </TableCell>
        </TableRow>
      );
    });
  };

  const formikCreateMovie = useFormik({
    initialValues: {
      tenPhim: "",
      biDanh: "",
      trailer: "",
      moTa: "",
      hinhAnh: {},
      ngayKhoiChieu: "",
      danhGia: 0,
      maNhom: "GP01",
      maPhim: 0,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      for (let key in values) {
        if (key === "hinhAnh") {
          formData.append("File", values.hinhAnh);
        } else if (key === "ngayKhoiChieu") {
          formData.append("ngayKhoiChieu", moment(values.ngayKhoiChieu).format('DD/MM/YYYY'));
        } else {
          formData.append(key, values[key]);
        }
      }
      dispatch(addMovie(formData));
      
    },
  });
  const formikUpdateMovie = useFormik({
    initialValues: {
      tenPhim: movieEdit.tenPhim,
      biDanh: movieEdit.biDanh,
      trailer: movieEdit.trailer,
      moTa: movieEdit.moTa,
      hinhAnh: movieEdit.hinhAnh,
      ngayKhoiChieu: movieEdit.ngayKhoiChieu,
      danhGia: movieEdit.danhGia,
      maNhom: "GP01",
      maPhim: movieEdit.maPhim,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = new FormData();
      for (let key in values) {
        if (key === "hinhAnh") {
          formData.append("File", values.hinhAnh);
        } else if (key === "ngayKhoiChieu") {
          formData.append("ngayKhoiChieu", moment(values.ngayKhoiChieu).format('DD/MM/YYYY'));
        } else {
          formData.append(key, values[key]);
        }
      }
      dispatch(editMovie(formData))
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
                Tạo Phim Mới
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
        <DialogTitle className="dialog_title">Tạo Mới Phim</DialogTitle>
        <Divider />
        <DialogContent className="dialog_content">
          <form className="form" onSubmit={formikCreateMovie.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Tên Phim</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreateMovie.handleChange}
                    onBlur={formikCreateMovie.handleBlur}
                    value={formikCreateMovie.tenPhim}
                    name="tenPhim"
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth className="form_control">
                  <InputLabel className="input_label">Bí Danh</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreateMovie.handleChange}
                    onBlur={formikCreateMovie.handleBlur}
                    value={formikCreateMovie.biDanh}
                    name="biDanh"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Trailer</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreateMovie.handleChange}
                    onBlur={formikCreateMovie.handleBlur}
                    value={formikCreateMovie.trailer}
                    name="trailer"
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth className="form_control" required>
                  <InputLabel className="input_label">Đánh Giá</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreateMovie.handleChange}
                    onBlur={formikCreateMovie.handleBlur}
                    value={formikCreateMovie.danhGia}
                    name="danhGia"
                    type="number"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Mô tả</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreateMovie.handleChange}
                    onBlur={formikCreateMovie.handleBlur}
                    value={formikCreateMovie.moTa}
                    name="moTa"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className="form_control" required>
                  {/* <InputLabel className="input_label">Hình Ảnh</InputLabel> */}
                  <Input
                    className="input"
                    onChange={handleChangePoster}
                    value={formikCreateMovie.hinhAnh}
                    name="hinhAnh"
                    type="file"
                  />
                  <img src="" alt="" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth className="form_control" required>
                <InputLabel className="input_label">Ngày Khởi Chiếu</InputLabel>
                  <Input
                    className="input"
                    onChange={formikCreateMovie.handleChange}
                    onBlur={formikCreateMovie.handleBlur}
                    value={formikCreateMovie.moTa}
                    name="ngayKhoiChieu"
                    type= 'date'
                    
                  />
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth className="form_control">
              <Button type="submit" onClick={handleCloseDialogCreate}>
                Tạo Phim Mới
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
          <form className="form" onSubmit={formikUpdateMovie.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Tên Phim</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdateMovie.handleChange}
                    onBlur={formikUpdateMovie.handleBlur}
                    value={formikUpdateMovie.tenPhim}
                    name="tenPhim"
                    defaultValue={movieEdit.tenPhim}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth className="form_control">
                  <InputLabel className="input_label">Bí Danh</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdateMovie.handleChange}
                    onBlur={formikUpdateMovie.handleBlur}
                    value={formikUpdateMovie.biDanh}
                    name="biDanh"
                    defaultValue={movieEdit.biDanh}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Trailer</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdateMovie.handleChange}
                    onBlur={formikUpdateMovie.handleBlur}
                    value={formikUpdateMovie.trailer}
                    name="trailer"
                    defaultValue={movieEdit.trailer}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth className="form_control" required>
                  <InputLabel className="input_label">Đánh Giá</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdateMovie.handleChange}
                    onBlur={formikUpdateMovie.handleBlur}
                    value={formikUpdateMovie.danhGia}
                    name="danhGia"
                    type="number"
                    defaultValue={movieEdit.danhGia}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth required className="form_control">
                  <InputLabel className="input_label">Mô tả</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdateMovie.handleChange}
                    onBlur={formikUpdateMovie.handleBlur}
                    value={formikUpdateMovie.moTa}
                    name="moTa"
                    defaultValue={movieEdit.moTa}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className="form_control">
                  {/* <InputLabel className="input_label">Hình Ảnh</InputLabel> */}
                  <img src={movieEdit.hinhAnh} alt={movieEdit.tenPhim} />
                  <Input
                    className="input"
                    onChange={formikUpdateMovie.handleChange}
                    onBlur={formikUpdateMovie.handleBlur}
                    value={formikUpdateMovie.hinhAnh}
                    name="hinhAnh"
                    type="file"
                  />
                  
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth className="form_control" required>
                  <InputLabel className="input_label">Ngày Khởi Chiếu</InputLabel>
                  <Input
                    className="input"
                    onChange={formikUpdateMovie.handleChange}
                    onBlur={formikUpdateMovie.handleBlur}
                    value={formikUpdateMovie.ngayKhoiChieu}
                    name="ngayKhoiChieu"
                    type="date"
                    defaultValue={movieEdit.ngayKhoiChieu?.slice(0, 10)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth className="form_control">
              <Button type="submit" onClick={handleCloseDialogUpdate}>
                Chỉnh Sửa thông tin
              </Button>
            </FormControl>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
