import React from 'react';
import Section from '../../../HOC/Section';
import solidFeedingImage from '../../../assets/img/solid_feeding.jpg';

const About = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className="two-column-container">
          <div className='text-column'>
            <div className='section-header'>
              <h3 className='section-title'>PT SUHADA PETROLEUM</h3>
            </div>
            <h6 className='section-subtitle'>
              Established in 2000, is a company which focuses on trading and supporting mechanical engineering, electrical, instrumentation, and maintenance services, especially for oil and gas industries.
            </h6>
            <button className='btn'>FIND OUT MORE</button>
          </div>
          <div className="image-column">
            <img src={solidFeedingImage} alt="About PT Suhada Petroleum" className="solidFeedingImage" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;