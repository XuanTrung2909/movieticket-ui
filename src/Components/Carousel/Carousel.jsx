import React, { Fragment } from 'react';
import Slider from "react-slick";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useDispatch } from 'react-redux';
import {OPEN_MODAL_PLAY_VIDEO} from './../../Ulti/setting';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button } from '@material-ui/core';
import { useRef } from 'react';


export default function Carousel(props) {
  const {movieListCarousel} = props;
  const dispatch = useDispatch();
  const sliderCarousel = useRef();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  const handleNextCarousel = () => {
    sliderCarousel.current.slickNext();
  }
  const handlePrevCarousel = () => {
    sliderCarousel.current.slickPrev();
  }  
  
  const renderCarousel = () => {
    return movieListCarousel?.map((movieItem, index) => {
        return(
          <div key={index}>
            <div className='bg_img' style={{backgroundImage: `url(${movieItem.hinhAnh})`}}>
              <div className="overlay">
                <PlayCircleOutlineIcon onClick = {() => {
                  dispatch({
                    type: OPEN_MODAL_PLAY_VIDEO,
                    linkTrailer: movieItem.trailer.slice(-11)
                  })
                }} />
              </div>
            </div>
          </div>
        )
      
    })
  }
  return (
    <Fragment>
      <Slider {...settings} ref={sliderCarousel}>
        {renderCarousel()}    
      </Slider>
      <Button className='carousel_prev' onClick={handlePrevCarousel}>
        <ArrowBackIosIcon />
      </Button>
      <Button className='carousel_next' onClick={handleNextCarousel} >
        <ArrowForwardIosIcon />
      </Button>
    </Fragment>
  )
}
