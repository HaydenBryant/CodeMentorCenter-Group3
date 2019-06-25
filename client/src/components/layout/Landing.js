import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from './HeroBanner';
import CTARegister from './CTARegister';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-inner'>
        <HeroBanner />
        <CTARegister />
      </div>
    </section>
  );
};

export default Landing;
