import React from "react";
import { Container, Divider, Grid } from "@material-ui/core";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={6} className="tix">
            <h2>TIX</h2>
            <Grid container spacing={1}>
              <Grid item sm={6} xs={12}>
                <p>FAQ</p>
                <p>Brand Guidelines</p>
              </Grid>
              <Grid item sm={6} xs={12}>
                <p>Thỏa thuận sử dụng</p>
                <p>Chính Sách bảo mật</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={3} className="partner">
            <h2>ĐỐI TÁC</h2>
            <Grid container spacing={1}>
              <Grid item sm={2} className="icon">
                <img src="https://i.ibb.co/qdFj9dC/cgv.png" alt="alt" />
              </Grid>
              <Grid item sm={2} className="icon">
                <img src="https://i.ibb.co/0Fr9MgB/bhd.png" alt="alt" />
              </Grid>
              <Grid item sm={2} className="icon">
                <img src="https://i.ibb.co/qDbGdBX/galaxycine.png" alt="alt" />
              </Grid>
              <Grid item sm={2} className="icon">
                <img src="https://i.ibb.co/cwmKXYS/cinestar.png" alt="alt" />
              </Grid>
              <Grid item sm={2} className="icon">
                <img src="https://i.ibb.co/hRDFsvL/lotte.png" alt="alt" />
              </Grid>
              <Grid item sm={2} className="icon">
                <img src="https://i.ibb.co/JzFt1TK/megags.png" alt="alt" />
              </Grid>
              <Grid item sm={2} className="icon">
                <img src="https://i.ibb.co/dmwqNLN/bt.jpg" alt="alt" />
              </Grid>
              <Grid item sm={2} className="icon">
                <img
                  src="https://i.ibb.co/M8bQP1D/dongdacinema.png"
                  alt="alt"
                />
              </Grid>
              <Grid item sm={2} className="icon">
                <img src="https://i.ibb.co/KDS2fJS/TOUCH.png" alt="alt" />
              </Grid>
              <Grid item sm={2} className="icon">
                <img src="https://i.ibb.co/mCFM7CQ/cnx.jpg" alt="alt" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={5} xs={6} className="app">
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <h2>MOBILE APP</h2>
                <img
                  src="https://tix.vn/app/assets/img/icons/apple-logo.png"
                  alt="alt"
                />
                <img
                  src="https://tix.vn/app/assets/img/icons/android-logo.png"
                  alt="alt"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <h2>SOCIAL</h2>
                <img
                  src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                  alt="alt"
                />
                <img
                  src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                  alt="alt"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2} className="info">
          <Grid item sm={2} xs={12}>
            <img
              src="https://tix.vn/app/assets/img/icons/zion-logo.jpg"
              alt="alt"
            />
          </Grid>
          <Grid item sm={7} xs={12}>
            <h2>TIX- SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h2>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: 01401659783,</p>
            <p>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở Kế
              Hoạch Và Đầu Tư Thành Phố Hồ Chí Minh cấp.
            </p>
            <p>Số điện thoại (Hotline): 1900 545 436</p>
            <p>
              Email: <span>support@tix.vn</span>
            </p>
          </Grid>
          <Grid item sm={3} xs={12}>
            <img
              src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
              alt="alt"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
