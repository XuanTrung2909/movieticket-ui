import React from "react";
import { CLOSE_MODAL_PLAY_VIDEO } from "../../Ulti/setting";

import ModalVideo from "react-modal-video";
import "./../../../node_modules/react-modal-video/scss/modal-video.scss";
import { useDispatch, useSelector } from "react-redux";


export default function Modal(props) {
  const { isModalPlayVideo, linkTrailer } = useSelector(
    (state) => state.ModalPlayVideoReducer
  );
  
  const dispatch = useDispatch();

  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isModalPlayVideo}
        videoId={linkTrailer}
        onClose={() => {
          dispatch({
            type: CLOSE_MODAL_PLAY_VIDEO,
          });
        }}
      />

      
    </div>
  );
}
