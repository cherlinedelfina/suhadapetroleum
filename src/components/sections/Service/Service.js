import React from 'react';
import Section from '../../../HOC/Section';
import projects_bg from '../../../assets/img/projects_bg.jpg';
import image1 from '../../../assets/img/project1.jpg'; 
import image2 from '../../../assets/img/project2.jpg';

const Service = () => {
  return (
    <Section id='services'>
      <div className="bg-container" style={{ position: 'relative' }}> 
        <img src={projects_bg} alt="projects background" className="projects_bg" />
        
       
        <div className="two-column-container">
          
          <div className="left-column">
            <div className="inner-column">
             
              <div className="column-description">
                <h5>NOV Reciprocating Pump Model  1759 Package</h5>
            
              </div>
            </div>
          </div>

         
          <div className="right-column">
            <div className="inner-column">
              <img src={image2} alt="Image 2" className="column-image" />
              <div className="column-description">
                <h5>ARROW
Gas Engine Model 
C-106</h5>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;