import React, { Fragment } from 'react';
import profileImg from '../../images/p_card_default_img.gif';
import star5 from '../../images/star_rating_5.gif';

const ProfileCardTest2 = () => {
  return (
    <Fragment>
      <div className='p-card'>
        <header className='head'>
          <h3>Mike Willams</h3>
        </header>
        <div className='content'>
          <div className='img-ct'>
            <img src={profileImg} alt='Profile' />
            <img src={star5} alt='Star Rating' />
          </div>
          <div className='lang-ct'>
            <h5>Programming Languages</h5>
            <ul className='pLang'>
              <li>JavaScript</li>
              <li>C#</li>
              <li>Python</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>PHP</li>
            </ul>
            <h5>Speaking Languages</h5>
            <ul className='sLang'>
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='pSummary'>
          <p>
            Long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using
          </p>
        </div>
        <div className='request-btn'>
          <a href="mailto:someone@yoursite.com?subject=Mail from Our Site" className='btn btn-primary btn-rounded'>
            REQUEST MENTORSHIP
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileCardTest2;