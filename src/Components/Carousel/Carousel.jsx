import React, { Fragment } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useDispatch } from 'react-redux';
import {OPEN_MODAL_PLAY_VIDEO} from './../../Ulti/setting';

export default function Carousel(props) {
  const {movieList} = props;
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  const renderCarousel = () => {
    return movieList.map((movieItem, index) => {
      if(index < 3){
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
      }
    })
  }
  return (
    <Fragment>
      <Slider {...settings}>
        {renderCarousel()}    
      </Slider>
    </Fragment>
  )
}
