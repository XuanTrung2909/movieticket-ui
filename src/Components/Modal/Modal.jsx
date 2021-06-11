import React from 'react';
import ModalVideo from 'react-modal-video'
import "./../../../node_modules/react-modal-video/scss/modal-video.scss";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL_PLAY_VIDEO } from '../../Ulti/setting';


export default function Modal(props) {
  const {isModalPlayVideo, linkTrailer} = useSelector(state => state.MovieReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isModalPlayVideo}
        videoId= {linkTrailer}
        onClose={() => {
          dispatch({
            type: CLOSE_MODAL_PLAY_VIDEO
          })
        }}
      />
    </div>
  )
}
