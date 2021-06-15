import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../Redux/Actions/AuthAction";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";

import { Dialog } from "@material-ui/core";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from "react";
import { useEffect } from "react";

export default function Login(props) {
  const [open, setOpen] = useState(false);
 
  const { isLoadingPage, errorLoadData, userName } = useSelector(
    (state) => state.AuthReducer
  );


  const history = useHistory();
  const dispatch = useDispatch();

  const handleCloseAlert = () => {
    setOpen(false);
  }


  const showError = () => {
    if(errorLoadData !== null){
      setOpen(true);
    }
  }

  if(userName !== ''){
    history.goBack();
  }


  useEffect(() => {
    if(errorLoadData !== null){
      setOpen(true);
    }
  },[errorLoadData])

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Vui lòng nhập tài khoản"),
      matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
    }),
    onSubmit: (values) => {
      const action = postLogin(values);
      dispatch(action);
    },
  });

  return (
    <div className="login">
      <div className="login_main">
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="title">
            <Link className="link" to="/">
              <img
                src="https://tix.vn/app/assets/img/login/group@2x.png"
                alt="logo"
              />
            </Link>
            <h3>
              Đăng nhập để đượng nhiều ưu đãi, mua vé và bảo mật thông tin
            </h3>
          </div>

          <FormControl
            fullWidth
            margin="normal"
            variant="outlined"
            className="form_control"
          >
            <InputLabel className="input_label">Tài Khoản</InputLabel>
            <Input
              name="taiKhoan"
              className="input"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.taiKhoan}
            />
            {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
              <FormHelperText error className="form_error">
                {formik.errors.taiKhoan}
              </FormHelperText>
            ) : null}
          </FormControl>
          <FormControl
            fullWidth
            margin="normal"
            variant="outlined"
            className="form_control"
          >
            <InputLabel className="input_label">Mật Khẩu</InputLabel>
            <Input
              name="matKhau"
              type="password"
              className="input"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.matKhau}
            />
            {formik.errors.matKhau && formik.touched.matKhau ? (
              <FormHelperText error className="form_error">
                {formik.errors.matKhau}
              </FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Button size="large" type="submit" 
            onClick={showError}
            >
              Đăng Nhập
            </Button>
            <p>
              Nếu bạn chưa có tài khoản, hãy{" "}
              <Link to="/sign-up">đăng ký tài khoản tại đây</Link>
            </p>
          </FormControl>
        </form>
      </div>
      {isLoadingPage ? <LoadingPage /> : null}
      <Dialog
        open={open}
        onClose={handleCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Thông báo Lỗi</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {errorLoadData}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlert} color="primary">
            Tôi đã hiểu
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
