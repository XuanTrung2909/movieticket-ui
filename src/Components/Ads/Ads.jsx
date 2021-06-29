import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import Slider from "react-slick";

export default function Ads() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item sm={6} xs={12} className='ads_text'>
          <div className="content">
            <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
            <p>không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp, đổi quà hấp dẫn</p>
            <Button>
              App miễn phí - tải về ngay
            </Button>
            <p>TIX có hai phiên bản iOS và Android</p>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} className='ads_img'>
          <div className="slide">
            <Slider {...settings}>
              <div>
                <img src="https://tix.vn/app/assets/img/icons/slide/slide1.jpg" alt="alt" />
              </div>
              <div>
                <img src="https://tix.vn/app/assets/img/icons/slide/slide2.jpg" alt="alt" />
              </div>
              <div>
                <img src="https://tix.vn/app/assets/img/icons/slide/slide3.jpg" alt="alt" />
              </div>
              <div>
                <img src="https://tix.vn/app/assets/img/icons/slide/slide4.jpg" alt="alt" />
              </div>
              <div>
                <img src="https://tix.vn/app/assets/img/icons/slide/slide5.jpg" alt="alt" />
              </div>
              <div>
                <img src="https://tix.vn/app/assets/img/icons/slide/slide6.jpg" alt="alt" />
              </div>
              <div>
                <img src="https://tix.vn/app/assets/img/icons/slide/slide7.jpg" alt="alt" />
              </div>
              <div>
                <img src="https://tix.vn/app/assets/img/icons/slide/slide8.jpg" alt="alt" />
              </div>
            </Slider>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
