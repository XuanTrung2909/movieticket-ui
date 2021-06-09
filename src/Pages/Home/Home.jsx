import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../Components/Carousel/Carousel';
import {getMovieByGroup} from './../../Redux/Actions/MovieAction';

export default function Home(props) {

    const {movieList} = useSelector(state => state.MovieReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieByGroup('GP01'));
    }, [])

    
    return (
        <Fragment>
            <div className="carousel">
                <Carousel movieList = {movieList}/>
            </div>
            <div className="movie">

            </div>
            <div className="theatres">

            </div>
            <div className="news">

            </div>
            <div className="ads">

            </div>
            <div className="footer">

            </div>
        </Fragment>
    )
}
