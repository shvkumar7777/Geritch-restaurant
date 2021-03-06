import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (current === 'left') {
      // console.log(current);
      current.scrollLeft -= 300;
    }else{
      console.log(current);
      current.scrollLeft += 300;
    }
  }
  return (
    <div className="app__gallery app__wrapper section__padding" id="gallery">
      <div className="app__wrapper_info">
        <SubHeading title='Instagram'/>
        <h1 className='app__gallery-h1'>Photo Gallery</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button' onClick={()=>{}}>View More</button>
      </div>
      <div className="app__gallery_images">
        <div className='app_gallery_images_container' ref={scrollRef}>
          {
            galleryImages.map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}> 
                <img src={image} id={index} />
                <BsInstagram className='gallery__image-icon'/>
              </div>
            ))
          }
        </div>
        <div className='app__gallery_images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
        </div>
      </div>
    </div>
);}

export default Gallery;
