import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> Code Mentor Center
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/mentors'>MENTORS</Link>
        </li>
        <li>
          <Link to='/mentees'>MENTEES</Link>
        </li>
        <li>
          <Link to='/login'>LOGIN</Link>
        </li>
        <li>
          <Link to='/register'>SIGN UP</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
