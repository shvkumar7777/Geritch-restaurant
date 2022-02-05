import React from 'react';
import { SubHeading } from '../../components';

import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className="app__chef app__wrapper section__padding" id="chef">
    <div className="app__wrapper_img">
      <img src={images.chef} alt='Chef image'/>
    </div>
    <div className="app__wrapper_info">
      <SubHeading title='Chef’s Word'/>
      <h1 className='app__chef-h1'>What we believe in</h1>
      <p className='app__chef-text' style={{ margin: '2rem 0', color: '#AAAAAA' }}> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      <div className='app__chef-details'>
        <div className='app__chef-details-subheading'>
          <h1 className='app__chef-details-subheading-name'> Kevin Luo</h1>
          <p className='app__chef-details-subheading-founder'> Chef & Founder</p>
        </div>
        <div className='app__chef-details-signature'>
          <img src={images.sign} alt='Chef image'/>
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
