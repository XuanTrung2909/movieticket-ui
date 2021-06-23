import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetail } from '../../Redux/Actions/MovieAction';

export default function MovieDetail(props) {
  const {movieDetail} = useSelector(state => state.MovieReducer);
  const dispatch = useDispatch();
  const maPhim = props.match.params.maPhim;
  useEffect(() => {
    dispatch(getMovieDetail(maPhim));
  },[])
  console.log(movieDetail);
  return (
    <div className='movie_detail'>
      
    </div>
  )
}
