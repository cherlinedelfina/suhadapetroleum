import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/home_bg.jpg';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>
            Your Trusted <span className="highlight">Supplier</span> and <span className="highlight">Contractor</span><br /> 
          for Quality Products and Services </h1>
            <h2 className='sub-title mb-4'>Supplying to various industries across Indonesia since 2000 </h2>
            
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
