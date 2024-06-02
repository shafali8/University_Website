import React, { useRef } from 'react'
import Video from '../edusity_assets/collage_vedio.mp4';
import './VideoPlayer.css'

function VideoPlayer({playState, setPlayState}) {
  const player = useRef(null);
  const closePlayer = (e) => {
    if(e.target === player.current) {
      setPlayState(false);
    }
  }
  return (
    <div>
       <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={Video} autoPlay muted controls></video>
    </div>
    </div>
  )
}

export default VideoPlayer

