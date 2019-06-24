import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Landing = () => {
  return (
    <Router>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Code Mentor Center</h1>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              laoreet metus sit amet risus volutpat suscipit. Morbi malesuada
              magna nec felis euismod, non sollicitudin sem maximus. Nunc
              faucibus laoreet ante non euismod.
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
    </Router>
  );
};

export default Landing;
