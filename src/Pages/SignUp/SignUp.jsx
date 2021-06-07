import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useDispatch } from "react-redux";

export default function SignUp(props) {
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Vui lòng nhập tài khoản"),
      matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
      email: Yup.string().required("Vui lòng nhập Email"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="sign_up">
      <div className="sign_up_main">
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="title">
            <Link className="link" to="/">
              <img
                src="https://tix.vn/app/assets/img/login/group@2x.png"
                alt="logo"
              />
            </Link>
            <h3>Đăng ký để đượng nhiều ưu đãi, mua vé và bảo mật thông tin</h3>
          </div>
          <FormControl
            fullWidth
            margin="normal"
            variant="outlined"
            className="form_control"
          >
            <InputLabel className="input_label">Tài Khoản (*)</InputLabel>
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
            <InputLabel className="input_label">Mật Khẩu (*)</InputLabel>
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
          <FormControl
            fullWidth
            margin="normal"
            variant="outlined"
            className="form_control"
          >
            <InputLabel className="input_label">Email (*)</InputLabel>
            <Input
              name="email"
              type="email"
              className="input"
              fullWidth
              onChange={formik.handleChange}
              onBlur= {formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <FormHelperText error className="form_error">
                {formik.errors.email}
              </FormHelperText>
            ) : null}
          </FormControl>
          <FormControl
            fullWidth
            margin="normal"
            variant="outlined"
            className="form_control"
          >
            <InputLabel className="input_label">Họ Tên</InputLabel>
            <Input
              name="hoTen"
              type="text"
              className="input"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.hoTen}
            />
          </FormControl>
          <FormControl
            fullWidth
            margin="normal"
            variant="outlined"
            className="form_control"
          >
            <InputLabel className="input_label">Số Điện Thoại</InputLabel>
            <Input
              name="soDt"
              type="text"
              className="input"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.soDt}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Button size="large" type="submit">
              Đăng Nhập
            </Button>
            <p>
              Nếu bạn đã có tài khoản, hãy{" "}
              <Link to="/login">đăng nhập tài khoản tại đây</Link>
            </p>
          </FormControl>
        </form>
      </div>
    </div>
  );
}
