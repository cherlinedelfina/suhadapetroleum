import React from 'react';
import Section from '../../../HOC/Section';
import projects_bg from '../../../assets/img/projects_bg.jpg';
import image1 from '../../../assets/img/project1.jpg'; 
import image2 from '../../../assets/img/project2.jpg';
import '../../../scss/partials/home/_homeproject.scss';

const HomeProject = () => {
  return (
    <Section id='home-project'>
      <div className="bg-container" style={{ position: 'relative' }}> 
        <img src={projects_bg} alt="projects background" className="projects_bg" style={{ width: "100%", height: "800px", objectFit: "cover" }} />

        
        <div className="two-column-container" style={{ 
          position: 'absolute', 
          top: '50%',           
          left: '50%',         
          transform: 'translate(-50%, -50%)', 
          display: 'flex', 
          justifyContent: 'space-around', 
          width: '60%',
   
          zIndex: 2 
        }}>
        
          <div className="left-column" style={{ 
            flex: '1', 
            marginRight: '20px', 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '5px', 
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
          }}>
            <img src={image1} alt="NOV Reciprocating Pump Model 1759 Package" className="column-image" style={{ width: '400px', height: '400px', borderRadius: '5px' }} />
            <div className="column-description">
              <h5>NOV Reciprocating Pump Model 1759 Package</h5>
            </div>
          </div>

         
          <div className="right-column" style={{ 
            flex: '1', 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '5px', 
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
          }}>
            <img src={image2} alt="ARROW Gas Engine Model C-106" className="column-image" style={{ width: '400px', height: '400px', borderRadius: '5px' }} />
            <div className="column-description">
              <h5>ARROW Gas Engine Model C-106</h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeProject;