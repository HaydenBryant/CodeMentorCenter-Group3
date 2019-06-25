
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_cmc_top.gif';

const Navbar = () => {
  return (
    <nav className='navbar bg-white'>
      <Link to='/' className='logo'>
        <img src={logo} alt='Code Mentor Center' />
      </Link>
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