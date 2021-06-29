import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../Redux/Actions/MovieAction";
import {
  Container,
  Grid,
  Button,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import EventIcon from "@material-ui/icons/Event";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Rating } from "@material-ui/lab";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LoadingPage from "./../../Components/LoadingPage/LoadingPage";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { ACCESSTOKEN, OPEN_MODAL_PLAY_VIDEO, SHOW_LOADING } from "../../Ulti/setting";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

export default function MovieDetail(props) {
  const { movieDetail } = useSelector((state) => state.MovieReducer);
  const { isLoading } = useSelector((state) => state.LoadReducer);
  const dispatch = useDispatch();
  const maPhim = props.match.params.maPhim;
  useEffect(() => {
    dispatch({
      type: SHOW_LOADING
    })
    dispatch(getMovieDetail(maPhim));
  }, []);

  const handleScrollBooking = (idElement) => {
    return document.getElementById(idElement).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };


  const renderCinemaSystem = () => {
    return movieDetail.heThongRapChieu?.map((cinemaSystem, i) => {
      return (
        <Fragment key={i}>
          <Tab className="cinema_tab" selectedClassName="active">
            <img src={cinemaSystem.logo} alt={cinemaSystem.tenHeThongRap} />
          </Tab>
        </Fragment>
      );
    });
  };

  const renderShowTime = () => {
    return movieDetail.heThongRapChieu?.map((item, i) => {
      return (
        <TabPanel key={i} className="cinema_tabpanel">
          {item.cumRapChieu.map((rap, j) => {
            return (
              <Accordion key={j}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="title"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={2} sm={1}>
                      <img src={item.logo} alt={item.tenHeThongRap} />
                    </Grid>
                    <Grid item xs={10} sm={11}>
                      <h2>{rap.tenCumRap}</h2>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails className="content">
                  {rap.lichChieuPhim.map((lich, k) => {
                    return (
                      <Link
                        key={k}
                        to={
                          localStorage.getItem(ACCESSTOKEN)
                            ? `/dat-ve/${lich.maLichChieu}`
                            : "/dang-nhap"
                        }
                        className="link"
                      >
                        <Button>
                          <EventIcon />
                          {lich.ngayChieuGioChieu?.slice(0, 10)}
                        </Button>
                      </Link>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </TabPanel>
      );
    });
  };
  const renderInfo = () => {
    return (
      <Grid container>
        <Grid item sm={6} xs={12} className="left">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <p>Ngày Công Chiếu</p>
            </Grid>
            <Grid item xs={8}>
              <p>{movieDetail.ngayKhoiChieu}</p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <p>Đạo Diễn</p>
            </Grid>
            <Grid item xs={8}>
              <p>Đạo Diễn 1</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <p>Diễn Viên</p>
            </Grid>
            <Grid item xs={8}>
              <p>Diễn Viên 1, Diễn Viên 2, Diễn Viên 3</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <p>Thể Loại</p>
            </Grid>
            <Grid item xs={8}>
              <p>Hài, Khoa Học Viễn Tưởng</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <p>Định Dạng</p>
            </Grid>
            <Grid item xs={8}>
              <p>2D/Digital</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <p>Quốc Gia</p>
            </Grid>
            <Grid item xs={8}>
              <p>Việt Nam</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12} className="right">
          <h3>Nội Dung</h3>
          <p>{movieDetail.moTa}</p>
        </Grid>
      </Grid>
    );
  };
  const renderReview = () => {
    return (
      <div>
        <Button fullWidth>
          <Grid container justify="space-between">
            <Grid item>
              <p>
                <AccountCircleIcon /> Bạn nghĩ gì về phim này?
              </p>
            </Grid>
            <Grid item>
              <Rating name="disabled" value={5} disabled />
            </Grid>
          </Grid>
        </Button>
        <div className="reviewer">
          <Grid container justify="space-between" className="header">
            <div>
              <h3>XuanTrung</h3>
              <p>6 ngày trước</p>
            </div>
            <div>
              <Rating
                name="half-rating-read"
                value={2}
                precision={0.5}
                readOnly
              />
            </div>
          </Grid>
          <Divider />
          <div className="content">
            <p>
              Comment: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis, vero.
            </p>
          </div>
        </div>
        <div className="reviewer">
          <Grid container justify="space-between" className="header">
            <div>
              <h3>XuanTrung</h3>
              <p>6 ngày trước</p>
            </div>
            <div>
              <Rating
                name="half-rating-read"
                value={2}
                precision={0.5}
                readOnly
              />
            </div>
          </Grid>
          <Divider />
          <div className="content">
            <p>
              Comment: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis, vero.
            </p>
          </div>
        </div>
        <div className="reviewer">
          <Grid container justify="space-between" className="header">
            <div>
              <h3>XuanTrung</h3>
              <p>6 ngày trước</p>
            </div>
            <div>
              <Rating
                name="half-rating-read"
                value={2}
                precision={0.5}
                readOnly
              />
            </div>
          </Grid>
          <Divider />
          <div className="content">
            <p>
              Comment: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis, vero.
            </p>
          </div>
        </div>
        <div className="reviewer">
          <Grid container justify="space-between" className="header">
            <div>
              <h3>XuanTrung</h3>
              <p>6 ngày trước</p>
            </div>
            <div>
              <Rating
                name="half-rating-read"
                value={2}
                precision={0.5}
                readOnly
              />
            </div>
          </Grid>
          <Divider />
          <div className="content">
            <p>
              Comment: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis, vero.
            </p>
          </div>
        </div>
        <div className="reviewer">
          <Grid container justify="space-between" className="header">
            <div>
              <h3>XuanTrung</h3>
              <p>6 ngày trước</p>
            </div>
            <div>
              <Rating
                name="half-rating-read"
                value={2}
                precision={0.5}
                readOnly
              />
            </div>
          </Grid>
          <Divider />
          <div className="content">
            <p>
              Comment: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis, vero.
            </p>
          </div>
        </div>
      </div>
    );
  };

  if(isLoading){
    return <LoadingPage />;
  }

  return (
    <div className="movie_detail">
      <div
        className="top"
        style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
      >
        <div className="overlay"></div>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item sm={9} xs={12} className="infomation">
              <Grid container spacing={3}>
                <Grid item xs={4} sm={3} className="img">
                  <div className="overlay_img">
                    <PlayCircleOutlineIcon
                      onClick={() => {
                        dispatch({
                          type: OPEN_MODAL_PLAY_VIDEO,
                          linkTrailer: movieDetail.trailer?.slice(-11),
                        });
                      }}
                    />
                  </div>
                  <img src={movieDetail.hinhAnh} alt={movieDetail.tenPhim} />
                </Grid>
                <Grid item xs={8} sm={9}>
                  <p>{movieDetail.ngayKhoiChieu?.slice(0, 10)}</p>
                  <h1>{movieDetail.tenPhim}</h1>
                  <p>100 phút - 10 IMDb - 2D/Digital</p>
                  <Button
                    onClick={() => {
                      handleScrollBooking("bottom");
                    }}
                  >
                    Mua Vé
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={3} xs={12} className="rating">
              <CircularProgressbar
                value={movieDetail.danhGia * 10}
                text={movieDetail.danhGia}
                strokeWidth={8}
                className="circular"
              />

              <Rating
                name="half-rating-read"
                value={movieDetail.danhGia / 2}
                precision={0.5}
                readOnly
                className="rat"
              />
              <p>169 người đánh giá</p>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="bottom" id="bottom">
        <Container maxWidth="md">
          <Tabs className="tabs">
            <TabList className="tablist">
              <Tab className="tab" selectedClassName="active">
                Lịch Chiếu
              </Tab>
              <Tab className="tab" selectedClassName="active">
                Thông Tin
              </Tab>
              <Tab className="tab" selectedClassName="active">
                Đánh Giá
              </Tab>
            </TabList>
            <TabPanel className="showtime">
              <Tabs className="cinema_tabs">
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <TabList className="cinema_tablist">
                      {renderCinemaSystem()}
                    </TabList>
                  </Grid>
                  <Grid item xs={10}>
                    {renderShowTime()}
                  </Grid>
                </Grid>
              </Tabs>
            </TabPanel>
            <TabPanel className="info">{renderInfo()}</TabPanel>
            <TabPanel className="review">{renderReview()}</TabPanel>
          </Tabs>
        </Container>
      </div>
    </div>
  );
}
