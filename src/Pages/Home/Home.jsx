import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../Components/Carousel/Carousel";
import ShowMovie from "../../Components/ShowMovie/ShowMovie";
import { getMovieByGroup } from "./../../Redux/Actions/MovieAction";
import LoadingPage from "./../../Components/LoadingPage/LoadingPage";
import { getCinema } from "../../Redux/Actions/CinemaAction";
import CinemaList from "../../Components/CinemaList/CinemaList";
import News from "../../Components/News/News";
import Ads from "../../Components/Ads/Ads";
import { SHOW_LOADING } from "../../Ulti/setting";



export default function Home() {
  const { movieList } = useSelector((state) => state.MovieReducer);
  const { isLoading } = useSelector((state) => state.LoadReducer);
  const { cinemaList } = useSelector(
    (state) => state.CinemaReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Trang Chủ";
    dispatch({
      type: SHOW_LOADING
    })
    dispatch(getMovieByGroup("GP01"));
    dispatch(getCinema());
  }, []);
  

  const movieListCarousel = movieList.filter((movieItem, index) => index < 3);

  if(isLoading) {
    return <LoadingPage />
  }
  return (
    <Fragment>
      <div className="carousel">
        <Carousel movieListCarousel={movieListCarousel} />
      </div>
      <div className="show_movie" id='show_movie'>
        <ShowMovie movieList={movieList} />
      </div>
      <div className="cinema" id='cinema'>
        <CinemaList
          cinemaList={cinemaList}
        />
      </div>
      <div className="news" id='news'>
        <News />
      </div>
      <div className="ads" id='ads'>
        <Ads />
      </div>
    </Fragment>
  );
}
