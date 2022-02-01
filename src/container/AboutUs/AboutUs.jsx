import React from 'react';

import './AboutUs.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app_aboutUs app__bg flex__center section__padding' id='aboutUs'>
    <div className='app__aboutUs-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>  
    <div className="app__aboutUs-content flex__center">
      <div className='app__aboutUs-content_about'>
        <h1 className='headtext__cormorant'>About Us </h1>
        <img src={images.spoon} className='spoon__img' />
        <p className='p__opensans' style={{margin:'2rem 0'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button' onClick={()=>{}}>Know More</button>
      </div> 
      <div className='app__aboutUs-content-knife flex__center'>
        <img  src={images.knife} alt='about_Knife'/>
      </div>
      <div className='app__aboutUs-content_history'>
        <h1 className='headtext__cormorant'>Our History </h1>
        <img src={images.spoon} className='spoon__img'/>
        <p className='p__opensans' style={{margin:'2rem 0'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button' onClick={()=>{}}>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
