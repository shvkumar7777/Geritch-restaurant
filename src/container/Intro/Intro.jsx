import React, { useRef, useState } from 'react';
import { meal } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


import './Intro.css';

const Intro = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((previousPlayVideo) => !previousPlayVideo)
    
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }
  return (
    <div className='app__intro'>
      <video
        src={meal}
        ref={vidRef}
        controls={false}
        muted
        autoPlay={true}
        preLoad="auto"
        loop
      > something</video>
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
        {playVideo ?
          <BsPauseFill color='#fff' fontSize={30} /> :
          <BsFillPlayFill color='#fff' fontSize={30} />
         
          }
          </div>
      </div>
    </div>
  );  
};

export default Intro;
