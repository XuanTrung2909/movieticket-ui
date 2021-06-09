import React, { Fragment } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function Carousel(props) {
  const {movieList} = props;
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
                <PlayCircleOutlineIcon />
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
