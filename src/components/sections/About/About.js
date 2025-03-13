import React from 'react';
import '../../../scss/partials/_about.scss';
import office from '../../../assets/img/office.jpg';
import Section from '../../../HOC/Section';

const About = () => { // Capitalize the component name
    return (
      <Section id='about'>
          <div className='section-header center-text'>
            <h3 className='section-title center-text'>About Us</h3>
          </div>

          <p className='section-subtitle margin-left-text'>
            PT. Suhada Petroleum, established in 2000, is a company that focuses on trading and supporting mechanical engineering, electrical, instrumentation, and maintenance services, especially for oil and gas industries.
          </p>
          
          <p className='section-subtitle margin-left-text'>
            We are also the official distributor for some products from all over the world. As a local company in Indonesia, we also have local content certificates, such as local content for Reciprocating Pump Package, Fire Water Pump Package, Centrifugal Pump Package, Separator, Scrubber, KO Drum, Pig Launcher, Air Receiver, and Pressure Vessel. 
          </p>

          <div className="image-container">
            <img src={office} alt="About PT Suhada Petroleum" className="office-image" />
          </div>

          <div className='section-header'>
            <h3 className='section-title'>Our Vision</h3>
          </div>

          <p className='section-subtitle2'>
          To become a leading contractor and supplier company that has a strong reputation for quality and trust.
          </p>
          
        
          <div className='section-header'>
            <h3 className='section-title'>Our Mission</h3>
          </div>

          <p className='section-subtitle2'>
          To prioritize customer satisfaction by providing quality products and services at competitive prices as well as fostering good relationships with sustainable business partners.
          </p>

        
      </Section>
    );
};

export default About;