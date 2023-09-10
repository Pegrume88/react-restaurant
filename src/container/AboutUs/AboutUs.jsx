import React from 'react';

import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>
    <div className='app__about-content flex__center'>
      <div className='app__about-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about spoon'/>
        <p className='p__opensans'>
          Gericht, a culinary gem nestled in the heart of our vibrant city, invites you on a gastronomic journey like no other. 
          Our passion for crafting exquisite dishes, using only the finest ingredients, is at the core of everything we do.</p>
        <button type='button' className='custom__button'>Read More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
