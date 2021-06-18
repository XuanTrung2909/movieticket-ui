import React from "react";
import Slider from "react-slick";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { OPEN_MODAL_PLAY_VIDEO } from "./../../Ulti/setting";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef } from "react";
import { Rating } from "@material-ui/lab";

export default function MovieList(props) {
  const { movieList } = props;
  const dispatch = useDispatch();
  const showMovieRef = useRef();
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesPerRow: 4,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesPerRow: 2,
        },
      },
    ],
  };

  const handleShowMovieNext = () => {
    showMovieRef.current.slickNext();
  };
  const handleShowMoviePrev = () => {
    showMovieRef.current.slickPrev();
  };

  const renderMovieList = () => {
    return movieList.map((movieItem, index) => {
      return (
        <div className="movie_item" key={index}>
          <div
            className="item_img"
            style={{ backgroundImage: `url(${movieItem.hinhAnh})` }}
          >
            <div className="overlay">
              <PlayCircleOutlineIcon
                onClick={() => {
                  dispatch({
                    type: OPEN_MODAL_PLAY_VIDEO,
                    linkTrailer: movieItem.trailer.slice(-11),
                  });
                }}
              />
            </div>
            <div className="rating">
              <p>{movieItem.danhGia}</p>
              <Rating
                name="half-rating-read"
                defaultValue={movieItem.danhGia / 2}
                precision={0.5}
                readOnly
                size='small'
                className='rt'
              />
            </div>
          </div>
          <div className="item_content">
            <h2>{movieItem.tenPhim}</h2>
            <Link to={`/chi-tiet-phim/${movieItem.maPhim}`} className="link">
              <Button fullWidth>Xem Chi Tiết</Button>
            </Link>
          </div>
        </div>
      );
    });
  };
  return (
    <Fragment>
      <Slider {...settings} ref={showMovieRef}>
        {renderMovieList()}
      </Slider>
      <Button className="show_movie_prev" onClick={handleShowMoviePrev}>
        <ArrowBackIosOutlined />
      </Button>
      <Button className="show_movie_next" onClick={handleShowMovieNext}>
        <ArrowForwardIosOutlined />
      </Button>
    </Fragment>
  );
}
