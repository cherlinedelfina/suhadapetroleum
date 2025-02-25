import React from 'react';
import Section from '../../../HOC/Section';
import ISO1 from '../../../assets/img/ISO1.jpg';
import ISO2 from '../../../assets/img/ISO2.jpg';
import ISO3 from '../../../assets/img/ISO3.jpg';

const Facts = () => {
  return (
    <Section id='facts'>
      <div className='facts-container'>
        <div className='container pt-5 pb-3'>
          <div className='row'>
            <div className='col-sm-6 col-md-4 text-center'>
              <div className="ISO1"> 
                <img src={ISO1} alt="ISO1" className="IOS1" />
              </div>
                            
                            
              <h5 className='facts-title'>Clients</h5>
            </div>

            <div className="ISO1"> 
                <img src={ISO1} alt="ISO1" className="IOS1" />
              </div>
           
            <div className='col-sm-6 col-md-4 text-center'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-project-diagram' />
              </div>
              
              <h5 className='facts-title'>Completed Projects</h5>
            </div>

            <div className="ISO1"> 
                <img src={ISO1} alt="ISO1" className="IOS1" />
              </div>

            <div className='col-sm-6 col-md-4 text-center'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-trophy' />
              </div>
              
              <h5 className='facts-title'>Years in Experience</h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;