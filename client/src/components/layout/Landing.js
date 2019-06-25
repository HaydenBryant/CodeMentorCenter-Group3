import React from 'react';
import HeroBanner from './HeroBanner';
import CTARegister from './CTARegister';
import Search from './Search';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-inner'>
        <HeroBanner />
        <CTARegister />
        <div className='search-landing'>
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Landing;
