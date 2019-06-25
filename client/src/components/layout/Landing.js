import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Code Mentor Center</h1>
          <p className='lead'>
            Making software stronger...one developer at a time.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              REGISTER
            </Link>
            <Link to='/login' className='btn btn-light'>
              BECOME A MENTOR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
