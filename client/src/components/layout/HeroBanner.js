import React, { Fragment } from 'react';
import banner from '../../images/hero_banner.jpg';

const HeroBanner = () => {
  return (
    <Fragment>
      <div className='heroImg'>
        <img src={banner} alt='Code Mentor Center | Making software stronger...one developer at a time.' />
      </div>
    </Fragment>
  );
};

export default HeroBanner;
