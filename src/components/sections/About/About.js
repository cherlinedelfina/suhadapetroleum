import React from 'react';

import Section from '../../../HOC/Section';
import solidFeedingImage from '../../../assets/img/solid_feeding.jpg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header  '>
          <h3 className='section-title'>
            PT SUHADA PETROLEUM
          </h3>
          <h6 className='section-subtitle '>
          Established in 2000, is a company which focuses on trading and supporting of mechanical engineering, electrical, instrumentation and maintenance services especially for oil and gas industries. 
          </h6>
          <div className="solidFeedingImage">
        <img src={solidFeedingImage} alt="About PT Suhada Petroleum"  className="solidFeedingImage"/>
      </div>
          <button className='btn'>FIND OUT MORE</button>
        </div>
             
      </div>
    </Section>
  );
};

export default about;
