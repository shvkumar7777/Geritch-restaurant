import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__header app__wrapper section__padding" id="home">
  <div className="app__wrapper_info">
    <SubHeading title='Contact'/>
    <h1 className='app__header-h1'>Find Us</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG </p>
      <div className='app_laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color:'#DCCA87' ,margin:'2rem 0'}}>Opening Hours</p>
        <p className='p__cormorant' style={{ margin:'1rem 0'}}>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__cormorant' style={{ margin:'1rem 0'}}>Sat - Sun: 10:00 am - 03:00 am</p>
    </div>
    <button type='button' className='custom__button' style={{ marginTop:'1rem'}} onClick={()=>{}}>Visit Us</button>
  </div>
  <div className="app__wrapper_img">
    <img src={images.findus} alt='welcome image'/>
  </div>
</div>
);

export default FindUs;
