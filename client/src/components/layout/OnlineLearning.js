import React, { Fragment } from 'react';
import careerdevs_couple from '../../images/cd_higher_learning.jpg';

const OnlineLearning = () => {
  return (
    <Fragment>
      <div className='higherLearning'>
        <div className='ad-img'>
          <img
            src={careerdevs_couple}
            alt='CareerDevs Computer Science University'
          />
        </div>
        <div className='ad-copy'>
          <h4>Looking to further your mentorship?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed labore et dolore magna aliqua.
          </p>
          <a href='!#' className='btn btn-primary btn-rounded'>
            EXPLORE ONLINE LEARNING
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default OnlineLearning;
