import React from 'react';
import office from '../../../assets/img/office.jpg';
import Section from '../../../HOC/Section';
import './about.css'; 

const About = () => {
    return (
        <Section id='about' className="about-container"> 
            <div className='section-headers'>
                <h3 className='about-title'>About Us</h3> 
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

            <div className='vision-container'>
                <div className='section-headers'>
                    <h3 className='vision-title '>Our Vision</h3> 
                </div>
                <p className='vision-text'>
                    To become a leading contractor and supplier company that has a strong reputation for quality and trust.
                </p>
            </div>

            <div className='mission-container'>
                <div className='section-headers'>
                    <h3 className='mission-title'>Our Mission</h3> 
                </div>
                <p className='mission-text'>
                    To prioritize customer satisfaction by providing quality products and services at competitive prices as well as fostering good relationships with sustainable business partners.
                </p>
            </div>
        </Section>
    );
};

export default About;
