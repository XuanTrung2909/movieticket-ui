import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../Components/Carousel/Carousel';
import ShowMovie from '../../Components/ShowMovie/ShowMovie';
import {getMovieByGroup} from './../../Redux/Actions/MovieAction';
import LoadingPage from './../../Components/LoadingPage/LoadingPage';
import { getCinemaSystem } from '../../Redux/Actions/CinemaAction';
import CinemaList from '../../Components/CinemaList/CinemaList';
import { Hidden } from '@material-ui/core';

export default function Home() {

    const {movieList} = useSelector(state => state.MovieReducer);
    const {isLoading} = useSelector(state => state.LoadReducer);
    const {cinemaSystemList} = useSelector(state => state.CinemaReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Tix - Trang Chủ';
        dispatch(getMovieByGroup('GP01'));
    }, []);
    useEffect(() => {
        dispatch(getCinemaSystem());
    },[]);

    const movieListCarousel = movieList.filter((movieItem, index) => index < 3)
    return (
        <Fragment>
            <div className="carousel">
                <Carousel movieListCarousel = {movieListCarousel}/>
            </div>
            <div className="show_movie">
              <ShowMovie movieList={movieList} />
            </div>
            <div className="cinema">
              <CinemaList cinemaSystemList={cinemaSystemList} />
            </div>
            <div className="news">

            </div>
            <div className="ads">

            </div>
            <div className="footer">

            </div>

            {isLoading ? <LoadingPage /> : null }
            
        </Fragment>
    )
}
