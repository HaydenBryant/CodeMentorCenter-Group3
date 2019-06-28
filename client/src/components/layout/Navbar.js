import React from 'react';
import { Link } from 'react-router-dom';
import cmcLogo from '../../images/logo_cmc_top.gif';

const Navbar = () => {
  return (
    <nav className='navbar bg-white'>
      <div className='logo'>
        <Link to='/'>
          <img src={cmcLogo} alt='Code Mentor Center' />
        </Link>
      </div>
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
        <li>
          <Link to='/editProfile'>EDIT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;