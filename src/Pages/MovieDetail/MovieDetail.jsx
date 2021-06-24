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
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Rating } from "@material-ui/lab";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LoadingPage from "./../../Components/LoadingPage/LoadingPage";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";

export default function MovieDetail(props) {
  const { movieDetail } = useSelector((state) => state.MovieReducer);
  const { isLoading } = useSelector((state) => state.LoadReducer);
  const dispatch = useDispatch();
  const maPhim = props.match.params.maPhim;
  useEffect(() => {
    dispatch(getMovieDetail(maPhim));
  }, []);

  console.log(movieDetail);

  const renderCinemaSystem = () => {
    return movieDetail.heThongRapChieu?.map((cinemaSystem, i) => {
      return (
        <Fragment key={i}>
          <Tab className="cinema_tab" selectedClassName='active'>
            <img src={cinemaSystem.logo} alt={cinemaSystem.tenHeThongRap} />
          </Tab>
        </Fragment>
      );
    });
  };

  const renderShowTime = () => {
    return movieDetail.heThongRapChieu?.map((item, i) => {
      return (
        <TabPanel key={i} className='cinema_tabpanel'>
          {item.cumRapChieu.map((rap, j) => {
            return <Accordion key={j}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className='title'
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
              <AccordionDetails className='content'>
                {rap.lichChieuPhim.map((lich, k) => {
                  return (
                    <p key = {k}>{lich.ngayChieuGioChieu}</p>
                  )
                })}
              </AccordionDetails>
            </Accordion>;
          })}
        </TabPanel>
      );
    });
  };

  return (
    <div className="movie_detail">
      <div
        className="top"
        style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
      >
        <div className="overlay"></div>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item sm={9} xs={12} className="infomation">
              <Grid container spacing={5}>
                <Grid item xs={4}>
                  <img src={movieDetail.hinhAnh} alt={movieDetail.tenPhim} />
                </Grid>
                <Grid item xs={8}>
                  <p>{movieDetail.ngayKhoiChieu}</p>
                  <h1>{movieDetail.tenPhim}</h1>
                  <p>100 phút - 10 IMDb - 2D/Digital</p>
                  <Button>Mua Vé</Button>
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
      <div className="bottom">
        <Container maxWidth="lg">
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
            <TabPanel>content 2</TabPanel>
            <TabPanel>content 3</TabPanel>
          </Tabs>
        </Container>
      </div>
      {isLoading ? <LoadingPage /> : null}
    </div>
  );
}
