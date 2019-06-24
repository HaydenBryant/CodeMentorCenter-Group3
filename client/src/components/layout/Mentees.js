import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const Mentees = () => {
  return (
    <Router>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>View All Mentees Page</h1>
          </div>
        </div>
      </section>
    </Router>
  );
};

export default Mentees;
